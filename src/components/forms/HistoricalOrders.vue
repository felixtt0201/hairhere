<template>
  <div id="historicalorders" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="text-gray-800">
        歷史訂單
      </h3>
    </div>
    <form class="shadow mb-4 p-1">
      <h3 class="text-gray-900 font-weight-bolder m-3">搜尋條件</h3>
      <div class="p-4">
        <div class="row mb-4">
          <div class="col-md-8">
            <p class="text-gray-900 font-weight-bold">請選擇日期：</p>
            <input type="date" v-model="startTime" />
            <input type="date" v-model="endTime" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12">
            <p class="text-gray-900 font-weight-bold">訂單狀態：</p>
            <label for="done">已結算</label>
            <input type="radio" v-model="billStatus" value="1" id="done" />
            <label for="cancel">已取消</label>
            <input type="radio" v-model="billStatus" value="0" id="cancel" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="text-gray-900 font-weight-bold">請選擇設計師：</p>
            <select class="custom-select" v-model="dId">
              <option disabled value="">選擇設計師</option>
              <option
                v-for="designer in designInfo"
                :key="designer.Id"
                :value="designer.Id"
                >{{ designer.Name }}</option
              >
            </select>
          </div>
          <div class="col-md-6">
            <label for="customer" class="text-gray-900 font-weight-bold"
              >請輸入顧客姓名：</label
            >
            <input
              type="text"
              id="customer"
              placeholder="顧客姓名"
              v-model.trim="customerName"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-primary m-3 btn-lg" @click="searchCheckInfo">
        搜尋
      </button>
    </form>

    <div class="table-responsive-md">
      <table class="table table-hover table-sm table-borderless text-gray-900">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">日期</th>
            <th scope="col">設計師</th>
            <th scope="col">客人姓名</th>
            <th scope="col">消費金額</th>
            <th scope="col">狀態</th>
            <th scope="col">明細</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in totalCheckInfo" :key="info.Id">
            <th scope="row">1</th>
            <td>
              {{ info.OrderTime.replace('T', ' ').replace('00:00:00', ' ') }}
            </td>
            <td>
              {{ info.DesignerName }}
            </td>
            <td>
              {{ info.CustomerName }}
            </td>
            <td>NT: {{ info.Amount }}</td>
            <td
              class="text-primary"
              :class="{ 'text-danger': info.OrderStatus == '已取消' }"
            >
              {{ info.OrderStatus }}
            </td>
            <td>
              <button
                class="btn btn-success text-gray-900"
                style="width: 6rem;"
                @click="getSingInfo(info.Id)"
              >
                帳單明細
              </button>
            </td>
          </tr>
        </tbody>
        <caption class="text-right">
          小計：NT.
          {{
            caltotalPrice
          }}
        </caption>
      </table>
    </div>

    <!--帳單Modal-->
    <div class="modal fade" id="checkoutMoadel" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="checkoutMoadel">帳單</h5>
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
              <table class="table table-borderless">
                <tbody class="text-gray-800">
                  <tr>
                    <th scope="row">日期：</th>
                    <td>
                      {{ date }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">設計師：</th>
                    <td>{{ singleCheckInfo.DesignerName }}</td>
                  </tr>
                  <tr>
                    <th scope="row">顧客：</th>
                    <td>{{ singleCheckInfo.CustomerName }}</td>
                  </tr>
                  <tr>
                    <th scope="row">生日：</th>
                    <td>{{ bDay }}</td>
                  </tr>
                  <tr>
                    <th scope="row">電話：</th>
                    <td>{{ singleCheckInfo.CustomerPhone }}</td>
                  </tr>
                  <tr>
                    <th scope="row">介紹人：</th>
                    <td>{{ singleCheckInfo.CustomerIntroducer }}</td>
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
                  <tr v-for="(i, index) in singleCheckInfo.Detail" :key="i.Id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ i.ProductName }}</td>
                    <td>{{ i.UnitPrice }}</td>
                  </tr>
                </tbody>
                <caption class="text-right">
                  消費金額：NT.{{
                    singleCheckInfo.Amount
                  }}
                </caption>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  postCheckInfo,
  getSingleBill,
  getDesignerListSelect,
} from '@/js/AppServices';
import $ from 'jquery';

export default {
  name: 'historicalOrderers',
  inject: ['reload'],
  data() {
    return {
      designInfo: [],
      startTime: '',
      endTime: '',
      dId: '',
      totalCheckInfo: [],
      singleCheckInfo: {},
      customerName: '',
      billStatus: '',
      amount: '',
      bDay: '',
      date: '',

      // 登入的店家ＩＤ
      loginStoreId: null,
      stoken: '',
    };
  },
  computed: {
    caltotalPrice() {
      let total = 0;
      // eslint-disable-next-line arrow-body-style
      this.totalCheckInfo.forEach((item) => {
        // eslint-disable-next-line no-return-assign
        return (total += Number(item.Amount));
      });
      return total;
    },
  },
  methods: {
    // 查詢單一帳單
    getSingInfo(cId) {
      getSingleBill(cId, this.stoken).then((res) => {
        this.singleCheckInfo = res.data.BasicData;
        this.date = this.singleCheckInfo.OrderTime?.replace('T', ' ').replace(
          '00:00:00',
          ' ',
        );
        this.bDay = this.singleCheckInfo.CustomerBirthday?.replace(
          'T',
          ' ',
        ).replace('00:00:00', ' ');
        $('#checkoutMoadel').modal('show');
      });
    },

    getDesignerInfo() {
      getDesignerListSelect(this.loginStoreId).then((res) => {
        this.designInfo = res.data;
      });
    },

    searchCheckInfo() {
      const data = this.$qs.stringify({
        OrderTimeStart: this.startTime,
        OrderTimeEnd: this.endTime,
        BillStatus: this.billStatus,
        CustomerName: this.customerName,
        CustomerPhone: '',
        CustomerIntroducer: '',
        CustomerBirthdayStart: '',
        CustomerBirthdayEnd: '',
        DesignerId: this.dId,
      });
      postCheckInfo(data, this.stoken).then((res) => {
        if (res.data.status) {
          this.totalCheckInfo = res.data.BasicData;
          this.customerName = '';
          this.dId = '';
        } else {
          this.$swal({
            icon: 'error',
            title: '查無此資料',
            timer: 1500,
          });
          this.reload();
        }
      });
    },
  },

  created() {
    this.stoken = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)storeToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.loginStoreId = JSON.parse(localStorage.getItem('storeDetails')).Id;
  },
  mounted() {
    this.getDesignerInfo();
  },
};
</script>

<style></style>
