<template>
  <b-card header-tag="header" class="animated fadeInLeft">
    <template slot="header">
      <i class="iconfont icon-listalt"></i> &nbsp 今日数据
    </template>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </p>
    <b-row>
      <b-col v-for="(item, index) in stats" :key="index">
        <div>
          <i :class="item.iconclass"></i>
        </div>
        <h1>{{item.num}}</h1>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
  export default {
    name: "Stats",
    data() {
      return {
        stats:[
          {iconclass:"iconfont icon-anchor",num:851},
          {iconclass:"iconfont icon-like",num:423},
          {iconclass:"iconfont icon-twitterlogo",num:922},
          {iconclass:"iconfont icon-icon--",num:"25%" }
        ]
      }
    }
  }

</script>
<style scoped>
  .card-text {
    color: #999999;
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 1.25rem;
  }

  .row {
    margin: 0;
  }

  .col {
    border-right: 1px solid #CCCCCC;
    padding: 0 2rem;
    text-align: center;
  }

  .col:last-child {
    border: none;
  }

  .col i {
    font-size: 1.5rem;
    color: #B2AFAA;
  }

  .col i:hover {
    color: #00BA8B;
  }

  h1 {
    font-size: 2rem;
    color: #545454;
  }

</style>
