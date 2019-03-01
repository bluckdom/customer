<template>
  <div class='newCuswrapper'>
    <div class='mt20'>
      <el-button type='primary' round @click='saveCus'>保存</el-button>
    </div>
    <div class='oh topclose'>
      <div class="row">
        <div class="col-xs-12">
          <div class='input-label'><span>客户名称：</span></div>
          <div class='inputwrapper'>
            <div class='filedinput custnadclose'>
                <span class="custnamespan" v-if="readonly">{{customer.name}}</span>
                <el-autocomplete
                  class = 'custnamebox'
                  v-model = 'customer.name'
                  :fetch-suggestions = 'querySearchAsync'
                  placeholder = '请输入客户名称'
                  :readonly = "readonly"
                  :trigger-on-focus="false"
                  @select = 'handleSelect'
                  v-if="!readonly"
                ></el-autocomplete>
              <span class="el-icon-close" v-if="readonly" @click="emptyCustname"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class='col-xs-6'>
          <div class='input-label'><span>所属组织：</span></div>
          <div class='inputwrapper syorg'>
            <browser type='base' propertyname='pk_org' id='pk_org' @listenInputChange="changeInput" ref="pk_org" :defaultValue="pk_org"></browser>
          </div>
        </div>
        <div class="col-xs-6">
          <div class='input-label'>业务员：</div>
          <div class='inputwrapper syorg'>
            <browser type='base' propertyname='respperson' id='respperson' @listenInputChange="changeInput" ref="respperson" defaultValue=""></browser>
          </div>
        </div>
        <div class='col-xs-12' v-if="readonly">
          <div class='input-label'>已分配组织：</div>
          <div class='inputwrapper'>{{customer.allocatedsales}}</div>
        </div>
      </div>
    </div>
    <div class='newDetail'>
      <el-tabs value='first'>
        <el-tab-pane label='基础信息' name='first'>
          <div class='container-fluid rowborder'>
            <div class='row'>
              <div class='col-xs-12'>
                <div class='input-label'>地址：</div>
                <div class='inputwrapper'><filedinput propertyname='def2' @listenInputChange="changeInput" :defaultValue="customer.def2" id='def2' :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>纳税识别号：</div>
                <div class='inputwrapper'><filedinput propertyname='taxpayerid' id='taxpayerid' @listenInputChange="changeInput" :defaultValue="customer.taxpayerid" :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>联系方式：</div>
                <div class='inputwrapper'><filedinput propertyname='tel1' id='tel1' @listenInputChange="changeInput" :defaultValue="customer.tel1" :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>英文名称：</div>
                <div class='inputwrapper'><filedinput propertyname='ename' id='ename' @listenInputChange="changeInput" :defaultValue="customer.ename" :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>法人：</div>
                <div class='inputwrapper'><filedinput  propertyname='legalbody' id='legalbody' @listenInputChange="changeInput" :defaultValue="customer.legalbody" :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>注册资金：</div>
                <div class='inputwrapper'><filedinput propertyname='registerfund' id='registerfund' @listenInputChange="changeInput" :defaultValue="customer.registerfund" :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>地区分类：</div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_areacl' id='pk_areacl' @listenInputChange="changeInput" :defaultValue="customer.pk_areacl" :readonly="readonly"></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>WEB：</div>
                <div class='inputwrapper'><filedinput propertyname='url' id='url' @listenInputChange="changeInput" :defaultValue="customer.url" :readonly="readonly"></filedinput></div>
              </div>
              <div class='col-xs-12'>
                <div class='input-label'>客户地址-kp-def5：</div>
                <div class='inputwrapper'>
                  <filedinput  propertyname='def5' id='def5' @listenInputChange="changeInput" :defaultValue="customer.def5" :readonly="readonly"></filedinput>
                </div>
              </div>
              <div class='col-xs-12'>
                <div class='input-label'>开户银行帐号-kp-def6：</div>
                <div class='inputwrapper'>
                  <filedinput  propertyname='def6' id='def6' @listenInputChange="changeInput" :defaultValue="customer.def6" :readonly="readonly"></filedinput>
                </div>
              </div>
              <div class='col-xs-12'>
                <div class='input-label'>客户税号-kp-def7：</div>
                <div class='inputwrapper'>
                  <filedinput  propertyname='def7' id='def7' @listenInputChange="changeInput" :defaultValue="customer.def7" :readonly="readonly"></filedinput>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label='联系人' name='fourth'>
          <el-table class='tab-panel'
                    :data='customer.linkman'
                    id='linkman'>
            <el-table-column label='名称' width='180'>
              <template slot-scope='props'>
                <filedinput  propertyname='name' ref='name' type='linkman' :defaultValue="props.row.name" :readonly="props.row.readonly"></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='手机' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='cell' ref='cell' type='linkman' :defaultValue="props.row.cell" :readonly="props.row.readonly"></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='电话' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='phone' ref='phone' type='linkman' :defaultValue="props.row.phone" :readonly="props.row.readonly"></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='传真' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='fax' ref='fax' type='linkman' :defaultValue="props.row.fax" :readonly="props.row.readonly"></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='邮件' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='email' ref='email' type='linkman' :defaultValue="props.row.email" :readonly="props.row.readonly"></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='职位' width='180'>
              <template slot-scope='props'>
                <filedinput propertyname='vjob' ref='vjob' type='linkman' :defaultValue="props.row.vjob" :readonly="props.row.readonly"></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='pklinkman' width="100">
              <template slot-scope='props'>
                <filedinput propertyname='pk_linkman' ref='props' type='linkman' :defaultValue="props.row.pk_linkman" :readonly="true"></filedinput>
              </template>
            </el-table-column>
            <el-table-column  :render-header='addRowClickLinkman' width='40'>
              <template slot-scope='props'>
                <delete-button type='linkman' :readonly="props.row.readonly"></delete-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import browser from '../Util/emptyUtil/browser'
  import filedinput from '../Util/emptyUtil/fieldInput'
  import fieldCheckbox from '../Util/emptyUtil/fieldCheckbox'
  import deleteButton from '../Util/emptyUtil/deleteButton'
  import departree from '../Util/emptyUtil/tree'
  import 'static/css/newcus.css'
  import $ from 'jquery'
export default {
    data () {
      return {
        restaurants: [],
        timeout: null,
        custfinance: [],
        custcreditctl: [],
        custsale: [],
        Ffa: false,
        customer: {
          pk_customer: '',
          name: '',
          code: '',
          custprop: '',
          def2: '',
          ename: '',
          legalbody: '',
          memo: '',
          pk_areacl: '',
          pk_country: '',
          allocatedsales: '',
          pk_org: '',
          pk_currtype: '',
          pk_custclass: '',
          pk_financeorg: '',
          pk_format: '',
          pk_timezone: '',
          registerfund: '',
          taxpayerid: '',
          tel1: '',
          url: '',
          linkman: [],
          def5: '',
          def6: '',
          def7: '',
          respperson: ''
        },
        readonly: false
      }
    },
  name: 'newCustomer',
  methods: {
    randomStr (flag, min, max) {
    let str = '';
    let index = '';
    let range = min;
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',
      'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (flag) {
      range = Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (var i = 0; i < range; i++) {
      index = Math.round(Math.random() * (arr.length - 1));
      str += arr[index];
    }
    return str;
  },
    emptyCustname () {
      this.readonly = !this.readonly
      this.customer = {
        pk_customer: '',
        name: '',
        custprop: '',
        def2: '',
        code: '',
        ename: '',
        legalbody: '',
        memo: '',
        def5: '',
        def6: '',
        def7: '',
        pk_areacl: '',
        allocatedsales: '',
        pk_country: '',
        pk_currtype: '',
        pk_custclass: '',
        pk_financeorg: '',
        pk_format: '',
        pk_org: '',
        pk_timezone: '',
        registerfund: '',
        taxpayerid: '',
        linkman: [],
        tel1: '',
        url: '',
        respperson: ''
      }
    },
    querySearchAsync (queryString, cb) {
      this.$http.get('/test/customerVue/searchCustname.jsp?q=' + queryString).then((res) => {
        res = res.body
        cb(res)
      })
    },
    handleSelect (item) {
      this.$http.get('/test/customerVue/addCusPageInfo.jsp?pk=' + item.pk).then((res) => {
        res = res.body
        if (res.errno === 1) {
          this.customer = res
          this.readonly = true
        }
      })
    },
    changeInput (type, propertyname, propervalue) {
      propervalue = propervalue === '~' ? '' : propervalue
      if (type === undefined || type === 'base') {
        this.customer[propertyname] = propervalue
      }
    },
    saveCus () {
      this.customer.pk_org = this.$refs.pk_org.pk
      const that = this
      if (this.customer.name === '' || this.customer.pk_org === '') {
        that.$message({
          type: 'error',
          message: '红色标题为必填项!'
        })
        return false
      }
      let data = this.customer
      data.respperson = this.$refs.respperson.pk
      // 联系人
      let linkman = []
      let linkmanBoolean = false
      $('#linkman tbody tr').each(function () {
        let $t = $(this)
        let $td = $t.children('td')
        let name = $td.eq(0).find('input').val()
        let cell = $td.eq(1).find('input').val()
        let phone = $td.eq(2).find('input').val()
        let fax = $td.eq(3).find('input').val()
        let email = $td.eq(4).find('input').val()
        let vjob = $td.eq(5).find('input').val()
        let pklinkman = $td.eq(6).find('input').val()

        if (name === '') {
          linkmanBoolean = true
          return false
        }
        linkman.push({
          name: name,
          cell: cell,
          phone: phone,
          fax: fax,
          email: email,
          vjob: vjob,
          pklinkman: pklinkman
        })
      })
      if (linkmanBoolean) {
        that.$message({
          type: 'error',
          message: '请填写"联系人"选项卡内的姓名!'
        })
        return false
      }
      data.linkmanjson = linkman
      this.$http.post('/test/customerVue/addCus.jsp', data).then((res) => {
        res = res.body
        const errno = res.errno
        let type = 'error'
        let txt = res.txt
        if (errno === '1') {
          type = 'success'
          txt += 'pk:' + res.pks
        }
        that.$message({
          type: type,
          message: txt
        })
        if (errno === '1') {
          window.location.reload()
        }
      }).catch(function () {
        that.$message({
          type: 'error',
          message: '系统错误,请联系管理员处理!'
        })
      })
    },
    G (id) {
     return $('#' + id).find('input').val()
    },
    addRowClickLinkman (h, {column}) {
      const that = this
      return h('el-button', {
        class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
        style: 'color:#fff;',
        on: {
          click () {
            that.customer.linkman.push({readonly: false})
          }
        }
      })
    }
  },
  props: ['pk_org'],
  watch: {
      pk_org () {
        this.customer.pk_org = this.pk_org
      }
  },
  components: {
    'browser': browser,
    'filedinput': filedinput,
    'fieldSelect': fieldCheckbox,
    'deleteButton': deleteButton,
    'departree': departree
  },
  created () {
    this.customer.taxpayerid = this.randomStr(false, 11, 12)
    this.customer.def2 = this.randomStr(false, 20, 30)
  }
}
</script>
<style>

</style>
