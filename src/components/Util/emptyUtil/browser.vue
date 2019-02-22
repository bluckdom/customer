<template>
  <div class="controls">
    <div class="probox" v-show="!showEdit">
      <div class="prowrapper">
        <span>{{propervalue}}</span>
        <i class="el-icon-close deletepro dn" @click="deletepro" v-if="propervalue && propervalue.length > 0"></i>
        <el-input v-model="pk" type="hidden" class="dn"></el-input>
      </div>
      <i class="el-icon-edit" @click="openBrowser"></i>
    </div>
    <div class="proecidtbrower" v-show="showEdit">
      <el-tooltip content="请选择相应类别" placement="right">
        <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
        @blur="closeBrowser"
        name="propertyname"
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
    props: ['propertyname', 'type'],
    methods: {
      deletepro () {
        const that = this
        this.propervalue = ''
        this.pk = ''
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
      this.propervalue = ''
    }
  }
</script>
<style>

</style>
