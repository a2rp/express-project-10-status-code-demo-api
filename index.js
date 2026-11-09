// Import express
const express = require("express");

// Import routes
const statusCodeRoutes = require("./src/routes/statusCode.route");

// Create express app
const app = express();

// Fixed port for this learning project
const PORT = 1198;

// Middleware to read JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Status Code Demo API is running",
    });
});

// Use status code routes
app.use("/", statusCodeRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Route not found",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
