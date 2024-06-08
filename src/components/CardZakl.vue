<template>
    <div class="row">
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ iname }}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">
      Ф.И.О: {{ iname }}<br/>
      Возраст:  {{ age }}<br/>
      Дата прибытия: {{ dateStartJob }}<br/>
      Камера нахождения: {{ street }}<br/>
      @CИЗО/г.Z/."N-ского района"
    </p>
    <button type="button" class="btn btn-info">Редактировать</button>
    <button type="button" class="btn btn-danger">Удалить</button>
  </div>
</div>

    </div>
</template>




<script>
/* eslint-disable */
export default {
  name: 'CardZakl',
  props: {
    //msg: String
    id: '',
    iname: '',
    age: '',
    dateStartJob: '',
    street: ''
  }
}
</script>

<!--<router-link class="btn btn-primary" :to="{ name: 'edit', params:{id: id }}">Редактировать</router-link> -->