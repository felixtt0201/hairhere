<template>
  <div id="designers" class="container-fluid">
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
                @click="updateInfo(dId)"
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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
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
                      v-model="designerInfo.name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="sex">性別</label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="male"
                        value="male"
                        v-model="designerInfo.sex"
                      />
                      <label class="form-check-label" for="male">男</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="female"
                        value="female"
                        v-model="designerInfo.sex"
                      />
                      <label class="form-check-label" for="female">女</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">電話/手機</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="請輸入電話/手機"
                    v-model="designerInfo.tel"
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
                    <div class="row"></div>
                    <label for="account">帳號(請輸入E-mail)</label>
                    <input
                      type="email"
                      class="form-control"
                      id="account"
                      placeholder="請輸入帳號"
                      v-model="designerInfo.account"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <div class="row"></div>
                    <label for="password">密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="請輸入密碼"
                      v-model="designerInfo.password"
                    />
                  </div>
                </div>
                <div class="form-row justify-content-end">
                  <div class="form-group col-md-6">
                    <div class="row"></div>
                    <label for="repassword">再次輸入密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="repassword"
                      placeholder="再次輸入密碼"
                      v-model="designerInfo.repassword"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <label for="description">我的專長/特色</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入我的專長/特色"
                    cols="30"
                    rows="5"
                    v-model="designerInfo.details"
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
            <button
              type="submit"
              class="btn btn-primary"
              @click="addInfoHandler"
            >
              確認
            </button>
          </div>
        </div>
      </div>
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
  getDesigner,
} from '@/js/AppServices';
import $ from 'jquery';

export default {
  data() {
    return {
      designerInfo: {
        name: '',
        tel: '',
        LineID: '',
        account: '',
        password: '',
        repassword: '',
        details: '',
        sex: '',
      },
      tempDesginersInfo: [],
    };
  },
  methods: {
    // 取的全部設計師
    getInfoHandler() {
      getAllDesigner().then((res) => {
        console.log(res);
        this.tempDesginersInfo = res.data;
      });
    },

    // 新增設計師
    addInfoHandler() {
      const data = this.$qs.stringify({
        Name: this.designerInfo.name,
        Email: this.designerInfo.account,
        Password: this.designerInfo.repassword,
        Sex: this.designerInfo.sex,
        LineID: this.designerInfo.LineID,
        Tel: this.designerInfo.tel,
        Detail: this.designerInfo.details,
      });
      $('#designerModal').modal('show');
      postDesinger(data).then((res) => {
        // console.log(res);
        if (res.data.status === false && res.data.message === '帳號重複') {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: '新增失敗',
            text: '帳號重複',
          });
        } else if (res.data.status === false) {
          this.unsuccessed();
        } else {
          const msg = '新增';
          this.successed(msg);
        }
      });
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

    // 修改設計師資料
    updateInfo(dId) {
      getDesigner(dId).then((res) => {
        console.log('singleIndo', res);
      });
      putDesigner(dId).then((res) => {
        console.log('put', res);
      });
    },

    // 提示-失敗
    unsuccessed() {
      this.$swal({
        position: 'center',
        icon: 'error',
        title: '新增失敗',
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
      }).then(() => {
        this.getInfoHandler();
        $('#designerModal').modal('hide');
      });
    },
  },
  mounted() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scopeded></style>
