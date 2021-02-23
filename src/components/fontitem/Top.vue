<template>
  <div class="a">
    <a href="#top" class="top">
      <i class="fas fa-arrow-up fa-lg text-light"></i>
    </a>
  </div>
</template>

<script></script>

<style lang="scss">
.top {
  width: 50px;
  height: 50px;
  background: #6c6c6c;
  // transform: rotate(45deg);
  position: fixed;
  bottom: 20%;
  right: 15px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
    bottom: 21%;
    // right: 15px;
    transition: all 0.5s;
  }
}
// 滾動樣式
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(139, 15, 15, 0.3);
  background-color: #cdc3b7;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #7d7265;
  border: 1px solid #7d7265;
}
</style>
