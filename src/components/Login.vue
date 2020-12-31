<template>
  <div id="login" class="d-flex align-items-center justify-content-center">
    <form class="form-signin" @submit="signin">
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
    </form>
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
<style lang="scss"></style>
