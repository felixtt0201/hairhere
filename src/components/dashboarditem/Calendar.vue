/* eslint-disable func-names */
<template>
  <div>
    <FullCalendar :options="calendarOptions" />
    <div
      class="modal fade"
      id="reservationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg container" role="document">
        <loading
          :opacity="1"
          color="#7e735d"
          loader="bars"
          background-color="#b7b9cc"
          :active.sync="isLoading"
        ></loading>
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
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
                    />
                    <p v-else>{{ tempOrderInfo.CustomerName }}</p>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="tel" class="font-weight-bold"
                      >手機號碼/電話：</label
                    >
                    <input
                      type="unit"
                      class="form-control"
                      id="tel"
                      placeholder="請輸入手機號碼/電話"
                      v-model="reservationInfo.cTel"
                      v-if="editStatus"
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
                  <div class="form-row">
                    <div class="col-12">
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
                </div>
                <!--- 選擇消費項目end-->
                <hr />

                <div class="form-group">
                  <label for="description">店家備註</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入備註"
                    v-model="reservationInfo.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">顧客備註</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="客人的備註"
                    v-if="editStatus"
                  ></textarea>
                  <p v-else>{{ tempOrderInfo.CustomerRemark }}</p>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-4">
                  <button
                    type="button"
                    class="btn btn-outline-secondary mr-2"
                    data-dismiss="modal"
                    v-if="editStatus"
                  >
                    取消
                  </button>
                  <button
                    class="btn btn-danger"
                    style="min-width:140px"
                    v-else
                    @click="deletAlert"
                  >
                    取消此筆訂單
                  </button>
                </div>
                <div class="col-auto">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="postOrderHandler()"
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
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  getAllDesigner,
  getStoreProductList,
  postOrder,
  getOrder,
  getOrderDetail,
  patchOrderDetailStatus,
} from '@/js/AppServices';
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
          left: 'dayGridMonth,timeGridWeek',
          center: 'title',
          right: 'prev,today,next',
        },
        views: {
          timeGridWeek: {
            allDayText: '時間',
          },
        },
        // businessHours: {
        //   daysOfWeek: [1, 2, 3, 4, 5, 6, 7], // Monday - Thursday

        //   startTime: '09:00', // a start time (10am in this example)
        //   endTime: '18:00', // an end time (6pm in this example)
        // },
        initialView: 'dayGridMonth',
        // 開啟時要顯示的事件
        // initialEvents: [],
        // validRange: { start: new Date().toISOString().slice(0, 10) },
        locale: 'tw',
        // editable: true, // 付費開啟拖拉功能
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        // select: this.openModal,
        eventClick: this.getSelectInfo,
        dayCellClassNames: this.banDate,
        // eventsSet: this.handleEvents,
        dateClick: this.openModal,

        // 時間區間
        slotDuration: '1:00', // 區間30分鐘
        slotMinTime: '9:00', // 開始
        slotMaxTime: '18:00', // 結束
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

      // OrderInfo
      OrderInfo: [],

      // tempOrderInfo
      tempOrderInfo: {},
      // 開關
      editStatus: true,

      // selectOrderId
      selectOrderId: '',

      // loadingStatus
      isLoading: true,
    };
  },

  methods: {
    // getDesignerInfo
    getDesignerHandler() {
      getAllDesigner().then((res) => {
        if (res.status === 200) {
          this.totalDesignerInfo = res.data;
        }
      });
    },
    // getServicesInfo
    getServicesHandler() {
      getStoreProductList().then((res) => {
        if (res.data.status === true) {
          this.totalServicesInfo = res.data.OrderDetails;
          // console.log(this.totalServicesInfo);
        }
      });
    },

    // getOrderInfo
    async gettotalOrderHandler() {
      await getOrder().then((res) => {
        this.OrderInfo = res.data.BasicData;
      });
      await this.OrderInfo.forEach((item) => {
        const showOrderDetails = {
          title: item.CustomerName,
          start: item.OrderTime,
          OrderID: item.Id,
        };
        this.calendarOptions.events.push(showOrderDetails);
      });
    },

    // postorder
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

      postOrder(data).then((res) => {
        console.log(res);
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
      this.editStatus = false;
      this.tempOrderInfo = {};
      this.selectOrderId = e.event.extendedProps.OrderID;
      getOrderDetail(this.selectOrderId).then((res) => {
        if (res.data.status) {
          this.isLoading = false;
          this.tempOrderInfo = res.data.BasicData;
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
          this.$swal('成功取消預約', this.deleteInfo());
        }
      });
    },
    deleteInfo() {
      const data = this.$qs.stringify({
        status: '0',
        Remark: '修改成功',
      });
      patchOrderDetailStatus(this.selectOrderId, data).then((res) => {
        console.log(res);
      });
    },
    changeStatus() {
      this.editStatus = !this.editStatus;
    },
  },
  mounted() {
    this.getDesignerHandler();
    this.getServicesHandler();
    this.gettotalOrderHandler();
  },
};
</script>

<style lang="scss">
.fc-BeforeDay {
  background-color: #d1d3e2;
}
</style>
