<template>
  <div
    id="login"
    class="min-vh-100 d-flex align-items-center justify-content-center"
  >
    <!-- <form class="form-signin" @submit="signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">後台登入</h1>
      <div class="form-group">
        <label for="inputEmail">帳號(email)</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">密碼</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="user.password"
        />
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form> -->
    <!----->

    <div class="container-fluid">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="user.username"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          required
                          v-model="user.password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <a
                        href="index.html"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </a>
                      <hr />
                    </form>
                    <div class="text-center">
                      <!-- <a class="small" href="forgot-password.html"
                        >Forgot Password?</a
                      > -->
                    </div>
                    <div class="text-center">
                      <router-link class="small" :to="{ name: 'Register' }"
                        >Create an Account!</router-link
                      >
                      <!-- <a class="small" href="register.html"
                        >Create an Account!</a
                      > -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = 'http://localhost:3000/user';
      this.$http.post(api, this.user).then((res) => {
        console.log(res);
        console.log('ok');
      });
    },
  },
};
</script>
<style lang="scss">
@import 'src/assets/scss/sb-admin-2.scss';
</style>
