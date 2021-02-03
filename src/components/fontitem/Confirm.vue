<template>
  <div>
    <div class="container text-main">
      <div class="row mt-3">
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
                backgroundImage: `url(${orderDetails.DesignerPicturePath})`,
              }"
            ></div>
            <div
              class="col-md-6 personInfo
              "
            >
              <h4>本次預約設計師</h4>
              <h5>{{ orderDetails.DesignerName }}</h5>
              <p class="border-left">
                {{ orderDetails.DesignerSummary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container bg-accent text-reservation pb-4 pt-5 mt-4 reservation-check"
    >
      <h4 class="mb-4 title-line w-75">預約資訊</h4>
      <div class="mb-4">
        <h5>預約時間</h5>
        <p>
          {{ orderTime.replace('T', ' ').replace(':00:00', ':00') }}
        </p>
      </div>
      <div>
        <h5>預約項目</h5>
        <ul class="list-style p-0">
          <li
            class="d-flex justify-content-between"
            v-for="detail in orderDetails.OrderDetails"
            :key="detail.Id"
          >
            <p>{{ detail.ProductName }}</p>
            <p>＄{{ detail.UnitPrice }}</p>
            <p>{{ detail.ServiceMinutes }}分鐘</p>
          </li>
        </ul>
      </div>
      <hr />
      <h4 class="title-line text-center w-75 mb-5">項目結算</h4>
      <div class="item-total">
        <div class="item-total-group w-100 border-0 mb-3">
          <h5>預估總額</h5>
          <span class="mr-5">＄{{ orderDetails.Amount }}</span>
          <h5 class="mr-3">預估時間</h5>
          <span>{{ orderDetails.ServiceMinutes }}分鐘</span>
        </div>
      </div>
    </div>
    <div class="container bg-reservation pt-4">
      <h4 class="title-line text-center">顧客資訊</h4>
      <div class="pt-3 custom-information">
        <ul class="list-style">
          <li class="d-flex">
            <p>預約姓名</p>
            <p>{{ orderDetails.CustomerName }}</p>
          </li>
          <li class="d-flex">
            <p>手機號碼</p>
            <p>{{ orderDetails.CustomerPhone }}</p>
          </li>
          <li class="d-flex" v-if="orderDetails.CustomerIntroducer">
            <p>介紹人</p>
            <p>{{ orderDetails.CustomerIntroducer }}</p>
          </li>
          <li v-if="orderDetails.CustomerRemark">
            <p>備註事項</p>
            <p>
              {{ orderDetails.CustomerRemark }}
            </p>
          </li>
        </ul>
      </div>
      <div class="d-flex border confirm-btn">
        <button class="btn custom-information-btn" @click="BackToList">
          回上一步
        </button>
        <button class="btn custom-information-btn" @click="submitOrder">
          確認送出
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { postOrder } from '@/js/FontAppServices';

export default {
  data() {
    return {
      orderId: '',
      orderDetails: [],
      orderTime: '',
      designerId: '',
    };
  },
  methods: {
    // getSession
    getInfoHandler() {
      const getorder = JSON.parse(sessionStorage.getItem('list'));
      this.orderDetails = getorder;
      console.log(this.orderDetails);
      this.orderTime = this.orderDetails.OrderTime;
      this.designerId = this.orderDetails.DesignerId;
    },
    // 預約確認送出
    submitOrder() {
      const data = this.$qs.stringify(this.orderDetails);
      postOrder(data).then((res) => {
        console.log(res);
        if (res.data) {
          this.orderId = res.data.orderId;
          this.$router.push(`/orderCompleted/${this.orderId}`);
          sessionStorage.removeItem('list');
        }
      });
    },
    // 回上一步修改資料
    BackToList() {
      this.$router.push(`/reservationF/${this.designerId}`);
      // console.log(this.designerId);
    },
  },
  created() {
    this.getInfoHandler();
    this.orderId = this.$route.params.orderId;
  },
};
</script>

<style lang="scss">
.confirm-btn {
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  button {
    border: 2px solid white;
    width: 50%;
    border-radius: 0;
    background-color: gainsboro;
    font-size: 16px;
    &:hover {
      background-color: #1d3d4a;
      color: white;
    }
  }
}
</style>
