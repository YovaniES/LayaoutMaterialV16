// https://angular.io/guide/build#proxying-to-a-backend-server

// const PROXY_CONFIG = {
//   '/users/**': {
//     target: 'https://api.github.com',
//     changeOrigin: true,
//     secure: false,
//     logLevel: 'debug',
//     // onProxyReq: (proxyReq, req, res) => {
//     //   const cookieMap = {
//     //     SID: '',
//     //   };
//     //   let cookie = '';
//     //   for (const key of Object.keys(cookieMap)) {
//     //     cookie += `${key}=${cookieMap[key]}; `;
//     //   }
//     //   proxyReq.setHeader('cookie', cookie);
//     // },
//   },
// };

// module.exports = PROXY_CONFIG;

const PROXY_CONFIG = {
  "/proceso/orden/v1*": {
    "target": "http://182.160.28.232:5003",
    "secure": false,
    "changeOrigin": true
  }
};

module.exports = PROXY_CONFIG;
