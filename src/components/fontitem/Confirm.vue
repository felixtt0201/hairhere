<template>
  <div>
    <div class="container text-main">
      <div class="row">
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
                'background-image':
                  'url(' + require('@/assets/img/photo2.svg') + ')',
              }"
            ></div>
            <div
              class="col-md-6 d-flex flex-column justify-content-around align-items-center"
            >
              <h4>本次預約設計師</h4>
              <h5>{{ orderDetails.DesignerName }}</h5>
              <p class="w-50 border-left">
                這邊是設計師的描述
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container bg-accent text-reservation pb-4 pt-5 mt-4 reservation-check"
    >
      <h4 class="mb-4">－預約資訊－</h4>
      <hr />
      <div>
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
            v-for="aa in orderDetails.Detail"
            :key="aa.Id"
          >
            <p>{{ aa.ProductName }}</p>
            <p>＄{{ aa.UnitPrice }}</p>
            <p>{{ aa.ServiceMinutes }}分鐘</p>
          </li>
        </ul>
      </div>
      <hr />
      <h4 class="mb-4">－項目結算－</h4>
      <div>
        <h5>預估總額</h5>
        <p>＄{{ orderDetails.Amount }}</p>
        <h5>預估時間</h5>
        <p>{{ orderDetails.ServiceMinutes }}分鐘</p>
      </div>
    </div>
    <div class="container bg-reservation pt-4">
      <h4 class="title-line text-center">顧客資訊</h4>
      <div class="pt-3 custom-information">
        <ul class="list-style w-50">
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
      <router-link to="/orderCompleted" class="btn custom-information-btn"
        >確認送出</router-link
      >
    </div>
  </div>
</template>

<script>
import { getOrder } from '@/js/FontAppServices';

export default {
  data() {
    return {
      orderId: '',
      orderDetails: [],
      orderTime: '',
    };
  },
  methods: {
    getInfoHandler() {
      getOrder(this.orderId).then((res) => {
        console.log(res);
        this.orderDetails = res.data.BasicData;
        // console.log(this.orderDetails);
        this.orderTime = this.orderDetails.OrderTime;
        // console.log(this.OrderTime);
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getInfoHandler();
  },
};
</script>

<style></style>
