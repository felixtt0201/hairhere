<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-6 step-center">
          <ul class="step">
            <li class="active-step">
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
              <p class="border-left">
                {{ designer.Details }}
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
        </tbody>
      </table>
      <h4 class="title-line text-center mb-5 text-sm">項目結算</h4>
      <div class="item-total">
        <div class="item-total-group w-75">
          <h5>預期金額</h5>
          <span class="mr-5">${{ TotalMoney.moneytotal }}+</span>
          <h5>預估時間</h5>
          <span class="mr-3">{{ TotalMoney.timetotal }}分鐘</span>
        </div>
      </div>
    </div>
    <div class="container border">
      <template>
        <div>
          <date-picker
            v-model="time1"
            type="date"
            value-type="format"
            placeholder="Select datetime"
            :show-time-panel="showTimePanel"
            @close="handleOpenChange"
            format="YYYY-MM-DD"
            :disabled-date="notBeforeToday"
            @pick="selectDate"
          >
          </date-picker>
        </div>
        <!-- 選擇日期後篩選出空閑時間 -->
      </template>
      <ul class="d-flex justify-content-between">
        <li v-for="freetime in freeTimeList" :key="freetime">
          <button class="btn border" @click="selectTime(freetime)">
            {{ freetime.replace('T', ' ').replace(':00:00', ':00') }}
          </button>
        </li>
      </ul>
    </div>
    <!-- 顧客資訊 -->
    <div class="container bg-reservation ">
      <div class="information pt-3">
        <h4 class="title-line text-center mb-4">顧客資訊</h4>
        <form class="form-reservation">
          <label for="name">預約姓名</label
          ><input type="name" id="name" v-model="name" />
          <label for="tel">手機號碼</label
          ><input type="tel" id="tel" v-model="tel" />
          <label for="email">Email</label
          ><input type="email" id="email" v-model="email" />
          <label for="remarks">備註事項</label>
          <textarea
            id="remarks"
            cols="30"
            rows="4"
            class="mb-4"
            v-model="remarks"
          ></textarea>
          <!-- <router-link
            :to="`/confirm/${orderId}`"
            class="btn-reservation btn"
            @click="test"
            >預約送出
          </router-link> -->
          <button type="button" class="btn-reservation" @click="test">
            預約送出
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {
  getDesigner,
  getStoreProductList,
  postOrder,
  getFreetime,
} from '@/js/FontAppServices';

export default {
  components: { DatePicker },
  data() {
    return {
      //
      time1: null, // 日曆1
      showTimePanel: false,
      //
      designer: {}, // 單一設計師詳細
      products: [], // 遠端撈回的服務項目
      checklist: [], // 加入勾選項目的位置
      listId: '',
      name: '',
      tel: '',
      email: '',
      remarks: '',
      orderTime: '',
      orderId: '', // post後回傳訂單Id
      freeTimeList: [], // 回傳空閑時間
      freetime: '',
    };
  },
  computed: {
    TotalMoney() {
      const array = {
        moneytotal: 0,
        timetotal: 0,
      };
      this.checklist.forEach((i) => {
        array.moneytotal += i.UnitPrice;
        array.timetotal += i.ServiceMinutes;
      });
      // eslint-disable-next-line no-sequences
      return array;
    },
  },
  methods: {
    toggleTimePanel() {
      this.showTimePanel = !this.showTimePanel;
    },
    handleOpenChange() {
      this.showTimePanel = false;
    },
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    //
    getDesignerHandler() {
      getDesigner(this.listId).then((res) => {
        console.log(res);
        this.designer = res.data;
        this.OrderDate = res.data.OrderDate;
      });
    },
    // 測試點選時間回傳值
    selectDate() {
      getFreetime(this.listId, this.time1).then((res) => {
        console.log(res);
        this.freeTimeList = res.data.FreeTimeList;
        console.log(this.freeTimeList);
      });
    },
    selectTime(selecTime) {
      this.orderTime = selecTime;
    },
    getProductHandler() {
      getStoreProductList().then((res) => {
        console.log(res);
        this.products = res.data.OrderDetails;
      });
    },
    // selectsingle(id) {
    //   this.products.forEach((item) => {
    //     if (item.Id === id) {
    //       this.checklist.push(item);
    //       console.log(this.checklist);
    //     } else {
    //       console.log('false');
    //     }
    //   });
    // },
    test() {
      const data1 = this.$qs.stringify({
        OrderTime: this.orderTime,
        StoreRemark: '',
        DesignerId: this.listId,
        CustomerName: this.name,
        CustomerPhone: this.tel,
        CustomerEmail: this.email,
        CustomerIntroducer: '',
        CustomerRemark: this.remarks,
        OrderDetails: this.checklist,
      });
      postOrder(data1).then((res) => {
        if (res.data) {
          this.orderId = res.data.orderId;
          this.$router.push(`/confirm/${this.orderId}`);
        }
      });
    },
  },
  created() {
    this.listId = this.$route.params.listId; // 抓取參數
    this.getDesignerHandler();
    this.getProductHandler();
  },
};
</script>

<style lang="scss">
input:checked ~ td {
  background-color: gray !important;
  opacity: 0.8;
}
</style>
