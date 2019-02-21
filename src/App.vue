<template>
  <div class="bodyheightWrapper" :class="toogleLeftBarfalse == true ? 'closeLeftMenu' : ''">
    <div class="leftMenuWrapper">
      <LeftMenu></LeftMenu>
      <div class="siderbar-ctrl-btn glyphicon glyphicon glyphicon-chevron-left" :class="toogleLeftBarfalse == true ? 'off' : ''" @click="toggleLeftBar()"></div>
    </div>
    <div class="rightContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu/LeftMenu'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  data () {
    return {
      toogleLeftBarfalse: false
  }
  },
  methods: {
    toggleLeftBar: function () {
      this.toogleLeftBarfalse = !this.toogleLeftBarfalse
    }
  },
  name: 'index',
  components: {
    'LeftMenu': LeftMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {margin:0;padding:0;} body{background: #fff;font:12px "microsoft yahei","SimSun",sans-serif;} table {border-collapse:collapse;border-spacing:0;} fieldset,img {border:0} a{text-decoration: none;color: #333;transition:all 0.2s ease-in-out 0s;} a:hover{color: #108ee9;text-decoration: none} address,caption,cite,code,dfn,em,strong,th,var,i {font-style:normal;font-weight:normal} ol,ul,li{list-style:none} caption,th {text-align:left} .mt5{margin-top: 5px} .mt8{margin-top: 8px;} .mt10{margin-top: 10px} .mt15{margin-top: 15px;} .mt20{margin-top: 20px;}.mt30{margin-top: 30px;} .mt35{margin-top: 35px;}.mt40{margin-top: 40px;}.mt45{margin-top: 45px;}.mt50{margin-top: 50px;}.mt60{margin-top: 60px;} .fb{font-weight:bold} .fn{font-weight:normal} .t2{text-indent:2em} .fl{float: left;} .fr{float: right;} .ab{position: absolute;} .re{position:relative;} .tl{text-align: left;} .tr{text-align: right;} .tc{text-align: center;} .oh{overflow: hidden;} .db{display: block;} .di{display:inline;} .dn{display: none;}ul,li,dl,ol{list-style: none}

  .leftMenuWrapper{
    float: left;
    width:200px;
    height: 100%;
    left:0;
    position: relative;
    border-right: 1px solid #eaeaea;
  }
  .bodyheightWrapper{
    height: 100%;
    width: 100%;
    min-width: 1200px;
  }
  .rightContent{
    transition:all 0.2s ease-in-out 0s;
    position: absolute;
    left: 200px;
    height: 100%;
    right: 0;
    background: #F9F9F9
  }
  body,html{width: 100%;
    height: 100%;
    overflow: hidden;}
  .closeLeftMenu .leftMenuWrapper{
    left: -200px;
  }
  .closeLeftMenu .rightContent{
    left: 0;
  }
  .siderbar-ctrl-btn.off:before{
    content: "\e080"
  }
  .leftMenuWrapper .siderbar-ctrl-btn{
    position: absolute;
    left: 100%;
    top: 80%;
    width: 18px;
    color: #fff;
    height: 36px;
    background: #53b6eb;
    border-radius: 0 6px 6px 0;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    z-index: 11;
    opacity: .6;
    transition:all 0.2s ease-in-out 0s;
  }
  .leftMenuWrapper .siderbar-ctrl-btn:hover{
    opacity: 1;
  }
  .bodyheight {
      height: 100%;
    }
  body,html{width: 100%;
    height: 100%;
    overflow: hidden;}
</style>
