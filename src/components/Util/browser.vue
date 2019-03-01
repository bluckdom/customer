<template>
  <div class="controls">
    <div class="probox" v-show="!showEdit">
      <div class="prowrapper">
        <span>{{propervalue}}</span>
        <i class="el-icon-close deletepro dn" @click="deletepro" v-if="propervalue && propervalue.length > 0" v-show="!readonly"></i>
      </div>
      <i class="el-icon-edit" @click="openBrowser" v-show="!readonly"></i>
    </div>
    <div class="proecidtbrower" v-show="showEdit" v-if="!readonly">
      <el-tooltip content="请选择相应类别" placement="right">
        <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
        @blur="closeBrowser"
        ref="browserinput"
      >
      </el-autocomplete>
      </el-tooltip>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showdelete: false,
        propervalue: '',
        pk: '',
        showEdit: false,
        restaurants: [],
        state1: ''
      }
    },
    props: ['property', 'propertyname', 'type', 'data', 'readonly'],
    methods: {
      deletepro () {
        const that = this
        if (this.data && this.data.plus) {
          this.propervalue = ''
          this.pk = ''
        } else {
          that.$confirm('确定要删除吗？', '确认', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.propervalue = ''
            this.pk = ''
            this.saveBrowser('', this.type)
          }).catch(() => {})
        }
      },
      querySearch (queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0);
        };
      },
      handleSelect (item) {
        this.showEdit = false
        this.state1 = item.value
        this.propervalue = item.value
        this.pk = item.pk_key
        if (this.data && !this.data.plus) {
          this.saveBrowser(item.pk_key, this.type)
        }
        if (this.type === 'base') {
          this.saveBrowser(item.pk_key, this.type)
        }
      },
      saveBrowser (key, type) {
        // 执行AJAX
        const that = this
        let data = {
          customer_pk: this.data.pk_customer,
          value: key,
          name: this.propertyname,
          type: type
        }
        if (this.data.pk_custfinance) {
          data.pk_custfinance = this.data.pk_custfinance
        }
        if (this.data.pk_custcreditctl) {
          data.pk_custcreditctl = this.data.pk_custcreditctl
        }
        if (this.data.pk_custsale) {
          data.pk_custsale = this.data.pk_custsale
        }
        this.$http.post('/test/customerVue/editProperty.jsp', data).then((res) => {
          res = res.body
          if (res.errno === 1) {
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
          }
        })
      },
      openBrowser () {
        //         /test/customerVue/getBaseproperty.jsp
        // http://localhost/baseperty.json
        this.$http.get('/test/customerVue/getBaseproperty.jsp?type=' + this.type + '&name=' + this.propertyname).then((res) => {
          res = res.body
          this.restaurants = res
          this.showEdit = true
          this.state1 = ''
          this.$nextTick(function () {
            this.$refs.browserinput.focus();
          });
        })
      },
      closeBrowser (e) {
        e = e.target || e.srcElement
      }
    },
    created () {
      this.propervalue = this.property ? this.property : ''
    }
  }
</script>
<style>

</style>
