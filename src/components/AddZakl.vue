<template>
  <div class="rows">
  <h1> Прием заключенного </h1>
      <div class="mb-3">
        <div class="mb-3">
          <label for="CatName" class="form-label">Ф.И.О</label>
          <input v-model="staff.iname" type="text" class="form-control" id="CatName">
        <label for="catAge" class="form-label">Возраст</label>
        <input v-model="staff.age" type="text" class="form-control" id="catAge">
      </div>
      <div class="mb-3">
        <label for="catJobDate" class="form-label">Дата приема</label>
        <input v-model = "staff.dateStartJob" type="date" class="form-control" id="catJobDate">
      </div>
      <div class="mb-3">
        <label for="catStreet" class="form-label">Камера нахождения</label>
        <input v-model = "staff.street" type="text" class="form-control" id="catJobDate">
      </div>
      <button v-on:click="addJob" class="btn btn-primary">Сохранить</button>
      </div>
  </div>


</template>





<script>
import Zakl from '@/lib/Zakl.js'
export default {
  name: 'AddZakl',
  props: {
    msg: String
  },
  data(){
    return {
       staff: Zakl
    }
  
},
methods:{
    addJob(){
        this.$store.commit('addWorker', {...this.staff})
        //console.log({...this.staff})
        this.staff = new Zakl()
    }
  },
  mounted(){
    this.staff.id = new Date().getTime();
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
