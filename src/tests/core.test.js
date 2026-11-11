import test from 'node:test';
import assert from 'node:assert/strict';
import jwt from 'jsonwebtoken';

import { authorizedRoles } from '../middlewares/role.middleware.js';
import { authMiddleware } from '../middlewares/authMiddelware.js';
import { validateFeatureVector } from '../controllers/prediction.controller.js';
import { prisma } from '../lib/prisma.js';

test('authorizedRoles allows matching roles', () => {
    const middleware = authorizedRoles('ADMIN', 'USER');
    const req = { user: { role: 'ADMIN' } };
    let called = false;

    middleware(req, {}, () => {
        called = true;
    });

    assert.equal(called, true);
});

test('authorizedRoles rejects missing or unapproved roles', () => {
    const middleware = authorizedRoles('ADMIN');
    const req = { user: { role: 'USER' } };
    const res = {
        status(code) {
            return {
                json(payload) {
                    assert.equal(code, 403);
                    assert.equal(payload.success, false);
                    return payload;
                },
            };
        },
    };

    middleware(req, res, () => {
        assert.fail('next should not be called');
    });
});

test('authMiddleware attaches a valid user to the request', async () => {
    const originalFindUnique = prisma.user.findUnique;
    prisma.user.findUnique = async () => ({
        id: 'user-123',
        email: 'alice@example.com',
        role: 'USER',
        name: 'Alice',
    });

    const token = jwt.sign({ email: 'alice@example.com' }, process.env.JWT_SECRET || 'development-secret', { expiresIn: '1h' });
    const req = { headers: { authorization: `Bearer ${token}` } };
    let nextCalled = false;
    const res = {
        status: () => ({ json: () => ({}) }),
    };

    await authMiddleware(req, res, () => {
        nextCalled = true;
    });

    assert.equal(nextCalled, true);
    assert.equal(req.user.email, 'alice@example.com');
    prisma.user.findUnique = originalFindUnique;
});

test('validateFeatureVector accepts the expected 10-feature payload', () => {
    const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    assert.equal(validateFeatureVector(vector), true);
    assert.equal(validateFeatureVector([1, 2, 3]), false);
});
