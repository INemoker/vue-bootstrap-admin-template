<template>
  <div id="app">
    <MainHeader></MainHeader>
    <MainNavBar></MainNavBar>
    <b-container class="main">

      <router-view></router-view>
      
      <MainFooter></MainFooter>
    </b-container>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader'
  import MainNavBar from './components/MainNavBar'
  import MainFooter from './components/MainFooter'
  export default {
    name: "app",
    components: {
      MainHeader,
      MainNavBar,
      MainFooter
    }
  }

</script>

<style>
  /* 覆盖样式 */
 
</style>
