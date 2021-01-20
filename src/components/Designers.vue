<template>
  <div id="designers" class="container-fluid">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#b7b9cc"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">設計師管理</h1>
    </div>
    <ul class="row row-cols-1 row-cols-md-4">
      <li class="col mb-4" v-for="item in tempDesginersInfo" :key="item.Id">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.Name }}</h5>
          </div>
          <div class="container mb-4">
            <div class="row justify-content-around">
              <a
                href="#"
                class="btn btn-success btn-circle"
                @click="openModalHandler(false, item)"
              >
                <i class="fas fa-edit"></i>
              </a>
              <a
                href="#"
                class="btn btn-danger btn-circle"
                @click="deleteInfoHandler(item.Id)"
              >
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
    <!--Modal-->
    <div
      class="modal fade text-gray-900"
      id="designerModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="designerModal"
      aria-hidden="true"
    >
      <form action="" @submit.prevent="addInfoHandler">
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
                  <h2>設計師個人照片</h2>
                  <div class="form-group">
                    <label for="designerphoto"
                      >上傳照片
                      <!-- <i class="fas fa-cog fa-spin"></i> -->
                    </label>
                    <input
                      type="file"
                      id="designerphoto"
                      class="form-control"
                      ref="files"
                    />
                  </div>
                  <!-- <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                /> -->
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
                      />
                    </div>
                  </div>
                  <div class="form-row justify-content-end">
                    <div class="form-group col-md-6">
                      <label for="repassword">再次輸入密碼</label>
                      <input
                        type="password"
                        class="form-control"
                        id="repassword"
                        placeholder="再次輸入密碼"
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
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                取消
              </button>
              <button type="submit" class="btn btn-primary">
                確認
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
  deleteDesigner,
  putDesigner,
} from '@/js/AppServices';
import $ from 'jquery';

export default {
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      tempDesginersInfo: [],
      // 修改單一設計師資料
      tempInfo: {},
      isNew: false,
    };
  },
  methods: {
    // selectSkill
    sendInfo() {
      console.log(this.selectSkills);
    },

    // 取的全部設計師
    getInfoHandler() {
      getAllDesigner().then((res) => {
        console.log(res);
        if (res.data.status === true) {
          this.tempDesginersInfo = res.data.BasicData;
          this.isLoading = false;
        }
      });
    },

    // 新增或者修改設計師
    addInfoHandler() {
      const postmsg = '新增';
      const putmsg = '更新';
      if (this.isNew) {
        postDesinger(this.$qs.stringify(this.tempInfo)).then((res) => {
          if (res.data.status === false && res.data.message === '帳號重複') {
            this.$swal({
              position: 'center',
              icon: 'error',
              title: '新增失敗',
              text: '帳號重複',
            });
          } else if (res.data.status === false) {
            this.unsuccessed(postmsg);
          } else {
            this.successed(postmsg);
          }
        });
      } else {
        putDesigner(this.$qs.stringify(this.tempInfo), this.tempInfo.Id).then(
          (res) => {
            if (res.data.status === false && res.data.message === '驗證錯誤') {
              this.$swal({
                position: 'center',
                icon: 'error',
                title: '更新失敗',
                text: '帳號或密碼錯誤',
              });
            } else if (res.data.status === false) {
              this.unsuccessed(putmsg);
            } else {
              this.successed(putmsg);
            }
          },
        );
      }
    },

    // 刪除設計師
    deleteInfoHandler(dId) {
      this.$swal({
        title: '您確定要刪除？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: '確定',
        cancelButtonColor: '#d33',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          deleteDesigner(dId).then((res) => {
            console.log(res);
          });
          const msg = '刪除';
          this.successed(msg);
        }
      });
    },

    openModalHandler(isNew, item) {
      if (isNew) {
        this.tempInfo = {};
        this.isNew = true;
      } else {
        this.tempInfo = Object.assign(item, {});
        this.isNew = false;
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
        this.getInfoHandler();
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
        this.getInfoHandler();
        $('#designerModal').modal('hide');
      });
    },
  },
  created() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scopeded></style>
