const fs = require('fs');
let loadPath ='/Users/zhuqin.wei/Documents/pic';
let definitePath ='/Users/zhuqin.wei/Documents/pic/definitePic';
let tempStr ='0000000000';//用来填数字前的零
// 获取已经修改好的图片
fs.readdir(definitePath,(err,files)=>{
  let  definiteArr = files;
  changPicName(definiteArr);
});
// 需要修改的文件
function changPicName(definiteArr){
  fs.readdir(loadPath,function(err,files){ // 读取loadPath所有的文件
    if(files.length<=2){
      console.log('没有需要修改的图片');
      return;
    }
    if(definiteArr.length != 0){
      let startIndex = definiteArr.length-1;
      let totalCount = files.length+definiteArr.length-3;
      const picLen = totalCount.toString().length+1;
      const oldLen = (definiteArr.length-1).toString().length+1
      //判断需不需要改变definitePic文件夹里面的文件
      if( oldLen < picLen ){
        // 需要给definitePath下的pic更换名字,在修改其他的pic
        definitePathNameChange(picLen-oldLen,definiteArr);
      }
      changIndexPicName(picLen,startIndex,files);
    }else{
      const picLen = (files.length).toString().length+1;
      // 图片当前的位置
      files.forEach((filename,index) => {
        console.log(index);
        if(filename.indexOf('.jpg') != -1){
          let oldPath = loadPath +'/'+filename;
          let name = '/'+tempStr.substring(0,picLen - index.toString().length)+index+'.jpg';
          let newpath = definitePath+name;
          fs.rename(oldPath,newpath,err=>{
            if(!err){
              console.log('修改成功！');
            }
          });
        }
      });
    }
  });
};
/**
 * 给 definitePath 下的文件修改name
 * len: 添加的位数
 */
function definitePathNameChange(len,arr){
  arr.forEach(filename => {
    if(filename != '.DS_Store'){
      let name = '/'+tempStr.substring(0,len)+filename;
      let oldPath = definitePath +'/'+filename;
      let newpath = definitePath+name;
      fs.rename(oldPath,newpath,err=>{
        if(!err){
          console.log('修改成功！');
        }
      });
    }
  });
};
/**
 * 给定的索引值 开始修改名字
 * files: 需要修改的数据
 * len: 长度
 * index: 索引值
 */
function changIndexPicName(picLen,index,arr){
  arr.forEach((filename,key) => {
    if(filename.indexOf('.jpg') != -1){
      let oldPath = loadPath +'/'+filename;
      let newIndex = index+key;
      let newname = '/'+tempStr.substring(0,picLen - newIndex.toString().length)+newIndex+'.jpg';
      let newpath = definitePath+newname;
      fs.rename(oldPath,newpath,err=>{
        if(!err){
          console.log('修改成功！');
        }
      });
    }
  });
}