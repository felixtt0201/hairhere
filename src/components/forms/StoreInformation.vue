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
          @submit.prevent="puti"
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
            <button class="btn btn-primary">
              test
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
        businessTime: '',
      },
      // 編輯的開關
      status: true,
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
        this.storeInfo.detailTotal = `${this.newdata.BasicData.Summary}。${this.newdata.BasicData.Details}`;
        this.storeInfo.businessTime = `${this.newdata.Business.BusinessHoursOpen} ~ ${this.newdata.Business.BusinessHoursClose}`;
      });
    },

    //  this.$qs.stringify(data)
    puti() {
      const data = this.$qs.stringify({
        Id: '2',
        Email: 'store@store',
        Password: 'blD7XIfS44Yq2UiAkzYJ0wlF+tMhMagBLmP9I7+QlHU=',
        Address: '高雄市苓雅區青年一路4巷21號',
        BusinessHoursOpen: '2021-01-06 10:30:00.000',
        BusinessHoursClose: '2021-01-06 18:00:00.000',
        Instagram: '',
        Facebook: 'https://www.facebook.com/lefahairsalon/',
        Twitter: '',
        Web: '',
        Name: '2222',
        Phone: '',
        Summary:
          '歐式溫馨鄉村風格的樂髮手作\\r\\n服務專業造型之外\\r\\n身邊有可愛貓咪陪伴身邊真的很逗趣\\r\\n歡迎愛貓咪的朋友們來朝聖唷',
        Details:
          '樂髮手作(喵員排行) 1.拿鐵（老大哥）♂ 「樂髮小老闆」，成天喜歡窩在家裡，膽小怕事、非常不喜歡上班，一副甘我屁事的表情！ 生日：105/07/05 外觀：布偶藍眼睛+咖啡白毛 個性：帥氣獨立、愛耍帥兼俗仔 專長：喜歡羽毛類玩具、愛欺負弟妹 喜好：肚子餓了會喵喵叫，深怕自己餓壞了。愛吃 2.姆姆（老大姐）♀ 「樂髮闆娘」，大姐風範，一上班便是監督奴才們有沒專心工作，淡定的坐在專屬闆娘位置！ 生日：105/09/23 外觀：短短腿奶茶毛色 個性：超冷靜、喜歡觀察、愛睡覺 專長：獨愛關於線類玩具 喜好：愛跟媽咪撒嬌、特愛吃肉泥 3.餅乾（排行老三）♀ 「樂髮三姐」，老是喜歡跟在拿鐵哥哥屁股後面混時間，不喜歡上班。怕事超級膽小 生日：108/04/24 外觀：灰色英短藍貓 個性：恰北北、膽小怕事、看心情撒嬌 專長：愛玩、愛模仿拿鐵哥 喜好：愛吃零食、欺負薯條弟弟 4.蛋捲（小老四）♀ 「樂髮公關貓」，超愛上班，每天都有白目事物發生，擁有狗靈魂的貓咪，過動活潑具有探險家精神 生日：108/06/15 外觀：虎斑長毛，像小獅子般 個性：溫馴活潑、親人親貓、超愛撒嬌 專長：在客人面前賣萌、老愛刷存在感深怕沒有人注意 喜好：愛吃愛玩什麼事都跑第一 5.薯條（老么）♂ 「樂髮加菲」，超級膽小，聽到上班就躲起來超級邊緣貓，臉上寫著我好無辜的表情。 生日：108/06/18 外觀：橘白毛色、鼻子扁扁 個性：傻憨可愛、膽小怕生 專長：裝憨憨呆呆的、愛玩 喜好：愛吃罐罐、被姐姐們欺負',
        Impressum: '',
        Remark: '',
      });
      updateStore(data).then((res) => {
        console.log(res);
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
