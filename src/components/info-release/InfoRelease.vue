<template>
  <div class="pr-6 pl-6 newComponents">
      <Overview></Overview>
  </div>
</template>
<script>
  import Overview from "./child-components/Overview"
  export default{
    name:"InfoRelease",
    data(){
      return{

      }
    },
    components: {
      Overview
    }
  }
</script>
<style scoped>

</style>