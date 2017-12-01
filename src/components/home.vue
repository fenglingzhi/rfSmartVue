<template>
  <div class="home">

  </div>

</template>

<script>
  export default {
    name: 'home',
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
