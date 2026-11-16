
const express = require("express");

const app = express();

app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.send("Welcome to Node.js Deployment Application");
});

// Health Check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Application is running"
    });
});

// Employees API
app.get("/employees", (req, res) => {
    const employees = [
        { id: 1, name: "Satish", role: "Team Lead" },
        { id: 2, name: "Rahul", role: "Developer" }
    ];

    res.status(200).json(employees);
});

// Start server
if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
