export default {
  actionTest(context) {
    context.commit('mutationsTest')
  },
  testAsync(context){
    setTimeout(() => {
      context.commit('mutationsTest22222222')
    }, 1000)
  }
}
