<template>
  <div>
    <div>
      <img
        class="animate-bounce-up"
        src="../../assets/img/cat_icon.png"
        alt=""
      />
      <img
        class="animate-bounce-down"
        src="../../assets/img/star002.png"
        alt=""
      />
      <img
        class="animate-bounce-up"
        src="../../assets/img/cat_icon.png"
        alt=""
      />
      <img
        class="animate-bounce-down"
        src="../../assets/img/star002.png"
        alt=""
      />
      <img
        class="animate-bounce-up"
        src="../../assets/img/cat_icon.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      senddata: 'senddata',
      returndata: '',
    };
  },
  methods: {
    send() {
      this.loading = true;
    },
  },
};
</script>

<style lang="css" scoped>
@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-15px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(15px);
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-15px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(15px);
  }
}

.animate-bounce-down {
  -webkit-animation: bounce-down 1linear infinite;
  animation: bounce-down 1.5s linear infinite;
}
@-webkit-keyframes bounce-up {
  25% {
    -webkit-transform: translateY(15px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(-15px);
  }
}

@keyframes bounce-up {
  25% {
    transform: translateY(15px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-15px);
  }
}
.animate-bounce-up {
  -webkit-animation: bounce-up 1.4s linear infinite;
  animation: bounce-up 1.4s linear infinite;
}
</style>
