/* eslint-disable func-names */
<template>
  <div id="calendar" class="container-fluid">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="mb-0 text-gray-800">預約表</h3>
    </div>
    <div class="row justify-content-end mb-4">
      <div class="input-group col-4">
        <select class="custom-select" v-model="selectId">
          <option disabled value="">選擇設計師</option>
          <option
            v-for="Designer in totalDesignerInfo"
            :key="Designer.Id"
            :value="Designer.Id"
            >{{ Designer.Name }}</option
          >
        </select>
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchInfoHandler(selectId)"
          >
            搜尋
          </button>
        </div>
      </div>
    </div>

    <FullCalendar :options="calendarOptions" />
    <form @submit.prevent="postOrderHandler">
      <div
        class="modal fade"
        id="reservationModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="reservationModal"
        aria-hidden="true"
        @keydown.esc="cancelMouseEvnetHandler"
      >
        <div class="modal-dialog modal-lg container" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="reservationModal">
                <span>新增預約</span>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="cName" class="font-weight-bold"
                        >顧客姓名：</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="cName"
                        placeholder="請輸入客人姓名"
                        v-model="reservationInfo.cName"
                        v-if="editStatus"
                        required
                      />
                      <p v-else>{{ tempOrderInfo.CustomerName }}</p>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="cTel" class="font-weight-bold"
                        >手機號碼/電話：</label
                      >
                      <input
                        type="unit"
                        class="form-control"
                        id="cTel"
                        placeholder="請輸入手機號碼/電話"
                        v-model="reservationInfo.cTel"
                        v-if="editStatus"
                        required
                      />
                      <p v-else>{{ tempOrderInfo.CustomerPhone }}</p>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="designer" class="font-weight-bold"
                        >選擇設計師：</label
                      >
                      <select
                        class="custom-select"
                        v-model="dId"
                        v-if="editStatus"
                        required
                      >
                        <option disabled value="">選擇設計師</option>
                        <option
                          v-for="designer in totalDesignerInfo"
                          :key="designer.Id"
                          :value="designer.Id"
                          >{{ designer.Name }}</option
                        >
                      </select>
                      <p v-else>{{ tempOrderInfo.DesignerName }}</p>
                    </div>
                  </div>
                  <!--
                  選擇消費項目
                -->
                  <div class="form-gropu">
                    <label for="" class="font-weight-bold"
                      >請選擇消費項目（至少一項）</label
                    >
                    <div class="table-responsive-sm">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">項目</th>
                            <th scope="col">金額</th>
                            <th scope="col">時間</th>
                          </tr>
                        </thead>
                        <tbody v-if="editStatus">
                          <tr
                            v-for="info in totalServicesInfo"
                            :key="info.ProductName"
                          >
                            <td>
                              <div
                                class="custom-control custom-checkbox"
                                v-if="editStatus"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  :id="info.Id"
                                  :value="info"
                                  v-model="editInfo"
                                />
                                <label
                                  class="custom-control-label"
                                  style="width:120px"
                                  :for="info.Id"
                                  >{{ info.ProductName }}</label
                                >
                              </div>
                              <p v-else>{{ info.ProductName }}</p>
                            </td>
                            <td>
                              <label style="width:120px" :for="info.Id">{{
                                info.UnitPrice
                              }}</label>
                            </td>
                            <td>
                              <label style="width:120px" :for="info.Id">{{
                                info.ServiceMinutes
                              }}</label>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-else>
                          <tr
                            v-for="info in tempOrderInfo.Detail"
                            :key="info.ProductName"
                          >
                            <td>
                              <p>{{ info.ProductName }}</p>
                            </td>
                            <td>
                              <p>{{ info.UnitPrice }}</p>
                            </td>
                            <td>
                              <p>{{ info.ServiceMinutes }}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!--- 選擇消費項目end-->
                  <hr />

                  <div class="form-group">
                    <label for="description" class="font-weight-bold"
                      >店家備註</label
                    >
                    <textarea
                      type="text"
                      class="form-control"
                      id="description"
                      placeholder="請輸入備註"
                      v-model="reservationInfo.content"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="content" class="font-weight-bold"
                      >顧客備註</label
                    >
                    <textarea
                      type="text"
                      class="form-control"
                      id="content"
                      placeholder="客人的備註"
                      v-if="editStatus"
                    ></textarea>
                    <p v-else>{{ tempOrderInfo.CustomerRemark }}</p>
                  </div>
                  <div class="row justify-content-between">
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      data-dismiss="modal"
                      v-if="editStatus"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      style="min-width:140px"
                      v-else
                      @click="deletAlert"
                    >
                      取消此筆訂單
                    </button>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      v-if="editStatus"
                    >
                      確認
                    </button>
                    <button class="btn btn-primary" data-dismiss="modal" v-else>
                      返回
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  getStoreProductList,
  postOrder,
  getOrder,
  getOrderDetail,
  patchOrderDetailStatus,
  getOrderListbyDesinger,
  getDesignerListSelect,
} from '@/js/DesignerServices';
import $ from 'jquery';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      // fullcalendar 效果
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: 'title',
          center: '',
          right: 'prev,today,next',
        },
        views: {
          timeGridWeek: {
            allDayText: '時間',
          },
        },
        initialView: 'timeGridWeek',
        locale: 'tw',
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        eventClick: this.getSelectInfo,
        dayCellClassNames: this.banDate,
        dateClick: this.openModal,

        // 時間區間
        slotDuration: '1:00', // 區間30分鐘
        slotMinTime: '10:00', // 開始
        slotMaxTime: '19:00', // 結束
        expandRows: true, // 適應有時間的高度(不然會是原本高度)
        events: [{}],
      },
      reservationInfo: {
        cName: '',
        cTel: '',
        date: '',
        content: '',
      },
      newaddevent: {},

      // 事件中叫出來資訊的存放區
      dateClickEvent: {},
      eventClickEvent: {},
      num: 1,

      // getTotal設計師資料
      totalDesignerInfo: [],

      // get服務項目
      totalServicesInfo: [],
      // 選擇的項目，金額，時間
      editInfo: [],
      // 設計師ID
      dId: '',
      // 搜尋的設計師ID
      selectId: '',

      // OrderInfo
      OrderInfo: [],

      // tempOrderInfo
      tempOrderInfo: {},
      // 開關
      editStatus: true,

      // selectOrderId
      selectOrderId: '',

      // loadingStatus
      isLoading: false,
      fullPage: true,

      storeId: null,
    };
  },
  methods: {
    // 搜尋訂單
    searchInfoHandler(selectId) {
      getOrderListbyDesinger(selectId).then((res) => {
        if (res.data.status) {
          this.calendarOptions.events = [];
          this.OrderInfo = res.data.BasicData;
          this.OrderInfo.forEach((item) => {
            const OrderDetails = {
              title: item.CustomerName,
              start: item.OrderTime,
              end: item.EndTime,
              OrderID: item.Id,
              backgroundColor: item.Color,
              borderColor: item.Color,
            };
            this.calendarOptions.events.push(OrderDetails);
          });
        } else {
          this.$swal({
            title: '查無此設計師的預約',
            position: 'center',
            icon: 'error',
          });
        }
      });
    },

    // getDesignerInfo
    getDesignerHandler() {
      getDesignerListSelect(this.storeId).then((res) => {
        this.totalDesignerInfo = res.data;
      });
    },

    // getServicesInfo
    getServicesHandler() {
      getStoreProductList(this.storeId).then((res) => {
        if (res.data.status) {
          this.totalServicesInfo = res.data.OrderDetails;
        }
      });
    },

    // getOrderInfo
    async gettotalOrderHandler() {
      this.isLoading = true;
      await this.getDesignerHandler();
      await this.getServicesHandler();
      await getOrder().then((res) => {
        if (res.data.status) {
          this.OrderInfo = res.data.BasicData;
          this.OrderInfo.forEach((item) => {
            const showOrderDetails = {
              title: item.CustomerName,
              start: item.OrderTime,
              end: item.EndTime,
              OrderID: item.Id,
              backgroundColor: item.Color,
              borderColor: item.Color,
            };
            this.calendarOptions.events.push(showOrderDetails);
          });
          this.isLoading = false;
        }
      });
    },

    // postorder新增訂單
    postOrderHandler() {
      // 將資訊post到Order
      const data = this.$qs.stringify({
        OrderTime: this.dateClickEvent.dateStr,
        StoreRemark: '',
        DesignerId: this.dId,
        CustomerName: this.reservationInfo.cName,
        CustomerPhone: this.reservationInfo.cTel,
        CustomerEmail: '',
        CustomerIntroducer: '',
        CustomerRemark: '',
        OrderDetails: this.editInfo,
      });
      if (this.editInfo.length > 0) {
        postOrder(data).then((res) => {
          if (res.data.status === true) {
            this.calendarOptions.events = [];
            this.editInfo = [];
            this.dId = '';
            this.reservationInfo = '';
            this.$swal({
              title: '成功預約',
              position: 'center',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              $('#reservationModal').modal('hide');
              this.gettotalOrderHandler();
            });
          }
        });
      } else {
        this.$swal({
          title: '請選擇至少一項服務項目',
          position: 'center',
          icon: 'error',
        });
      }
    },

    // ban預約的日期
    // eslint-disable-next-line consistent-return
    banDate(arg) {
      // eslint-disable-next-line prefer-const
      // eslint-disable-next-line no-var
      const today = new Date(); // 目前時間
      // eslint-disable-next-line no-var
      const eachDate = arg.date; // 每個格子的時間
      // 比今日早的格子全部加入 'fc-bg' class，改變背景顏色
      if (eachDate.getTime() < today.getTime() - 1 * 24 * 60 * 60 * 1000) {
        return ['fc-BeforeDay'];
      }
    },

    // 開啟Modal 並把api的訊息存到data中的dateClickEvent
    openModal(e) {
      this.editStatus = true;
      this.isLoading = false;
      this.reservationInfo = {};
      if (e.dayEl.classList.contains('fc-BeforeDay')) {
        alert('過去日期不能預約');
      } else {
        $('#reservationModal').modal('show');
        this.dateClickEvent = e;
      }
    },

    // 點選有存儲過的資訊打開內容
    getSelectInfo(e) {
      this.isLoading = true;
      this.editStatus = false;
      this.tempOrderInfo = {};
      this.selectOrderId = e.event.extendedProps.OrderID;
      getOrderDetail(this.selectOrderId).then((res) => {
        if (res.data.status) {
          this.tempOrderInfo = res.data.BasicData;
          this.isLoading = false;
        }
      });
      $('#reservationModal').modal('show');
    },

    // 刪除資訊
    deletAlert() {
      this.$swal({
        title: '你確定要取消嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33 ',
        confirmButtonText: '確定',
        cancelButtonColor: '#3085d6',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          $('#reservationModal').modal('hide');
          this.$swal(
            {
              icon: 'success',
              title: '成功取消預約',
              timer: 1500,
            },
            this.deleteInfo(),
          );
        }
      });
    },
    deleteInfo() {
      const data = this.$qs.stringify({
        OrderStatus: '0',
        Remark: '修改成功',
      });
      patchOrderDetailStatus(this.selectOrderId, data).then((res) => {
        console.log(res);
      });
    },

    cancelMouseEvnetHandler() {
      this.dateClickEvent.view.calendar.unselect();
    },
  },
  created() {
    const designerInfo = JSON.parse(localStorage.getItem('desginderDetails'));
    this.storeId = designerInfo.StoreId;
  },
  mounted() {
    this.gettotalOrderHandler();
  },
};
</script>

<style lang="scss">
.fc-BeforeDay {
  background-color: #d1d3e2;
}
</style>
