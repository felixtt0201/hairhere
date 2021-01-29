<template>
  <div>
    <a href="#top" class="top">
      <!-- <i class="fas fa-chevron-up"></i> -->
      <img src="../../assets/img/top.png" alt="" />
    </a>
  </div>
</template>

<script></script>

<style lang="scss">
.top {
  width: 70px;
  height: 70px;
  // background: #d8ab95;
  // background: #f3ca55; // 檸檬的樣式
  position: fixed;
  bottom: 40%;
  right: 0;
  z-index: 1;
  text-decoration: none !important;
  padding: 10px;
  border-radius: 10px 40px;
  color: #1d3d4a;
  font-weight: bolder;
  &:hover {
    bottom: 42%;
    right: 2px;
    transition: all 0.5s;
  }
  img {
    position: absolute;
    top: 40px;
    right: 0;
    width: 90px;
    height: 90px;
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
