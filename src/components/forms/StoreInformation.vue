<template>
  <div id="storeinformation" class="mt-4">
    <div class="row">
      <div class="col">
        <div class="row justify-content-between">
          <h4 class="mb-3">基本資料</h4>

          <button class="btn btn-info" v-show="status" @click="edit">
            編輯
          </button>
        </div>
        <hr class="mb-4" />
        <form class="needs-validation" novalidate v-cloak>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName" class="font-weight-bold">店家名稱：</label>
              <p for="" v-if="status" class="text-muted">ABC</p>
              <input
                v-else
                type="text"
                class="form-control"
                id="Name"
                placeholder="請輸入名稱 ex:樂髮手作"
                value=""
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName" class="font-weight-bold">店家電話：</label>
              <p for="" v-if="status" class="text-muted">0912345678</p>
              <input
                v-else
                type="phone"
                class="form-control"
                id="Tel"
                placeholder="請輸入電話or手機"
                value=""
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName" class="font-weight-bold">營業時間：</label>
              <p for="" v-if="status" class="text-muted">星期一 ~ 星期六</p>
              <input
                v-else
                type="text"
                class="form-control"
                id="Name"
                placeholder="請輸入時間 ex:9:00-18:00"
                value=""
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName" class="font-weight-bold">店休日：</label>
              <p for="" v-if="status" class="text-muted">星期日</p>
              <input
                v-else
                type="text"
                class="form-control"
                id="Tel"
                placeholder="請輸入星期幾 ex:星期日"
                value=""
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="lastName" class="font-weight-bold">店家地址：</label>
            <p for="" v-if="status" class="text-muted">高雄市前鎮區</p>
            <input
              v-else
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入完整地址 ex:高雄市前鎮區"
              required
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="font-weight-bold">Facebook：</label>
            <p for="" v-if="status" class="text-muted">bac.facebook.com</p>
            <input
              v-else
              type="text"
              class="form-control"
              id="facebook"
              placeholder="請輸入臉書網址 ex:xxxxx.facebook"
              required
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="font-weight-bold">Instagram：</label>
            <p for="" v-if="status" class="text-muted">bac.ig.com</p>
            <input
              v-else
              type="text"
              class="form-control"
              id="instagram"
              placeholder="請輸入ig網址 ex:xxxx.ig"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="font-weight-bold"
              >店家簡介：</label
            >
            <p for="" v-if="status" class="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis fugiat earum iste aspernatur laborum? Saepe
              voluptates sint velit totam, ea ad sunt ratione consequatur sit?
              Delectus non excepturi ullam quos.
            </p>
            <textarea
              v-else
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="請輸入內容"
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
      status: true,
    };
  },
  methods: {
    edit() {
      this.status = !this.status;
    },
  },
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>
