/* eslint-disable vue/valid-v-else */ /* eslint-disable no-return-assign */
<template>
  <div id="checkout" class="container-fluid">
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
            <td
              class="btn btn-success text-center mt-1"
              :class="{ 'btn-danger': list.OrderStatus == '已取消' }"
            >
              {{ list.OrderStatus }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--Modal--->
    <form>
      <!--新帳單--->
      <div
        class="modal fade"
        id="checkoutMoadel"
        tabindex="-1"
        aria-labelledby="checkoutMoadel"
        aria-hidden="true"
        v-if="isNew"
      >
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
                      <td><input type="date" v-model="checkInfo.date" /></td>
                    </tr>
                    <tr>
                      <th scope="row">設計師：</th>
                      <td>
                        <select
                          class="form-control"
                          v-model="checkInfo.designerId"
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
                <button
                  type="button"
                  class="btn btn-success"
                  @click="postBillHandler"
                >
                  確定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--舊帳單--->
      <div
        class="modal fade"
        id="checkoutMoadel"
        tabindex="-1"
        aria-labelledby="checkoutMoadel"
        aria-hidden="true"
        v-else
      >
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
                      <td>{{ editInfo.OrderTime }}</td>
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
                        {{ editInfo.CustomerBirthday }}
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
                    <tr v-for="(obj, index) in editInfo.Detail" :key="index">
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
                  @click="patchStatusHandler(editInfo.Id)"
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
  getAllDesigner,
  getBillList,
  postBill,
  getSingleBill,
  patchBillStatus,
} from '@/js/AppServices';
import $ from 'jquery';

export default {
  data() {
    return {
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
      getStoreProductList().then((res) => {
        if (res.data.status === true) {
          this.servicesInfo = res.data.OrderDetails;
        }
      });
    },
    getDesignersInfo() {
      getAllDesigner().then((res) => {
        this.designerInfo = res.data.BasicData;
      });
    },
    // 取得全部帳單
    async getAllBillList() {
      await this.getServicesInfo();
      await this.getDesignersInfo();
      getBillList().then((res) => {
        this.billListInfo = res.data.BasicData;
      });
    },
    // 取得單一帳單
    getSingleInfo(id) {
      this.isNew = false;
      this.editInfo = {};
      getSingleBill(id).then((res) => {
        console.log(res);
        if (res.data.status === true) {
          $('#checkoutMoadel').modal('show');
          this.editInfo = res.data.BasicData;
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
      postBill(data).then((res) => {
        console.log(res);
        if (res.data.status === true) {
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
    },

    // patch更改帳單狀態
    patchStatusHandler(billId) {
      const data = this.$qs.stringify({
        BillStatus: '0',
        StoreRemark: '"asdas"',
      });
      patchBillStatus(billId, data).then((res) => {
        console.log(res);
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
    this.getAllBillList();
  },
};
</script>

<style lang="scss" scopeded>
input,
textarea {
  background-color: #ffff !important;
}
</style>
