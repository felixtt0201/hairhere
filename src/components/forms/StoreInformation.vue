<template>
  <div id="storeinformation" class="mt-4">
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
          @submit.prevent="putStoreInfo"
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
              <input
                v-else
                type="text"
                class="form-control"
                id="dayof"
                placeholder="請輸入星期幾 ex:星期日"
                v-model="storeInfo.DayOf"
              />
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
          <div class="mb-3">
            <label for="lastName" class="font-weight-bold">Facebook：</label>
            <p for="" v-if="editstatus" class="text-muted text-gray-800">
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
              <!-- {{ storeInfo.summary }}。 -->
              <!-- <br /> -->
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
import { storeTotalInfo, updateStore } from '@/js/AppServices';

export default {
  data() {
    return {
      // 存放Api接回來的資料
      newdata: {},
      // 店家資料
      storeInfo: {
        title: '',
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
      },
      // 編輯的開關
      editstatus: true,
    };
  },

  methods: {
    // 取得店家資料
    getStoreInfo() {
      storeTotalInfo().then((res) => {
        // console.log(res);
        this.newdata = res.data;
        this.storeInfo.title = this.newdata.Name;
        this.storeInfo.tel = this.newdata.BasicData.Phone;
        this.storeInfo.address = this.newdata.BasicData.Address;
        this.storeInfo.facebook = this.newdata.BasicData.Facebook;
        this.storeInfo.detail = this.newdata.BasicData.Details;
        this.storeInfo.summary = this.newdata.BasicData.Summary;
        this.storeInfo.DayOf = this.newdata.Business.RestDayOfWeekString;
        this.storeInfo.businessTimeOpen = this.newdata.Business.BusinessHoursOpen;
        this.storeInfo.businessTimeClose = this.newdata.Business.BusinessHoursClose;
      });
    },

    //  修改店家資料
    putStoreInfo() {
      const data = this.$qs.stringify({
        Id: '2',
        Email: 'store@store',
        Password: 'blD7XIfS44Yq2UiAkzYJ0wlF+tMhMagBLmP9I7+QlHU=',
        Address: this.storeInfo.address,
        BusinessHoursOpen: this.storeInfo.businessTimeOpen,
        BusinessHoursClose: this.storeInfo.businessTimeClose,
        Instagram: '',
        Facebook: this.storeInfo.facebook,
        Twitter: '',
        Web: '',
        Name: this.storeInfo.title,
        Phone: this.storeInfo.tel,
        Summary: this.storeInfo.summary,
        Details: this.storeInfo.detail,
        Impressum: '',
        Remark: '',
      });
      updateStore(data).then((res) => {
        if (res.status === 200) {
          this.successedUpdate();
        }
      });
    },

    // 提示-修改成功
    successedUpdate() {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: '修改成功',
      }).then(() => {
        this.edit();
      });
    },

    // 切換編輯模式
    edit() {
      this.editstatus = !this.editstatus;
    },
  },
  mounted() {
    this.getStoreInfo();
  },
};
</script>

<style lang="scss" scopeded>
[v-cloak] {
  display: none;
}
</style>
