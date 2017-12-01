export default{
  state: {
    navHeader:'这是头部导航的state'
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    navHeaderMutationsTest(state){
      state.navHeader = '这是navHeaderMutations更改后的值'
    },
    navHeaderMutationsActionsTest(state){
      state.navHeader = '这是navHeaderMutationsActionsTest更改后的值'
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {

  },
  actions: {
    testAsyncNavHeader(context){
      setTimeout(() => {
        context.commit('navHeaderMutationsActionsTest')
      }, 1000)
    }
  }
}
