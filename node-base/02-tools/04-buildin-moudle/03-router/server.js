const http = require('http');
const fs = require('fs');
const mime = require('mime');


http.createServer((req,res)=>{
  const urlstring = req.url;
  console.log(urlstring);
  const type = mime.getType(urlstring.split('.')[0]);
  res.writeHead(200,{
    "content-type":type
  })
  console.log(type);
  const file = fs.readFileSync(`.${urlstring}`);
  res.end(file);
}).listen(8080,()=>{
  console.log("localhost:8080");
});