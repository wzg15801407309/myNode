// 第三方模块 查看的方式 使用npm 官网
// 地址：https://www.npmjs.com/

const axios = require("axios");
 
axios.get("https://www.npmjs.com/?track=newUserCreated").then(res =>{
  console.log(res.data);
}).catch(err=>{
  console.log(err);
})