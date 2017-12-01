// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 依赖引入
 */
import Vue from 'vue' /* 声明vue */
import ElementUI from 'element-ui' /* 引入element-ui库 */
import 'element-ui/lib/theme-chalk/index.css'
import App from './App' /* 引入App组件 */
import router from './router' /* 引入路由 */
import store from './store' /* 引入vuex */
import axios from 'axios' /* 引入axios库替代ajax */
import config from './config.js' /* 全局调用配置 */
import authorzationUtils from './utils/authorizationUtils' /* 工具类库 */

/**
 * 依赖全局调用
 * @type {boolean}
 */
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(config)
Vue.prototype.$authorzationUtils = authorzationUtils

/* eslint-disable no-new */
new Vue({
  el: '#app', /* 最后效果将会替换页面中id为app的div元素 */
  router, /* 使用路由 */
  store, /* 使用vuex */
  template: '<App/>', /* 告知页面这个组件用这样的标签来包裹着,并且使用它 */
  components: { App } /* 告知当前页面想使用App这个组件 */
})
