<template>
  <div class="supervisor_list">
    <el-row>
      <el-col :span="24">
        <div class="grid-content crumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>督导单列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row style="padding: 20px">
      <el-form>
        <el-col :span="3">
          <el-form-item label="监所">
            <el-select v-model="prison_val" placeholder="请选择" size="small" style="width: 160px;">
              <el-option
                v-for="item in prison"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="状态">
            <el-select v-model="sup_status_val" placeholder="请选择" size="small" style="width: 160px;">
              <el-option
                v-for="item in sup_status"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="违规类型">
            <el-select v-model="illegal_val" multiple placeholder="请选择" size="small" style="width: 160px;">
              <el-option
                v-for="item in illegal"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="督导单类型">
            <el-select v-model="supervisor_list_val" placeholder="请选择" size="small" style="width: 160px;">
              <el-option
                v-for="item in supervisor_list"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="选择时间">
            <el-date-picker
              v-model="select_time"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" size="small" @click="search()">查询</el-button>
            <el-button type="primary" size="small" @click="create()">新建</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row style="padding: 0 20px;">
      <el-table
        :data="supervisitor_list"
        border
        align="center"
        style="width: 100%">
        <el-table-column
          prop="num"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="prison_name"
          label="所在监狱"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status_name"
          label="督导状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="violateTypeName"
          label="违规类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="create_police_name"
          label="创建人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="info_level_name"
          label="等级">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">审批</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        style="float: right;padding: 20px;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 50, 100]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals">
      </el-pagination>
    </el-row>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'supervisor_list',
    data () {
      return {
        token:'',
        prison:[
          {
            value:0,
            label:'全部'
          },
          {
            value:1,
            label:'警辅违规'
          },
          {
            value:2,
            label:'在押违规'
          },
          {
            value:3,
            label:'民警违规'
          },
        ],
        prison_val: '',
        sup_status:[
          {
            value:0,
            label:'全部'
          },
          {
            value:1,
            label:'民警已发送待处理'
          },
          {
            value:2,
            label:'领导已发送'
          },
        ],
        sup_status_val: '',
        illegal:[
          {
            value:0,
            label:'全部'
          },
          {
            value:1,
            label:'警辅违规'
          },
          {
            value:2,
            label:'在押违规'
          },
          {
            value:3,
            label:'民警违规'
          },
        ],
        illegal_val: '',
        supervisor_list:[
          {
            value:0,
            label:'全部'
          },
          {
            value:1,
            label:'警辅违规'
          },
          {
            value:2,
            label:'在押违规'
          },
          {
            value:3,
            label:'民警违规'
          },
        ],
        supervisor_list_val: '',
        select_time: [],
        supervisitor_list: [],
        totals:1,
        currentPage:1,
        pageSize:5,
        num:[],
      }
    },
    methods:{
      /* 查询列表 */
      search:function () {
        let vm = this;
        console.log(Date.parse(vm.select_time[0]))
        console.log(Date.parse(vm.select_time[1]))
        axios({
          method: 'post',
          url: 'http://10.58.1.166:8080/home/supervise/getsuperviseinfolist?token=' + vm.token,
          data:{
            pageIndex:vm.currentPage,
            pageSize:vm.pageSize
          }
        }).then(function (resp) {
          if(resp.data.resultCode === 1){
            vm.totals = resp.data.data.totalSize
            vm.supervisitor_list = resp.data.data.superviseInfoList
            for(let i = 0; i<resp.data.data.superviseInfoList.length; i++){
              vm.num = i
            }
            console.log(vm.num)
            console.log(vm.supervisitor_list)
          } else if(resp.data.resultCode === 0){
            alert(resp.data.resultMsg)
          }
        })
      },
      /* 表格操作-查询 */
      handleEdit:function (index,row) {
        console.log(index,row)
      },
      /* 表格操作-审批 */
      handleDelete:function (index,row) {
        console.log(index,row)
      },
      /* 每页条数 */
      handleSizeChange:function(val){
        console.log(`每页 ${val} 条`);
        vm.pageSize = val
      },
      /* 当前页 */
      handleCurrentChange:function (val) {
        console.log(`当前页: ${val}`);
        vm.currentPage = val
      },
      /* 获取监所 */
      getPersion:function () {
        let vm = this;
//        axios({
//          method: 'post',
//          url: 'http://10.58.1.134:8080/sysmng/sysdepart/getsysdeparts?token=' + vm.token,
//        }).then(function (resp) {
//          console.log(resp)
//          if(resp.data.resultCode === 0){
//
//          } else if(resp.data.resultCode === 1){
//
//          }
//        })
      },
      /* 获取违规类型 */
      getIllegalType:function () {
        let vm = this;
//        axios({
//          method: 'post',
//          url: 'http://10.58.1.134:8080/home/sysdicitem/getsysdicitemlistindic?token=' + vm.token,
//          data:{
//            dic_code:'123'
//          }
//        }).then(function (resp) {
//          console.log(resp)
//          if(resp.data.resultCode === 0){
//
//          } else if(resp.data.resultCode === 1){
//
//          }
//        })
      },
      /* 新建督导单 */
      create:function () {
        this.$router.push({ path: '/list_supervisor' })
      }
    },
    mounted() {
      let vm  = this;
      vm.token = vm.$authorzationUtils.getAuthorization().token
      vm.getPersion()
      vm.getIllegalType()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
  .supervisor_list{
    background: #eee;
    height: 100%;
    .crumb{
      line-height: 20px;
      padding: 20px;
      border-bottom: 1px solid #ccc;
    }
  }
</style>
