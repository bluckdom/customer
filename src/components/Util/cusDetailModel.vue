<template>
    <div class="cusDetailModel" v-loading="loading">
      <div class="oh topclose mt20" v-if="!loading">
        <i class="el-icon-circle-close-outline icon" @click="closeModel"></i>
        <div class="topcusname"><filedinput :property="customer.name" propertyname="name" :data="customer" :readonly="true"></filedinput></div>
      </div>
      <div class="cusDetail" v-if="!loading">
        <el-tabs value="first">
          <el-tab-pane label="基础信息" name="first">
            <div class="container-fluid rowborder">
              <div class="row">
                  <div class="col-xs-12">
                    <div class="tr custlabel">地址：</div>
                    <div class="col-xs-8"><filedinput :property="customer.def2" propertyname="def2" :data="customer" ></filedinput></div>
                  </div>
                <div class="col-xs-6">
                  <div class="tr custlabel">客户简称：</div>
                  <div class="col-xs-8"><filedinput :property="customer.shortname" propertyname="shortname" :data="customer" :readonly="true"></filedinput></div>
                </div>
                <div class="col-xs-6">
                  <div class="tr custlabel">注册资金：</div>
                  <div class="col-xs-8"><filedinput :property="customer.registerfund" propertyname="registerfund" :data="customer"></filedinput></div>
                </div>
                <div class="col-xs-6">
                  <div class="tr custlabel">法人：</div>
                  <div class="col-xs-8"><filedinput :property="customer.legalbody" propertyname="legalbody" :data="customer"></filedinput></div>
                </div>
                <div class="col-xs-6">
                  <div class="tr custlabel">联系方式：</div>
                  <div class="col-xs-8"><filedinput :property="customer.tel1" propertyname="tel1" :data="customer"></filedinput></div>
                </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">纳税识别号：</div>
                    <div class="col-xs-8"><filedinput :property="customer.taxpayerid" propertyname="taxpayerid" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">创建人：</div>
                    <div class="col-xs-8">{{customer.creatorcn}}</div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">客户类型：</div>
                    <div class="col-xs-8">
                      {{customer.custprop}}
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">客户状态：</div>
                    <div class="col-xs-8">
                      {{customer.custstate}}
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">分布式：</div>
                    <div class="col-xs-8">{{customer.dataoriginflag}}</div>
                  </div>
                  <div class="col-xs-6"  v-if="showBaseMore">
                    <div class="tr custlabel">启用状态：</div>
                    <div class="col-xs-8">{{customer.enablestate}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">英文名称：</div>
                    <div class="col-xs-8"><filedinput :property="customer.ename" propertyname="ename" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">散户：</div>
                    <div class="col-xs-8"><field-select :property="customer.isfreecust" propertyname="isfreecust" type="base" :data="customer" :readonly="true"></field-select></div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">零售店：</div>
                    <div class="col-xs-8"><field-select :property="customer.isretailstore" propertyname="isretailstore" type="base" :data="customer" :readonly="true"></field-select></div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">供应商：</div>
                    <div class="col-xs-8"><field-select :property="customer.issupplier" propertyname="issupplier" type="base" :data="customer" :readonly="true"></field-select></div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">VAT注册码：</div>
                    <div class="col-xs-8"><field-select :property="customer.isvat" propertyname="isvat" type="base" :data="customer" :readonly="true"></field-select></div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">地区分类：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_areacl" propertyname="pk_areacl" type="base" :data="customer" :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">国家地区：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_country" propertyname="pk_country" type="base" :data="customer" :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">币种：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_currtype" propertyname="pk_currtype" type="base" :data="customer"  :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">客户分类：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_custclass" propertyname="pk_custclass" type="base" :data="customer"  :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">业务单元：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_financeorg" propertyname="pk_financeorg" type="base" :data="customer"  :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">数据格式：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_format" propertyname="pk_format" type="base" :data="customer"  :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">集团：</div>
                    <div class="col-xs-8">{{customer.pk_group}}</div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">组织：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_org" propertyname="pk_org" type="base" :data="customer"  :readonly="true"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6" v-if="showBaseMore">
                    <div class="tr custlabel">时区：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_timezone" propertyname="pk_timezone" type="base" :data="customer" :readonly="true"></browser>
                    </div>
                  </div>
                <div class="col-xs-12">
                  <div class="tr custlabel">WEB：</div>
                  <div class="col-xs-8"><filedinput :property="customer.url " propertyname="url" :data="customer"></filedinput></div>
                </div>
                <div class="showBaseMore col-xs-12 tc" v-if="!showBaseMore">
                  <el-button type="primary" @click="showBaseMore = !showBaseMore">显示更多 <span class="el-icon-plus"></span></el-button>
                </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">备注：</div>
                    <div class="col-xs-10">
                      <filedinput :property="customer.memo" propertyname="memo" istextares="true" :data="customer" type="base"></filedinput>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">客户地址-kp-def5：</div>
                    <div class="col-xs-8"><filedinput :property="customer.def5" propertyname="def5" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">开户银行帐号-kp-def6：</div>
                    <div class="col-xs-8"><filedinput :property="customer.def6" propertyname="def6" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">客户税号-kp-def7：</div>
                    <div class="col-xs-8"><filedinput :property="customer.def7" propertyname="def7" :data="customer"></filedinput></div>
                  </div>
                </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="组织信息" name="five">
            <div class="salesti">销售组织</div>
              <el-table class="tab-panel"
                        :data="customer.custsale">
                <el-table-column label="所属销售组织" width="200" prop="pk_org">
                </el-table-column>
                <el-table-column label="专管业务员" width="120">
                  <template slot-scope="props">
                    <browser :property="props.row.respperson" propertyname="respperson" type="custsale" ref="respperson" :data="props.row"></browser>
                  </template>
                </el-table-column>
                <el-table-column label="运输方式" width="140">
                  <template slot-scope="props">
                    <browser :property="props.row.shippingtype" propertyname="shippingtype" type="custsale" ref="shippingtype" :data="props.row"></browser>
                  </template>
                </el-table-column>
                <el-table-column label="默认收款协议" width="140">
                  <template slot-scope="props">
                    <browser :property="props.row.paytermdefault" propertyname="paytermdefault" type="custsale" ref="paytermdefault" :data="props.row"></browser>
                  </template>
                </el-table-column>
                <el-table-column label="默认订单类型" prop="ordertypedefault">
                </el-table-column>
              </el-table>
              <div class="salesti mt15">财务组织</div>
              <el-table class="tab-panel"
                        :data="customer.custfinance">
                <el-table-column label="所属财务组织" width="" prop="pk_org">
                </el-table-column>
                <el-table-column label="默认收款协议" width="150">
                  <template slot-scope="props">
                    <browser :property="props.row.pk_payterm" propertyname="pk_payterm" type="custfinance" ref="pk_payterm" :data="props.row"></browser>
                  </template>
                </el-table-column>
                <el-table-column label="默认交易币种" width="" prop="pk_currtype1">
                </el-table-column>
                <el-table-column label="专管业务员" width="" prop="pk_resppsn1">
                </el-table-column>
                <el-table-column label="默认催款" width="" prop="ispromtesettlement">
                </el-table-column>
                <el-table-column label="内控账期延期天数" width="" prop="innerctldeferdays">
                </el-table-column>
              </el-table>
              <div class="salesti mt15">信用控制</div>
              <el-table class="tab-panel" :data="customer.custcreditctl">
              <el-table-column label="所属信用控制域" width="" prop="pk_org">
              </el-table-column>
              <el-table-column label="信用等级" width="200">
                <template slot-scope="props">
                  <browser :property="props.row.creditlevel" propertyname="creditlevel" ref="creditlevel" type="custcreditctl" :data="props.row"></browser>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="联系人" name="fourth">
            <el-table class="tab-panel oh"
                      :data="customer.linkman">
              <el-table-column label="名称" width="80">
                <template slot-scope="props">
                  <filedinput :property="props.row.name" propertyname="name" ref="name" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="手机" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.cell" propertyname="cell" ref="cell" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="电话" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.phone" propertyname="phone" ref="phone" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="传真" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.fax" propertyname="fax" ref="fax" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="邮件" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.email" propertyname="email" ref="email" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="职位" width="80">
                <template slot-scope="props">
                  <filedinput :property="props.row.vjob" propertyname="vjob" ref="vjob" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column  :render-header="addRowClickLinkman" width="40">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="linkman" @openLinkman="openLinkman"></delete-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="联系记录" name="contact">
            <div class="contact">
              <div class="contactWrapper">
              <el-input
                class="contactcontent"
                type="textarea"
                placeholder="联系记录..."
                :autosize="{ minRows: 3}"
                resize="none"
                v-model="contactcontent">
              </el-input>
              <div class="mt10 oh tr">
                <el-select v-model="selectpklinkman" placeholder="请选择联系人" size="mini" clearable filterable>
                  <el-option
                    v-for="item in customer.linkman"
                    :key="item.pk_linkman"
                    :label="item.name"
                    :value="item.pk_linkman">
                  </el-option>
                </el-select>
                <el-select v-model="selectOrg" placeholder="请选择销售组织" size="mini" clearable filterable class="pl10">
                  <el-option
                    v-for="item in customer.custsale"
                    :key="item.pk_orgkey"
                    :label="item.pk_org"
                    :value="item.pk_orgkey">
                  </el-option>
                </el-select>
                <div class="nextdate">
                  <el-date-picker
                    v-model="nextdate"
                    type="datetime"
                    size="mini"
                    placeholder="下次联系时间">
                  </el-date-picker>
                </div>
                <el-button type="primary" size="mini" @click="newontact">发表</el-button>
              </div>
              <div class="contactlist" v-if="contactlist.length > 0">
                <ul>
                  <li v-for="pro in contactlist">
                    <img :src="pro.img" class="mCS_img_loaded ab">
                    <div class="contactDetail">
                      <div class="oh userNameWrapper">
                        <a class="userName">{{pro.name}}</a>联系了【<a>{{pro.linkname}}</a>】
                        <a cklss="pk_org">{{pro.orgname}}</a>
                      </div>
                      <div class="contactcontent mt5">
                        {{pro.contact}}
                      </div>
                      <div class="contactdate mt5">
                        {{pro.date}}
                        <span class="Cus_nextdatetime" v-if="pro.nextdate.length > 1">下次联系时间：<span class="nextdateinfo">{{pro.nextdate}}</span></span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-dialog
        title="联系人"
        :visible.sync="showlinkman"
        center
        :modal-append-to-body="false"
        width="800px">
        <linkman :pklinkman="pklinkman"></linkman>
      </el-dialog>
    </div>
</template>

<script>
    import browser from './browser'
    import filedinput from './fieldInput'
    import fieldCheckbox from './fieldCheckbox'
    import deleteButton from './deleteButton'
    import departree from './tree'
    import linkman from './myCusVue/linkManvue'
    import 'static/css/mycustomer.css'
    export default {
      data () {
        return {
          loading: false,
          customer: {},
          temp: 'Y',
          showBaseMore: false,
          showlinkman: false,
          pklinkman: '',
          nextdate: '',
          selectOrg: '',
          contactcontent: '',
          selectpklinkman: '',
          contactlist: []
        }
      },
      components: {
        'browser': browser,
        'filedinput': filedinput,
        'fieldSelect': fieldCheckbox,
        'deleteButton': deleteButton,
        'departree': departree,
        'linkman': linkman
      },
      created () {
        const that = this
        document.body.onclick = function (e) {
          e = e.target || e.srcElement
          let parent = e
          let closemodel = false
          try {
            while (true) {
              const tagname = parent.tagName
              const classname = parent.getAttribute('class')
              parent = parent.parentNode
              if (tagname === 'BODY') break
              if (classname == null) continue
              if (classname.indexOf('customerWrapper') >= 0 || classname.indexOf('el-message-box__wrapper') >= 0 || classname.indexOf('el-autocomplete-suggestion') >= 0) {
                closemodel = true
                break
              }
            }
            if (!closemodel && that.$parent.cusDetailModelVisable) {
              that.$parent.closeDetail()
            }
          } catch (e) {
          }
        }
      },
      props: ['customerid'],
      methods: {
        newontact (type, id) {
          if (this.contactcontent === '') {
            this.$message({
              type: 'error',
              message: '输入联系记录!'
            })
            return false
          }
          if (this.selectpklinkman === '') {
            this.$message({
              type: 'error',
              message: '请选择联系人!'
            })
            return false
          }
          if (this.selectOrg === '') {
            this.$message({
              type: 'error',
              message: '请选择组织!'
            })
            return false
          }
          let nextdate = ''
          let nexttime = ''
          if (this.nextdate !== null && this.nextdate !== '') {
            let year = this.nextdate.getFullYear();
            let month = this.nextdate.getMonth() + 1;
            month = month < 10 ? '0' + month : month
            let day = this.nextdate.getDate();
            day = day < 10 ? '0' + day : day
            nextdate = year + '-' + month + '-' + day
            let hour = this.nextdate.getHours()
            hour = hour < 10 ? '0' + hour : hour
            let minutes = this.nextdate.getMinutes()
            minutes = minutes < 10 ? '0' + minutes : minutes
            nexttime = hour + ':' + minutes
          }
          let data = {
            contactcontent: this.contactcontent,
            selectpklinkman: this.selectpklinkman,
            selectOrg: this.selectOrg,
            nextdate: nextdate,
            nexttime: nexttime,
            repltype: 0,
            pk_customer: this.customerid
          }
          if (type === 1) {
            data.repltype = 1
            data.replyid = id
          }
          this.$http.post('/test/customerVue/linkman/postcontact.jsp', data).then((res) => {
            res = res.body
            const errno = res.errno
            if (errno === 1) {
              this.$message({
                type: 'success',
                message: '添加成功!'
              })
              this.getContact()
              this.contactcontent = ''
              this.selectpklinkman = ''
              this.selectOrg = ''
              this.nextdate = ''
            } else {
              this.$message({
                type: 'error',
                message: res.txt
              })
            }
          })
        },
        openLinkman (data) {
          this.pklinkman = data.pk_linkman
          this.showlinkman = true
        },
        addRowClickLinkman (h, {column}) {
          const that = this
          return h('el-button', {
            class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
            style: 'color:#fff;',
            on: {
              click () {
                const list = {
                  plus: true
                }
                that.customer.linkman.push(list)
              }
            }
          })
        },
        closeModel () {
          this.$parent.closeDetail()
        },
        saveTr (type) {
          let data = {}
          if (type === 'linkman') {
            if (this.$refs.name.propervalue === '') {
              this.$message({
                type: 'error',
                message: '请填写联系人姓名!'
              })
              return false
            }
            data = {
              name: this.$refs.name.propervalue,
              cell: this.$refs.cell.propervalue,
              phone: this.$refs.phone.propervalue,
              fax: this.$refs.fax.propervalue,
              email: this.$refs.email.propervalue,
              vjob: this.$refs.vjob.propervalue
            }
          }
          data.type = type
          data.pk_customer = this.customerid
          this.$http.post('/test/customerVue/addProperty.jsp', data).then((res) => {
            res = res.body
            if (res.errno === 1) {
              this.$message({
                type: 'success',
                message: '添加成功!'
              })
              this.getCustomer()
            } else {
              this.$message({
                type: 'error',
                message: '添加失败，请联系管理员!'
              })
            }
          })
        },
        getCustomer () {
          this.loading = true
          const that = this
          this.showBaseMore = false
          // /test/customerVue/custinfo.jsp
          // http://localhost/custinfo.json
          this.$http.get('/test/customerVue/custinfo.jsp?pk=' + this.customerid).then((res) => {
            res = res.body
            const errno = res.errno
            if (errno === 1) {
              that.customer = res
            } else {
              that.$message.error(res.txt);
            }
            that.loading = false
          })
          this.getContact()
        },
        getContact () {
          this.$http.get('/test/customerVue/linkman/getcontact.jsp?pk=' + this.customerid).then((res) => {
            res = res.body
            this.contactlist = res
          })
        }
      },
      watch: {
        customerid () {
          this.getCustomer()
        }
      }
    }
</script>

<style>
.showBaseMore button{
  width: 90%;
}
</style>
