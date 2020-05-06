import axios from "axios";
import cookies from 'react-cookies';

axios.defaults.baseURL = 'http://localhost:8000/'

// 请求前拦截
axios.interceptors.request.use(
  config => {
    // let token = cookies.load('token')
    // console.log('123')
    // if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `JWT ${token}`;
    //   console.log('interceptors config=',config)
    // }
    return config;
  },
  err => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
// axios.interceptors.response.use(
//   data => {
//     return data;
//   },
//   err => {
//     if (err.response.status === 504 || err.response.status === 404) {
//       console.log("服务器被吃了⊙﹏⊙∥");
//     } else if (err.response.status === 401) {
//       console.log("登录信息失效⊙﹏⊙∥");
//     } else if (err.response.status === 500) {
//       console.log("服务器开小差了⊙﹏⊙∥");
//     }
//     return Promise.reject(err);
//   }
// );

// // @RequestBody请求
// const postRequestBody = (url, params) => {
//   return axios({
//     method: "post",
//     url: `${base}${url}`,
//     data: params,
//     headers: {
//       "Content-Type": "application/json",
//       charset: "utf-8"
//     }
//   });
// };

// // @RequsetParam请求
// const postRequestParam = (url, params) => {
//   return axios({
//     method: "post",
//     url: `${base}${url}`,
//     data: params,
//     transformRequest: [
//       function(data) {
//         let ret = "";
//         for (let it in data) {
//           ret +=
//             encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
//         }
//         return ret;
//       }
//     ],
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   });
// };

// const get = url => {
//   return axios({
//     method: "get",
//     url: `${base}${url}`
//   });
// };

// const multiple = function(requsetArray, callback) {
//   axios.all(requsetArray).then(axios.spread(callback));
// };


export default axios;