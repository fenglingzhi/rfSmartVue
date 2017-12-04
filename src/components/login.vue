<template>
  <div class="login" ref="background_height">
    <div class="wrap">
      <div class="top">
        <div class="logo">
          <img src="../assets/login_cycle.png" alt="">
        </div>
        <div class="title">
          {{title}}
        </div>
      </div>
      <div class="bottom">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login_form">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_submit" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        /*==================== Coding By YanM ====================*/
        title:'公安监管支队智慧管理平台',
        ruleForm: {
          username: '',
          password:'',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          login_flag:'true'
        }
        /*==================== Coding By YanM ====================*/
      }
    },
    methods: {
      /*==================== Coding By YanM ====================*/
      submitForm(formName) {
        var vm = this;
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              method: 'post',
              url: 'http://10.58.1.134:8080/sysmng/userlogin/authlogin',
              data: {
                username: vm.ruleForm.username,
                password: vm.ruleForm.password
              }
            }).
            then(function (resp) {
                console.log(resp)
              if(resp.data.resultCode === 0){
                vm.errTips(resp.data.resultMsg)
              } else if(resp.data.resultCode === 1){
                vm.$authorzationUtils.setAuthorization(resp.data.data)
                vm.$store.state.login_flag = true;
                vm.$router.push({ path: '/supervisor_list' })
//                vm.$router.push({ path: '/' })
              }
            })
          } else {
            return false;
          }
        });
      },
      /* 登录校验 */
      errTips(errData) {
        this.$message({
          message:errData,
          center: true,
          type: 'error'
        })
      }
      /*==================== Coding By YanM ====================*/
    },
    mounted() {
      /*==================== Coding By YanM ====================*/
      let vm = this;
      let bg_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      vm.$refs.background_height.style.height = bg_height +'px';
      /*==================== Coding By YanM ====================*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*==================== Coding By YanM ====================*/
  .login{
    background: url("../assets/login_bg.png");
    .wrap{
      width: 400px;
      height: 500px;
      border-radius: 10px;
      background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0));
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
      .top{
        margin-top: -80px;
        .logo{
          width: 190px;
          height:190px;
          margin: auto;
          background: url("../assets/login_logo.png") 50% 50% no-repeat;
          img{
            width: 190px;
            height:190px;
            animation: circle 5s infinite linear;
            -webkit-animation: circle 5s infinite linear;
            -ms-animation: circle 5s infinite linear;
            @keyframes circle{
              0%{ transform:rotate(0deg); }
              100%{ transform:rotate(360deg); }
            }
            @-webkit-keyframes circle{
              0%{ transform:rotate(0deg); }
              100%{ transform:rotate(360deg); }
            }
            @-ms-keyframes circle{
              0%{ transform:rotate(0deg); }
              100%{ transform:rotate(360deg); }
            }
          }
        }
        .title{
          font-size: 24px;
          color: #fff;
          margin-top: 40px;
        }
      }
      .bottom{
        padding: 40px;
        .login_submit{
          width: 100%;
          border-radius: 0;
          font-size: 20px;
          padding: 10px;
        }
      }
    }
  }
  /*==================== Coding By YanM ====================*/
</style>
