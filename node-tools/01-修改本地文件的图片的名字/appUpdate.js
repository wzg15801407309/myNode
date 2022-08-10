const fs = require('fs');
let loadPath ='/Users/zhuqin.wei/Documents/pic';
let tempStr ='0000000000';//用来填数字前的零
// 获取所有的图片
fs.readdir(loadPath,(err,files)=>{
  const leng = files.length;
  const nameNum = (files.length-1).toString().length;
  console.log('name的长度：',nameNum,leng);
  for (let i = 0; i < leng; i++) {
    let currVal = files[i] ;
    let typeStr = "."+files[i].split('.')[1];
    // if(currVal != '.DS_Store'){
    //   let zerNum = nameNum + 1 - (leng-i).toString().length;
    //   let currName = tempStr.substring(0,zerNum)+(leng-i)+typeStr;
    //   console.log(currName,files.indexOf(currName));
    // }
    if(currVal != '.DS_Store'){
      let zerNum = nameNum + 1 - i.toString().length;
      let currName = tempStr.substring(0,zerNum)+i+typeStr;
      if(currName !== currVal){
        fs.rename(loadPath+'/'+currVal,loadPath+'/'+currName,err=>{
          if(!err){
            console.log('修改成功！');
          }
        });
        console.log(currName,files[i],currName == files[i]);
      }
      
    }
  }
});