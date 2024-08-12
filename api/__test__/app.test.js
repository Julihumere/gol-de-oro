const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("deberia devolver 'Hello world'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
