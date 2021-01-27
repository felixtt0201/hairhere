<template>
  <div>
    <!-- <img src="../../assets/img/catline.png" alt="" /> -->
    <!-- <img src="../../assets/img/cat_icon.png" alt="" /> -->
    <div v-cloak>
      <transition-group name="fade" mode="out-in">
        <div v-show="loading" class="loader" key="loader">
          <div id="loading">
            <div class="loading">
              <div class="obj"></div>
              <div class="obj"></div>
              <div class="obj"></div>
              <div class="obj"></div>
              <div class="obj"></div>
              <div class="obj"></div>
              <div class="obj"></div>
              <div class="obj"></div>
            </div>
          </div>
        </div>
        <div v-show="!loading" key="notloader">
          <button v-on:click="send">送信する</button>
          <p>返ってきたデータ：{{ returndata }}</p>
        </div>
      </transition-group>
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
.loader {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1080;
}
#loading {
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  background: rgba(0, 0, 0, 1);
  position: absolute;
  left: 0;
  top: 0;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
  display: flex;
  align-items: center;
}
.obj {
  width: 5px;
  height: 40px;
  background: white;
  margin: 0 3px;
  border-radius: 10px;
  animation: loading 0.8s infinite;
}
.obj:nth-child(2) {
  animation-delay: 0.1s;
}
.obj:nth-child(3) {
  animation-delay: 0.2s;
}
.obj:nth-child(4) {
  animation-delay: 0.3s;
}
.obj:nth-child(5) {
  animation-delay: 0.4s;
}
.obj:nth-child(6) {
  animation-delay: 0.5s;
}
.obj:nth-child(7) {
  animation-delay: 0.6s;
}
.obj:nth-child(8) {
  animation-delay: 0.7s;
}
@keyframes loading {
  0% {
    height: 0;
  }
  50% {
    height: 40px;
  }
  100% {
    height: 0;
  }
}
</style>
