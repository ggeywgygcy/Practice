<template>
  <div  class="continer">
    <!-- Navbar -->
  
<!---->

<!-- Текст -->
 <div id="txt" class="row">
<h1 >Сотрудник!Добро пожаловать на официальный сайт СИЗО 
      города Z для Сотрудников! На этом сайте вы можеть посмотреть текущих преступников, а 
также вносить новых! Удачной работы!
</h1>
</div>
<!---->

<!-- Карусель -->
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://indsi.ru/wp-content/uploads/2019/07/menty.jpg" class="d-block w-100" alt="..." width="15" height="800"> 
    </div>
    <div class="carousel-item">
      <img src="https://attuale.ru/wp-content/uploads/2018/11/755101759444244.jpg" class="d-block w-100" alt="..." width="15" height="800">
    </div>
    <div class="carousel-item">
      <img src="https://blognovichok.ru/wp-content/uploads/2019/07/92-1492119234.jpg" class="d-block w-100" alt="..." width="15" height="800">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!---->

<!-- Новости -->

<!---->

<!-- Алерт -->
<div id="" class="alert alert-dark" role="alert">
  Не нарушайте закон! А то окажитесь <a href="https://37.fsin.gov.ru/uchrejdeniya/ispravitelnaya-koloniya-3.php?month=4&year=2022" class="alert-link">здесь</a>
</div>

  </div>
</template>
<!---->

<!--Самая сложная часть-->
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<!---->


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#txt{
   background-color: azure;
   border: solid black;
   
}

.container-fluid{
  background-color: white;
  height: 60px;
  

}

#oi-satoru{
  height: 45px;
  width: 45px;
}




</style>
