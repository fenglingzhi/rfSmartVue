<template>
  <div class="home" ref="background_height">
    <navHeader></navHeader>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import navHeader from './navHeader/navHeader.vue'
  export default {
    name: 'home',
    components: {
      navHeader: navHeader,
    },
    data () {
      return {
        msg: '这是首页'
      }
    },
    mounted() {
      let vm = this;
      let bg_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      vm.$refs.background_height.style.height = bg_height +'px';
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss">
  .home{
    background: url('../assets/App_bg.png');
  }
  h1, h2 {
    font-weight: normal;
    color: #fff;
  }
</style>
