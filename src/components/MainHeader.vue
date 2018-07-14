<template>
    <b-row class="mainHeader  bg-success pl-6">
        <b-col class="text-white font-weight-bold brand" cols="6">Admin Template</b-col>
        <b-col cols='6' class="userContainer">
          <b-form class="searchForm pl-5">
            <b-form-input id="search" v-model="search" placeholder="搜索" size="sm" class="search w-75 mr-3"></b-form-input>
            <b-button size="sm" class="searchButton btn-success">
                <i class="iconfont icon-sousuo"></i> 搜索
            </b-button>
          </b-form>
  
          <div class="account" @click.stop="myDropdownShow">
              <i class="icon-user  iconfont"></i> 用户信息<i class="icon-arrowdown-copy iconfont"></i>
            <div class="dropdown" v-show="dropdown">
                <div class="my-dropdown-item" @click.stop="" @click="setting">设 置</div>
                <div class="my-dropdown-item" @click.stop="" @click="logout">注 销</div>
            </div>
          </div>
  
        </b-col>
        <b-col cols=""></b-col>
      </b-row>
</template>
<script>
  export default {
    name:"MainHeader",
    data() {
      return {
        search:"",
        username:"用户名称",
        dropdown: false
      }
    },
    mounted(){
      document.querySelector('body').addEventListener('click',(e)=>{
        this.dropdown = false
      })
    },
    methods:{
      myDropdownShow(){
        this.dropdown = !this.dropdown
      },
      logout(){
        this.$router.push({path:'/'})
      },
      setting(){
        window.location.hash="#/Settings"
        this.dropdown = false
      }
    }
  }
</script>
<style scoped>
.mainHeader {
    z-index: 3;
    position: fixed;
    width: 100%;
    height: 3.3em;
    line-height: 3.3em;
  }
  .brand {
    font-size: 20px;
    padding: 0;
  }

   .userContainer{
    display: flex;
    align-items: center;
  }


  /* 搜索框 */
   .searchForm{
    display: flex;
  }
   .search{
    border-radius: 20px;
    height: 2em;
  }
   .searchButton{
    height: 2em;
    line-height: 100%;
  }



   .account{
	  user-select:none;
    background-color: transparent;
    margin-left: 2.5rem;
    color: white;
    font-size: 12px;
    cursor: pointer;
    position: relative;
  }
  .icon-user{
    font-size: 12px;
  }


  /* 下拉菜单 */
   .account .dropdown{
    position: absolute;
    top: 80%;
    width: 150%;
    right: 10%;
    background-color: white;
    border: 1px solid #A6A6A6;
    border-radius: 5px;
    padding: 10% 0;
    box-shadow: 1px 1px 10px #aaa;
  }
   .account .dropdown::before{
    content: "";
    position: absolute;
    border:5px solid white;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    top: calc(-25% + 2px);
    right:10%;
  }
   .my-dropdown-item{
    height: 1rem;
    line-height: 1rem;
    padding:0 10%;
    color: black;
  }
   .my-dropdown-item:hover{
    background-color: #00BA8B;
  }

   .icon-arrowdown-copy{
    color: #4CCFAE;
  }
   .account:hover .icon-arrowdown-copy{
    color: white;
  }
</style>