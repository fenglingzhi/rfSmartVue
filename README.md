## Vue项目搭建
##### 1. 全局安装vue脚手架
> $ npm install -g vue-cli
##### 2. 初始化项目目录（例如我的项目名称为myProject）
> $ vue init webpack myProject


##### 项目启动

> npm install 安装项目依赖

> npm run dev 本地启动

> npm run build 项目打包


##### main.js
``` javascript
/* 依赖引入 */
import Vue from 'vue'/*声明vue*/
import App from './App'/*引入App组件*/
import router from './router'/*引入路由*/
import element from 'element-ui'/*引入element-ui库*/
import vuex from 'vuex'/*引入vuex库*/
import axios from 'axios'/*引入axios库替代ajax*/

/* 依赖全局调用 */
Vue.config.productionTip = false
Vue.use(element)
Vue.use(vuex)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',/*最后效果将会替换页面中id为app的div元素*/
  router,/*使用路由*/
  template: '<App/>',/*告知页面这个组件用这样的标签来包裹着,并且使用它*/
  components: { App }/*告知当前页面想使用App这个组件*/
})
```
### 三、引用库
 * element-ui
> http://element-cn.eleme.io/#/zh-CN/component/layout

* vuex
> https://vuex.vuejs.org/zh-cn/intro.html

* axios
> https://www.kancloud.cn/yunye/axios/234845
