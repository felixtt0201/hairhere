<template>
  <div class="container container-vh">
    <h4 class="title-line w-100 text-center mt-5 mb-5 works-text-line">
      查詢訂單
    </h4>
    <div class="row rowpa">
      <div class="col-md-6 aa"></div>
      <div class="col-md-6 bb"></div>
      <div class="search-content">
        <form @submit.prevent="postInfoHandler">
          <label for="name"
            >姓名<input
              type="text"
              placeholder="請輸入姓名"
              v-model="name"
              required
          /></label>
          <label for="tel"
            >電話<input
              type="tel"
              placeholder="請輸入電話號碼"
              v-model="phone"
              required
          /></label>
          <hr />
          <button type="submit" class="btn">送出</button>
        </form>
      </div>
    </div>

    <!--Modal-->

    <div class="modal fade" id="orderDetailInfo" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="orderDetailInfo">訂單明細</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-gray-900">
            <div
              class="form-group border-bottom border-dark table-responsive-md"
            >
              <h5>細項：</h5>
              <table class="table table-borderless">
                <tbody class="text-gray-800">
                  <tr>
                    <th scope="row">日期：</th>
                    <td>{{ showDate }} {{ showTime }}</td>
                  </tr>
                  <tr>
                    <th scope="row">設計師：</th>
                    <td>
                      {{ orderInfo[0].DesignerName }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="form-group border-bottom border-dark table-responsive-md"
            >
              <h5 class="">服務項目：</h5>
              <table class="table table-hover ">
                <thead>
                  <tr class=" table-borderless text-gray-900">
                    <th scope="col">#</th>
                    <th scope="col">項目</th>
                    <th scope="col">金額</th>
                  </tr>
                </thead>
                <tbody class="text-gray-800">
                  <tr v-for="(obj, index) in orderInfo[0].Detail" :key="obj.Id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ obj.ProductName }}</td>
                    <td>{{ obj.UnitPrice }} +</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-right text-gray-900">
                消費金額：NT.{{ orderInfo[0].Amount }} +
              </p>
            </div>
            <div class="modal-footer">
              <div class="row justify-content-end">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  確定
                </button>
              </div>
            </div>
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
      showDate: '',
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
          console.log(res.data.BasicData);
          this.orderInfo = res.data.BasicData;
          // eslint-disable-next-line prefer-destructuring
          this.showDate = res.data.BasicData[0].OrderTime.split('T')[0];
          // eslint-disable-next-line prefer-destructuring
          this.showTime = res.data.BasicData[0].OrderTime.split('T')[1];
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
@media screen {
}
</style>
