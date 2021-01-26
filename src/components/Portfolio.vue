<template>
  <div id="portfolio" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-10">
        <h1 class="h3 mb-0 text-gray-800">作品集管理</h1>
      </div>
      <!-- <div class="col-sm-12 col-md-2 mt-4">
        <div id="dataTable_filter" class="dataTables_filter">
          <label for="exampleFormControlSelect1">作品搜尋</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option selected disabled hidden>選擇設計師</option>
            <option>小明</option>
            <option>小王</option>
            <option>小美</option>
            <option>小吉</option>
            <option>小傑</option>
          </select>
        </div>
      </div> -->
    </div>
    <!-- 作品資訊 -->
    <div class="row row-cols-1 row-cols-md-3 mt-4">
      <div class="col mb-4" v-for="product in comebackinfo" :key="product.Id">
        <div class="card h-100 border-0 shadow-sm">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.Photo1" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img :src="product.Photo2" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img :src="product.Photo3" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev pro_opacity"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next pro_opacity"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title text-center text-gray-900">
              作品名稱：{{ product.Name }}
            </h5>
            <h5 class="card-title text-center text-gray-900">
              設計師：{{ product.DesignerName }}
            </h5>
            <p class="card-text text-gray-800">
              作品描述：{{ product.Summary }}
            </p>
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
              {{ product.Id }}
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
    <div class="row justify-content-center mt-3 mb-3">
      <button
        type="button"
        class="btn btn-primary btn-lg btn-icon-split"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        <span class="icon text-white-50">
          <i class="fas fa-plus"></i>
        </span>
        <span class="text">新增作品</span>
      </button>
    </div>
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
                @click="openModal(true)"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4">
                  <h2>作品照片1</h2>
                  <label for="Photo1">或上傳圖片</label>
                  <input
                    type="file"
                    id="Photo1"
                    class="form-control"
                    name="Photo1"
                    ref="file1"
                  />
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="col-md-4">
                  <h2>作品照片2</h2>
                  <label for="Photo2">上傳照片</label>
                  <input
                    type="file"
                    id="Photo2"
                    class="form-control"
                    name="Photo2"
                    ref="file2"
                  />
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="col-md-4">
                  <h2>作品照片3</h2>
                  <label for="Photo3">上傳照片</label>
                  <input
                    type="file"
                    id="Photo3"
                    class="form-control"
                    name="Photo3"
                    ref="file3"
                  />
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid"
                    alt=""
                  />
                  <p style="color:red;">照片限制：PNG,JPG</p>
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
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <label>設計師姓名：{{ dName }}</label>
                    <select
                      class="form-control"
                      v-model="formProduct.DesignerId"
                      @change="showDesignerName(formProduct.DesignerId)"
                      v-if="isNew"
                    >
                      <option disabled value="">選擇設計師</option>
                      <option
                        v-for="designer in designerInfo"
                        :key="designer.Id"
                        :value="designer.Id"
                        >{{ designer.Name }}</option
                      >
                    </select>
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
                      v-model="formProduct.Category"
                    />
                    <label class="custom-control-label" for="male">男生</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="female"
                      value="女"
                      v-model="formProduct.Category"
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
                      v-model="formProduct.Category"
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
                      v-model="formProduct.Category"
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
                      v-model="formProduct.Category"
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
                      v-model="formProduct.Category"
                      name="Category"
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
                      v-model="formProduct.Category"
                      name="Category"
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
                確認 <i class="fas fa-cog fa-spin" v-if="fileUploading"></i>
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
  getAllDesigner,
  postPortfolio,
  getAllworkss,
  patchWork,
  deleteWork,
} from '@/js/AppServices';

export default {
  data() {
    return {
      designerInfo: [], // get設計師資訊
      fileUploading: false,
      comebackinfo: [], // get作品資訊
      formProduct: {
        // 作品欄位
        // Category: [],
        // DesignerId: '',
        // Name: '',
        // Photo1: '',
        // Photo2: '',
        // Photo3: '',
        // Summary: '',
      },
      dName: '', // 顯示設計師名字
      isNew: true, // 判斷新增or編輯狀態
    };
  },
  methods: {
    showDesignerName(id) {
      this.designerInfo.forEach((i) => {
        // eslint-disable-next-line
        if (i.Id == id) {
          this.dName = i.Name;
        }
      });
    },
    // 取得設計師資訊
    getDesignersInfo() {
      getAllDesigner().then((res) => {
        console.log(res.data);
        this.designerInfo = res.data.BasicData;
      });
    },
    // 取得作品資訊
    getInfoHandler() {
      getAllworkss().then((res) => {
        this.comebackinfo = res.data.BasicData;
      });
    },
    openModal(isNew, product) {
      $('#staticBackdrop').modal('show');
      if (isNew) {
        this.formProduct = {};
        this.isNew = true;
      } else {
        this.formProduct = { ...product };
        this.dName = this.formProduct.DesignerName;
        this.formProduct.Category = this.formProduct.Category.split(',');
        this.isNew = false;
      }
    },
    // 新增作品
    postInfoHandler() {
      if (this.isNew) {
        this.fileUploading = true;
        const Photo1 = this.$refs.file1.files[0];
        const Photo2 = this.$refs.file2.files[0];
        const Photo3 = this.$refs.file3.files[0];
        this.formProduct.append('Photo1', Photo1);
        this.formProduct.append('Photo2', Photo2);
        this.formProduct.append('Photo3', Photo3);
        this.formProduct.append('DesignerId', this.formProduct.DesignerId);
        this.formProduct.append('Name', this.formProduct.Name);
        this.formProduct.append('Summary', this.formProduct.Summary);
        this.formProduct.append(
          'Category',
          this.formProduct.Category.toString(),
        ); // 新增作品
        postPortfolio(this.formProduct).then((res) => {
          console.log(res);
          if (res.data.status) {
            this.getInfoHandler();
            $('#staticBackdrop').modal('hide');
            this.$swal({
              title: '新增成功',
              position: 'center',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        // 編輯作品:名稱 描述 分類
        const data = this.$qs.stringify({
          Name: this.formProduct.Name,
          Summary: this.formProduct.Summary,
          Category: this.formProduct.Category,
        });
        patchWork(this.formProduct.Id, data).then((res) => {
          console.log(res);
          if (res.data.status) {
            this.getInfoHandler();
            $('#staticBackdrop').modal('hide');
            this.$swal({
              icon: 'success',
              title: '更改成功',
              timer: 1500,
            });
          }
        });
      }

      // postPortfolio(data)
      //   .then((res) => {
      //     console.log(res);
      //     if (res.data.status) {
      //       this.fileUploading = false;
      //       this.addInfo = [];
      //       photo1 = '';
      //       photo2 = '';
      //       photo3 = '';
      //       this.$swal({
      //         title: '新增成功',
      //         position: 'center',
      //         icon: 'success',
      //         showConfirmButton: false,
      //         timer: 1500,
      //       });
      //       $('#staticBackdrop').modal('hide');
      //     }
      //   })
      //   .catch(() => {
      //     this.$swal({
      //       title: '伺服器故障',
      //       position: 'center',
      //       icon: 'error',
      //       showConfirmButton: false,
      //       timer: 1500,
      //     });
      //     this.fileUploading = false;
      //   });
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
          deleteWork(workId);
          this.$swal({
            title: '刪除成功',
            icon: 'success',
            position: 'center',
          }).then(() => {
            this.getInfoHandler();
          });
        }
      });
    },
  },
  mounted() {
    this.getInfoHandler();
    $('.carousel').carousel();
    this.getDesignersInfo();
    this.formProduct = new FormData();
    this.formProduct.Category = [];
  },
};
</script>

<style lang="scss">
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
</style>
