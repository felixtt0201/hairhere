/* eslint-disable no-plusplus */
<template>
  <div id="portfolio" class="container-fluid">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>

    <div class="row justify-content-between mt-3 mb-3">
      <h3 class="mb-0 text-gray-800">作品集管理</h3>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-icon-split"
        data-toggle="modal"
        data-target="#staticBackdrop"
        @click="openModal(true)"
      >
        <span class="icon text-white-50">
          <i class="fas fa-plus"></i>
        </span>
        <span class="text">新增作品</span>
      </button>
    </div>
    <!-- 作品資訊 -->
    <div class="row row-cols-1 row-cols-md-3 mt-4">
      <div class="col mb-4" v-for="product in comebackinfo" :key="product.Id">
        <div class="card h-100 border-0 shadow-sm">
          <img :src="product.Photo1" class="d-block w-100" alt="error" />

          <div class="card-body">
            <h5 class="card-title text-center text-gray-900">
              作品名稱：{{ product.Name }}
            </h5>
            <h5 class="card-title text-center text-gray-900">
              設計師：{{ product.DesignerName }}
            </h5>
            作品描述：
            <p
              class="card-text text-gray-800"
              v-html="product.Summary.replace(/(?:\r\n|\r|\n)/g, '<br />')"
            ></p>
          </div>
          <div class="container mb-4">
            <div class="row justify-content-around">
              <a
                href="#"
                class="btn btn-success btn-circle"
                data-toggle="modal"
                data-target="#staticBackdrop"
                @click="openModal(false, product)"
              >
                <i class="fas fa-edit"></i>
                編輯
              </a>
              <a
                href="#"
                class="btn btn-danger btn-circle"
                @click="deleteInfoHandler(product.Id)"
              >
                <i class="fas fa-trash"></i>
                刪除
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---分頁-->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: index == 1 }">
          <a
            class="page-link path"
            href="#"
            aria-label="Previous"
            @click.prevent="changePage(index - 1)"
            ><i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <!-- pageLi -->
        <li
          class="page-item"
          v-for="page in pages"
          :key="page"
          @click="changePage(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <!-- pageLi -->
        <li class="page-item" :class="{ disabled: index == pages }">
          <a
            class="page-link path"
            href="#"
            aria-label="Next"
            @click="changePage(index + 1)"
            ><i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!--Modal-->
    <form @submit.prevent="postInfoHandler">
      <div
        class="modal fade text-gray-900"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>新增作品</span>
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
                <div class="col-md-4">
                  <h2>作品照片</h2>
                  <!-- <input
                    type="file"
                    class="form-control mb-3"
                    ref="files"
                    multiple
                    @change="uploadPhoto"
                  />
                  <span class="text-danger"
                    >*格式限制JPG/PNG,一次多張,至多三張</span
                  > -->

                  <!-- new uploadPhoto -->
                  <span>選擇上傳照片</span>
                  <div>
                    <input
                      type="file"
                      class="form-control mb-3"
                      name="image"
                      ref="files"
                      multiple
                      @change="selectPhoto"
                    />
                    <button
                      @click="uploadPhoto"
                      type="button"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-cog fa-spin" v-if="fileUploading"></i>
                      上傳照片
                    </button>
                  </div>
                  <p class="text-danger">*格式限制JPG/PNG,一次多張,至多三張</p>

                  <!-- end new uploadPhoto -->
                </div>
                <div class="img-view">
                  <h4 class="ml-3 mt-3" v-if="photosView != 0">圖片預覽</h4>
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    :src="view"
                    v-for="(view, index) in photosView"
                    :key="index"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col mb-4">
                  <p for="title">作品名稱：</p>
                  <input
                    type="text"
                    id="title"
                    class="outlineShow"
                    placeholder="請輸入作品名稱 ex:閃電藍"
                    v-model="formProduct.Name"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <label>設計師姓名：{{ desingerName }}</label>
                  </div>
                </div>
                <div class="col-6">
                  <label>作品分類（多選 至少選一項）：</label>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="male"
                      value="男"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="male">男生</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="female"
                      value="女"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="female"
                      >女生</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="longhair"
                      value="長髮"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="longhair"
                      >長髮</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="shorthair"
                      value="短髮"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="shorthair"
                      >短髮</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dyehair"
                      value="染髮"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="dyehair"
                      >染髮</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input chkbox"
                      id="permhair"
                      value="燙髮"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="permhair"
                      >燙髮</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input chkbox"
                      id="specialpermhair"
                      value="設計染"
                      name="Category"
                      ref="cat"
                      v-model="categoryCheckbox"
                    />
                    <label class="custom-control-label" for="specialpermhair"
                      >特殊/設計染</label
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="summary">作品介紹：</label>
                    <textarea
                      type="text"
                      class="form-control tex"
                      id="summary"
                      placeholder="請輸入作品介紹"
                      cols="30"
                      rows="5"
                      v-model="formProduct.Summary"
                      required
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
      </div>
    </form>

    <!--Modal-->
  </div>
</template>

<script>
import $ from 'jquery';
import {
  postPortfolio,
  patchWork,
  deleteWork,
  getDesignerWorks,
  getDesignerListSelect,
  postPhoto,
} from '@/js/DesignerServices';
// import { getworkss } from '@/js/FontAppServices';

export default {
  name: 'porfolio',
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      designerInfo: [], // get設計師資訊
      fileUploading: false,
      comebackinfo: [], // get作品資訊
      formProduct: {
        Category: '', // 作品欄位
        DesignerId: '', // 設計師id
        Name: '', // 作品名稱
        Summary: '', // 作品介紹
        Photo1: '',
        Photo2: '',
        Photo3: '',
      },
      desingerName: '', // 顯示設計師名字
      isNew: true, // 判斷新增or編輯狀態
      desingerId: '', // 設計師Id
      index: 0, // 目前頁數
      pages: [],
      categoryCheckbox: [], // 先裝勾選的分類
      photosView: [], // 接回圖片網址
      loginId: null,
      storeId: null,
      images: [],
      dToken: null,
    };
  },
  methods: {
    // 測試選擇圖片
    selectPhoto() {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.$refs.files.files.length; i++) {
        this.images.push(this.$refs.files.files[i]);
      }
    },
    uploadPhoto() {
      this.fileUploading = true;
      const formData = new FormData();
      if (this.images.length > 0) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < this.images.length; i++) {
          const file = this.images[i];
          formData.append(`files[${i}]`, file);
        }
        postPhoto(formData, this.dToken).then((res) => {
          if (res.data.status) {
            this.images = [];
            this.photosView = res.data.PhotoPathList;
            // eslint-disable-next-line prefer-destructuring
            this.formProduct.Photo1 = res.data.photoList[0];
            // eslint-disable-next-line prefer-destructuring
            this.formProduct.Photo2 = res.data.photoList[1];
            // eslint-disable-next-line prefer-destructuring
            this.formProduct.Photo3 = res.data.photoList[2];
            this.fileUploading = false;
          }
        });
      } else {
        this.$swal({
          title: '請選擇照片',
          position: 'center',
          icon: 'error',
        }).then(() => {
          this.fileUploading = false;
        });
      }
    },

    // 分頁
    changePage(page) {
      this.getPageHandler(page);
    },
    // 取的作品資訊(分頁)
    getPageHandler(page = 1) {
      getDesignerWorks(this.storeId, this.loginId, page).then((res) => {
        if (res.data.status) {
          this.comebackinfo = res.data.BasicData;
          this.pages = Math.ceil(res.data.Count / res.data.Limit);
          this.index = res.data.Index;
          this.isLoading = false;
        }
      });
    },

    // 取得設計師資訊
    getDesignersInfo() {
      getDesignerListSelect(this.storeId).then((res) => {
        this.designerInfo = res.data;
        res.data.forEach((i) => {
          if (i.Id === this.loginId) {
            this.desingerName = i.Name;
          }
        });
      });
    },

    // 共用modal，判斷新增or編輯
    openModal(isNew, product) {
      $('#staticBackdrop').modal('show');
      if (isNew) {
        this.formProduct = {};
        this.categoryCheckbox = [];
        this.isNew = true;
        this.$refs.files.value = ''; // 將files欄位清空
        this.fileUploading = false;
      } else {
        this.formProduct = { ...product };
        this.photosView = '';
        this.desingerName = this.formProduct.DesignerName;
        this.categoryCheckbox = this.formProduct.Category.split(',');
        this.isNew = false;
        this.fileUploading = false;
      }
    },
    // 新增作品
    postInfoHandler() {
      if (this.isNew) {
        const categoryString = this.categoryCheckbox.toString();
        this.formProduct.Category = categoryString;
        this.formProduct.DesignerId = this.loginId;
        postPortfolio(this.$qs.stringify(this.formProduct), this.dToken).then(
          (res) => {
            if (res.data.status) {
              this.getPageHandler();
              $('#staticBackdrop').modal('hide');
              this.$swal({
                title: '新增成功',
                position: 'center',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              });
              this.fileUploading = false;
            }
          },
        );
      } else {
        // 編輯作品：全部
        const data = this.$qs.stringify({
          Id: this.formProduct.Id,
          DesignerId: this.formProduct.DesignerId,
          Name: this.formProduct.Name,
          Summary: this.formProduct.Summary,
          Category: this.categoryCheckbox.toString(),
          Photo1: this.formProduct.Photo1,
          Photo2: this.formProduct.Photo2,
          Photo3: this.formProduct.Photo3,
        });
        patchWork(this.formProduct.Id, data, this.dToken).then((res) => {
          if (res.data.status) {
            this.getPageHandler();
            $('#staticBackdrop').modal('hide');
            this.$swal({
              icon: 'success',
              title: '更改成功',
              timer: 1500,
            });
          }
        });
      }
    },

    // 刪除作品
    deleteInfoHandler(workId) {
      this.$swal({
        title: '您確定要刪除？',
        icon: 'warning',
        position: 'center',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: '確定',
        cancelButtonColor: '#d33',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          deleteWork(workId, this.dToken);
          this.$swal({
            title: '刪除成功',
            icon: 'success',
            position: 'center',
          }).then(() => {
            this.getPageHandler();
          });
        }
      });
    },
  },
  created() {
    this.loginId = JSON.parse(localStorage.getItem('desginderDetails')).Id;
    this.storeId = JSON.parse(localStorage.getItem('desginderDetails')).StoreId;
    this.dToken = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)desingerToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
  },
  mounted() {
    this.getPageHandler();
    this.getDesignersInfo();
  },
};
</script>

<style lang="scss" scoped>
input,
textarea,
select {
  background-color: #ffff !important;
}

.itemshowDesignerName {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pro_opacity {
  opacity: 1;
}
.outlineShow {
  border: 1px solid #d1d3e2;
  padding: 3px;
  border-radius: 10px !important;
}
.file {
  position: relative;
}
.img-view {
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
