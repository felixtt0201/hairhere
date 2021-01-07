<template>
  <div>
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
            <a
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              href="#"
              >線上預約</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              href="#"
              >作品集</a
            >
          </li>
          <li class="nav-item ">
            <a
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              href="#"
              >設計師</a
            >
          </li>

          <li class="nav-item ">
            <a
              class="nav-link text-main--hover border-bottom pr-3 pl-3"
              href="#"
              >查詢訂單</a
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

<style scoped>
/* .yourDivClass {
  background: url('/../../assets/logo.png"') no-repeat center center / cover;

  z-index: 9999999;
} */
</style>
