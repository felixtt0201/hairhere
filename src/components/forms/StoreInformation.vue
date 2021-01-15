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
    <div class="row">
      <div class="col">
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
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="title" class="font-weight-bold">店家名稱：</label>
              <p
                for=""
                v-if="editstatus"
                class="text-muted text-gray-800 text-gray-800"
              >
                {{ storeInfo.title }}
              </p>
              <input
                v-else
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入名稱 ex:樂髮手作"
                v-model="storeInfo.title"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="title" class="font-weight-bold"
                >店家名稱：(英文)</label
              >
              <p
                for=""
                v-if="editstatus"
                class="text-muted text-gray-800 text-gray-800"
              >
                {{ storeInfo.engtitle }}
              </p>
              <input
                v-else
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入名稱 ex:樂髮手作"
                v-model="storeInfo.engtitle"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="tel" class="font-weight-bold">店家電話：</label>
              <p
                for=""
                v-if="editstatus"
                class="text-muted text-gray-800 text-gray-800"
              >
                {{ storeInfo.tel }}
              </p>
              <input
                v-else
                type="tel"
                class="form-control"
                id="tel"
                placeholder="請輸入電話or手機"
                v-model="storeInfo.tel"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="businesstime" class="font-weight-bold"
                >營業時間：</label
              >
              <p for="" v-if="editstatus" class="text-muted text-gray-800">
                {{ storeInfo.businessTimeOpen }} ~
                {{ storeInfo.businessTimeClose }}
              </p>
              <div v-else>
                <input
                  type="text"
                  class="form-control"
                  id="businesstime"
                  placeholder="請輸入時間 ex:9:00"
                  value=""
                  required
                  v-model="storeInfo.businessTimeOpen"
                />
                <input
                  type="text"
                  class="form-control"
                  id="businesstime"
                  placeholder="請輸入時間 ex:18:00"
                  value=""
                  required
                  v-model="storeInfo.businessTimeClose"
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="dayof" class="font-weight-bold">店休日：</label>
              <p for="" v-if="editstatus" class="text-muted text-gray-800">
                {{ storeInfo.DayOf }}
              </p>
              <div class="col-8" v-else>
                <div class="col-6">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="monday"
                      value="2021-01-11"
                      v-model="DayOf"
                    />
                    <label class="custom-control-label" for="monday"
                      >星期一</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="tuesday"
                      value="2021-01-12"
                      v-model="DayOf"
                    />
                    <label class="custom-control-label" for="tuesday"
                      >星期二</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="wednesday"
                      value="2021-01-13"
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
                      value="2021-01-14"
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
                      value="2021-01-15"
                      v-model="DayOf"
                    />
                    <label class="custom-control-label" for="friday"
                      >星期五</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input chkbox"
                      id="saturday"
                      value="2021-01-16"
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
                      value="2021-01-17"
                      v-model="DayOf"
                    />
                    <label class="custom-control-label" for="sunday"
                      >星期日</label
                    >
                  </div>
                  <span>{{ DayOf }}</span>
                </div>
              </div>

              <!-- <input
                v-else
                type="text"
                class="form-control"
                id="dayof"
                placeholder="請輸入星期幾 ex:星期日"
                v-model="storeInfo.DayOf"
              /> -->
            </div>
          </div>
          <div class="mb-3">
            <label for="address" class="font-weight-bold">店家地址：</label>
            <p for="" v-if="editstatus" class="text-muted text-gray-800">
              {{ storeInfo.address }}
            </p>
            <input
              v-else
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入完整地址 ex:高雄市前鎮區"
              v-model="storeInfo.address"
            />
          </div>
          <div class="col-mb-3">
            <label for="facebook" class="font-weight-bold">Facebook：</label>
            <p
              for="facebook"
              v-if="editstatus"
              class="text-muted text-gray-800"
            >
              {{ storeInfo.facebook }}
            </p>
            <input
              v-else
              type="text"
              class="form-control"
              id="facebook"
              placeholder="請輸入臉書網址 ex:xxxxx.facebook"
              v-model="storeInfo.facebook"
            />
          </div>
          <div class="col-mb-3">
            <label for="instagram：" class="font-weight-bold"
              >Instagram：</label
            >
            <p
              for="facebook"
              v-if="editstatus"
              class="text-muted text-gray-800"
            >
              {{ storeInfo.instagram }}
            </p>
            <input
              v-else
              type="text"
              class="form-control"
              id="instagram："
              placeholder="請輸入臉書網址 ex:xxxxx.instagram："
              v-model="storeInfo.instagram"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="font-weight-bold"
              >店家簡介：</label
            >
            <p for="" v-if="editstatus" class="text-muted text-gray-800">
              {{ storeInfo.summary }}
            </p>
            <textarea
              v-else
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="請輸入內容"
              v-model="storeInfo.summary"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="font-weight-bold"
              >成員介紹：</label
            >
            <p for="" v-if="editstatus" class="text-muted text-gray-800">
              {{ storeInfo.detail }}
            </p>
            <textarea
              v-else
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="請輸入內容"
              v-model="storeInfo.detail"
            ></textarea>
          </div>
          <div class="row justify-content-between" v-show="!editstatus">
            <button class="btn btn-primary" type="button" @click="edit">
              取消
            </button>
            <button class="btn btn-primary" type="submit">
              確認
            </button>
          </div>
        </form>
      </div>
    </div>
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

      // 存放Api接回來的資料
      newdata: {},

      // 店家資料
      storeInfo: {
        title: '',
        engtitle: '',
        address: '',
        facebook: '',
        detail: '',
        summary: '',
        detailTotal: '',
        tel: '',
        businessTimeOpen: '',
        businessTimeClose: '',
        businessTime: '',
        DayOf: '',
        instagram: '',
      },

      // 編輯的開關
      editstatus: true,

      // 休假日
      DayOf: [],
    };
  },

  methods: {
    // 取得店家資料
    getInfoHandler() {
      getStoreTotalInfo().then((res) => {
        console.log(res);
        if (res.data.status === true) {
          this.newdata = res.data;
          this.storeInfo.title = this.newdata.Name;
          this.storeInfo.engtitle = this.newdata.EnglishName;
          this.storeInfo.tel = this.newdata.BasicData.Phone;
          this.storeInfo.address = this.newdata.BasicData.Address;
          this.storeInfo.facebook = this.newdata.BasicData.Facebook;
          this.storeInfo.instagram = this.newdata.BasicData.Instagram;
          this.storeInfo.detail = this.newdata.BasicData.Details;
          this.storeInfo.summary = this.newdata.BasicData.Summary;
          this.storeInfo.DayOf = this.newdata.Business.RestDayOfWeekString;
          this.storeInfo.businessTimeOpen = this.newdata.Business.BusinessHoursOpen;
          this.storeInfo.businessTimeClose = this.newdata.Business.BusinessHoursClose;
          this.isLoading = false;
        }
      });
    },

    //  修改店家資料
    putInfoHandler() {
      const data = this.$qs.stringify({
        Id: '2',
        Email: 'store@store',
        Password: '123',
        Address: this.storeInfo.address,
        BusinessHoursOpen: this.storeInfo.businessTimeOpen,
        EnglishName: this.storeInfo.engtitle,
        BusinessHoursClose: this.storeInfo.businessTimeClose,
        Instagram: this.storeInfo.instagram,
        Facebook: this.storeInfo.facebook,
        Name: this.storeInfo.title,
        Phone: this.storeInfo.tel,
        Summary: this.storeInfo.summary,
        Details: this.storeInfo.detail,
      });
      putStoreInfo(data).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.successedMessage();
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

    // 切換編輯模式
    edit() {
      this.editstatus = !this.editstatus;
    },
  },
  created() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scopeded>
[v-cloak] {
  display: none;
}
</style>
