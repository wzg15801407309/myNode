const http = require("http");

http.createServer((request,respance)=>{
  let url = request.url;
  respance.write(url);
  respance.end();

}).listen("8090","localhost",()=>{
  console.log("服务启动成功！");
})