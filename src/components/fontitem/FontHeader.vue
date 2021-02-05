<template>
  <div class="container mb-3">
    <nav class="navbar navbar-expand-md navbar-light nav-h">
      <a class="navbar-brand" href="#">
        <h1
          class="text-hide img-position--center"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/biglogo.png') + ')',
          }"
        >
          樂髮手作
        </h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item active">
            <router-link
              to="/"
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              >首頁<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/designerTotal"
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              >線上預約</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/works"
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              >作品集</router-link
            >
          </li>
          <li class="nav-item ">
            <router-link
              to="/designerTotal"
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              >設計師</router-link
            >
          </li>

          <li class="nav-item ">
            <router-link
              to="/searchList"
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              >查詢訂單</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
