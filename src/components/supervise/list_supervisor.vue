<template>
  <div class="list_supervisor" ref="background_height">
    <div class="main" ref="main_height">
      <el-row>
        <el-col :span="24">
          <div class="grid-content">
            <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '' }">{{msg}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{msg_1}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{msg_2}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
      <div ref="main_2_height" class="main_2_height">
        <el-row>
          <el-col :span="18">
            <el-col :span="24">
              <p class="title">督导单创建</p>
            </el-col>
            <el-col :span="21" :offset="2">
              <div class="section_ul">
                <el-row  class="section_ul_index">
                    <el-row>
                      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" labelPosition="left" class="demo-ruleForm" size="mini">
                        <el-form-item label="编号" prop="name">
                          <el-input v-model="ruleForm.name" style="width:30%"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="region">
                          <el-select v-model="ruleForm.region" style="width:20%" placeholder="请选择状态">
                            <el-option label="状态一" value="zhuangtai1"></el-option>
                            <el-option label="状态二" value="zhuangtai2"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="整改所" style="width:27.5%" prop="region2">
                          <el-select v-model="ruleForm.region2" placeholder="请选择所名">
                            <el-option label="整改所一" value="zhenggaisuo1"></el-option>
                            <el-option label="整改所二" value="zhenggaisuo2"></el-option>
                            <el-option label="整改所三" value="zhenggaisuo3"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="督导单名称" style="width:37%" prop="name1">
                          <el-input v-model="ruleForm.name1"></el-input>
                        </el-form-item>
                        <el-form-item label="事件时间" class="block" required>
                          <el-date-picker
                            v-model="value3"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                          </el-date-picker>
                        </el-form-item>

                        <el-form-item label="问题描述" prop="desc">
                          <el-input type="textarea" style="resize:none;" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="违规类型" prop="region3">
                          <el-select v-model="ruleForm.region3" placeholder="请选择类型">
                            <el-option label="类型一" value="leixing1"></el-option>
                            <el-option label="类型二" value="leixing2"></el-option>
                            <el-option label="类型三" value="leixing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="附件" prop="other" style="padding-left:10px">
                          <el-col :span="24" class="section_ul_son section_ul_son_other">
                            <span class="el-icon-plus"></span>
                            <span>
                              <a href="#">添加附件</a>
                            </span>
                          </el-col>
                        </el-form-item>
                      </el-form>
                    </el-row>
                    <el-row>
                      <el-col :span="2" class="section_ul_son"></el-col>
                      <el-col :span="22" class="section_ul_son">
                        <el-col :span="6" v-for="item in ">
                          <el-card :body-style="{padding:'10px 0 0 0'}">
                            <img src="../../assets/jk.jpg" class="image">
                            <div style="padding:10px 10px 5px 10px;">
                              <span style="width:50%;display:inline-block" >监控视频1.jpg</span>
                              <span style="width:45%" class="btn-group">
                                  <span class="el-icon-delete"></span>
                                  <span class="el-icon-download"></span>
                              </span>
                              <div class="bottom clearfix" style="width:100%">
                                <time class="time">王警官</time>
                              </div>
                            </div>
                          </el-card>
                        </el-col>
                        <!--<el-col :span="6" :offset="2">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >截图.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6" :offset="2" style="margin-bottom:30px">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >监控视频1.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >监控视频1.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6" :offset="2">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >截图.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6" :offset="2" style="margin-bottom:30px">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >监控视频1.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >监控视频1.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6" :offset="2">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >截图.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                        <!--<el-col :span="6" :offset="2" style="margin-bottom:30px">-->
                          <!--<el-card :body-style="{padding:'10px 0 0 0'}">-->
                            <!--<img src="../../assets/jk.jpg" class="image">-->
                            <!--<div style="padding:10px 10px 5px 10px;">-->
                              <!--<span style="width:50%;display:inline-block" >监控视频1.jpg</span>-->
                              <!--<span style="width:45%" class="btn-group">-->
                                  <!--<span class="el-icon-delete"></span>-->
                                  <!--<span class="el-icon-download"></span>-->
                              <!--</span>-->
                              <!--<div class="bottom clearfix" style="width:100%">-->
                                <!--<time class="time">王警官</time>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</el-card>-->
                        <!--</el-col>-->
                      </el-col>
                    </el-row>
                </el-row>
              </div>
            </el-col>
            <el-col :span="23">
              <div class="section_btn">
                <el-button type="primary" @click="submitForm('ruleForm')">提&nbsp;&nbsp;交</el-button>
                <el-button type="primary" @click="resetForm('ruleForm')">取消督导</el-button>
              </div>
            </el-col>
          </el-col>
          <el-col :span="5" class="main_right" ref="main_right_height">
            <el-col :span="24">
              <p class="title_1">近期同类查看</p>
            </el-col>
            <el-col :span="24" class="section_right_main">
              <el-col :span="12" style="text-align:center;line-height:30px">选择时间</el-col>
              <el-col :span="12" style="text-align:center;">
                <div class="block">
                  <el-date-picker style="width:90%" v-model="value2" size="mini" type="datetime" placeholder="选择日期时间" align="center">
                  </el-date-picker>
                </div>
              </el-col>
            </el-col>

            <el-col :span="24" style="background-color:#fff;">
              <div class="section_right_ul">
                <el-row>
                  <el-col :span="19" :offset="3" style="height:30%;">
                    <div style="border-bottom:1px solid #000;float:left;width:100%;font-size:13px">
                      <span style="display:inline-block;float:left;padding:2px 0 2px 15px">督导员名称</span>
                      <span style="display:inline-block;float:right;padding:2px 15px 2px 0">
                        <a href="#">查看详情</a>
                      </span>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="19" :offset="3" style="height:30%;position:relative">
                    <ul style="float:left;padding:0;width:100%">
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">当前状态</span>
                        <span style="display:inline-block;float:left">完结</span>
                      </li>
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">创建时间</span>
                        <span style="display:inline-block;float:left">2017-09-03</span>
                      </li>
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">督办内容</span>
                        <span style="width:100%;display:inline-block;word-wrap:break-word;text-align:left">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                      </li>
                    </ul>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="19" :offset="3" style="height:30%;">
                    <ul style="float:left;padding:0;width:100%">
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">当前状态</span>
                        <span style="display:inline-block;float:left">完结</span>
                      </li>
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">创建时间</span>
                        <span style="display:inline-block;float:left">2017-09-03</span>
                      </li>
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">督办内容</span>
                        <span style="width:100%;display:inline-block;word-wrap:break-word;text-align:left">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                      </li>
                    </ul>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="19" :offset="3" style="height:30%;">
                    <ul style="float:left;padding:0;width:100%">
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">当前状态</span>
                        <span style="display:inline-block;float:left">完结</span>
                      </li>
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">创建时间</span>
                        <span style="display:inline-block;float:left">2017-09-03</span>
                      </li>
                      <li style="float:left;width:100%;font-size:13px;padding:8px 0 0px 10px;margin-bottom:90px">
                        <span style="width:30%;display:inline-block;float:left;text-align:left">督办内容</span>
                        <span style="width:100%;display:inline-block;word-wrap:break-word;text-align:left">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'list_supervisor',
    data(){
        return{
            d1:'hello',
            msg:'一级名称',
            msg_1:'二级名称',
            msg_2:'三级名称',
            ruleForm: {
              name: '',
              region: '',
              region2: '',
              region3: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: '',
              other:''
            },
            value2:'',
            value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            rules: {
              name: [
                { required: true, message: '请输入编号', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              name1: [
                { required: true, message: '请输入督导单名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              region: [
                { required: true, message: '请选择状态', trigger: 'change' }
              ],
              region2: [
                { required: true, message: '请选择所名', trigger: 'change' }
              ],
              region3: [
                { required: true, message: '请选择违规类型', trigger: 'change' }
              ],
              date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写描述内容', trigger: 'blur' }
              ]
            }

        };
    },
    mounted() {
        let vm = this;
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped type="text/scss" lang="scss">
  .list_supervisor{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    background: url('../../assets/App_bg.png');
    ul,li{list-style:none}
    a{
      text-decoration:none;
      color:#A2C8F1
    }
    .el-icon-plus{
      color:#000;
      font-weight:bold;
    }
    .el-icon-plus:hover{
      cursor:pointer;
    }
    .main{
      width:100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin:auto;
      /*overflow: auto;*/
      height: 100%;
      background-color:#EFEFEF;
      .main_2_height{
        .section_ul_son_other{
          padding-top:0 !important;
        }
      }
      .grid-content{
        padding:20px 10px 20px 20px;
        border-bottom:1px solid #DFDFDF;
        font-size: 14px;
      }
      .title{
        text-align:left;
        color:#666666;
        font-size:18px;
        padding-left:120px;
        padding-top: 20px;
        padding-bottom: 10px;
        margin:0;
        font-weight: bold;
      }
      .section_ul{
        margin:auto;
        font-size:14px;
        padding-left:0px;
        background-color: #fff;
        padding-right: 25px;
        padding-top: 15px;
        border: 1px solid #CCCCCC;
        color:#666666;
        text-align: left;
        .section_ul_index{
          padding:10px 20px;
          .section_ul_son{
            text-align:left;
            padding:10px 0px 10px 0px;
          el-date-picker input{
            height:30px
          }
          textarea{
            resize:none;
           }
           .image{
             margin-left:5px;
           }
           .clearfix{
             padding:10px 0 10px 0;
           }
            .btn-group{
              display:inline-block;
              position: relative;
              span{
                display: inline-block;
                float:right;
                margin-right:5px;
                cursor: pointer;
                color:#A2C8F1
              }
            }
          }
        }
      }
      .section_btn{
        text-align:right;
        padding-top:20px;
        padding-bottom:10px;
        padding-right:20px;
      }
      .main_right{
        .title_1{
          text-align:left;
          color:#666666;
          font-size:18px;
          padding-left:30px;
          padding-top: 20px;
          padding-bottom: 10px;
          margin:0;
          font-weight:bold;
        }
        .section_right_main{
          padding-top:10px;
          padding-bottom:10px;
          margin:auto;
          background-color:rgba(140, 130, 130, 0.35);
        }
        .section_right_ul{
          padding-top:30px;
        }
      }
      }
    }
</style>
