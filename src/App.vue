<template>
  <div id="app" ref="background_height">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      let vm = this;
      let bg_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      vm.$refs.background_height.style.height = bg_height +'px';
    }
  }
</script>

<style type="text/scss">
  body,p,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: url('assets/App_bg.png');
  }
</style>
