<template>
  <div id="checkout" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="mb-0 text-gray-800">結帳管理</h3>
    </div>
    <table class="table table-hover table-sm table-borderless text-gray-900">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">設計師</th>
          <th scope="col">客人姓名</th>
          <th scope="col">消費金額</th>
          <th scope="col">狀態</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            <p>小明</p>
          </td>
          <td>
            <p>Ａ＿Ａ</p>
          </td>
          <td>
            <p>NT:2350</p>
          </td>
          <td>
            <div class="badge badge-danger text-gray-900" style="width: 100px;">
              未結帳
            </div>
          </td>
          <td>
            <button
              class="btn btn-warning text-gray-900"
              style="width: 100px;"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              結帳
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>
            <p>小美</p>
          </td>
          <td>
            <p>Ｑ＿Ｑ</p>
          </td>
          <td>
            <p>NT:2350</p>
          </td>
          <td>
            <div
              class="badge badge-success text-gray-900"
              style="width: 100px;"
            >
              已結帳
            </div>
          </td>
          <td>
            <button class="btn btn-success text-gray-900" style="width: 100px;">
              帳單明細
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!--Modal--->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">帳單</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-gray-900">
            <form>
              <div class="form-group border-bottom border-dark">
                <h5>細項：</h5>
                <table class="table table-borderless">
                  <tbody class="text-gray-800">
                    <tr>
                      <th scope="row">日期：</th>
                      <td>2021-02-08</td>
                    </tr>
                    <tr>
                      <th scope="row">設計師：</th>
                      <td>小明</td>
                    </tr>
                    <tr>
                      <th scope="row">顧客：</th>
                      <td>A_A</td>
                    </tr>
                    <tr>
                      <th scope="row">電話：</th>
                      <td>09781234567</td>
                    </tr>
                    <tr>
                      <th scope="row">介紹人：</th>
                      <td>Justin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="form-group border-bottom border-dark">
                <h5 class="">服務項目：</h5>
                <table class="table table-hover ">
                  <thead>
                    <tr class=" table-borderless text-gray-900">
                      <th scope="col">#</th>
                      <th scope="col">項目</th>
                      <th scope="col">金額</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-800">
                    <tr>
                      <th scope="row">1</th>
                      <td v-if="status">洗髮</td>
                      <td v-else>
                        <select
                          class="custom-select custom-select-sm"
                          style="width:100px;"
                        >
                          <option selected disabled hidden>更換項目</option>
                          <option>洗髮</option>
                          <option>剪髮</option>
                          <option>染髮</option>
                          <option>燙髮</option>
                          <option>護髮</option>
                        </select>
                      </td>
                      <td v-if="status">350</td>
                      <td v-else>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="重新輸入金額"
                          style="width:120px;"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td v-if="status">洗髮</td>
                      <td v-else>
                        <select
                          class="custom-select custom-select-sm"
                          style="width:100px;"
                        >
                          <option selected disabled hidden>更換項目</option>
                          <option>洗髮</option>
                          <option>剪髮</option>
                          <option>染髮</option>
                          <option>燙髮</option>
                          <option>護髮</option>
                        </select>
                      </td>
                      <td v-if="status">350</td>
                      <td v-else>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="重新輸入金額"
                          style="width:120px;"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td v-if="status">洗髮</td>
                      <td v-else>
                        <select
                          class="custom-select custom-select-sm"
                          style="width:100px;"
                        >
                          <option selected disabled hidden>更換項目</option>
                          <option>洗髮</option>
                          <option>剪髮</option>
                          <option>染髮</option>
                          <option>燙髮</option>
                          <option>護髮</option>
                        </select>
                      </td>
                      <td v-if="status">350</td>
                      <td v-else>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="重新輸入金額"
                          style="width:120px;"
                        />
                      </td>
                    </tr>
                    <tr v-show="!status">
                      <th scope="row">4</th>
                      <td>
                        <select
                          class="custom-select custom-select-sm"
                          style="width:100px;"
                        >
                          <option selected disabled hidden>新增項目</option>
                          <option>洗髮</option>
                          <option>剪髮</option>
                          <option>染髮</option>
                          <option>燙髮</option>
                          <option>護髮</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="輸入金額"
                          style="width:120px;"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-right text-gray-900">消費金額：NT.2350</p>
              </div>
              <div class="form-group">
                <h5>備註：</h5>
                <div class="col-12">
                  <textarea
                    class="form-control"
                    id="message-text"
                    cols="20"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="col">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                取消
              </button>
            </div>
            <div class="col text-right">
              <button type="button" class="btn btn-primary mr-2" @click="edit">
                修改
              </button>
              <button type="button" class="btn btn-success">確定</button>
            </div>

            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="edit">
              修改
            </button>
            <button type="button" class="btn btn-primary">確定</button> -->
          </div>
        </div>
      </div>
    </div>
    <!--ModalEnd--->
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

<style lang="scss" scopeded>
input,
textarea {
  background-color: #ffff !important;
}
</style>
