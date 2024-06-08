<template >
  <body background="dnr.jpg">
  <div id="suka" class="continer">
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
  Не нарушайте закон! А то окажитесь <a href="https://youtu.be/s1iBYOEnKhM" class="alert-link">здесь</a>
</div>
<div class="alert alert-warning" role="alert">
  Проект завершен, но не до конца, поэтому приложение будет усовершенствоваться с каждым обновлением в лучшую сторону!
</div>


<div id="goandjo" class="continer">
  <iframe class="cfrd" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4302.7829827313435!2d139.57547450408174!3d35.631314635938175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f119940d68eb%3A0xcc936e0a68fdc823!2z0JrQvtC80LDRjQ!5e1!3m2!1sru!2sru!4v1716643081847!5m2!1sru!2sru" width="1066" height="1066" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


  </div>
</body>

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

body{
  background-color: chocolate;
}


#goandjo{
  background-color: rosybrown;
}

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
