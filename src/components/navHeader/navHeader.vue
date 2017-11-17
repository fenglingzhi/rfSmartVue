<template>
  <div class="nav_header">
    <div class="bg"></div>
    <div class="content">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="10" class="left">
          <div class="logo">
            <img src="../../assets/logo.png" alt="">
          </div>
          <div class="title">{{navHeaderTitle}}</div>
        </el-col>
        <el-col :span="4" :offset="10" class="right">
          <div class="img_wrap">
            <img src="../../assets/search.png" alt="">
            <img src="../../assets/lindang.png" alt="">
            <img src="../../assets/fly2.png" alt="">
            <img src="../../assets/head.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'nav_header',
    data () {
      return {
        navHeaderTitle: '公安监管支队智慧管理平台'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav_header{
    height: 100px;
    width: 100%;
    .bg{
      height: 100px;
      background: url('../../assets/top_bg.png');
      opacity: .2;
    }
    .content{
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      margin-top: 14px;
      .left{
        height:72px;
        line-height: 72px;
        cursor: pointer;
        padding-left: 20px;
        .logo{
          width: 72px;
          height:72px;
          float: left;
        }
        .title{
          color: #fff;
          font-size: 32px;
          float: left;
          margin-left: 10px;
        }
      }
      .right{
        margin-top: 18px;
        .img_wrap{
          float: right;
          margin-right: 20px;
          height: 40px;
          width: 200px;
          img{
            height: 40px;
            width: 40px;
            float: left;
            cursor: pointer;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
