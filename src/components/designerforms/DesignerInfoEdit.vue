<template>
  <div class="container-fluid text-left">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="form-row">
          <div class="col-md-12">
            <h2>個人照片</h2>
            <div class="form-group" v-if="editstatus">
              <img class="img-fluid" :src="designerInfo.PicturePath" alt="" />
            </div>
            <div class="form-group" v-else>
              <img
                img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                class="img-fluid"
                alt=""
                :src="designerInfo.PicturePath"
              />
              <div class="form-group">
                <div
                  class="file btn btn-lg btn-primary"
                  style="position:relative;"
                >
                  個人照片上傳
                  <i class="fas fa-cog fa-spin" v-if="donewithUpload"></i>
                  <input
                    type="file"
                    id="designerphoto"
                    class="form-control btn myinput"
                    ref="files"
                    @change="uploadPhotoHandler"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="col-md-6">
            <label for="name" class="text-gray-800">姓名：</label>
            <p v-if="editstatus">{{ designerInfo.Name }}</p>
            <input
              v-else
              type="text"
              class="form-control"
              id="category"
              placeholder="請輸入姓名"
              v-model="designerInfo.Name"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="name" class="text-gray-800">設計師代表色：</label>
            <div
              :style="{ background: designerInfo.Color, padding: '10px' }"
              v-if="editstatus"
            ></div>
            <input
              v-else
              type="color"
              class="form-control"
              id="category"
              placeholder="可以選擇設計師代表顏色"
              list="colors"
              v-model="designerInfo.Color"
            />
            <datalist id="colors">
              <option>#FFC312</option>
              <option>#C4E538</option>
              <option>#12CBC4</option>
              <option>#FDA7DF</option>
              <option>#ED4C67</option>
              <option>#F79F1F</option>
              <option>#A3CB38</option>
              <option>#1289A7</option>
              <option>#D980FA</option>
              <option>#B53471</option>
              <option>#EE5A24</option>
              <option>#009432</option>
              <option>#0652DD</option>
              <option>#9980FA</option>
              <option>#833471</option>
              <option>#EA2027</option>
              <option>#006266</option>
              <option>#1B1464</option>
              <option>#5758BB</option>
              <option>#6F1E51</option>
            </datalist>
          </div>
        </div>
        <div class="form-group">
          <label for="phone" class="text-gray-800">電話/手機：</label>
          <p v-if="editstatus">{{ designerInfo.Phone }}</p>
          <input
            v-else
            type="text"
            class="form-control"
            id="phone"
            placeholder="請輸入電話/手機"
            required
            v-model="designerInfo.Phone"
          />
        </div>
        <div class="form-group">
          <label for="instagram" class="text-gray-800">Instagram：</label>
          <p v-if="editstatus">{{ designerInfo.Instagram }}</p>
          <input
            v-else
            type="text"
            class="form-control"
            id="instagram"
            v-model="designerInfo.Instagram"
            placeholder="instagram"
          />
        </div>
        <div class="form-group">
          <label for="lineId" class="text-gray-800">LineID：</label>
          <p v-if="editstatus">{{ designerInfo.Line }}</p>
          <input
            v-else
            type="text"
            class="form-control"
            id="lineId"
            placeholder="LineID"
            v-model="designerInfo.Line"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="account" class="text-gray-800">帳號：</label>
            <p>
              {{ designerInfo.Email }}
            </p>
          </div>
          <div v-if="editstatus"></div>
          <div class="form-group col-md-6" v-else>
            <label for="password" class="text-gray-800">密碼：</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
              v-model="designerInfo.Password"
            />
          </div>
        </div>
        <hr />
        <div class="form-group">
          <p for="description" class="text-gray-800">我的專長/特色：</p>
          <p v-if="editstatus" v-html="reSummary"></p>
          <textarea
            v-else
            type="text"
            class="form-control"
            id="description"
            placeholder="請輸入我的專長/特色"
            cols="30"
            rows="5"
            v-model="designerInfo.Summary"
          ></textarea>
        </div>
        <div class="form-group">
          <p for="description" class="text-gray-800">我的專長/特色：</p>
          <p v-if="editstatus" v-html="reDetails"></p>
          <textarea
            v-else
            type="text"
            class="form-control"
            id="description"
            placeholder="請輸入我的專長/特色"
            cols="30"
            rows="5"
            v-model="designerInfo.Details"
          ></textarea>
        </div>
      </div>
      <div class="col-md-8 text-right">
        <a
          href="#top"
          type="button"
          class="btn btn-outline-secondary"
          @click="cancel"
        >
          取消
        </a>
        <button
          type="submit"
          class="btn btn-primary"
          @click="edit"
          v-if="editstatus"
        >
          編輯
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          @click="putSingleInfoHander"
          v-else
        >
          確認
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDesignerInfoBack,
  putDesigner,
  patchDesignerPhoto,
} from '@/js/DesignerServices';

export default {
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      // 存放Api接回來的設計師資料
      designerInfo: {},
      reSummary: '',
      reDetails: '',

      // 編輯的開關
      editstatus: true,

      // 設計師Id
      dId: null,

      // 店家Id
      storeId: null,

      // 上傳檔案
      donewithUpload: false,

      // 設計師Token
      dToken: null,
    };
  },

  methods: {
    // 取的設計師資料
    getInfo() {
      getDesignerInfoBack(this.dId).then((res) => {
        this.designerInfo = res.data;
        this.reSummary = res.data.Summary.replace(/(?:\r\n|\r|\n)/g, '<br />');
        this.reDetails = res.data.Details.replace(/(?:\r\n|\r|\n)/g, '<br />');
        this.isLoading = false;
      });
    },

    // 編輯設計師資料
    putSingleInfoHander() {
      const data = this.$qs.stringify({
        Id: this.designerInfo.Id,
        Picture: this.designerInfo.Picture,
        Birthday: '',
        StoreId: this.storeId,
        Name: this.designerInfo.Name,
        Phone: this.designerInfo.Phone,
        Email: this.designerInfo.Email,
        Password: this.designerInfo.Password,
        OldPassword: this.designerInfo.OldPassword,
        PasswordSalt: this.designerInfo.PasswordSalt,
        Summary: this.designerInfo.Summary,
        Instagram: this.designerInfo.Instagram,
        Facebook: '',
        Twitter: '',
        Web: '',
        Details: this.designerInfo.Details,
        EnglishName: '',
        Skill: '',
        Line: this.designerInfo.Line,
        WorkStatus: 1,
        Color: this.designerInfo.Color,
      });
      putDesigner(data, this.dId, this.dToken).then((res) => {
        if (res.data.status) {
          this.successedMessage();
          this.getInfo();
        }
      });
    },

    // 上傳照片
    uploadPhotoHandler() {
      this.donewithUpload = true;
      const designerPhoto = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', designerPhoto);
      patchDesignerPhoto(this.dId, formData, this.dToken).then(() => {
        this.donewithUpload = false;
        this.getInfo();
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
      });
    },
    // 切換編輯模式
    edit() {
      this.editstatus = !this.editstatus;
    },
    cancel() {
      this.editstatus = true;
    },
  },
  created() {
    const designerInfo = JSON.parse(localStorage.getItem('desginderDetails'));
    this.dId = designerInfo.Id;
    this.storeId = designerInfo.StoreId;
    this.dToken = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)desingerToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scopeded>
.myinput {
  position: absolute;
  font-size: 50px;
  opacity: 0;
  right: 0;
  top: 0;
}
</style>
