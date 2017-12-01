<template>
  <div id="app" ref="background_height">

    <!-- 头部导航 -->
    <nav-header></nav-header>
    <!-- 头部导航 -->

    <!-- 左侧菜单 -->
    <menus></menus>
    <!-- 左侧菜单 -->

    <!-- 内容主视区 -->
    <div ref="router_view_wrap" class="router_view_wrap">
      <router-view></router-view>
    </div>
    <!-- 内容主视区 -->

  </div>
</template>

<script>
  import navHeader from './components/navHeader/navHeader.vue'
  import menus from './components/menus/menus.vue'
  export default {
    name: 'app',
    data () {
      return {
        /*==================== Coding By YanM ====================*/

        /*==================== Coding By YanM ====================*/
      }
    },
    created(){
      let vm = this;
      let authorization = vm.$authorzationUtils.getAuthorization();
      if(!authorization){
        this.$router.push({ name: '/login'});
      }
    },
    components: {
      'nav-header': navHeader,
      'menus':menus,
    },
    mounted(){
      let vm = this;
      /* 获取页面宽高处理页面伸缩自适应 */
      let bg_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let bg_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      /* 设置页面背景 */
      vm.$refs.background_height.style.height = bg_height +'px';

      vm.$refs.router_view_wrap.style.height = bg_height - 100 + 'px';
      vm.$refs.router_view_wrap.style.width = bg_width - 200 + 'px';

//      if(vm.$store.state.login_flag === true){
//        vm.$refs.router_view_wrap.style.height = bg_height - 100 + 'px';
//        vm.$refs.router_view_wrap.style.width = bg_width - 200 + 'px';
//        vm.$refs.router_view_wrap.style.top = 100 + 'px';
//        vm.$refs.router_view_wrap.style.left = 200 + 'px';
//      } else {
//        vm.$store.commit('login_flag')
//        vm.$refs.router_view_wrap.style.height = bg_height + 'px';
//        vm.$refs.router_view_wrap.style.width = bg_width + 'px';
//        vm.$refs.router_view_wrap.style.top = 0;
//        vm.$refs.router_view_wrap.style.left = 0;
//      }
    },
    computed:{

    },
  }
</script>

<style type="text/scss" lang="scss">
  body,p,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft YaHei';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: url('./assets/App_bg.png');
    /* 禁止文字选中 */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently not supported by any browser */
    .router_view_wrap{
      width: 100%;
      position: absolute;
      left: 200px;
      top: 100px;
      overflow: auto;
    }
  }
</style>
