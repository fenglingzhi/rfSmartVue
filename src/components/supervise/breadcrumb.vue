<template>
  <div class="home" ref="background_height">
    <div class="content" ref="con_height">
      <el-breadcrumb class="bre" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item style="color: #ffffff;">{{msg0}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{msg1}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{msg2}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{msg3}}</el-breadcrumb-item>
      </el-breadcrumb>
      <hr class="hr">
      <el-row class="mid" ref="cons">
        <el-col :span="18" class="mid-left">
          <el-col :span="4" :offset="2" class="grid-content bg-purple-dark">
            <div id="bz">
              <el-steps class="bz-step" direction="vertical" :active="2">
                <el-step class="flex-lg" title="步骤 1"></el-step>
                <el-step class="flex-sm" title="步骤 2"></el-step>
                <el-step class="flex-sm" title="步骤 3"></el-step>
                <el-step class="flex-sm" title="步骤 4"></el-step>
                <el-step class="flex-sm" title="步骤 5" description="这是一段很长很长很长的描述性文字"></el-step>
              </el-steps>
            </div>
          </el-col>
          <el-col :span="16" class="grid-content bg-purple-light">
            <ul id="detial">
              <li class="del-li">
                <el-popover
                  ref="popover4"
                  placement="bottom"
                  width="350"
                  trigger="click">
                  <div class="ss">
                    <p class="sp-1">
                      <i class="ss-i" style="display:inline-block;width: 30%">设置期限</i>
                      <textarea class="top-texs"></textarea>
                    </p>
                    <p class="sp-2">
                      <i style="display:inline-block;width: 30%">评论</i>
                      <textarea class="top-texs"></textarea>
                    </p>
                    <p class="sp-3">
                      <button>下发</button>
                      <button>提交</button>
                      <button class="dis">取消</button>
                    </p>
                  </div>
                </el-popover>
                <p class="light-color">
                  小张 2017-09-01 10:22:30&nbsp;&nbsp;&nbsp;
                  <span @click="delClose" :class="{ 'el-icon-arrow-up': delc, 'el-icon-arrow-down': !delc}"></span>
                </p>
                <div v-show="delc" class="mid-white">
                  <p><span class="light-color p-fif">事件时间</span>2017-09-01 10:52:30 <i v-popover:popover4 class="rtb"></i></p>
                  <p><span class="light-color p-fif">问题描述</span>fkjsdgkjdfdkjkgsieu</p>
                  <p><span class="light-color p-fif">违规类型</span>赌博</p>
                  <div class="mid-bgdiv">
                    <span class="light-color dp-fif">上传附件</span>
                    <ul class="del-sul" >
                      <li>
                        <div style="width: 100%;height: 150px;background-color: skyblue;margin-bottom: 10px"></div>
                        <p>监所视屏1.mp4
                        <span class="tbf">
                          <span class="el-icon-download"></span>
                          <span class="el-icon-delete"></span>
                        </span>
                        </p>
                        <p class="light-color light-color">王警官 <span style="float: right;">2017-09-04</span></p>
                      </li>
                      <li>
                        <div style="width: 100%;height: 150px;background-color: skyblue;margin-bottom: 10px"></div>
                        <p>监所视屏1.mp4
                          <span class="tbf">
                          <span class="el-icon-download"></span>
                          <span class="el-icon-delete"></span>
                        </span>
                        </p>
                        <p class="light-color light-color">王警官 <span style="float: right;">2017-09-04</span></p>
                      </li>
                      <li>
                        <div style="width: 100%;height: 150px;background-color: skyblue;margin-bottom: 10px"></div>
                        <p>监所视屏1.mp4
                          <span class="tbf">
                          <span class="el-icon-download"></span>
                          <span class="el-icon-delete"></span>
                        </span>
                        </p>
                        <p class="light-color light-color">王警官 <span style="float: right;">2017-09-04</span></p>
                      </li>
                    </ul>
                    <div style="clear: both"></div>
                  </div>
                  <p style="margin-top: 5px">
                    <span class="light-color dp-fif">评论<i class="el-icon-edit pen"></i></span>
                    <a v-show="ad" @click="addDel"> 添加</a>
                    <textarea v-show="ter" style="display: none" class="tear"></textarea>
                  </p>
                  <p v-show="ter" class="btn-ad">
                    <button @click="dis">取消</button>
                    <button>提交</button>
                  </p>
                  <div style="clear: both;border: none;"></div>
                </div>
                <div style="clear: both;border: none;"></div>
              </li>
            </ul>
          </el-col>
        </el-col>
        <el-col :span="6" class="mid-right">
          <div class="grid-content bg-purple">

          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
  export default{
    name:"breadcrumb",
    data(){
        return{
            liData:[{},{}],
            msg0:"首页",
            msg1:"活动管理",
            msg2:"活动列表",
            msg3:"活动详情",
            ad:true,
            ter:false,
            ads:false,
            delc:true,
        }
    },
    methods: {
        addDel:function () {
            this.ad=false;
            this.ter=true;
        },
        dis:function(){
          this.ad=true;
          this.ter=false;
        },
        delClose:function (index) {
          this.delc=!this.delc;

          console.log(index)
        }
    },
    mounted() {
      let vm = this;
      let bg_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      vm.$refs.background_height.style.height = bg_height +'px';
      let aaa = vm.$authorzationUtils.getAuthorization();
      vm.$refs.con_height.style.height=bg_height-170 +'px';
      vm.$refs.cons.style.height=bg_height-220 +'px';
    }
  }
</script>

<style scoped type="text/scss" lang="scss">
  .ss{
    /*width: 360px;*/
    /*height: 180px;*/
    /*background: white;*/
    /*border: 1px solid grey;*/
    /*position: absolute;*/
    /*right: 0px;*/
    /*top: 70px;*/
    /*z-index: 11;*/
    text-align: center;
    /*display: none;*/
    .top-texs{
      resize:none;
      vertical-align: top;
    }
    .sp-1{
      margin-top:20px;
      height: 36px;
      line-height: 36px;
    }
    .sp-2{
      margin-top: 10px;
      margin-bottom: 15px;
      .top-texs{
        height: 50px;
      }
    }
    .sp-3{
      button{
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #00A0EA;
        margin-right: 10px;
        &:last-child{
          margin:0;
        }
      }
    }
  }
  .home{
    background: url('../../assets/App_bg.png');
    .content{
      width:100%;
      background-color:#efefef;
      font-family: "微软雅黑";
      padding-top: 20px;
      padding-bottom: 50px;
      overflow-y: auto;
      #bz{
        /*height: 1000px;*/
      }
      .flex-lg{
        flex-basis:510px !important;
      }
      .flex-sm{
        flex-basis: 80px !important;
      }

      #detial{
        text-align: left;
        width: 100%;
        /*padding: 5px;*/
        /*background-color: red;*/
        /*height: 100px;*/
        p{
          margin: 5px 0;
        }
        .del-li{
          padding: 3px 5px;
          position: relative;
          /*background-color: yellow;*/
          /*margin-bottom: 30px;*/
          .rtb{
            display: inline-block;
            width: 25px;
            height: 25px;
            background-color:yellow;
            vertical-align: middle;
            float: right;
          }
          .mid-white{
            background-color: #fff;
            padding: 5px 15px 15px 15px;
          }
          .p-fif{
            display: inline-block;
            width: 15%;
          }
          .mid-bgdiv{
            /*background-color: #fff;*/
            border-top:1px solid #adadad;
            border-bottom:1px solid #adadad;
            padding: 10px 0;
          }
          .dp-fif{
            display: inline-block;
            width: 15%;
            float: left;
          }
          .del-sul{
            float: left;
            width: 80%;
            li{
              float: left;
              width: 30%;
              margin-left: 5%;
              &:first-child {
                margin-left:0;
              }
            }
            .tbf{
              float: right;
              span{
                color: #7FAAFF;
              }
            }
          }
          .btn-ad{
            float: right;
            margin-right: 40px!important;
            /*margin-top:4px !important;*/
            /*display: none*/
          }
          .btn-ad>button{
            float: left;
            padding: 5px 15px;
            background: #00A0EA;
            color: white;
            border: none;
            font-size: 12px;
            border-radius: 5px;
          }
          .btn-ad>button:first-child{
            margin-right: 20px;
          }
          .pen{
            color: #666;
            float: right;
            margin-right: 20px
          }
          .tear{
            width: 80%;
            height: 50px;
            resize: none;
          }
        }
      }
    }
    .bre{
      /*color: #fff !important;*/
      /*font-size: 16px !important;*/
      /*margin-top: 20px;*/
      margin-left: 40px;
    }
    .hr{
      margin-top: 15px;
    }
  }
  .light-color{
    color: #adadad;
  }
  h1, h2 {
    font-weight: normal;
    color: #fff;
  }
  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }



</style>
