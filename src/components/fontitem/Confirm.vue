<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-6 step-center">
          <ul class="step">
            <li class="active">
              選擇服務項目
            </li>
            <li class="active-step">確認預約資訊</li>
            <li>預約完成d(`･∀･)b</li>
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
    <div
      class="container bg-accent text-reservation pb-4 pt-5 mt-4 reservation-check"
    >
      <h4 class="mb-4">－預約資訊－</h4>
      <hr />
      <div>
        <h5>預約時間</h5>
        <p>2021/1/1 13:00</p>
      </div>
      <div>
        <h5>預約項目</h5>
        <ul class="list-style p-0">
          <li class="d-flex justify-content-between">
            <p>洗髮</p>
            <p>$300</p>
            <p>30分</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>染髮</p>
            <p>$3000</p>
            <p>120分</p>
          </li>
        </ul>
      </div>
      <hr />
      <h4 class="mb-4">－項目結算－</h4>
      <div>
        <h5>預估總額</h5>
        <p>$2300</p>
        <h5>預估時間</h5>
        <p>150分</p>
      </div>
    </div>
    <div class="container bg-reservation pt-4">
      <h4 class="title-line text-center">顧客資訊</h4>
      <div class="pt-3 custom-information">
        <ul class="list-style w-50">
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
            <p>備註事項</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              ipsum nemo quos maiores incidunt debitis velit at, voluptas ipsa!
              Labore voluptates saepe optio reiciendis laudantium accusantium
              molestias quod adipisci id.
            </p>
          </li>
        </ul>
      </div>
      <router-link to="/orderCompleted" class="btn custom-information-btn"
        >確認送出</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
