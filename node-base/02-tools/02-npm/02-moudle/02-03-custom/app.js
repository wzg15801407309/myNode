// 自己写模块
const _ = require("lodash");
// let arr = [1,2,3,4,5];
// let newarr =_.chunk(arr,2);
// console.log(newarr);
let myChunk = arr =>{
  let newarr =_.chunk(arr,2);
  return newarr;
}
moulde.export =myChunk;
// 写自己的轮子发布到npm 
// 第一步：定义package.json  npm init -y （在要发布的文件夹下面）
// 第二步：配置package.json的main的入口文件（我们是app.js）
// 第三步：
  /** 源===（这里的源指的是我们是否是使用淘宝境象安装的npm）
   * 1、查看当前源 npm config get registry （也可以使用nrm来查看）
   *    如果是：https://registry.npmjs.org/ 说明不用切换 如果是淘宝镜像就需要切换源
   * 2、切换源： npm config set registry https://registry.npmjs.org/  
   */
// 第四步：注册  npm adduser 
  /**
   * 输入 npm的账号密码，还有邮箱
  */
 // 第五步：发布  npm publish 
 /**
  * 知道 MIT 代表开源可以随便使用
  */
  
  