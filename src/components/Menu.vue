<template>
<div class="row">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid fixed-top" >
      <a class="navbar-brand" href="#">
        <div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Главная страница</a>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/AddZakl">Заключенные</router-link>  
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/News">Новости</router-link>  
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/CardZakl">Список заключенных</router-link>  
          </li>
          <li class="nav-item dropdown">
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item active">
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
</div>

</template>
<!--Самая сложная часть-->

<script>
/* eslint-disable */
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>