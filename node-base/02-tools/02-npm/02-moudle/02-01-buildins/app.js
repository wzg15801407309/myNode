// 内置模块 可在node官网查询
// 地址：https://nodejs.org/dist/latest-v16.x/docs/api/path.html#pathresolvepaths

const path = require('path');
// __dirname 代表的是当前路径
console.log(__dirname);
// 
console.log(path.resolve(__dirname,'../')) 