<template>
  <div id="storeinformation" class="mt-4">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#b7b9cc"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="row justify-content-between">
      <h4 class="mb-3 ml-3 text-gray-900 font-weight-bold">基本資料</h4>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-icon-split mr-3"
        v-show="editstatus"
        @click="edit"
      >
        <span class="icon text-white-10">
          <i class="fas fa-edit"></i>
        </span>
      </button>
    </div>
    <hr class="mb-4" />
    <form
      class="needs-validation text-left text-gray-900"
      novalidate
      v-cloak
      @submit.prevent="putInfoHandler"
    >
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="title" class="font-weight-bold">店家名稱：</label>
          <p v-if="editstatus" class="text-muted text-gray-800 text-gray-800">
            {{ newdata.Name }}
          </p>
          <input
            v-else
            type="text"
            class="form-control"
            id="title"
            placeholder="請輸入名稱 ex:樂髮手作"
            v-model="newdata.Name"
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="title" class="font-weight-bold">店家名稱：(英文)</label>
          <p v-if="editstatus" class="text-muted text-gray-800 text-gray-800">
            {{ newdata.EnglishName }}
          </p>
          <input
            v-else
            type="text"
            class="form-control"
            id="title"
            placeholder="請輸入名稱 ex:樂髮手作"
            v-model="newdata.EnglishName"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label for="tel" class="font-weight-bold">店家電話：</label>
          <p v-if="editstatus" class="text-muted text-gray-800 text-gray-800">
            {{ newdata.BasicData.Phone }}
          </p>
          <input
            v-else
            type="tel"
            class="form-control"
            id="tel"
            placeholder="請輸入電話or手機"
            v-model="newdata.BasicData.Phone"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="businesstime" class="font-weight-bold">營業時間：</label>
          <p for="" v-if="editstatus" class="text-muted text-gray-800">
            {{ newdata.Business.BusinessHoursOpen }} ~
            {{ newdata.Business.BusinessHoursClose }}
          </p>
          <div v-else>
            <input
              type="time"
              class="form-control"
              id="businesstime"
              placeholder="請輸入時間 ex:9:00"
              required
              v-model="newdata.Business.BusinessHoursOpen"
            />
            <input
              type="time"
              class="form-control"
              id="businesstime"
              placeholder="請輸入時間 ex:18:00"
              required
              v-model="newdata.Business.BusinessHoursClose"
            />
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="dayof" class="font-weight-bold">店休日：</label>
          <p v-if="editstatus" class="text-muted text-gray-800">
            星期{{ setDayof }}
          </p>
          <div class="col-8" v-else>
            <div class="col-6">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="monday"
                  value="1"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="monday">星期一</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="tuesday"
                  value="2"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="tuesday">星期二</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="wednesday"
                  value="3"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="wednesday"
                  >星期三</label
                >
              </div>
            </div>
            <div class="col-6">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="thursday"
                  value="4"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="thursday"
                  >星期四</label
                >
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="friday"
                  value="5"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="friday">星期五</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input chkbox"
                  id="saturday"
                  value="6"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="saturday"
                  >星期六</label
                >
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input chkbox"
                  id="sunday"
                  value="0"
                  v-model="DayOf"
                />
                <label class="custom-control-label" for="sunday">星期日</label>
              </div>
              {{ DayOf }}
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12">
          <label for="address" class="font-weight-bold">店家地址：</label>
          <p for="" v-if="editstatus" class="text-muted text-gray-800">
            {{ newdata.BasicData.Address }}
          </p>
          <input
            v-else
            type="text"
            class="form-control"
            id="address"
            placeholder="請輸入完整地址 ex:高雄市前鎮區"
            v-model="newdata.BasicData.Address"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12">
          <label for="facebook" class="font-weight-bold">Facebook：</label>
          <p v-if="editstatus" class="text-muted text-gray-800">
            {{ newdata.BasicData.Facebook }}
          </p>
          <input
            v-else
            type="text"
            class="form-control"
            id="facebook"
            placeholder="請輸入臉書網址 ex:xxxxx.facebook"
            v-model="newdata.BasicData.Facebook"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <label for="instagram" class="font-weight-bold">Instagram：</label>
          <p v-if="editstatus" class="text-muted text-gray-800">
            {{ newdata.BasicData.Instagram }}
          </p>
          <input
            v-else
            type="text"
            class="form-control"
            id="instagram"
            placeholder="請輸入臉書網址 ex:xxxxx.instagram："
            v-model="newdata.BasicData.Instagram"
          />
        </div>
      </div>
      <div class="form-group mb-4">
        <label for="summary" class="font-weight-bold">店家簡介：</label>
        <p v-if="editstatus" class="text-muted text-gray-800">
          {{ newdata.BasicData.Summary }}
        </p>
        <textarea
          v-else
          class="form-control"
          id="summary"
          rows="5"
          placeholder="請輸入內容"
          v-model="newdata.BasicData.Summary"
        ></textarea>
      </div>
      <div class="form-group mb-4">
        <label for="detail" class="font-weight-bold">成員介紹：</label>
        <p v-if="editstatus" class="text-muted text-gray-800">
          {{ newdata.BasicData.Details }}
        </p>
        <textarea
          v-else
          class="form-control"
          id="detail"
          rows="5"
          placeholder="請輸入內容"
          v-model="newdata.BasicData.Details"
        ></textarea>
      </div>
      <div class="row justify-content-between" v-show="!editstatus">
        <button class="btn btn-outline-secondary" type="button" @click="edit">
          取消
        </button>
        <button class="btn btn-primary" type="submit">
          確認
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { getStoreTotalInfo, putStoreInfo } from '@/js/AppServices';

export default {
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      // 存放Api接回來的店家資料
      newdata: {},

      // 編輯的開關
      editstatus: true,

      // 休假日
      DayOf: [],
      setDayof: '',
    };
  },

  methods: {
    // 取得店家資料
    async getInfoHandler() {
      await getStoreTotalInfo().then((res) => {
        if (res.data.status === true) {
          console.log(res);
          this.isLoading = false;
          this.newdata = res.data;
          this.setDayof = this.newdata.Business.RestDayOfWeek.toString();
        }
      });
    },

    //  修改店家資料
    putInfoHandler() {
      const data = this.$qs.stringify({
        Id: this.newdata.Id,
        Email: this.newdata.BasicData.Email,
        OldPassword: this.newdata.BasicData.OldPassword,
        PasswordSalt: this.newdata.BasicData.PasswordSalt,
        Address: this.newdata.BasicData.Address,
        BusinessHoursOpen: this.newdata.Business.BusinessHoursOpen,
        BusinessHoursClose: this.newdata.Business.BusinessHoursClose,
        Instagram: this.newdata.BasicData.Instagram,
        Facebook: this.newdata.BasicData.Facebook,
        Name: this.newdata.Name,
        EnglishName: this.newdata.EnglishName,
        Phone: this.newdata.BasicData.Phone,
        Summary: this.newdata.BasicData.Summary,
        Details: this.newdata.BasicData.Details,
        RestDayOfWeek: this.DayOf.toString(),
      });
      putStoreInfo(data).then((res) => {
        console.log(res);
        if (res.data.status === true) {
          this.successedMessage();
          this.newdata = {};
        } else {
          this.unsuccessedMessage();
        }
      });
    },

    // 提示-修改成功
    successedMessage() {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: '修改成功',
      }).then(() => {
        this.edit();
        this.getInfoHandler();
      });
    },

    // 提示-修改失敗
    unsuccessedMessage() {
      this.$swal({
        position: 'center',
        icon: 'error',
        title: '修改失敗',
      }).then(() => {
        this.edit();
        this.getInfoHandler();
      });
    },

    // 切換編輯模式
    edit() {
      this.editstatus = !this.editstatus;
    },
  },
  // created() {
  //   this.getInfoHandler();
  // },
  mounted() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scopeded>
[v-cloak] {
  display: none;
}
</style>
