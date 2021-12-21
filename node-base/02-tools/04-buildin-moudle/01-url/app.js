
const urlString = "https://www.baidu.com:443/path/index.html?id=2#tag=3";
var log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = 'debug';
// console.log(url.parse(urlString));
const url = require('url');
logger.debug(url.parse(urlString));

logger.debug(url.resolve('https://www.baidu.com/a','../'));
logger.debug(url.resolve('https://www.baidu.com/a','/b'));

// 查找地址里面的参数
// url.parse(urlString).search 注意的是.后面的参数是根据 url.parse(urlString)解析出来的来取自己想要的东西
const urlParams = new url.URLSearchParams(url.parse(urlString).search);
logger.debug(urlParams);
logger.debug(urlParams.get('id'));
/**
 * 1、escspe 、unescape 编码和解码
 * 2、
 */