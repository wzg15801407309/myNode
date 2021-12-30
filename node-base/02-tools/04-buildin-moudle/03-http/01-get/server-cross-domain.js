const logger = require('../../utils/log');

const http = require('http');
const https = require('https');
const querystring = require('querystring');

const server = http.createServer((request,response)=>{

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