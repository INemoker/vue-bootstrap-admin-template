<template>
  <b-card header-tag="header" class="animated fadeInRight">
    <template slot="header">
      <i class="iconfont icon-listalt"></i> &nbsp 最新资讯
    </template>
    <b-list-group>
      <b-list-group-item href="#" class="flex-column align-items-start" v-for="(item, index) in news" :key="index">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{item.title}}</h5>
          <small class="date">{{item.date}}</small>
        </div>
        <p class="mb-1">
          {{item.main}}
        </p>
        <small class="subtitle">{{item.subtitle}}</small>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>
<script>
  export default {
    name: "News",
    data() {
      return {
        news: [
          {
          title: "List group item heading",
          date: new Date().toLocaleString(),
          main: `Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.`,
          subtitle:"Donec id elit non mi porta."
          },
          {
          title: "List group item heading",
          date: new Date().toLocaleString(),
          main: `Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.`,
          subtitle:"Donec id elit non mi porta."
          },
          {
          title: "List group item heading",
          date: new Date().toLocaleString(),
          main: `Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.`,
          subtitle:"Donec id elit non mi porta."
          }
        ]
      }
    }
  }

</script>
<style scoped>
  small.date{
    color: #19BC9C;
  }
  small.subtitle{
    color:#bbb;
  }
</style>