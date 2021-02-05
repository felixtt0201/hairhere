<template>
  <div>
    <a href="#top" class="top">
      <img src="../../assets/img/top.png" alt="" />
    </a>
  </div>
</template>

<script></script>

<style lang="scss">
.top {
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  position: fixed;
  bottom: 40%;
  right: 0;
  &:hover {
    bottom: 42%;
    right: 2px;
    transition: all 0.5s;
  }
  img {
    width: 90px;
    height: 90px;
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
