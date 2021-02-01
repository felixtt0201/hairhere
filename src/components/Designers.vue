<template>
  <div id="designers" class="container-fluid">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">設計師管理</h1>
    </div>
    <ul class="row row-cols-1 row-cols-md-4">
      <li class="col mb-4" v-for="item in tempDesginersInfo" :key="item.Id">
        <div class="card h-100 border-0 shadow-sm">
          <img :src="item.PicturePath" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.Name }}</h5>
          </div>
          <div class="container mb-4">
            <div class="row justify-content-around">
              <button
                class="btn btn-primary btn-circle"
                @click="openModalHandler(false, item.Id)"
                v-if="item.WorkStatus == '在職中'"
              >
                <i class="fas fa-edit"></i>
              </button>
              <a class="btn btn-primary btn-circle disabled" v-else>
                <i class="fas fa-edit"></i>
              </a>
              <a
                href="#"
                class="btn btn-danger btn-circle"
                @click="deleteInfoHandler(item.Id)"
                v-if="item.WorkStatus == '在職中'"
              >
                <i class="fas fa-trash"></i>
              </a>
              <a class="btn btn-danger btn-circle disabled" v-else>
                <i class="fas fa-trash"></i>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="row justify-content-center mt-3 mb-3">
      <button
        type="button"
        class="btn btn-primary btn-lg btn-icon-split"
        data-toggle="modal"
        data-target="#designerModal"
        @click="openModalHandler(true)"
      >
        <span class="icon text-white-50">
          <i class="fas fa-user-plus"></i>
        </span>
        <span class="text">新增設計師</span>
      </button>
    </div>

    <!-- 分頁 -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: index == 1 }">
          <a
            class="page-link path"
            href="#"
            aria-label="Previous"
            @click.prevent="getPageHandler(index - 1)"
            ><i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <!-- pageLi -->
        <li
          class="page-item"
          v-for="page in pages"
          :key="page"
          @click="getPageHandler(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <!-- pageLi -->
        <li class="page-item" :class="{ disabled: index == pages }">
          <a
            class="page-link path"
            href="#"
            aria-label="Next"
            @click="getPageHandler(index + 1)"
            ><i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- 分頁 -->
    <!--Modal-->
    <!---新增設計師-->
    <div
      class="modal fade text-gray-900"
      id="designerModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="designerModal"
      aria-hidden="true"
      v-if="isNew"
    >
      <form action="" @submit.prevent="postInfoHandler">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="designerModal">
                <span>新增設計師</span>
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
                <div class="col-sm-4">
                  <h2>設計師資料</h2>
                </div>
                <div class="col-sm-8">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="name">姓名</label>
                      <input
                        type="text"
                        class="form-control"
                        id="category"
                        placeholder="請輸入姓名"
                        v-model="addNewInfo.dName"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">選擇設計師代表色</label>
                      <input
                        type="color"
                        class="form-control"
                        id="category"
                        placeholder="可以選擇設計師代表顏色"
                        list="colors"
                        v-model="addNewInfo.Color"
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
                    <label for="phone">電話/手機</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="請輸入電話/手機"
                      v-model="addNewInfo.dPhone"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="instagram">Instagram</label>
                    <input
                      type="text"
                      class="form-control"
                      id="instagram"
                      placeholder="instagram"
                      v-model="addNewInfo.dInstagram"
                    />
                  </div>
                  <div class="form-group">
                    <label for="lineId">LineID</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lineId"
                      placeholder="LineID"
                      v-model="addNewInfo.dLine"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="account">帳號(請輸入E-mail)</label>
                      <input
                        type="email"
                        class="form-control"
                        id="account"
                        placeholder="請輸入帳號"
                        v-model="addNewInfo.dEmail"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="password">密碼</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="請輸入密碼"
                        v-model="addNewInfo.dPassword"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row"></div>
                  <hr />
                  <div class="form-group">
                    <p for="description">我的專長/特色</p>
                    <textarea
                      type="text"
                      class="form-control"
                      id="description"
                      placeholder="請輸入我的專長/特色"
                      cols="30"
                      rows="5"
                      v-model="addNewInfo.dDetails"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <a
                href="#top"
                type="button"
                class="btn btn-outline-secondary"
                @click="closeModalHandler"
              >
                取消
              </a>
              <button type="submit" class="btn btn-primary">
                確認
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!--編輯設計師-->
    <div
      class="modal fade text-gray-900"
      id="designerModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="designerModal"
      aria-hidden="true"
      v-else
    >
      <form @submit.prevent="putSingleInfoHander(tempInfo.Id)">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="designerModal">
                <span>編輯設計師</span>
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
                <div class="col-sm-4">
                  <h2>設計資料</h2>
                  <div class="form-group">
                    <div class="file btn btn-lg btn-primary">
                      個人照片上傳
                      <i class="fas fa-cog fa-spin" v-if="donewithUpload"></i>
                      <input
                        type="file"
                        id="designerphoto"
                        class="form-control btn myinput"
                        ref="files"
                        @change="uploadPhotoHandler(tempInfo.Id)"
                      />
                    </div>
                  </div>
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid"
                    alt=""
                    :src="tempInfo.PicturePath"
                  />
                </div>
                <div class="col-sm-8">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="name">姓名</label>
                      <input
                        type="text"
                        class="form-control"
                        id="category"
                        placeholder="請輸入姓名"
                        v-model="tempInfo.Name"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">選擇設計師代表色</label>
                      <input
                        type="color"
                        class="form-control"
                        id="category"
                        placeholder="可以選擇設計師代表顏色"
                        v-model="tempInfo.Color"
                        list="colors"
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
                    <label for="phone">電話/手機</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="請輸入電話/手機"
                      v-model="tempInfo.Phone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="instagram">Instagram</label>
                    <input
                      type="text"
                      class="form-control"
                      id="instagram"
                      placeholder="instagram"
                      v-model="tempInfo.Instagram"
                    />
                  </div>
                  <div class="form-group">
                    <label for="lineId">LineID</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lineId"
                      placeholder="LineID"
                      v-model="tempInfo.Line"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="account">帳號(請輸入E-mail)</label>
                      <input
                        type="email"
                        class="form-control"
                        id="account"
                        placeholder="請輸入帳號"
                        v-model="tempInfo.Email"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="password">密碼</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="請輸入密碼"
                        v-model="tempInfo.Password"
                      />
                    </div>
                  </div>
                  <div class="form-row"></div>
                  <hr />
                  <div class="form-group">
                    <p for="description">我的專長/特色</p>
                    <textarea
                      type="text"
                      class="form-control"
                      id="description"
                      placeholder="請輸入我的專長/特色"
                      cols="30"
                      rows="5"
                      v-model="tempInfo.Details"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <a
                href="#top"
                type="button"
                class="btn btn-outline-secondary"
                @click="closeModalHandler"
              >
                取消
              </a>
              <button type="submit" class="btn btn-primary">
                編輯
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--Modal-->
  </div>
</template>

<script>
import {
  postDesinger,
  getAllDesigner,
  getDesignerInfoBack,
  putDesigner,
  patchDesignerStatus,
  patchDesignerPhoto,
} from '@/js/AppServices';
import $ from 'jquery';

export default {
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      // 接全部的設計師資料
      tempDesginersInfo: [],

      // 新增設計師
      addNewInfo: {
        dName: '',
        dPhone: '',
        dInstagram: '',
        dLine: '',
        dEmail: '',
        dPassword: '',
        dDetails: '',
        Color: '',
      },

      // 修改單一設計師資料
      tempInfo: {},
      isNew: false,
      donewithUpload: false,
      pages: [],
      index: 1,

      loginStoreId: null,
    };
  },
  methods: {
    // 分頁
    getPageHandler(page = 1) {
      getAllDesigner(this.loginStoreId, page, 3).then((res) => {
        console.log(res);
        if (res.data.status) {
          this.tempDesginersInfo = res.data.TotalData;
          this.pages = Math.ceil(res.data.Count / res.data.Limit);
          this.index = res.data.Index;
          this.isLoading = false;
        } else {
          this.isLoading = false;
        }
      });
    },
    // 取的全部設計師
    getInfoHandler() {
      getAllDesigner(this.loginStoreId, 1, 8).then((res) => {
        console.log(res);
        if (res.data.status) {
          this.tempDesginersInfo = res.data.TotalData;
          this.pages = Math.ceil(res.data.Count / res.data.Limit);
          this.index = res.data.Index;
          this.isLoading = false;
        } else {
          this.isLoading = false;
        }
      });
    },

    // 取得單一設計師
    getSingleInfoHandler(id) {
      this.isNew = false;
      this.tempInfo = {};
      getDesignerInfoBack(id).then((res) => {
        this.tempInfo = res.data;
      });
    },
    // 新增設計師
    postInfoHandler() {
      const data = this.$qs.stringify({
        Email: this.addNewInfo.dEmail,
        Password: this.addNewInfo.dPassword,
        Name: this.addNewInfo.dName,
        Phone: this.addNewInfo.dPhone,
        Instagram: this.addNewInfo.dInstagram,
        Details: this.addNewInfo.Details,
        Line: this.addNewInfo.dLine,
        Color: this.addNewInfo.Color,
      });
      const smsg = '新增';
      postDesinger(this.loginStoreId, data).then((res) => {
        console.log(res);
        if (res.data.status) {
          this.successed(smsg);
        } else if (res.data.message === '帳號重複') {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: `${smsg}失敗`,
            text: '帳號重複',
          });
        } else {
          this.unsuccessed(smsg);
        }
      });
    },

    // 編輯單一設計師
    putSingleInfoHander(dId) {
      const data = this.$qs.stringify({
        Id: this.tempInfo.Id,
        Picture: this.tempInfo.Picture,
        Birthday: '',
        StoreId: this.loginStoreId,
        Name: this.tempInfo.Name,
        Phone: this.tempInfo.Phone,
        Email: this.tempInfo.Email,
        Password: this.tempInfo.Password,
        OldPassword: this.tempInfo.OldPassword,
        PasswordSalt: this.tempInfo.PasswordSalt,
        Summary: '',
        Instagram: this.tempInfo.Instagram,
        Facebook: '',
        Twitter: '',
        Web: '',
        Details: this.tempInfo.Details,
        EnglishName: '',
        Skill: '',
        Line: this.tempInfo.Line,
        WorkStatus: 1,
        Color: this.tempInfo.Color,
      });
      putDesigner(data, dId).then((res) => {
        if (res.data.status === true) {
          const psmg = '更新';
          this.successed(psmg);
        }
        console.log('put', res.data);
      });
    },

    // 上傳照片
    uploadPhotoHandler(dId) {
      this.donewithUpload = true;
      const designerPhoto = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', designerPhoto);
      patchDesignerPhoto(dId, formData).then((res) => {
        console.log('pic', res);
        this.donewithUpload = false;
        this.getSingleInfoHandler(dId);
      });
    },

    // 修改設計師狀態 (在職/離職)
    deleteInfoHandler(dId) {
      this.$swal({
        title: '您確定要更改此設計師狀態？',
        icon: 'warning',
        text: '將設計師狀態更改為離職',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: '確定',
        cancelButtonColor: '#d33',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal(
            {
              icon: 'success',
              title: '更改成功',
              timer: 1500,
            },
            this.changeStatusHandler(dId),
          );
        }
      });
    },
    changeStatusHandler(dId) {
      const data = this.$qs.stringify({
        WorkStatus: '0',
      });
      patchDesignerStatus(data, dId).then(() => {
        this.getPageHandler();
        // console.log(res);
      });
    },

    // 判斷是新增設計師or編輯設計師
    openModalHandler(isNew, id) {
      if (isNew) {
        this.tempInfo = {};
        this.isNew = true;
      } else {
        this.getSingleInfoHandler(id);
      }
      $('#designerModal').modal('show');
    },

    // 提示-失敗
    unsuccessed(msg) {
      this.$swal({
        position: 'center',
        icon: 'error',
        title: `${msg}失敗`,
      }).then(() => {
        this.getPageHandler();
      });
    },
    // 提示-成功
    successed(msg) {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: `${msg}成功`,
        timer: 1500,
      }).then(() => {
        this.getPageHandler();
        this.addNewInfo = {};
        $('#designerModal').modal('hide');
      });
    },
    closeModalHandler() {
      $('#designerModal').modal('hide');
    },
  },
  created() {
    this.loginStoreId = JSON.parse(localStorage.getItem('storeDetails')).Id;
  },
  mounted() {
    this.getPageHandler();
  },
};
</script>

<style lang="scss" scoped>
.myinput {
  position: absolute;
  // font-size: 50px;
  width: 100%;
  height: 100% !important;
  opacity: 0;
  right: 0;
  top: 0;
}
.file {
  position: relative;
}
</style>
