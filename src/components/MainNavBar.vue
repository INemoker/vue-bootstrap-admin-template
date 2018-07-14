<template>
  <b-row class="pl-6 mainNavBar">
    <ul class="routerLinks">
      <router-link :to="item.path" v-for="(item, index) in routerLinks" :key="index">
        <li  :class="{active:item.isActive}" @click='routerActivated(index)'>
          <div>
            <i :class="item.iconclass"></i>
          </div>
          <span>{{item.msg}}</span>
        </li>
      </router-link>
    </ul>
  </b-row>
</template>
<script>
  export default {
    name:"MainNavBar",
    data(){
      return {
        path:"",
        routerLinks:[
          {path:"DashBoard",iconclass:"iconfont icon-dashboard",msg:"首页",isActive:true},
          {path:"Product",iconclass:"iconfont icon-similarproduct",msg:"产品管理",isActive:false},
          {path:"Annoucement",iconclass:"iconfont icon-gonggaoxinxi",msg:"公告发布",isActive:false},
          {path:"InfoRelease",iconclass:"iconfont icon-news",msg:"信息发布",isActive:false},
          {path:"Settings",iconclass:"iconfont icon-setting",msg:"设置",isActive:false},
          // {path:"DashBoard",iconclass:"iconfont icon-dashboard",msg:"仪表盘",isActive:false},
        ]
      }
    },
    mounted() {

      this.path =  window.location.hash.substring(2)
      this.addActive(this.path)


      // 监听hash改变
      var _this = this
      window.onhashchange = function(){
        _this.path =  window.location.hash.substring(2)
        _this.addActive(_this.path)
      }
    },
    methods:{
      routerActivated(index){
        for(let i = 0;i<this.routerLinks.length;i++){
          if(i == index){
            this.routerLinks[i].isActive = true
          }else{
            this.routerLinks[i].isActive = false
          }
        }
      },
      addActive(hash){
        this.routerLinks.map((link)=>{
          var regx = new RegExp(link.path)
          if(hash.match(regx)){
            link.isActive = true
          }else{
            link.isActive = false
          }
        })
      }
    }

  }
</script>
<style scoped>
  .mainNavBar{
    z-index: 2;
    position: fixed;
    width: 100%;
    top: 3.3rem;
    border-bottom: 1px solid #D9D9D9;
    background-color: #fff;
  }
  .routerLinks{
    height: 3.8rem;
    margin: 0;
    display: flex;
  }
  i{
    font-size: 1.3rem;
  }
  li{
    width: 6rem;
    height:100%;
    text-align: center;
    border-left: 1px solid #D9D9D9;
    padding-top: 0.4rem;
    color: #B2AFAA;
    position: relative;
  }
  li:hover{
    color: #888C97;
  }
  li.active{
    color: #383838;
  }
  li.active::after{
    content:"";
    height: 3px;
    background-color: #FF7F74;
    animation: active 0.3s ease forwards;
    position: absolute;
    bottom: -1px;
    left: 0;
  }
  
  @keyframes active {
    0%{width: 0%;}
    100%{width: 100%;}
  }


  main{
    border: 1px solid red;
  }
</style>