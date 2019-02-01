<template>
    <div class="cusDetailModel" v-loading="loading">
      <div class="oh topclose" v-if="!loading">
        <i class="el-icon-circle-close-outline icon" @click="closeModel"></i>
        <span class="customername">{{customer.name}}</span>
      </div>
      <div class="cusDetail" v-if="!loading">
        <div class="container-fluid rowborder">
          <div class="row">
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">编码:</div>
                  <div class="col-xs-8">{{customer.code}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">地址：</div>
                  <div class="col-xs-8">{{customer.corpaddress}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">联系方式：</div>
                  <div class="col-xs-8">{{customer.tel1}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">创建人：</div>
                  <div class="col-xs-8">{{customer.creatorcn}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">客户类型：</div>
                  <div class="col-xs-8">{{customer.custprop}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">客户状态：</div>
                  <div class="col-xs-8">{{customer.custstate}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">分布式：</div>
                  <div class="col-xs-8">{{customer.dataoriginflag}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">启用状态：</div>
                  <div class="col-xs-8">{{customer.enablestate}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">英文名称：</div>
                  <div class="col-xs-8">{{customer.ename}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">散户：</div>
                  <div class="col-xs-8"><el-checkbox :checked="customer.isfreecust == 'Y' ? true : false"></el-checkbox></div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">零售店：</div>
                  <div class="col-xs-8"><el-checkbox :checked="customer.isretailstore == 'Y' ? true : false"></el-checkbox></div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">供应商：</div>
                  <div class="col-xs-8"><el-checkbox :checked="customer.issupplier == 'Y' ? true : false"></el-checkbox></div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">VAT注册码：</div>
                  <div class="col-xs-8"><el-checkbox :checked="customer.isvat == 'Y' ? true : false"></el-checkbox></div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">法人：</div>
                  <div class="col-xs-8">{{customer.legalbody}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">备注：</div>
                  <div class="col-xs-8">{{customer.memo}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">地区分类：</div>
                  <div class="col-xs-8">{{customer.pk_areacl}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">国家地区：</div>
                  <div class="col-xs-8">{{customer.pk_country}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">币种：</div>
                  <div class="col-xs-8">{{customer.pk_currtype}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">客户税类：</div>
                  <div class="col-xs-8">{{customer.pk_custclass}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">业务单元：</div>
                  <div class="col-xs-8">{{customer.pk_financeorg}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">数据格式：</div>
                  <div class="col-xs-8">{{customer.pk_format}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">集团：</div>
                  <div class="col-xs-8">{{customer.pk_group}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">组织：</div>
                  <div class="col-xs-8">{{customer.pk_org}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">时区：</div>
                  <div class="col-xs-8">{{customer.pk_timezone}}</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">WEB：</div>
                  <div class="col-xs-8">{{customer.url}}</div>
                </div>
                <div class="col-xs-6">
                  <div class="col-xs-4 tr custlabel">注册资金：</div>
                  <div class="col-xs-8">{{customer.registerfund}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          loading: false,
          customer: {},
          temp: 'Y'
        }
      },
      created () {
        const that = this
        document.body.onclick = function (e) {
          e = e.target || e.srcElement
          let parent = e.parentNode
          let closemodel = false
          while (true) {
            const tagname = parent.tagName
            const classname = parent.getAttribute('class')
            parent = parent.parentNode
            if (tagname === 'BODY') break
            if (classname == null) continue
            if (classname.indexOf('customerWrapper') >= 0) {
              closemodel = true
            }
          }
          if (!closemodel && that.$parent.cusDetailModelVisable) {
            that.$parent.closeDetail()
          }
        }
      },
      props: ['customerid'],
      methods: {
        closeModel () {
          this.$parent.closeDetail()
        }
      },
      watch: {
        customerid () {
          this.loading = true
          const that = this
          this.$http.get('http://localhost/custinfo.json?id=' + this.customerid).then((res) => {
            res = res.body
            that.customer = res
            that.loading = false
          })
        }
      }
    }
</script>

<style>
.cusDetailModel{
  position: fixed;
  width: 800px;
  right:-100%;
  bottom:0;
  top:80px;
  background: #f9f9f9;
  transition:all 0.5s ease-in-out 0s;
  z-index: 11;
  border-left: 1px solid #ddd;
  box-shadow: -3px 0 4px rgba(0,0,0,0.1);
}
.topclose{
  padding-left: 25px;
  line-height: 70px;
}
  .cusDetailModel.on{
    right: 0;
  }
  .cusDetail{
    position: absolute;
    left:20px;
    right:20px;
    top:70px;
    bottom:15px;
    overflow: scroll;
  }
  .cusDetailModel .icon{
    font-size: 2em;
    cursor: pointer;
    margin-right: 30px;
  }
.cusDetailModel .icon:hover{
  color:#409EFF
}
.rowborder .col-xs-12{
  border-bottom: 1px solid #ddd;
}
.rowborder .col-xs-12:last-child{
  border-bottom: 0;
}
.rowborder .col-xs-8{
  font-size: 14px;
}
.rowborder{border:1px solid #ddd;
border-radius: 3px;
box-shadow: #ddd;
background: #fff;
  line-height: 40px;
}
  .custlabel{
    font-family: 'PingFangSC-Light','Hiragino Sans GB',Microsoft YaHei;
    color:#999;
    text-shadow:0 0 1px #999;
    font-size: 13px;
  }
  .customername{
    font-size: 16px;
    color: #999;
    text-shadow: 0 0 2px #999;
    white-space: nowrap;
  }
</style>
