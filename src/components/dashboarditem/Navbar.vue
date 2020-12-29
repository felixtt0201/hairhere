<template>
  <div>
    <!--newNavbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" :to="{ name: 'Reservation' }"
        >Home</router-link
      >
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Designers' }"
              >設計師管理</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">店家資訊管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">作品集管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">結帳管理</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              表單管理
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">預約表</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#"> 假表</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">業績表</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">歷史訂單</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
          <button
            class="btn btn-outline-success my-2 my-sm-0 rounded-pill"
            type="submit"
          >
            登出
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
