<template>
  <div>
    <div class="container text-main">
      <div class="row">
        <div class="col-md-6 step-center">
          <ul class="step">
            <li class="active">
              選擇服務項目
            </li>
            <li class="active">確認預約資訊</li>
            <li class="active-step">預約完成d(`･∀･)b</li>
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
              class="col-md-6 d-flex flex-column justify-content-around align-items-center"
            >
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
      <div class="col-md-6">
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
              <li class="d-flex" v-if="!orderDetails.CustomerIntroducer">
                <p>介紹人</p>
                <p>{{ orderDetails.CustomerIntroducer }}</p>
              </li>
              <li class="d-flex" v-if="!orderDetails.StoreRemark">
                <p>備註事項</p>
                <p>
                  {{ orderDetails.CustomerRemark }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 bg-accent p-4">
        <div class="container p-5">
          <!-- <h4 class="mb-4 title-line">預約資訊</h4> -->
          <div class="pb-3">
            <h5>預約時間</h5>
            <p>{{ orderTime.replace('T', ' ').replace(':00:00', ':00') }}</p>
          </div>
          <div class="pb-3">
            <h5>預約項目</h5>
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
          <h4 class="mb-4 title-line">項目結算</h4>
          <div class="d-flex justify-content-around">
            <div class="d-flex">
              <h5 class="pr-5">預估總額</h5>
              <p>＄{{ orderDetails.Amount }}</p>
            </div>
            <div class="d-flex">
              <h5 class="pr-5">預估時間</h5>
              <p>{{ orderDetails.ServiceMinutes }}分鐘</p>
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
        console.log(res);
        this.orderDetails = res.data.BasicData;
        this.orderTime = this.orderDetails.OrderTime;
        console.log(this.orderDetails);
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
    // background-color: $text-primary;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 70%;
    height: 2px;
    top: 10px;
    // background-color: $text-primary;s
  }
}
.bg-accent {
  p {
    color: white;
  }
}
</style>
