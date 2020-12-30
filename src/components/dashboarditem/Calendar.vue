/* eslint-disable func-names */
<template>
  <div>
    Calendar
    <FullCalendar :options="calendarOptions" />
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
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
            <div class="row">
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
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="setInfo">
              確認
            </button>
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
// import { mapGetters } from 'vuex';
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
      },
      reservationInfo: {
        cName: '',
        cTel: '',
        date: '',
        content: '',
      },

      // select事件中叫出來資訊的存放區
      selectdateInfo: {},
      num: 1,
    };
  },

  methods: {
    // ban預約的日期
    // eslint-disable-next-line consistent-return
    // banDate() {
    // const today = new Date(new Date().setDate(-1));
    // const day = new Date(e.date.getMilliseconds());
    // console.log(day);
    // ---
    // const time = this.$moment().unix();
    // console.log(time);
    // if (time > 0) {
    //   console.log('no');
    //   return 'isRes';
    // },
  },

  // 開啟Modal 並把api的訊息存到data中的selectdateInfo
  openModal(e) {
    console.log('openModel', e.dayEl.className);
    this.reservationInfo = {};
    if (e.dayEl.classList.contains('isRes')) {
      console.log('hell');
    } else {
      $('#productModal').modal('show');
      this.selectdateInfo = e;
    }
  },

  // 將輸入的訊息寫到選則的日期裡面
  setInfo() {
    const selectedInfo = this.selectdateInfo.view.calendar;
    // console.log('selectedInfo', selectedInfo);
    // console.log('selectdateInfo', this.selectdateInfo);
    selectedInfo.unselect();
    selectedInfo.addEvent({
      // eslint-disable-next-line no-plusplus
      id: this.num++,
      title: this.reservationInfo.cName,
      // start: this.selectdateInfo.startStr,
      start: '2020-12-01',
      // extendedProps
      tel: this.reservationInfo.cTel,
      name: this.reservationInfo.cName,
    });

    $('#productModal').modal('hide');
  },

  // 點選有存儲過的資訊打開內容
  getSelectInfo(e) {
    // eslint-disable-next-line prefer-object-spread
    this.reservationInfo = Object.assign({}, e.evnet);
    this.reservationInfo.cName = e.event.title;
    this.reservationInfo.cTel = e.event.extendedProps.tel;
    // console.log(e.event.extendedProps);
    $('#productModal').modal('show');
  },
};
</script>

<style lang="scss" scoped>
.isRes {
  background-color: yellowgreen;
}
</style>
