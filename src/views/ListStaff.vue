<template>
    <div class="rows">
    <h1> Список сотрудников банды!!!</h1>
  
    <div v-for="cat in staff" :key = "cat.id" >
      <CardZakl :id="cat.id"
         :name="cat.iname"  
         :age="cat.age" 
         :startDate="cat.dateStartJob"
         :street="cat.street" v-on:delete="deleteCat" />
      
    </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CardZakl from '@/components/CardZakl.vue'
  export default {
    name: 'ListStaff',
    components:{
      CardZakl
    },
    computed:{
        
      staff(){
        console.log('staffComp')
        return this.$store.getters.getAllJob;
      }
      
    },
    methods:{
      deleteCat(e){
        this.$store.commit('deleteCatName', e)
      }
    }
  }
  </script>