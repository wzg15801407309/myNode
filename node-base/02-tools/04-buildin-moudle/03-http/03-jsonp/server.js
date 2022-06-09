const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
  let urlstr = req.url;
  /**知道：这里在函数pare中加个参数的作用是把url对像中的query的值变为一个对像，来使用 */
  let urlobj = url.parse(urlstr,true);
  console.log(urlobj);
  switch(urlobj.pathname){
    case '/api/data':
      res.write(`${urlobj.query.cd}('hello')`);
      break;
    default:
      res.write('page not find.');
  }
  res.end();
});
server.listen('8080',()=>{
  console.log('http://localhost:8080/');
});
/** 解决跨域的方式：1:jsonp 2:cors 3:代理的方式(http-proxy-middware) */