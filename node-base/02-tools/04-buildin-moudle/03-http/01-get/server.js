const logger = require('../../utils/log');

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((request,response)=>{
  // // logger.debug(request);
  // // logger.debug(response);
  // // 反数据
  // // response.write('第一次使用node的http核心模块反数据');
  // response.writeHead('200',{
  //   // 'content-type':'text/plain'  // 默认是 text/html，
  //   'content-type':'application/json;charset=utf-8s'  // 默认是 text/html，
  // })
  // // response.write('<div>home</div>');
  // response.write('<div>home</div>');
  // response.end();
  // 1230
  let data = '';
  request.on('data',(chunk)=>{
    data += chunk;
  });
  request.on('end',()=>{
    response.writeHead(200,{
      'content-type':'application/json;charset=utf-8s'
    });
    logger.debug(data);
    // 输出json格式
    response.write(JSON.stringify(querystring.parse(data)));
    response.end();
  });
});

server.listen(8080,()=>{
  console.log('localhost:8080');
});