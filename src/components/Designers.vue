<template>
  <div id="designers" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">設計師管理</h1>
    </div>
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
      <div class="col mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <img
            src="https://picsum.photos/300/200?random=11"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-center">小明</h5>
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
          <i class="fas fa-user-plus"></i>
        </span>
        <span class="text">新增設計師</span>
      </button>
    </div>
    <!--Modal-->
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
                  <label for="image">輸入照片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入照片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳照片
                    <i class="fas fa-cog fa-spin"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
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
                    <label for="password">帳號</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="請輸入帳號"
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
                    />
                  </div>
                </div>
                <div class="form-row justify-content-end">
                  <div class="form-group col-md-6">
                    <div class="row"></div>
                    <label for="password">再次輸入密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="再次輸入密碼"
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
            <button type="button" class="btn btn-primary">
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
export default {};
</script>

<style lang="scss" scopeded>
input,
textarea {
  background-color: #ffff !important;
}
</style>
