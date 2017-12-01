<template>
  <div class="menus" ref="menu_wrap">
    <!--<el-radio-group v-model="isCollapse" class="menus_open">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
    <!--</el-radio-group>-->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      ref="menu_ul_wrap">
      <el-submenu :index="item.path" v-for="item in menuList" :key="1">
        <template slot="title" :index="item.id">
          <!--<i class="el-icon-location"></i>-->
          <span slot="el-icon-menu">{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="i in item.childMenuList" :key="2">
          <el-menu-item :index="i.path">{{i.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'menus',
    data () {
      return {
        /*==================== Coding By YanM ====================*/
        isCollapse: false,
        menuList:{}
        /*==================== Coding By YanM ====================*/
      }
    },
    methods: {
      /*==================== Coding By YanM ====================*/
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      /*==================== Coding By YanM ====================*/
    },
    mounted(){
      /*==================== Coding By YanM ====================*/
      let vm = this;
      let menu_heights = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      vm.$refs.menu_wrap.style.height = menu_heights - 100 + 'px';

      vm.menuList = vm.$authorzationUtils.getAuthorization().sysUser.sysMenuList
      /*==================== Coding By YanM ====================*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    overflow: auto;
  }
  .menus{
    width: 200px;
    padding-top: 100px;
  }
</style>
