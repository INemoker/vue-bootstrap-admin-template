<template>
  <div class="login">
    <b-card footer-tag="footer">
      <b-row>
        <b-col cols="4" offset-md="4" class="text-center title" tag="h3">
          登录
        </b-col>
      </b-row>
      <b-input-group size="md" class="my-4">
        <b-form-input class="pl-3" placeholder="用户名(1~11位数字)" v-model="username" required></b-form-input>
        <b-input-group-text slot="prepend">
          <i class="iconfont icon-user"></i>
        </b-input-group-text>
      </b-input-group>
      <b-input-group size="md">
        <b-form-input class="pl-3" type="password" placeholder="密码(111111)" v-model="password" password></b-form-input>
        <b-input-group-text slot="prepend">
          <i class="iconfont icon-lock"></i>
        </b-input-group-text>
      </b-input-group>
      <b-row>
        <b-col cols="6" offset-md="6" class="d-flex align-items-center justify-content-end mt-2">
          <span class="foget">忘记密码？</span> <b-btn size="" class="px-4 ml-2" @click="login">登录</b-btn>
        </b-col>
      </b-row>
      <template slot="footer">
        <div class="text-right pr-2 font-weight-bold text-white">TEMPLATE</div>
      </template>

    </b-card>
  </div>
</template>
<script>
  export default {
    name: "Login",
    data() {
      return {
        username:"",
        password:""
      }
    },
    methods:{
      login(){
        var regxUser = new RegExp(/^\d{1,11}$/)
        var regxPw = new RegExp(/1{6}/)
        if(this.username.match(regxUser) && this.password.match(regxPw)){
          window.open('#/DashBoard',"_self")
        }else{
          alert('请输入正确的用户名密码')
        }
      }
    }
  }

</script>
<style scoped>
  .login {
    background: url(../assets/img/banner.png);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card{
    width: 25%;
    background-color: #E1E1E1;
    border: none;
    border-radius: 20px;
  }
  .title{
    color: #00BA8B;
  }




  button{
    background-color: #00BA8B;
    outline: none;
    border: none;
    border-radius: 20px;
  }
  .foget{
    font-size: 14px;
    font-weight: bold;
    color: #00BA8B;
    border-right: #00BA8B 3px solid;
    cursor: pointer;
  }
  .foget:hover{
    color: white;
  }




  .card-footer{
    background-color: #00BA8B;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 3rem;
  }

</style>
