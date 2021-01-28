<template>
  <div
    id="login"
    class="min-vh-100 d-flex align-items-center justify-content-center"
  >
    <div class="container-fluid">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <!-- shopLogin -->
              <ul class="row d-flex justify-content-center">
                <li>
                  <a
                    href="#"
                    class="btn btn-primary"
                    style="width:100px"
                    :class="{ active: link === 'shop' }"
                    @click="link = 'shop'"
                    >店長</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="btn btn-primary"
                    style="width:100px"
                    :class="{ active: link === 'desinger' }"
                    @click="link = 'desinger'"
                    >設計師</a
                  >
                </li>
              </ul>
              <div class="row" v-if="link === 'shop'">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">店長登入</h1>
                    </div>
                    <form class="user" @submit.prevent="loginHandler">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="store.email"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="store.password"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-primary btn-user btn-block"
                        type="submit"
                      >
                        Login
                      </button>
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
                    </div>
                  </div>
                </div>
              </div>
              <!-- desingerLogin -->
              <div class="row" v-else-if="link === 'desinger'">
                <div
                  class="col-lg-6 d-none d-lg-block bg-login-image-desinger"
                ></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">
                        設計師登入
                      </h1>
                    </div>
                    <form class="user" @submit.prevent="desingerLogin">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="desinger.email"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="desinger.password"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-primary btn-user btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                      <hr />
                    </form>
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
import { postStoreLogin, postDesingerLogin } from '@/js/AppServices';

export default {
  data() {
    return {
      store: {
        email: '',
        password: '',
      },
      desinger: {
        email: '',
        password: '',
      },
      link: 'shop', // 用來判斷切換登入口
    };
  },
  methods: {
    loginHandler() {
      postStoreLogin(
        this.$qs.stringify({
          email: this.store.email,
          password: this.store.password,
        }),
      ).then((res) => {
        if (res.data.status) {
          const mytoken = res.data.token;
          const myId = res.data.Id;
          localStorage.setItem('myToken', mytoken);
          localStorage.setItem('status', true);
          localStorage.setItem('storeId', myId);
          this.$router.push('/Dashboard');
          this.successMessage();
        } else {
          this.unsuccessMessage();
        }
      });
    },
    // 設計師登入
    desingerLogin() {
      postDesingerLogin(
        this.$qs.stringify({
          email: this.desinger.email,
          password: this.desinger.password,
        }),
      ).then((res) => {
        if (res.data.status) {
          const desingerToken = res.data.token;
          document.cookie = `desingerToken=${desingerToken};path=/`;
          const desginderDetails = JSON.stringify({
            Id: res.data.Id,
            StoreId: res.data.StoreId,
            identity: res.data.identity,
          });
          localStorage.setItem('desginderDetails', desginderDetails);
          localStorage.setItem('status', true);
          this.$router.push('/Dashboard');
          this.successMessage();
        } else {
          this.unsuccessMessage();
        }
      });
    },

    // 提示-輸入帳密有誤
    unsuccessMessage() {
      this.$swal({
        position: 'center',
        icon: 'error',
        title: '登入失敗',
        text: '帳號或密碼錯誤',
      });
    },

    // 提示-成功登入
    successMessage() {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: '登入成功',
        // showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>
<style lang="scss">
@import 'src/assets/scss/sb-admin-2.scss';
</style>
