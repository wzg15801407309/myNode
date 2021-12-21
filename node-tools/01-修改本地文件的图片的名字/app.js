const fs = require('fs');
let loadPath ='/Users/zhuqin.wei/Documents/pic';
fs.readdir(loadPath,function(err,files){ // 读取loadPath所有的文件
  let i = 1;
  const lenth = files.length;
  files.forEach(filename=>{
    if(filename.indexOf('.jpg') != -1){
      let oldPath = loadPath +'/'+filename;
      let newI;
      if(i<10){
        newI = '00'+i;
      }else{
        newI = '0'+i;
      }
      let newPath = loadPath + '/'+ newI+ '.jpg';
      i++;
      fs.rename(oldPath,newPath,err=>{
        if(!err){
          console.log('修改成功！');
        }
      });
    }
  })
})