/* eslint-disable vue/valid-v-else */ /* eslint-disable no-return-assign */
<template>
  <div id="checkout" class="container-fluid">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="text-gray-800">結帳管理</h3>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-icon-split"
        data-toggle="modal"
        data-target="#checkoutMoadel"
        @click="openModalHandler(true)"
      >
        <span class="icon text-white-50">
          <i class="fas fa-plus"></i>
        </span>
        <span class="text">新增帳單</span>
      </button>
    </div>
    <div class="table-responsive-md">
      <table class="table table-hover table-sm table-borderless text-gray-900 ">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">設計師</th>
            <th scope="col">客人姓名</th>
            <th scope="col">消費金額</th>
            <th scope="col">帳單細項</th>
            <th scope="col">狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list, index) in billListInfo" :key="list.Id">
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <p>{{ list.DesignerName }}</p>
            </td>
            <td>
              <p>{{ list.CustomerName }}</p>
            </td>
            <td>
              <p>NT:{{ list.Amount }}</p>
            </td>
            <td>
              <button
                class="btn btn-warning text-gray-900"
                style="width: 100px;"
                type="button"
                @click="openModalHandler(false, list.Id)"
              >
                帳單
              </button>
            </td>
            <td>
              <p
                class="bg-gradient-info rounded text-center"
                :class="{
                  'bg-gradient-danger rounded': list.OrderStatus == '已取消',
                }"
              >
                {{ list.OrderStatus }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--Modal--->
    <form @submit.prevent="postBillHandler">
      <!--新帳單--->
      <div class="modal fade" id="checkoutMoadel" tabindex="-1" v-if="isNew">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="checkoutMoadel">帳單</h5>
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
              <div
                class="form-group border-bottom border-dark table-responsive-md"
              >
                <h5>細項：</h5>
                <table class="table table-borderless">
                  <tbody class="text-gray-800">
                    <tr>
                      <th scope="row">日期：</th>
                      <td>
                        <input type="date" v-model="checkInfo.date" required />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">設計師：</th>
                      <td>
                        <select
                          class="form-control"
                          v-model="checkInfo.designerId"
                          required
                        >
                          <option selected disabled>選擇設計師</option>
                          <option
                            v-for="designer in designerInfo"
                            :key="designer.Id"
                            :value="designer.Id"
                            >{{ designer.Name }}</option
                          >
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">顧客：</th>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="輸入顧客姓名"
                          v-model="checkInfo.cName"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">生日：</th>
                      <td>
                        <input
                          type="date"
                          v-model="checkInfo.cBDay"
                          placeholder="請輸入客人生日"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">電話：</th>
                      <td>
                        <input
                          type="text"
                          placeholder="輸入顧客電話"
                          v-model="checkInfo.cTel"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">介紹人：</th>
                      <td>
                        <input
                          type="text"
                          placeholder="輸入介紹人"
                          v-model="checkInfo.cIntroducer"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="form-group border-bottom border-dark table-responsive-md"
              >
                <h5 class="">服務項目：</h5>
                <table class="table table-hover ">
                  <thead>
                    <tr class=" table-borderless text-gray-900">
                      <th scope="col">#</th>
                      <th scope="col">項目</th>
                      <th scope="col">金額</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-800">
                    <tr v-for="(obj, index) in addServicesInfo" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ obj.ProductName }}</td>
                      <td>{{ obj.UnitPrice }}</td>
                      <td>
                        <button
                          class="btn btn-danger"
                          @click.prevent="deleteRowInfoHandler(obj)"
                        >
                          刪除
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>新增項目</th>
                      <td>
                        <select
                          class="form-control"
                          v-model="rowObj.title"
                          style="width:120px;"
                        >
                          <option selected disabled>選擇服務</option>
                          <option
                            v-for="info in servicesInfo"
                            :key="info.Id"
                            :value="info.ProductName"
                            >{{ info.ProductName }}</option
                          >
                        </select>
                      </td>
                      <td>
                        <input
                          type="tel"
                          placeholder="輸入金額"
                          style="width:80px;"
                          v-model="rowObj.price"
                        />
                      </td>
                      <td>
                        <button
                          class="btn btn-primary"
                          @click.prevent="addRowHandler"
                          style="width:80px;"
                        >
                          新增
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-right text-gray-900">
                  消費金額：NT.{{ caltotalPrice }}
                </p>
              </div>
              <div class="form-group">
                <h5>備註：</h5>
                <div class="col-12">
                  <textarea
                    class="form-control"
                    id="message-text"
                    cols="20"
                    rows="4"
                    v-model="checkInfo.summary"
                  ></textarea>
                </div>
              </div>
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
                <!-- <button
                  type="button"
                  class="btn btn-primary mr-2"
                  @click="edit"
                >
                  修改
                </button> -->
                <button type="submit" class="btn btn-success">
                  確定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--舊帳單--->
      <div class="modal fade" id="checkoutMoadel" tabindex="-1" v-else>
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="checkoutMoadel">結帳</h5>
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
              <div
                class="form-group border-bottom border-dark table-responsive-md"
              >
                <h5>細項：</h5>
                <table class="table table-borderless">
                  <tbody class="text-gray-800">
                    <tr>
                      <th scope="row">日期：</th>
                      <td>{{ date }}</td>
                    </tr>
                    <tr>
                      <th scope="row">設計師：</th>
                      <td>
                        {{ editInfo.DesignerName }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">顧客：</th>
                      <td>
                        {{ editInfo.CustomerName }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">生日：</th>
                      <td>
                        {{ bDay }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">電話：</th>
                      <td>
                        {{ editInfo.CustomerPhone }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">介紹人：</th>
                      <td>
                        {{ editInfo.CustomerIntroducer }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="form-group border-bottom border-dark table-responsive-md"
              >
                <h5 class="">服務項目：</h5>
                <table class="table table-hover ">
                  <thead>
                    <tr class=" table-borderless text-gray-900">
                      <th scope="col">#</th>
                      <th scope="col">項目</th>
                      <th scope="col">金額</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-800">
                    <tr v-for="(obj, index) in editInfo.Detail" :key="obj.Id">
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ obj.ProductName }}</td>
                      <td>{{ obj.UnitPrice }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-right text-gray-900">
                  消費金額：NT.{{ editInfo.Amount }}
                </p>
              </div>
              <div class="form-group">
                <h5>備註：</h5>
                <div class="col-12">
                  <textarea
                    class="form-control"
                    id="message-text"
                    cols="20"
                    rows="4"
                    v-model="editInfo.StoreRemark"
                  ></textarea>
                </div>
              </div>
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
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="changeStatus(editInfo.Id)"
                  v-if="editInfo.OrderStatus == '已結算'"
                >
                  取消帳單
                </button>
                <button
                  type="button"
                  class="btn btn-danger disabled"
                  aria-disabled="true"
                  v-else
                >
                  取消帳單
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!--ModalEnd--->
  </div>
</template>

<script>
import {
  getStoreProductList,
  getDesignerListSelect,
  getBillList,
  postBill,
  getSingleBill,
  patchBillStatus,
} from '@/js/DesignerServices';
import $ from 'jquery';

export default {
  data() {
    return {
      isLoading: true,
      fullPage: true,
      servicesInfo: [],
      designerInfo: [],
      status: true,
      checkInfo: {
        date: '',
        designerId: '',
        cName: '',
        cTel: '',
        cBDay: '',
        cIntroducer: '',
        summary: '',
      },

      // 服務項目暫存的陣列
      addServicesInfo: [],
      rowObj: {
        title: '',
        price: 0,
        Id: '',
      },

      // 帳單資料
      billListInfo: [],
      editInfo: {},
      isNew: true,
      // 當天日期
      date: '',
      // 客人生日
      bDay: '',

      dId: null,
      storeId: null,
    };
  },
  computed: {
    caltotalPrice() {
      let total = 0;
      // eslint-disable-next-line arrow-body-style
      this.addServicesInfo.forEach((item) => {
        // eslint-disable-next-line no-return-assign
        return (total += Number(item.UnitPrice));
      });
      return total;
    },
  },

  methods: {
    getServicesInfo() {
      getStoreProductList(this.storeId).then((res) => {
        if (res.data.status === true) {
          this.servicesInfo = res.data.OrderDetails;
        }
      });
    },
    getDesignersInfo() {
      getDesignerListSelect(this.storeId).then((res) => {
        this.designerInfo = res.data;
      });
    },
    // 取得全部帳單
    async getAllBillList() {
      await this.getServicesInfo();
      await this.getDesignersInfo();
      getBillList().then((res) => {
        if (res.data.status) {
          this.isLoading = false;
          this.billListInfo = res.data.BasicData;
        }
      });
    },
    // 取得單一帳單
    getSingleInfo(id) {
      this.isNew = false;
      this.editInfo = {};
      getSingleBill(id).then((res) => {
        if (res.data.status) {
          $('#checkoutMoadel').modal('show');
          this.editInfo = res.data.BasicData;
          this.bDay = this.editInfo.CustomerBirthday.replace('T', ' ').replace(
            '00:00:00',
            ' ',
          );
          this.date = this.editInfo.OrderTime.replace('T', ' ').replace(
            '00:00:00',
            ' ',
          );
        }
      });
    },

    // 將消費項目金額先暫存在陣列
    addRowHandler() {
      const title = this.rowObj.title.trim();
      if (title !== '') {
        this.addServicesInfo.push({
          ProductName: this.rowObj.title,
          UnitPrice: this.rowObj.price,
          Count: 1,
        });
        this.rowObj.title = '';
        this.rowObj.price = '';
      } else {
        this.$swal({
          title: '請選擇項目',
        });
      }
    },

    // 刪除暫存的服務項目
    deleteRowInfoHandler(row) {
      const removeRow = this.addServicesInfo.findIndex(
        (item) => item.ProductName === row.ProductName,
      );
      this.addServicesInfo.splice(removeRow, 1);
    },

    // post帳單
    postBillHandler() {
      const data = this.$qs.stringify({
        OrderTime: this.checkInfo.date,
        StoreRemark: '',
        DesignerId: this.checkInfo.designerId,
        CustomerName: this.checkInfo.cName,
        CustomerPhone: this.checkInfo.cTel,
        CustomerEmail: '',
        CustomerIntroducer: this.checkInfo.cIntroducer,
        CustomerRemark: '',
        CustomerBirthday: this.checkInfo.cBDay,
        BillDetails: this.addServicesInfo,
      });
      if (this.addServicesInfo.length > 0) {
        postBill(data).then((res) => {
          if (res.data.status) {
            this.successedMessage();
          } else {
            this.$swal({
              title: '新增失敗',
              text: '請確認輸入資訊是否正確',
              position: 'center',
              icon: 'error',
            });
          }
        });
      } else {
        this.$swal({
          title: '請填寫消費項目',
        });
      }
    },

    // patch更改帳單狀態
    changeStatus(billId) {
      this.$swal({
        title: '你確定要取消嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33 ',
        confirmButtonText: '確定',
        cancelButtonColor: '#3085d6',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          $('#checkoutMoadel').modal('hide');
          this.$swal(
            {
              icon: 'success',
              title: '成功取消此筆帳單',
              timer: 1500,
            },
            this.patchStatusHandler(billId),
          );
        }
      });
    },

    patchStatusHandler(billId) {
      const data = this.$qs.stringify({
        BillStatus: '0',
        StoreRemark: '"asdas"',
      });
      patchBillStatus(billId, data).then(() => {
        this.getAllBillList();
      });
    },

    openModalHandler(isNew, id) {
      if (isNew) {
        this.editInfo = {};
        this.isNew = true;
      } else {
        this.getSingleInfo(id);
      }
      $('#designerModal').modal('show');
    },

    edit() {
      this.status = !this.status;
    },
    // 提示-成功
    successedMessage() {
      this.$swal({
        title: '新增成功',
        position: 'center',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        $('#checkoutMoadel').modal('hide');
        this.addServicesInfo = [];
        this.checkInfo = {};
        this.getAllBillList();
      });
    },
  },
  created() {
    const designerInfo = JSON.parse(localStorage.getItem('desginderDetails'));
    this.dId = designerInfo.Id;
    this.storeId = designerInfo.StoreId;
  },
  mounted() {
    this.getAllBillList();
  },
};
</script>

<style lang="scss" scopeded>
.table {
  th,
  td,
  tr,
  p {
    vertical-align: middle !important;
    margin: 0;
    padding: 10px;
  }
}
</style>
