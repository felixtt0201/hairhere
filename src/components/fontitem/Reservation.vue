<template>
  <div>
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    >
      <template slot="default"> <loadingitem></loadingitem></template
    ></loading>
    <div class="container text-main">
      <div class="row mt-3">
        <div class="col-md-6 step-center">
          <ul class="step">
            <li class="active-step">
              <p class="mb-0">1. 選擇服務項目</p>
              <p class="mb-0">2. 選擇預約時間</p>
              <p class="mb-0">3. 填寫顧客資訊</p>
              <!-- 1.選擇服務項目<br />2. 選擇預約時間<br />3. 填寫顧客資訊 -->
            </li>
            <li>確認預約資訊</li>
            <li>預約完成</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div
              class="col-md-6 photo-size"
              :style="{ backgroundImage: `url(${designer.PicturePath})` }"
            ></div>
            <div class="col-md-6 personInfo">
              <h4>本次預約設計師</h4>
              <h5>{{ designer.Name }}</h5>
              <p class="border-left" v-html="reDetails"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="addList">
      <div class="container bg-accent text-reservation pb-4 pt-5 mt-4">
        <table class="table table-borderless text-reservation table-hover pr-0">
          <thead class="table-borderless">
            <tr>
              <th scope="col"></th>
              <th scope="col">預約項目</th>
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
                <label class="w-100" :for="`${product.Id}`">{{
                  product.ProductName
                }}</label>
              </td>
              <td>
                <label class="w-100" :for="`${product.Id}`"
                  >＄{{ product.UnitPrice }}＋</label
                >
              </td>
              <td>
                <label class="w-100" :for="`${product.Id}`">
                  {{ product.ServiceMinutes }} 分鐘</label
                >
              </td>
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
      <div class="container p-5 border">
        <h4 class="text-center mb-3">選擇預約時間</h4>
        <template>
          <div class="text-center mb-4">
            <date-picker
              v-model="time1"
              type="date"
              value-type="format"
              placeholder="select date"
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
          <li
            v-for="(freetime, index) in freeTimeList"
            :key="freetime"
            :class="isActive == index ? 'active' : ''"
          >
            <button
              type="button"
              class="btn border time-btn"
              @click="selectTime(freetime, index)"
            >
              {{ freetime.replace('T', ' ').replace(':00:00', ':00') }}
            </button>
          </li>
        </ul>
      </div>
      <!-- 顧客資訊 -->
      <div class="container bg-reservation ">
        <div class="information pt-3">
          <h4 class="title-line text-center mb-4">顧客資訊</h4>
          <div class="form-reservation">
            <label for="name">預約姓名</label
            ><input type="name" id="name" v-model="name" required />
            <label for="tel">手機號碼</label
            ><input type="tel" id="tel" v-model="tel" required />
            <label for="text">介紹人</label
            ><input type="text" id="text" v-model="text" />
            <label for="remarks">備註事項</label>
            <textarea
              id="remarks"
              cols="30"
              rows="4"
              class="mb-4"
              v-model="remarks"
            ></textarea>
            <button type="submit" class="btn-reservation">
              預約送出
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {
  getDesigner,
  getStoreProductList,
  // postOrder,
  getFreetime,
} from '@/js/FontAppServices';
import loadingitem from '../dashboarditem/loadingitem.vue';

export default {
  components: { DatePicker, loadingitem },
  data() {
    return {
      // Loading遮罩
      isLoading: false,
      fullPage: true,

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
      text: '',
      remarks: '',
      orderTime: '',
      orderId: '', // post後回傳訂單Id
      freeTimeList: [], // 回傳空閑時間
      freetime: '',
      isActive: -1,
      reDetails: '',
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
      this.isLoading = true;
      getDesigner(this.listId).then((res) => {
        console.log(res);
        this.designer = res.data;
        this.OrderDate = res.data.OrderDate;
        this.reDetails = res.data.Details.replace(/(?:\r\n|\r|\n)/g, '<br />');
        this.isLoading = false;
      });
    },
    // 測試點選時間回傳值
    selectDate() {
      getFreetime(this.listId, this.time1).then((res) => {
        // console.log(res);
        this.freeTimeList = res.data.FreeTimeList;
        // console.log(this.freeTimeList);
      });
    },
    selectTime(selecTime, index) {
      this.orderTime = selecTime;
      console.log(this.orderTime);
      this.isActive = index; // 用來裝上點選效果
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
    addList() {
      const data2 = JSON.stringify({
        OrderTime: this.orderTime,
        StoreRemark: '',
        DesignerId: this.listId,
        DesignerName: this.designer.Name,
        DesignerSummary: this.designer.Details,
        DesignerPicturePath: this.designer.PicturePath,
        CustomerName: this.name,
        CustomerPhone: this.tel,
        CustomerIntroducer: this.text,
        CustomerRemark: this.remarks,
        OrderDetails: this.checklist,
        Amount: this.TotalMoney.moneytotal,
        ServiceMinutes: this.TotalMoney.timetotal,
      });
      if (this.checklist.length === 0 || this.orderTime === '') {
        this.$swal({
          position: 'center',
          icon: 'error',
          title: '輸入資訊錯誤',
          text: '服務項目或者日期未選擇',
        });
      } else {
        sessionStorage.setItem('list', data2);
        console.log(data2);
        this.$router.push('/confirm');
      }
    },
    // 從確認資料頁面返回編輯，把資料倒回
    patchList() {
      if (sessionStorage.getItem('list') != null) {
        const getorder = JSON.parse(sessionStorage.getItem('list'));
        console.log(getorder);
        this.orderTime = getorder.OrderTime;
        this.listId = getorder.DesignerId;
        this.designer.Name = getorder.DesignerName;
        this.designer.Details = getorder.DesignerSummary;
        this.designer.PicturePath = getorder.DesignerPicturePath;
        this.name = getorder.CustomerName;
        this.tel = getorder.CustomerPhone;
        this.text = getorder.CustomerIntroducer;
        this.remarks = getorder.CustomerRemark;
        this.checklist = getorder.OrderDetails;
        this.TotalMoney.moneytotal = getorder.Amount;
        this.TotalMoney.timetotal = getorder.ServiceMinutes;
      }
    },
  },
  created() {
    this.listId = this.$route.params.listId; // 抓取參數
    this.getDesignerHandler();
    this.getProductHandler();
    this.patchList();
  },
};
</script>

<style lang="scss" scoped>
input:checked ~ td {
  background-color: #e5e5e5 !important;
  // opacity: 0.8;
  color: #1d3d4a;
  background-color: rgba(224, 224, 224, 0.2);
}
th:first-child {
  width: 1px;
}
.table input {
  opacity: 0;
}
thead {
  font-size: 22px !important;
}
.time-btn {
  border: 1px solid gainsboro !important;
  font-weight: bold;
}
.active {
  border: 3px solid #dee2e6 !important;
  outline: 0;
  box-shadow: inset 2px 2px 2px 0px grey;
  background-color: #e9ecef;
  color: #1d3d4a;
}
.table-hover tbody tr:hover {
  color: #e0e0e0;
  background-color: rgba(224, 224, 224, 0.2);
}
tr {
  input {
    width: 200px;
  }
}
td:hover,
label:hover {
  cursor: pointer;
}
</style>
