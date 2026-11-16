
const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../app");

test("Home API should return welcome message", async () => {
    const response = await request(app).get("/");

    assert.equal(response.status, 200);
    assert.equal(
        response.text,
        "Welcome to Node.js Deployment Application"
    );
});

test("Health API should return success", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.status, 200);
    assert.equal(response.body.status, "success");
});

test("Employees API should return employee list", async () => {
    const response = await request(app).get("/employees");

    assert.equal(response.status, 200);
    assert.equal(response.body.length, 2);
});
