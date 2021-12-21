# node package versions

- 13.4.6
- major: 13(主版本号), minor： 4，patch：6

# npm 版本符合

- ^:锁定 major 安装的时候会安装 major 最新版本
- ～:锁定 minor
- 空:锁定 patch
- \*:最新版本
  **与 npm update 搭配使用**
  **npm outdateed 可以查看当前的 package 具体使用的版本**
- npm cache clean --force 清除 npm 的缓存 在不知道为什么安装出错的情况下
