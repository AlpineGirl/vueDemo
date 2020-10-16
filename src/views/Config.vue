<template>
   <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          sortable
          :filters="dateList"
          :filter-method="filterHandler"
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
      //tableData: []
      //dateList:[] [{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}]
    },
    methods:{//请求数据
        /*getData():{
            this.$axios.get("http://127.0.0.0.1:3334/tableList").then(
                //请求结果
                res=>{
                    console.log(res)
                    if(res.data.code == '200'){
                        this.tableData = res.data.result;
                        for(var i=0;i< this.tableData.length;i++){
                            this.dateList.push({text: this.tableData[i].date, value: this.tableData[i].date})
                        }

                    }
                },error=>{

                }

            )
        },*/
        filterHandler(value, row, column) {
                const property = column['property']; //date
                return row[property] === value; //row.date ==== value
                //var obj = {id:1} 对象取值有2种方式：obj.id ；obj ['id']。2者区别？？
                //var a = 'id'; obj[a];第2种可以取变量
        }
    },
    mounted(){//钩子函数，挂载完成
        //this.getData();
    }
  }
</script>