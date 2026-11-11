-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "DatasetStatus" AS ENUM ('UPLOADING', 'PROCESSING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "EventClass" AS ENUM ('GAMMA', 'HADRON');

-- CreateEnum
CREATE TYPE "ModelStatus" AS ENUM ('TRAINING', 'READY', 'DEPLOYED', 'ARCHIVED', 'FAILED');

-- CreateEnum
CREATE TYPE "InferenceStatus" AS ENUM ('PENDING', 'QUEUED', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "InferenceType" AS ENUM ('SINGLE', 'BATCH');

-- CreateEnum
CREATE TYPE "OutboxStatus" AS ENUM ('PENDING', 'PROCESSING', 'PUBLISHED', 'FAILED');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "keyHash" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "lastUsedAt" TIMESTAMP(3),
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dataset" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "fileName" TEXT,
    "storageUri" TEXT,
    "checksum" TEXT,
    "recordCount" INTEGER NOT NULL DEFAULT 0,
    "status" "DatasetStatus" NOT NULL DEFAULT 'UPLOADING',
    "uploadedById" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatasetRecord" (
    "id" UUID NOT NULL,
    "datasetId" UUID NOT NULL,
    "features" JSONB NOT NULL,
    "actualClass" "EventClass",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DatasetRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelVersion" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "description" TEXT,
    "status" "ModelStatus" NOT NULL DEFAULT 'TRAINING',
    "artifactUri" TEXT NOT NULL,
    "scalerUri" TEXT,
    "artifactChecksum" TEXT,
    "features" JSONB NOT NULL,
    "classes" JSONB NOT NULL,
    "preprocessing" JSONB,
    "metrics" JSONB,
    "framework" TEXT NOT NULL DEFAULT 'PyTorch',
    "architecture" TEXT NOT NULL DEFAULT '10-64-32-2',
    "inputSize" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModelVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InferenceRequest" (
    "id" UUID NOT NULL,
    "requestId" VARCHAR(100) NOT NULL,
    "traceId" VARCHAR(64),
    "idempotencyKey" VARCHAR(255),
    "type" "InferenceType" NOT NULL DEFAULT 'SINGLE',
    "status" "InferenceStatus" NOT NULL DEFAULT 'PENDING',
    "inputFeatures" JSONB NOT NULL,
    "observationCount" INTEGER NOT NULL DEFAULT 1,
    "latencyMs" INTEGER,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "errorCode" TEXT,
    "errorMessage" TEXT,
    "userId" UUID,
    "modelVersionId" UUID,
    "queuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InferenceRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PredictionResult" (
    "id" UUID NOT NULL,
    "inferenceRequestId" UUID NOT NULL,
    "observationIndex" INTEGER NOT NULL DEFAULT 0,
    "datasetRecordId" UUID,
    "predictedClass" "EventClass" NOT NULL,
    "gammaProbability" DOUBLE PRECISION NOT NULL,
    "hadronProbability" DOUBLE PRECISION NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PredictionResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutboxEvent" (
    "id" UUID NOT NULL,
    "eventType" VARCHAR(150) NOT NULL,
    "aggregateType" VARCHAR(100) NOT NULL,
    "aggregateId" VARCHAR(100) NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "nextAttemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMP(3),
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OutboxEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_keyHash_key" ON "ApiKey"("keyHash");

-- CreateIndex
CREATE INDEX "ApiKey_userId_idx" ON "ApiKey"("userId");

-- CreateIndex
CREATE INDEX "Dataset_uploadedById_idx" ON "Dataset"("uploadedById");

-- CreateIndex
CREATE INDEX "Dataset_status_idx" ON "Dataset"("status");

-- CreateIndex
CREATE INDEX "DatasetRecord_datasetId_idx" ON "DatasetRecord"("datasetId");

-- CreateIndex
CREATE INDEX "DatasetRecord_actualClass_idx" ON "DatasetRecord"("actualClass");

-- CreateIndex
CREATE INDEX "ModelVersion_status_idx" ON "ModelVersion"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ModelVersion_name_version_key" ON "ModelVersion"("name", "version");

-- CreateIndex
CREATE UNIQUE INDEX "InferenceRequest_requestId_key" ON "InferenceRequest"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "InferenceRequest_idempotencyKey_key" ON "InferenceRequest"("idempotencyKey");

-- CreateIndex
CREATE INDEX "InferenceRequest_status_createdAt_idx" ON "InferenceRequest"("status", "createdAt");

-- CreateIndex
CREATE INDEX "InferenceRequest_userId_createdAt_idx" ON "InferenceRequest"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "InferenceRequest_modelVersionId_idx" ON "InferenceRequest"("modelVersionId");

-- CreateIndex
CREATE INDEX "InferenceRequest_traceId_idx" ON "InferenceRequest"("traceId");

-- CreateIndex
CREATE INDEX "PredictionResult_predictedClass_idx" ON "PredictionResult"("predictedClass");

-- CreateIndex
CREATE INDEX "PredictionResult_datasetRecordId_idx" ON "PredictionResult"("datasetRecordId");

-- CreateIndex
CREATE INDEX "PredictionResult_createdAt_idx" ON "PredictionResult"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "PredictionResult_inferenceRequestId_observationIndex_key" ON "PredictionResult"("inferenceRequestId", "observationIndex");

-- CreateIndex
CREATE INDEX "OutboxEvent_status_nextAttemptAt_idx" ON "OutboxEvent"("status", "nextAttemptAt");

-- CreateIndex
CREATE INDEX "OutboxEvent_aggregateType_aggregateId_idx" ON "OutboxEvent"("aggregateType", "aggregateId");

-- CreateIndex
CREATE INDEX "OutboxEvent_createdAt_idx" ON "OutboxEvent"("createdAt");

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dataset" ADD CONSTRAINT "Dataset_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatasetRecord" ADD CONSTRAINT "DatasetRecord_datasetId_fkey" FOREIGN KEY ("datasetId") REFERENCES "Dataset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InferenceRequest" ADD CONSTRAINT "InferenceRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InferenceRequest" ADD CONSTRAINT "InferenceRequest_modelVersionId_fkey" FOREIGN KEY ("modelVersionId") REFERENCES "ModelVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PredictionResult" ADD CONSTRAINT "PredictionResult_inferenceRequestId_fkey" FOREIGN KEY ("inferenceRequestId") REFERENCES "InferenceRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PredictionResult" ADD CONSTRAINT "PredictionResult_datasetRecordId_fkey" FOREIGN KEY ("datasetRecordId") REFERENCES "DatasetRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
