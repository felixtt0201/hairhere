<template>
  <div class="container">
    <form @submit="signin">
      <h1 class="h3 mb-3 font-weight-normal">後台登入</h1>
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
      <label for="inputPassword">密碼</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
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
  </div></template
>

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
