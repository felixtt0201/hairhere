<template>
  <div>
    <!--Navbar-->
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
            <router-link class="nav-link" :to="{ name: 'Information' }"
              >店家資訊管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Portfolio' }"
              >作品集管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Checkout' }"
              >結帳管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Forms' }"
              >表單管理</router-link
            >
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
