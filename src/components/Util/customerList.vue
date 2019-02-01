<template>
    <div class="customerWrapper">
      <div class="cantainer">
        <el-table style="width: 100%;"
                  v-loading="Listloading"
                  height="700"
                  @row-click="customerClick"
                  :data="customerdata">
          <el-table-column label="编号" prop="code" width="">
          </el-table-column>
          <el-table-column label="客户名称" prop="name" width="">
          </el-table-column>
          <el-table-column label="国家" prop="pk_country" width="">
          </el-table-column>
          <el-table-column label="地区" prop="pk_areacl" width="">
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next, jumper"
          :total="customerdata.length">
        </el-pagination>
      </div>
      <cusDetailModel :customerid = "customerid" :class="cusDetailModelVisable == true ? 'on' : ''"></cusDetailModel>
    </div>
</template>

<script>
  import cusDetailModel from './cusDetailModel'
    export default {
      data () {
        return {
          pagesize: 10,
          customerid: '',
          cusDetailModelVisable: false
        }
      },
      components: {
        'cusDetailModel': cusDetailModel
      },
      props: {
        customerdata: {
          type: Array,
          required: true
        },
        currentPage: {
          type: Number,
          required: true
        },
        Listloading: {
          type: Boolean,
          required: true
        }
      },
      methods: {
        handleCurrentChange: function (currentPage) {
          this.$parent.search(currentPage)
        },
        customerClick: function (row) {
          this.cusDetailModelVisable = true
          this.customerid = row.code
        },
        closeDetail () {
          this.cusDetailModelVisable = false
        }
      }
    }
</script>

<style>

</style>
