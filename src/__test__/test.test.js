const request = require("supertest");
const { createApp } = require("../../app");
const { database } = require("../models/datasource");

describe("/category/main", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    // await database.initialize();
  });

  // afterAll(async () => {
  //   await database.destroy();
  // });

  test("SUCCESS: server health check", async () => {
    await request(app)
      .get("/")
      .expect(200) 
  });


  // 다음과 같이 본인이 작성한 코드에 맞춰 다양한 케이스를 모두 테스트해야 합니다.
  // 그래야 의도에 맞게 코드가 잘 작성되었는지 테스트 단계에서부터 확인할 수 있습니다!
//   test("SUCCESS: created user", async () => {
//     await request(app)
//       .post("/users/signup")
//       .send({ email: "wecode001@gmail.com", password: "password001@" })
//       .expect(201);
//   });

//   test("FAILED: duplicated email", async () => {
//     await request(app)
//       .post("/users/signup")
//       .send({ email: "wecode001@gmail.com", password: "password001@" })
//       .expect(409)
//       .expect({ message: "duplicated email" });
//   });
});