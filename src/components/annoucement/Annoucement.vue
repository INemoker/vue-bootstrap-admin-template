<template>
    <div class="pr-6 pl-6 newComponents">
        <AnnoucementList></AnnoucementList>
        <NewAnnoucement :defaultMsg="'在这里编辑公告'" ref="ue"></NewAnnoucement>
    </div>
  </template>
  <script>
    import NewAnnoucement from "./child-components/NewAnnoucement"
    import AnnoucementList from "./child-components/AnnoucementList"
    export default{
      name:"Annoucement",
      data(){
        return{
        }
      },
      components: {
        NewAnnoucement,
        AnnoucementList
      }
    }
  </script>
  <style scoped>
  
  </style>