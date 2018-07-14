<template>
  <div class="pr-6 pl-6 newComponents">
    <b-card-group>
      <Inventory></Inventory>
    </b-card-group>
    <PChart></PChart>
    <NewProduct></NewProduct>
  </div>
</template>
<script>
  import Inventory from "./child-components/Inventory"
  import PChart from "./child-components/PChart"
  import NewProduct from "./child-components/NewProduct"
  export default{
    name:"Product",
    data(){
      return{

      }
    },
    components: {
      Inventory,
      PChart,
      NewProduct
    }
  }
</script>
<style scoped>

</style>