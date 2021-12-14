// 读取在package.js中自定义的东西
// process.env.npm_package_config_(自定义的文件) 固定格式
// echo 打印的意思
/**
 * 使用 npm i git+'你自己的项目地址' 可以把自己的项目做为一个包导入到其他的项目中
 * 表现：
 *    "dependencies": {
        "supermall": "github:wzg15801407309/supermall" 就是这个
      },
 * */ 
/**
 * "scripts": {
    "dev":"NODE_ENV=develoment 运行脚本 ", 设置了环境变量，在配置文件中可以使用 process.env 获取到值 
        在vue-cli脚手夹 可以产考：https://juejin.cn/post/6844904069136416781

    "runjs": "node ./03-scripts/scripts01.js && node ./03-scripts/scripts02.js",
    "test": "node ./03-scripts/test.js",
    "build": "echo $npm_package_config_env"
  },
* "dev":"cross-env  NODE_ENV=develoment 运行脚本 ",cross-env是个包 主要用来处理 跨平台的问题  就是 mac 和window
*/
console.log(process.env.npm_package_config_env);


// npm 安装git上发布的包 两个方式 适合安装公司内部的git服务器上的项目
/**
 * 1、git install git+https://github地址 
 * 2、git install git+ssh://github地址 
 */