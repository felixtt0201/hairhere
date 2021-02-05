<template>
  <div class="container container-vh">
    <h4 class="title-line w-100 text-center mt-5 mb-5 works-text-line">
      查詢訂單
    </h4>
    <div class="row search-group">
      <div class="col-md-6 search-content-left"></div>
      <div class="col-md-6 search-content-right"></div>
      <div class="search-content">
        <form @submit.prevent="postInfoHandler">
          <label for="name"
            >姓名<input
              type="text"
              placeholder="請輸入姓名"
              v-model.trim="name"
              required
          /></label>
          <label for="tel"
            >電話<input
              type="tel"
              placeholder="請輸入電話號碼"
              v-model.number="phone"
              required
          /></label>
          <hr />
          <button
            type="submit"
            class="btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            送出
          </button>
        </form>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade border"
      id="orderDetailInfo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog Larger shadow" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 class="modal-title" id="orderDetailInfo">
              預約訂單明細
            </h2>
          </div>
          <div class="info modal-body p-5 text-center">
            <h4>預約設計師</h4>
            <p class="mb-4">{{ orderInfo[0].DesignerName }}</p>
            <hr />
            <h4>預約時間</h4>
            <p class="mb-4">
              {{ showTime.replace('T', ' ').replace(':00:00', ':00') }}
            </p>
            <hr />
            <ul class="p-0 mb-4">
              <h4>預約項目</h4>
              <li
                v-for="(obj, index) in orderInfo[0].Detail"
                :key="obj.Id"
                class="d-flex justify-content-center"
              >
                <p class="pr-3">{{ index + 1 }}.</p>
                <p class="pr-3">{{ obj.ProductName }}</p>
                <p class="pr-3">${{ obj.UnitPrice }} +</p>
              </li>
            </ul>
            <hr />
            <ul class="d-flex justify-content-between mt-4">
              <li class="d-flex">
                <p class="mr-3">預估金額</p>
                <p>NT.{{ orderInfo[0].Amount }} +</p>
              </li>
              <li class="d-flex">
                <p class="mr-3">預估時間</p>
                <p>{{ orderInfo[0].ServiceMinutes }}分鐘</p>
              </li>
            </ul>
            <p class="text-sm-center">
              *若需取消或更改訂單請撥打店家專線，由店家協助您處理。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postOrderInfo } from '@/js/FontAppServices';
import $ from 'jquery';

export default {
  data() {
    return {
      name: '',
      phone: '',
      orderInfo: [
        {
          OrderTime: '',
        },
      ],
      showTime: '',
    };
  },
  methods: {
    postInfoHandler() {
      const data = this.$qs.stringify({
        Name: this.name,
        Phone: this.phone,
        Count: '1',
      });
      postOrderInfo(data).then((res) => {
        if (res.data.status) {
          this.orderInfo = res.data.BasicData;
          this.showTime = this.orderInfo[0].OrderTime;
          $('#orderDetailInfo').modal('show');
          this.name = '';
          this.phone = '';
        } else {
          this.$swal({
            title: '查詢失敗',
            text: '請確認輸入資訊是否正確',
            position: 'center',
            icon: 'error',
          });
          this.name = '';
          this.phone = '';
        }
      });
    },
  },
};
</script>

<style>
.modal-header {
  text-align: center !important;
  display: block;
}
.text-sm-center {
  font-size: 14px;
}
.info {
  padding-bottom: 0 !important;
}
.close {
  margin-left: auto;
  margin-right: 10px;
}
.modal-header {
  background-color: #e9cfc4;
}
</style>
