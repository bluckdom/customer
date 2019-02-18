<template>
  <div class="controls">
    <div class="probox">
      <div class="prowrapper">
        <span>{{propernamecn}}</span>
        <i class="el-icon-close deletepro dn" @click="deletepro"></i>
      </div>
      <i class="el-icon-edit dn" @click="dialogVisible = true"></i>
    </div>
    <el-dialog
      title="选择部门"
      :visible.sync="dialogVisible"
      width="30%"
      :modal-append-to-body="modal">
      <div class="departlist">
        <el-tree
          :data="data2"
          show-checkbox
          node-key="id"
          default-expand-all
          :check-strictly="true"
          :default-checked-keys="[this.propervalue]"
          @check-change="checkChange"
          @node-click="nodeClick"
          ref="departlist"
          :props="defaultProps">
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectDepart">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: '',
        propernamecn: '',
        tempvalue: '',
        dialogVisible: false,
        modal: false,
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    props: ['property', 'propertyname', 'type', 'propername', 'pk_org', 'data'],
    created () {
      this.propervalue = this.property ? this.property : '' // 主键
      this.propernamecn = this.propername ? this.propername : '' // 中文
      // http://localhost/depart.json
      // /test/customerVue/getTreeDepartment.jsp
      const pkorg = this.pk_org ? this.pk_org : ''
      this.$http.get('/test/customerVue/getTreeDepartment.jsp?pk_org=' + pkorg).then((res) => {
        res = res.body
        this.data2 = res
      })
    },
    methods: {
      deletepro () {
        const that = this
        if (!that.data.plus) {
          that.$confirm('确定要删除吗？', '确认', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.propervalue = ''
            this.propernamecn = ''
            this.$refs.departlist.setCheckedKeys([])
            this.saveTree('', this.type)
          })
        } else {
          this.propervalue = ''
          this.propernamecn = ''
          this.$refs.departlist.setCheckedKeys([])
        }
      },
      saveTree (key, type) {
        // 执行AJAX
        let data = {
          customer_pk: this.data.pk_customer,
          value: key,
          name: this.propertyname,
          type: type
        }
        if (this.data.pk_custfinance) {
          data.pk_custfinance = this.data.pk_custfinance
        }

        this.$http.post('/test/customerVue/editProperty.jsp', data).then((res) => {
          res = res.body
          if (res.errno === 1) {
            this.$message({
              type: 'success',
              message: '删除成功!' + key + '--' + type
            });
          }
        })
      },
      selectDepart () {
        this.dialogVisible = false
        var tree = this.$refs.departlist.getCheckedNodes()
        if (tree.length > 0 && this.propervalue !== tree[0].id) {
          this.propervalue = tree[0].id
          this.propernamecn = tree[0].label
          if (!this.data.plus) {
            this.saveTree(this.propervalue, this.type)
          }
        }
      },
      checkChange (item, node, self) {
        if (node === true) {
          this.$refs.departlist.setCheckedKeys([item.id])
          this.tempvalue = item.id
        }
      },
      nodeClick (item, node, self) {
        if (!(item.children && item.children.length > 0)) {
          this.$refs.departlist.setCheckedKeys([item.id])
        }
      }
    }
  }
</script>
<style>
  .departdree .el-icon-edit{
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ddd;
    color: #ddd;
    cursor: pointer;
    display: none;
  }
  .departdree:hover .el-icon-edit{
    display: inline-block;
  }
  .el-icon-edit:hover{
    border-color: #108ee9;
    color: #108ee9;
  }
  .departdree{
    width: 100%;
    height: 35px;
  }
</style>
