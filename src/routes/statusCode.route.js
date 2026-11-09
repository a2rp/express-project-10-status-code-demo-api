// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller functions
const {
    getOkStatus,
    getCreatedStatus,
    getBadRequestStatus,
    getUnauthorizedStatus,
    getNotFoundStatus,
    getInternalServerErrorStatus,
} = require("../controllers/statusCode.controller");

// Define routes for each status code

// 200 OK
router.get("/status/200", getOkStatus);

// 201 Created
router.post("/status/201", getCreatedStatus);

// 400 Bad Request
router.get("/status/400", getBadRequestStatus);

// 401 Unauthorized
router.get("/status/401", getUnauthorizedStatus);

// 404 Not Found
router.get("/status/404", getNotFoundStatus);

// 500 Internal Server Error
router.get("/status/500", getInternalServerErrorStatus);

// Export router
module.exports = router;
