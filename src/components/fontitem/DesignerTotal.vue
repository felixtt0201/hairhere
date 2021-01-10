<template>
  <div>
    <div class="container text-main">
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <div class="row mb-3">
        <div
          class="col-md-4 photo-size"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo2.svg') + ')',
          }"
        ></div>
        <div
          class="col-md-4 d-flex flex-column justify-content-around align-items-center"
        >
          <h4>社稷詩</h4>
          <p class="w-50 border-left">設計專業專業剪燙染護頭皮養護精緻編髮</p>
          <!-- routerlink連結至預約頁面 -->
          <router-link to="/reservation" class="btn rounded-0 designer-btn">
            立即預約</router-link
          >
        </div>
        <div
          class="col-md-4 photo-size btn-viewmore"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo1.png') + ')',
          }"
        >
          <!-- routerlink連結至設計師個人 -->
          <router-link
            to="/designerSingle"
            class="btn designer-btn rounded-0 mb-4"
          >
            更多作品
          </router-link>
        </div>
      </div>
      <div class="row mb-3">
        <div
          class="col-md-4 photo-size"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo2.svg') + ')',
          }"
        ></div>
        <div
          class="col-md-4 d-flex flex-column justify-content-around align-items-center"
        >
          <h4>社稷詩</h4>
          <p class="w-50 border-left">設計專業專業剪燙染護頭皮養護精緻編髮</p>
          <button type="button" class="btn designer-btn rounded-0">
            立即預約
          </button>
        </div>
        <div
          class="col-md-4 photo-size  btn-viewmore"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo1.png') + ')',
          }"
        >
          <button type="button" class="btn designer-btn  rounded-0 mb-4">
            更多作品
          </button>
        </div>
      </div>
      <div class="row mb-5">
        <div
          class="col-md-4 photo-size"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo2.svg') + ')',
          }"
        ></div>
        <div
          class="col-md-4 d-flex flex-column justify-content-around align-items-center"
        >
          <h4>社稷詩</h4>
          <p class="w-50 border-left">設計專業專業剪燙染護頭皮養護精緻編髮</p>
          <button type="button" class="btn designer-btn  rounded-0">
            立即預約
          </button>
        </div>
        <div
          class="col-md-4 photo-size  btn-viewmore"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo1.png') + ')',
          }"
        >
          <button type="button" class="btn designer-btn  rounded-0 mb-4">
            更多作品
          </button>
        </div>
      </div>
      <!-- 分頁 -->
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link path" href="#" aria-label="Previous"
              ><i class="fas fa-chevron-left"></i>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item">
            <a class="page-link path" href="#" aria-label="Next"
              ><i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
