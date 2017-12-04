<template>
  <div class="home">
    <!-- 头部导航 -->
    <nav-header></nav-header>
    <!-- 头部导航 -->

    <!-- 左侧菜单 -->
    <menus></menus>
    <!-- 左侧菜单 -->

    <h1>这是首页</h1>
  </div>

</template>

<script>
  import navHeader from './navHeader/navHeader.vue'
  import menus from './menus/menus.vue'
  export default {
    name: 'home',
    components: {
      'nav-header': navHeader,
      'menus':menus,
    },
    data () {
      return {
        msg: '这是首页',
        visible2: false,
      }
    },
    methods:{
      clickMutations(){
        this.$store.commit('mutationsTest')
      },
      clickActions(){
        this.$store.dispatch('testAsync')
      },
    },
    mounted() {
      let vm  = this;

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss">
  .home{

  }
  h1, h2 {
    font-weight: normal;
    color: #fff;
  }
</style>
