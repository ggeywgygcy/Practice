<template>
  <div  class="continer">
    <!-- Navbar-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" >
    <a class="navbar-brand" href="#">Полиция(сизо)</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Главная страница</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Заключенные</a>
        </li>
        <li class="nav-item dropdown">
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Другое</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Искать заключенного" aria-label="Искать заключенного">
        <button class="btn btn-outline-success" type="submit">Найти</button>
      </form>
    </div>
  </div>
</nav>
<!---->

 <div id="txt" class="row">
<h1 >Сотрудник!Добро пожаловать на официальный сайт СИЗО 
      города Котловск для Сотрудников! На этом сайте вы можеть посмотреть текущих преступников, а 
также вносить новых! Удачной работы!
</h1>
</div>
<!-- Карусель-->
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

<div id="" class="alert alert-dark" role="alert">
  Не нарушайте закон! А то окажитесь <a href="https://37.fsin.gov.ru/uchrejdeniya/ispravitelnaya-koloniya-3.php?month=4&year=2022" class="alert-link">здесь</a>
</div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#txt{
   background-color: azure;
   border: solid black;
   
}

.container-fluid{
  height: 50px;

}



</style>
