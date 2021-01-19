<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-6 step-center">
          <ul class="step">
            <li class="active">
              選擇服務項目
            </li>
            <li class="active">確認預約資訊</li>
            <li class="active-step">預約完成d(`･∀･)b</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div
              class="col-md-6 photo-size"
              :style="{
                'background-image':
                  'url(' + require('@/assets/img/photo2.svg') + ')',
              }"
            ></div>
            <div
              class="col-md-6 d-flex flex-column justify-content-around align-items-center"
            >
              <h4>本次預約設計師</h4>
              <h5>社稷師</h5>
              <p class="w-50 border-left">
                設計專業專業剪燙染護頭皮養護精緻編髮
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-reservation pb-4 pt-5 mt-4 d-flex text-center">
      <div class="col-md-6">
        <h4 class="title-line text-center">顧客資訊</h4>
        <div class="container pt-4">
          <div class="pt-3 custom-information">
            <ul class="list-style p-0">
              <li class="d-flex">
                <p>預約姓名</p>
                <p>蔡秉逸</p>
              </li>
              <li class="d-flex">
                <p>手機號碼</p>
                <p>0912-333-333</p>
              </li>
              <li class="d-flex">
                <p>信箱Email</p>
                <p>ben123@g.com</p>
              </li>
              <li>
                <p class="d-flex">備註事項</p>
                <p>
                  還我漂漂拳還我漂漂拳還我漂漂拳還我漂漂拳還我漂漂拳還我漂漂拳還我漂漂拳還我漂漂拳
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 bg-accent">
        <div class="container pt-4">
          <!-- <h4 class="mb-4 title-line">預約資訊</h4> -->
          <div>
            <h5>預約時間</h5>
            <p>2021/1/1 13:00</p>
          </div>
          <div>
            <h5>預約項目</h5>
            <ul class="list-style p-0">
              <li class="d-flex justify-content-around">
                <p>洗髮</p>
                <p>$300</p>
                <p>30分</p>
              </li>
              <li class="d-flex justify-content-around">
                <p>染髮</p>
                <p>$3000</p>
                <p>120分</p>
              </li>
            </ul>
          </div>
          <h4 class="mb-4 title-line">項目結算</h4>
          <div class="d-flex justify-content-around">
            <div class="d-flex">
              <h5 class="pr-5">預估總額</h5>
              <p>$2300</p>
            </div>
            <div class="d-flex">
              <h5 class="pr-5">預估時間</h5>
              <p>150分</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title-line {
  position: relative;
  color: #7d7265 !important;
  &:before {
    content: '';
    position: absolute;
    right: 70%;
    left: 0;
    height: 2px;
    top: 10px;
    // background-color: $text-primary;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 70%;
    height: 2px;
    top: 10px;
    // background-color: $text-primary;s
  }
}
.bg-accent {
  p {
    color: white;
  }
}
</style>
