<template>
  <div class="home">
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss">
  h1, h2 {
    font-weight: normal;
    color: #fff;
  }
</style>
