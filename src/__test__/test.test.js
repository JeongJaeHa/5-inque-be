const request = require("supertest");
const { createApp } = require("../../app");
const { AppDataSource } = require("../models/datasource");

describe("Test", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.query(`TRUNCATE TABLE contacts`);
    await AppDataSource.destroy();
  });

  test("SUCCESS: server health check", async () => {
    await request(app)
      .get("/")
      .expect(200)
      .expect({ message: 'server healthy'})
  });

  test("SUCCESS: send contact us", async () => {
    await request(app)
      .post("/contact")
      .send({info: { 'username': 'unittest', 'email': 'unittest@test.com', 'phone': '010-0000-0000', 'content': 'unit test'}})
      .expect(200)
  });

  test("SUCCESS: getList", async () => {
    await request(app)
      .get("/contact/getList")
      .expect(200)
  });

});