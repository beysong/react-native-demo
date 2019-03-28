import { requestUrl } from "../utils/request";

export function login(p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        body: {
          user: { name: "user name", img: "http://www.baidu.com" },
          mysess: "test-token"
        },
        status: 200,
        msg: "ok"
      });
    }, 2000);
  });
  return requestUrl("post/hy_login", "POST", p);
}
