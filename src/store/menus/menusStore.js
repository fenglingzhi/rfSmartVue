export default{
  state: {
    first:{
      second:{
        third:'这是三级菜单'
      }
    },
    second:{
      second:{
        third:'这是三级菜单'
      }
    },
    third:{
      second:{
        third:'这是三级菜单'
      }
    }
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    menusMutationsTest(state){
      state.first = '这是navHeaderMutations更改后的值'
    },
    menusMutationsActionsTest(state){
      state.first = '这是navHeaderMutationsActionsTest更改后的值'
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {

  },
  actions: {
    testAsyncMenus(context){
      setTimeout(() => {
        context.commit('navHeaderMutationsActionsTest')
      }, 1000)
    }
  }
}
