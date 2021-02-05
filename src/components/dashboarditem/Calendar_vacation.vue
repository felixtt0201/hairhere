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
        <div class="row"></div>
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
                    <label for="cName">顧客姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cName"
                      placeholder="請輸入客人姓名"
                      v-model="reservationInfo.cName"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="tel">手機號碼/電話</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="tel"
                      placeholder="請輸入手機號碼/電話"
                      v-model="reservationInfo.cTel"
                    />
                  </div>
                </div>
                <!--
                  選擇消費項目
                -->
                <div class="form-gropu">
                  <label for="">請選擇消費項目（至少一項）</label>
                  <div class="form-row">
                    <div class="form-gorup col-md-6">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          剪髮
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          剪髮
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          剪髮
                        </label>
                      </div>
                    </div>
                    <div class="form-gorup col-md-6">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          剪髮
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          剪髮
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          剪髮
                        </label>
                      </div>
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
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-4">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletAlert"
                  >
                    刪除
                  </button>
                </div>
                <div class="col-auto">
                  <button
                    type="button"
                    class="btn btn-outline-secondary mr-2"
                    data-dismiss="modal"
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="saveAlert"
                  >
                    確認
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="updateInfo"
                  >
                    編輯
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
        slotDuration: '0:30', // 區間30分鐘
        slotMinTime: '9:00', // 開始
        slotMaxTime: '18:00', // 結束
        expandRows: true, // 適應有時間的高度(不然會是原本高度)
      },
      reservationInfo: {
        cName: '',
        cTel: '',
        date: '',
        content: '',
      },

      // 事件中叫出來資訊的存放區
      dateClickEvent: {},
      eventClickEvent: {},
      num: 1,
    };
  },

  methods: {
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
      // console.log('openModel', e.dayEl.className);
      this.reservationInfo = {};
      if (e.dayEl.classList.contains('fc-BeforeDay')) {
        alert('過去日期不能預約');
      } else {
        $('#reservationModal').modal('show');
        this.dateClickEvent = e;
      }
    },
    saveAlert() {
      this.$swal(
        {
          title: '成功預約',
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        },
        this.setInfo(),
      );
    },
    // 將輸入的訊息寫到選則的日期裡面
    setInfo() {
      const selectedInfo = this.dateClickEvent.view.calendar;
      selectedInfo.unselect();
      selectedInfo.addEvent({
        // eslint-disable-next-line no-plusplus
        id: this.num++,
        title: this.reservationInfo.cName,
        start: this.dateClickEvent.dateStr,
        // extendedProps
        tel: this.reservationInfo.cTel,
        name: this.reservationInfo.cName,
      });
      $('#reservationModal').modal('hide');
    },

    // 點選有存儲過的資訊打開內容
    getSelectInfo(e) {
      this.eventClickEvent = e;
      // eslint-disable-next-line prefer-object-spread
      this.reservationInfo = Object.assign({}, e.evnet);
      this.reservationInfo.cName = e.event.title;
      this.reservationInfo.cTel = e.event.extendedProps.tel;
      $('#reservationModal').modal('show');
    },

    // 編輯預約資訊
    updateInfo() {
      const selectedInfo = this.eventClickEvent;
      selectedInfo.refetchEvents({
        title: this.reservationInfo.cName,
        start: this.dateClickEvent.dateStr,
        // extendedProps
        tel: this.reservationInfo.cTel,
        name: this.reservationInfo.cName,
      });
    },

    // 刪除資訊
    deletAlert() {
      this.$swal({
        title: '你確定要刪除嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33 ',
        confirmButtonText: '確定',
        cancelButtonColor: '#3085d6',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('成功刪除預約', this.deleteInfo());
        }
      });
    },
    deleteInfo() {
      this.eventClickEvent.event.remove();
      $('#reservationModal').modal('hide');
    },
  },
};
</script>

<style lang="scss">
.fc-BeforeDay {
  background-color: #d1d3e2;
}
</style>
