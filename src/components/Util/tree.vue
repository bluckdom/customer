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
        data2: [{
          children: [{
            disabled: false,
            id: 3,
            label: "子级1_1",
            parentid: 1
          }, {
            children: [{
              disabled: false,
              id: 5,
              label: "子级1_2_1",
              parentid: 4
            }],
            disabled: true,
            id: 4,
            label: "子级1_2",
            parentid: 1
          }],
          disabled: true,
          id: 1,
          label: "父级1",
          parentid: 0
        }, {
          disabled: false,
          id: 2,
          label: "父级2",
          parentid: 0
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    props: ['property', 'propertyname', 'type', 'propername'],
    created () {
      this.propervalue = this.property // 主键
      this.propernamecn = this.propername // 中文
    },
    methods: {
      deletepro () {
        const that = this
        that.$confirm('确定要删除吗？', '确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          console.log('删除执行AJAX')
          that.$message({
            type: 'success',
            message: '删除成功!'
          });
          that.propervalue = ''
        })
      },
      selectDepart () {
        this.dialogVisible = false
        var tree = this.$refs.departlist.getCheckedNodes()
        console.log(tree)
        if (tree.length > 0) {
          this.propervalue = tree[0].id
          this.propernamecn = tree[0].label
          this.$message({
            type: 'success',
            message: '删除成功!' + this.propernamecn + '--' + this.propervalue
          });
        }
      },
      checkChange (item, node, self) {
        if (node === true) {
          this.$refs.departlist.setCheckedKeys([item.id])
          this.tempvalue = item.id
        } else {
          if (this.tempvalue === '' + item.id) {
            this.$refs.departlist.setCheckedKeys([item.id])
          }
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
