<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-6 ">
          <img src="lefa_logo_all_cn.svg" alt="" />
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
      class="container bg-accent text-reservation text-center pb-4 pt-5 mt-4"
    >
      <table class="table table-borderless">
        <thead class="table-borderless">
          <tr>
            <th scope="col">預約項目</th>
            <th scope="col">預期金額</th>
            <th scope="col">預估時間</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" id="check1" />洗髮</td>
            <td>＄300 +</td>
            <td>60分鐘</td>
          </tr>
          <tr>
            <td><input type="checkbox" id="check1" />洗＋剪髮</td>
            <td>＄680 +</td>
            <td>60分鐘</td>
          </tr>
          <tr>
            <td><input type="checkbox" id="check1" />染髮</td>
            <td>＄2000 +</td>
            <td>60分鐘</td>
          </tr>
        </tbody>
      </table>
      <h4 class="title-line text-center mb-5 text-sm">項目結算</h4>
      <div class="item-total">
        <div class="item-total-group w-75">
          <h5>預期金額</h5>
          <span class="mr-5">$300 ＋</span>
          <h5>預估時間</h5>
          <span class="mr-3">2小時</span>
        </div>
      </div>
    </div>
    <div class="container border py-5">
      <div class="row">
        <div class="col">日曆套件</div>
      </div>
    </div>
    <div class="container bg-reservation ">
      <div class="information pt-3">
        <h4 class="title-line text-center mb-4">顧客資訊</h4>
        <form class="form-reservation">
          <label for="name">預約姓名</label><input type="name" id="name" />
          <label for="tel">手機號碼</label><input type="tel" id="tel" />
          <label for="email">Email</label><input type="email" id="email" />
          <label for="item">備註事項</label>
          <textarea id="item" cols="30" rows="4" class="mb-4"></textarea>
          <router-link to="/confirm">
            <button type="button" class="btn-reservation">預約送出</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
