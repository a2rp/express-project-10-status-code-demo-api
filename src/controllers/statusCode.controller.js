// This controller file contains functions
// that return different HTTP status codes
// so beginners can understand how APIs respond.

const getOkStatus = (req, res) => {
    // 200 means the request was successful
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "OK - Request completed successfully",
    });
};

const getCreatedStatus = (req, res) => {
    // 201 means a new resource was created successfully
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Created - New resource created successfully",
    });
};

const getBadRequestStatus = (req, res) => {
    // 400 means the client sent invalid data
    res.status(400).json({
        success: false,
        statusCode: 400,
        message: "Bad Request - The request data is invalid",
    });
};

const getUnauthorizedStatus = (req, res) => {
    // 401 means the user is not authenticated
    res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Unauthorized - Please login first",
    });
};

const getNotFoundStatus = (req, res) => {
    // 404 means the requested resource was not found
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Not Found - Resource not found",
    });
};

const getInternalServerErrorStatus = (req, res) => {
    // 500 means something went wrong on the server
    res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Internal Server Error - Something went wrong on the server",
    });
};

module.exports = {
    getOkStatus,
    getCreatedStatus,
    getBadRequestStatus,
    getUnauthorizedStatus,
    getNotFoundStatus,
    getInternalServerErrorStatus,
};
