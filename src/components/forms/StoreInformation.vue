<template>
  <div id="storeinformation" class="mt-4">
    <div class="row">
      <div class="col">
        <div class="row justify-content-between">
          <h4 class="mb-3 ml-3 text-gray-900 font-weight-bold">基本資料</h4>
          <button
            type="button"
            class="btn btn-primary btn-lg btn-icon-split mr-3"
            v-show="status"
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
        >
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="title" class="font-weight-bold">店家名稱：</label>
              <p
                for=""
                v-if="status"
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
                v-if="status"
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
              <p for="" v-if="status" class="text-muted text-gray-800">
                {{ storeInfo.businessTime }}
              </p>
              <input
                v-else
                type="text"
                class="form-control"
                id="businesstime"
                placeholder="請輸入時間 ex:9:00-18:00"
                value=""
                required
                v-model="storeInfo.businessTime"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="dayof" class="font-weight-bold">店休日：</label>
              <p for="" v-if="status" class="text-muted text-gray-800">
                星期日
              </p>
              <input
                v-else
                type="text"
                class="form-control"
                id="dayof"
                placeholder="請輸入星期幾 ex:星期日"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="address" class="font-weight-bold">店家地址：</label>
            <p for="" v-if="status" class="text-muted text-gray-800">
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
            <p for="" v-if="status" class="text-muted text-gray-800">
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
          <!-- <div class="mb-3">
            <label for="lastName" class="font-weight-bold">Instagram：</label>
            <p for="" v-if="status" class="text-muted text-gray-800">
              bac.ig.com
            </p>
            <input
              v-else
              type="text"
              class="form-control"
              id="instagram"
              placeholder="請輸入ig網址 ex:xxxx.ig"
              required
            />
          </div> -->
          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="font-weight-bold"
              >店家簡介：</label
            >
            <p for="" v-if="status" class="text-muted text-gray-800">
              <!-- {{ storeInfo.summary }}。 -->
              <!-- <br /> -->
              <!-- {{ storeInfo.detail }} -->
              {{ storeInfo.detailTotal }}
            </p>
            <textarea
              v-else
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="請輸入內容"
              v-model="storeInfo.detailTotal"
            ></textarea>
          </div>
          <div class="row justify-content-between" v-show="!status">
            <button class="btn btn-primary" type="submit">
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
        businessTime: '',
      },
      // 編輯的開關
      status: true,
    };
  },
  methods: {
    // 取得店家資料
    getStoreInfo() {
      const api = 'http://localhost:3000/store';
      this.axios.get(api).then((res) => {
        this.newdata = res.data;
        // console.log(this.newdata);
        this.storeInfo.title = this.newdata.Name;
        this.storeInfo.tel = this.newdata.BasicData.Phone;
        this.storeInfo.address = this.newdata.BasicData.Address;
        this.storeInfo.facebook = this.newdata.BasicData.Facebook;
        // this.storeInfo.summary = this.newdata.BasicData.Summary;
        // this.storeInfo.detail = this.newdata.BasicData.Details;
        this.storeInfo.detailTotal = `${this.newdata.BasicData.Summary}。${this.newdata.BasicData.Details}`;
        this.storeInfo.businessTime = `${this.newdata.Business.BusinessHoursOpen} ~ ${this.newdata.Business.BusinessHoursClose}`;
      });
    },
    // 修改店家資料
    putStoreInfo() {},

    // 切換編輯模式
    edit() {
      this.status = !this.status;
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
