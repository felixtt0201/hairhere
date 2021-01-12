<template>
  <div class="container text-main">
    <div class="row justify-content-center">
      <!-- <div class="col-md-1 border"></div> -->
      <div class="col-md-8 mb-4">
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
            <h4>社稷詩</h4>
            <p class="w-50 border-left">設計專業專業剪燙染護頭皮養護精緻編髮</p>
            <router-link to="/reservation" class="btn rounded-0 designer-btn">
              立即預約</router-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="col-md-1 border"></div> -->
    </div>
    <h4 class="title-line w-100 text-center mb-4 text-main">設計作品</h4>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4">
              <img
                src="@/assets/img/photo1.png"
                alt=""
                style="height: 100%;width: 100%;"
              />
            </div>
            <div class="col-md-8 p40">
              <h4 class="mb-4">沙龍護髮</h4>
              <p class="mb-5 border-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                doloribus consequuntur velit nisi, dolores dicta debitis iusto
                voluptate! Excepturi, ad voluptatem! Vel enim et, tempora
                deleniti placeat ad odit distinctio.
              </p>
              <ul class="d-flex justify-content-center p-0 mb-4">
                <li class="designer-tag">沙龍護髮</li>
                <li class="designer-tag">解構護髮</li>
                <li class="designer-tag">梨花護髮</li>
              </ul>
              <ul class="d-flex justify-content-center p-0">
                <li class="mr-4">
                  <img src="@/assets/img/z23255028O.png" alt="" />
                </li>

                <li class="mr-4">
                  <img src="@/assets/img/z23255028O.png" alt="" />
                </li>

                <li class="mr-4">
                  <img src="@/assets/img/z23255028O.png" alt="" />
                </li>
              </ul>
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

<style></style>
