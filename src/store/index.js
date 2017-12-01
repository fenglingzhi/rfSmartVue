import Vue from 'vue'
import Vuex from 'vuex'
/**
 * 全局stroe
 */
import state from './state'
import actions from './action'
import getters from './getter'
import mutations from './mutations'
/**
 * vuex模块化
 */
import navHeader from './navHeader/navHeaderStore'
import menus from './menus/menusStore'


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    navHeader: navHeader,
    menus: menus,
  },
  state,
  actions,
  getters,
  mutations
})
