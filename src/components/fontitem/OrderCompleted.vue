<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-5 step-center">
          <ul class="step">
            <li class="active">
              選擇服務項目
            </li>
            <li class="active">確認預約資訊</li>
            <li class="active-step">預約完成</li>
          </ul>
        </div>
        <div class="col-md-7">
          <div class="row">
            <div
              class="col-md-6 photo-size"
              :style="{
                backgroundImage: `url(${orderDetails.DesignerPicture})`,
              }"
            ></div>
            <div class="col-md-6 personInfo">
              <h4>本次預約設計師</h4>
              <h5>{{ orderDetails.DesignerName }}</h5>
              <p class="w-50 border-left">
                {{ orderDetails.DesignerSummary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-reservation mb-5 mt-5 d-flex text-center">
      <div class="col-md-5">
        <h4 class="title-line text-center">預約資訊</h4>
        <div class="container">
          <div class="pt-4">
            <ul class="list-style p-0 custom-list">
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
              <li class="d-flex" v-if="orderDetails.CustomerRemark">
                <p>備註事項</p>
                <p>
                  {{ orderDetails.CustomerRemark }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-7 bg-accent">
        <div class="container p-5 completed-container">
          <div class="pb-3">
            <h5 class="mb-3">預約時間</h5>
            <p>{{ orderTime.replace('T', ' ').replace(':00:00', ':00') }}</p>
          </div>
          <div class="pb-3">
            <h5 class="mb-3">預約項目</h5>
            <ul class="list-style p-0">
              <li
                class="d-flex justify-content-between"
                v-for="detail in orderDetails.Detail"
                :key="detail.Id"
              >
                <p>{{ detail.ProductName }}</p>
                <p>＄{{ detail.UnitPrice }}</p>
                <p>{{ detail.ServiceMinutes }}分鐘</p>
              </li>
            </ul>
          </div>
          <h4 class="mb-4 title-line completed-title">項目結算</h4>
          <div class="item-total">
            <div class="item-total-group w-100 border-0 mb-3">
              <h5>預估總額</h5>
              <span class="mr-5">＄{{ orderDetails.Amount }}</span>
              <h5 class="mr-3">預估時間</h5>
              <span>{{ orderDetails.ServiceMinutes }}分鐘</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrder } from '@/js/FontAppServices';

export default {
  data() {
    return {
      orderDetails: [],
      orderTime: '',
    };
  },
  methods: {
    getInfoHandler() {
      getOrder(this.orderId).then((res) => {
        this.orderDetails = res.data.BasicData;
        this.orderTime = this.orderDetails.OrderTime;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getInfoHandler();
  },
};
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
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 70%;
    height: 2px;
    top: 10px;
  }
}
.bg-accent {
  p {
    color: white;
  }
}
.completed-title {
  color: #cb9861 !important;
}
.completed-container {
  letter-spacing: 0.4em;
}
</style>
