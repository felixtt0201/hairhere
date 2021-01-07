<template>
  <div>
    <header class="mb-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="@/assets/img/unnamed 1.svg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="position-absolute">
                <img src="@/assets/img/lefa_logo_cn.png" alt="logo" />
                <p class="font-en">Feel Like Home.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/img/carsouel-test.jpg"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="position-absolute">
                <img src="@/assets/img/lefa_logo_cn.png" alt="logo" />
                <p class="font-en">Feel Like Home.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/img/unnamed 1.svg"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="position-absolute">
                <img src="@/assets/img/lefa_logo_cn.png" alt="logo" />
                <p class="font-en">Feel Like Home.</p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
    <div class="container-fluid font-tw mb-5">
      <div class="row">
        <div class="col-md-2 item-logo-position-relative">
          <img
            src="@/assets/img/lefa_logo_all_cn.svg"
            alt=""
            class="item-logo-position-absolute "
          />
        </div>
        <div class="col-md-10  text-main">
          <div class="row">
            <div class="col-md-3 border-left">
              <h4 class="font-en">About us</h4>
              <p>
                歐式溫馨鄉村風格的 服務專業造型之外
                身邊有可愛貓咪陪伴身邊真的很逗趣 歡迎愛貓咪的朋友們來朝聖唷
                歐式溫馨鄉村風格的 服務專業造型之外
                身邊有可愛貓咪陪伴身邊真的很逗趣 歡迎愛貓咪的朋友們來朝聖唷
                歐式溫馨鄉村風格的 服務專業造型之外
                身邊有可愛貓咪陪伴身邊真的很逗趣 歡迎愛貓咪的朋友們來朝聖唷
              </p>
            </div>
            <div class="col-md-3 border-left">
              <h4>服務項目</h4>
              <p>
                專業剪燙染護<br />頭皮養護 ｜設計染髮 | 精緻編髮<br />
                彩妝及新娘秘書
              </p>
            </div>
            <div class="col-md-3 border-left">
              <h4>店家資訊</h4>
              <ul class="p-0">
                <li class="d-flex">
                  <h5 class="mr-2">聯絡電話</h5>
                  (07)-2268725
                </li>
                <li class="d-flex">
                  <h5 class="mr-2  text-nowrap">店家地址</h5>
                  高雄市苓雅區青年一路4巷21號
                </li>
                <li class="d-flex">
                  <h5 class="mr-2  text-nowrap">營業時間</h5>
                  每週二至日<br />上午10:30 - 下午6:00<br />
                  (每週一公休）
                </li>
              </ul>
            </div>
            <div class="col-md-3 border-left">
              <h4 class="font-en">Follow us!</h4>
              <div class="d-flex">
                <i class="fab fa-instagram mr-2"></i>
                <p class="mb-0 font-en">樂髮手作 Hair Salon</p>
              </div>
              <div class="d-flex">
                <i class="fab fa-facebook-square mr-2"></i>
                <p class="mb-0 font-en">樂髮手作 Hair Salon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center bg-accent text-accent pb-3">
        <div class="col-md-8 letter-space mt-4">
          <div class="row flex-column">
            <h2 class="text-center">服務項目</h2>
            <ul class="list-style p-0 line">
              <li class="d-flex">
                <span class="w-50 text-right pr-3">洗髮</span
                ><span class="w-50 pl-3">$300 +</span>
              </li>
              <li class="d-flex">
                <span class="w-50 text-right pr-3">剪髮</span
                ><span class="w-50  pl-3">$3000 +</span>
              </li>
              <li class="d-flex">
                <span class="w-50 text-right pr-3">染髮</span
                ><span class="w-50 pl-3">$3009 +</span>
              </li>
              <li class="d-flex">
                <span class="w-50 text-right pr-3">燙髮</span
                ><span class="w-50 pl-3">$3001 +</span>
              </li>
              <li class="d-flex">
                <span class="w-50 text-right pr-3">洗髮＋剪髮</span
                ><span class="w-50 pl-3">$2500 +</span>
              </li>
              <li class="d-flex">
                <span class="w-50 text-right pr-3">深層頭皮護髮</span
                ><span class="w-50 pl-3">$3999 +</span>
              </li>
            </ul>
            <button type="button" class="btn btn-secondary mx-auto rounded-0">
              立即預約
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="title-line w-100 text-center mb-4 text-main">髮型作品</h4>
      <ul class="list-style d-flex justify-content-center mb-5">
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1605980625600-88b46abafa8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1444820518794-41bbbccf4ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1586548634342-04801afc8b13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxoYWlyJTIwc2Fsb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
      </ul>
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <ul class="list-style d-flex justify-content-center mb-5">
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1605980625600-88b46abafa8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1444820518794-41bbbccf4ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1586548634342-04801afc8b13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxoYWlyJTIwc2Fsb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
