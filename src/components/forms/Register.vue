<template>
  <div
    id="register"
    class="min-vh-100 d-flex align-items-center justify-content-center"
  >
    <div class="container-fluid">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <!-- <validation-observer v-slot="{ invalid }"> -->
                <form class="user" @submit.prevent="register">
                  <div class="row">
                    <div class="col">
                      <label for="account">帳號</label>
                      <validation-provider
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <div class="form-group">
                          <input
                            type="account"
                            id="Account"
                            class="form-control form-control-user"
                            placeholder="帳號 / Email Address"
                            v-model="account"
                            :class="classes"
                          />
                          <span class="invalid-feedback">{{ errors[0] }}</span>
                        </div>
                      </validation-provider>
                    </div>
                  </div>
                  <label for="password">密碼</label>

                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <validation-provider
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="password"
                          placeholder="Password"
                          :class="classes"
                          v-model="password"
                        />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>

                    <div class="col-sm-6">
                      <validation-provider
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="re-password"
                          placeholder="Repeat Password"
                          :class="classes"
                          v-model="repassword"
                        />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                  <button
                    class="btn btn-primary btn-user btn-block"
                    :disabled="invalid"
                  >
                    註冊
                  </button>
                  <!-- <a
                      href="login.html"
                      class="btn btn-primary btn-user btn-block"
                      :disabled="invalid"
                    >
                      註冊
                    </a> -->
                  <hr />
                </form>
                <!-- </validation-observer> -->

                <!-- <div class="text-center">
                <a class="small" href="forgot-password.html"
                  >Forgot Password?</a
                >
              </div> -->
                <div class="text-center">
                  <router-link class="small" :to="{ name: 'login' }"
                    >Already have an account? Login!</router-link
                  >
                  <!-- <a class="small" href="login.html"
                  >Already have an account? Login!</a
                > -->
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
import qs from 'qs';

export default {
  data() {
    return {
      account: '',
      password: '',
      repassword: '',
    };
  },
  methods: {
    register() {
      // eslint-disable-next-line operator-linebreak
      this.axios.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded';
      this.axios
        .post(
          'https://salon.rocket-coding.com/CreateStore',
          qs.stringify({
            Name: 'cindy',
            Email: 'test@gmail.com',
            Password: '123',
          }),
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss">
@import 'src/assets/scss/sb-admin-2.scss';
</style>
