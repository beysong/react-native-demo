import getStore from "./store";

const { store } = getStore();
const API_HOST = "http://ceshi.wehome.net.cn";
/**
 * 请求头
 * @type {{Accept: string, Content-Type: string}}
 */
const header = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

/**
 * 注意这个方法前面有async关键字
 * @param url  请求地址
 * @param body 请求参数
 * @param method 请求方法 大写
 * @param successCallBack  网络请求成功的回调
 * @param errorCallBack    出错的回调
 * @returns {Promise.<*>}
 */
export function requestUrl(api, method, body, successCallBack, errorCallBack) {
  let url = API_HOST + "/" + api;
  const state = store.getState();
  console.log("request store", state);
  if ("GET" === method) {
    return get(url, body, successCallBack, errorCallBack);
  } else {
    return post(url, body, successCallBack, errorCallBack);
  }
}

/**
 * get请求
 */
function get(url, body, successCallBack, errorCallBack) {
  let str = toQueryString(body);
  if (str && str.length > 0) url += "?" + str;
  console.log(url);
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    return fetch(url).then(r => r.json());
    // console.log("reqyestUrl:" + url);
    // let responseJson = await response.json();

    // return successCallBack(responseJson);
  } catch (error) {
    // return errorCallBack(error);
    //console.error(error);
  }
}

/**
 * post请求
 */
function post(url, body, successCallBack, errorCallBack) {
  return fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(body)
  }).then(r => r.json());
  // try {
  //   // 注意这里的await语句，其所在的函数必须有async关键字声明
  //   return fetch(url, {
  //     method: "POST",
  //     headers: header,
  //     body: JSON.stringify(body)
  //   }).then(r => r.json());

  //   // console.log("reqyestUrl:" + url);
  //   // let responseJson = await response.json();

  //   // return successCallBack(responseJson);
  // } catch (error) {
  //   // return errorCallBack(error);
  // }
}

/**
 * 用于对对象编码以便进行传输
 * @param obj 对象参数
 * @returns {string} 返回字符串
 */
function toQueryString(obj) {
  let str = "";
  if (obj) {
    let keys = [];
    for (let key in obj) {
      keys.push(key);
    }
    keys.forEach((key, index) => {
      str += key + "=" + obj[key];
      if (index !== keys.length - 1) {
        str += "&";
      }
    });
  }
  return str;
}
