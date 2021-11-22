const fs = require("fs");
fs.writeFile("./log.txt","使用fs创建的第一个文件",(err,data)=>{
  if(err){
    ;
  }else{
    console.log("文件创建成功");
  }
});