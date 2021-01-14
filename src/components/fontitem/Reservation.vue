<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-6 step-center">
          <ul class="step">
            <li class="active">
              選擇服務項目
            </li>
            <li>確認預約資訊</li>
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
              <h5>{{ designer.Name }}</h5>
              <p class="w-50 border-left">
                設計專業專業剪燙染護頭皮養護精緻編髮
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container bg-accent text-reservation pb-4 pt-5 mt-4">
      <table class="table table-borderless text-reservation">
        <thead class="table-borderless">
          <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center">預約項目</th>
            <th scope="col">預期金額</th>
            <th scope="col">預估時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.Id">
            <input
              type="checkbox"
              v-model="checklist"
              :value="product"
              :id="`${product.Id}`"
            />
            <td>
              <label :for="`${product.Id}`">{{ product.ProductName }}</label>
            </td>
            <td>＄{{ product.UnitPrice }}＋</td>
            <td>{{ product.ServiceMinutes }} 分鐘</td>
          </tr>
          <!-- <tr>
            <td><input type="checkbox" id="check1" />洗＋剪髮</td>
            <td>＄680 +</td>
            <td>60分鐘</td>
          </tr>
          <tr>
            <td><input type="checkbox" id="check1" />染髮</td>
            <td>＄2000 +</td>
            <td>60分鐘</td>
          </tr> -->
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
        <div class="col">
          <CalendarFontVacation />
        </div>
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
            <button type="button" class="btn-reservation" @click="test">
              預約送出
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarFontVacation from '@/components/fontitem/CalendarFontVacation.vue';
import {
  getDesigner,
  getStoreProductList,
  postOrder,
} from '@/js/FontAppServices';

export default {
  data() {
    return {
      designer: {},
      products: [], // 遠端撈回的服務項目
      checklist: [], // 加入勾選項目的位置
    };
  },
  components: {
    CalendarFontVacation,
  },
  methods: {
    getDesignerHandler() {
      getDesigner(4).then((res) => {
        console.log(res);
        this.designer = res.data;
      });
    },
    getProductHandler() {
      getStoreProductList().then((res) => {
        console.log(res);
        this.products = res.data.OrderDetails;
      });
    },
    selectsingle(id) {
      console.log(this.products);
      console.log(id);
      this.products.forEach((item) => {
        if (item.Id === id) {
          this.checklist.push(item);
          console.log(this.checklist);
        } else {
          console.log('false');
        }
      });
    },
    test() {
      const data = this.$qs.stringify({
        OrderTime: '2021-1-12',
        StoreRemark: '',
        DesignerId: '4',
        CustomerName: 'Tim',
        CustomerPhone: '1234567890',
        CustomerEmail: '',
        CustomerIntroducer: '',
        CustomerRemark: '',
        OrderDetails: this.checklist,
      });
      postOrder(data).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.getDesignerHandler();
    this.getProductHandler();
    console.log(this.checklist);
  },
};
</script>

<style lang="scss">
input:checked ~ td {
  background-color: gray !important;
  opacity: 0.8;
}
</style>
