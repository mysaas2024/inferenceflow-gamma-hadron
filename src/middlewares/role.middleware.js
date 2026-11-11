export const authorizedRoles = (...allowedRoles) => {
    const roles = allowedRoles.flat();

    return (req, res, next) => {
        try {
            if (!req?.user) {
                console.log("User not found in authorized roles middleware");
                return res.status(401).json({
                    success: false,
                    message: "User not found",
                });
            }

            if (!roles.includes(req.user.role)) {
                console.log("User not authorized to access this route");
                return res.status(403).json({
                    success: false,
                    message: "User not authorized",
                });
            }

            return next();
        } catch (error) {
            console.log("Roles Authentication Middleware Error");
            console.log(error.message);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    };
};