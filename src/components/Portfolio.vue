<template>
  <div id="portfolio" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-10">
        <h1 class="h3 mb-0 text-gray-800">作品集管理</h1>
      </div>
      <div class="col-sm-12 col-md-2 mt-4">
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
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mt-4">
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://picsum.photos/300/200?random=11"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://picsum.photos/300/200?random=12"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://picsum.photos/300/200?random=13"
                  class="d-block w-100"
                  alt="..."
                />
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
            <h5 class="card-title text-center text-gray-900">設計師：小明</h5>
            <p class="card-text text-gray-800">
              作品描述: .....
            </p>
          </div>
          <div class="container mb-4">
            <div class="row justify-content-around">
              <a href="#" class="btn btn-success btn-circle">
                <i class="fas fa-edit"></i>
              </a>
              <a href="#" class="btn btn-danger btn-circle">
                <i class="fas fa-trash"></i>
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
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4">
                  <h2>作品照片1</h2>
                  <label for="Photo1">上傳照片</label>
                  <input
                    type="file"
                    id="Photo1"
                    class="form-control"
                    name="Photo1"
                    required
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
                    placeholder="請輸入作品名稱 ex:閃電藍"
                    v-model="addInfo.title"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <label>設計師姓名：</label>
                    <select class="form-control" v-model="addInfo.designerId">
                      <option disabled value="">選擇設計師</option>
                      <option
                        v-for="designer in designerInfo"
                        :key="designer.Id"
                        :value="designer.Id"
                        >{{ designer.Name }}</option
                      >
                      <!-- <option>小明</option>
                    <option>小王</option>
                    <option>小美</option>
                    <option>小吉</option>
                    <option>小傑</option> -->
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
                      v-model="addInfo.category"
                    />
                    <label class="custom-control-label" for="male">男生</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="female"
                      value="女"
                      v-model="addInfo.category"
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
                      v-model="addInfo.category"
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
                      v-model="addInfo.category"
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
                      v-model="addInfo.category"
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
                      v-model="addInfo.category"
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
                      v-model="addInfo.category"
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
                      v-model="addInfo.summary"
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
import { postPortfolio, getAllDesigner } from '@/js/AppServices';

export default {
  data() {
    return {
      designerInfo: [],

      addInfo: {
        title: '',
        summary: '',
        designerId: '',
        category: [],
      },

      fileUploading: false,
    };
  },
  methods: {
    // 取得設計師資訊
    getDesignersInfo() {
      getAllDesigner().then((res) => {
        console.log(res.data);
        this.designerInfo = res.data;
      });
    },

    // 新增作品
    postInfoHandler() {
      this.fileUploading = true;
      let photo1 = document.querySelector('#Photo1').files[0];
      let photo2 = document.querySelector('#Photo2').files[0];
      let photo3 = document.querySelector('#Photo3').files[0];
      const data = new FormData();
      data.append('Name', this.addInfo.title);
      data.append('Summary', this.addInfo.summary);
      data.append('DesignerId', this.addInfo.designerId);
      data.append('Photo1', photo1);
      data.append('Photo2', photo2);
      data.append('Photo3', photo3);
      data.append('Category', this.addInfo.category.toString());
      console.log(data);
      postPortfolio(data)
        .then((res) => {
          console.log(res);
          if (res.data.status === true) {
            this.fileUploading = false;
            this.addInfo = [];
            photo1 = '';
            photo2 = '';
            photo3 = '';
            this.$swal({
              title: '新增成功',
              position: 'center',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch(() => {
          this.$swal({
            title: '伺服器故障',
            position: 'center',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
          this.fileUploading = false;
        });
    },
  },
  mounted() {
    $('.carousel').carousel();
    this.getDesignersInfo();
  },
};
</script>

<style lang="scss">
input,
textarea,
select {
  background-color: #ffff !important;
}

.itemtest {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pro_opacity {
  opacity: 1;
}
</style>
