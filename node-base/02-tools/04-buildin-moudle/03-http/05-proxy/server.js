const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');
const server = http.createServer((req,res)=>{
  let urlstr = req.url;
  if(/\/dp/.test(urlstr)){// 代理的地址包含 /dp
    // 正向代理 
    const proxy = createProxyMiddleware('/dp',{target:"https://mst.vip.com/",changeOrigin: true});
    console.log(urlstr);
    proxy(req,res);
  }else if(/\/blili/.test(urlstr)){ // 代理的地址不包含 /api
    // 转发
    const proxy1 = createProxyMiddleware('/blili',
    { 
      target:"https://gate.lagou.com/",
      changeOrigin: true,
      pathRewrite:{
        '^/blili':'' // 将地址中的api替换为空
      }
    });
    proxy1(req,res);
  }
});
server.listen('8080',()=>{
  console.log('http://localhost:8080/');
});
