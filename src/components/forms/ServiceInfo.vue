/* eslint-disable no-param-reassign */
<template>
  <div id="serviceinfo" class="container-fluid">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    ></loading>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h4 class="h3 mb-0 text-gray-900 font-weight-bold">服務項目</h4>
    </div>
    <div class="table-responsive-xl text-center">
      <table class="table table-hover table-borderless text-gray-900 table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">項目</th>
            <th scope="col">金額</th>
            <th scope="col">時間</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in servicesdata" :key="item.Id">
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <p>{{ item.Name }}</p>
            </td>
            <td>
              <p v-show="editId !== item.Id">NT. {{ item.UnitPrice }}</p>
              <input
                type="text"
                v-show="editId === item.Id"
                v-model="item.UnitPrice"
              />
            </td>
            <td>
              <p v-show="editId !== item.Id">{{ item.ServiceMinutes }}</p>
              <input
                type="text"
                v-show="editId === item.Id"
                v-model="item.ServiceMinutes"
              />
            </td>
            <td v-show="editId !== item.Id" class="row">
              <button
                class="btn btn-danger btn-sm mr-2 mb-1"
                @click="deleteProductHandler(item.Id)"
              >
                刪除
              </button>
              <button
                class="btn btn-info btn-sm mr-2 mb-1"
                @click="edit(item.Id)"
              >
                修改
              </button>
            </td>
            <td v-show="editId === item.Id" class="row justify-content-between">
              <button
                class="btn btn-secondary btn-sm mb-1"
                @click="done"
                type="button"
              >
                取消
              </button>
              <button
                type="submit"
                class="btn btn-primary btn-sm mb-1"
                @click="updateProductHandler(item.Id)"
              >
                確定
              </button>
            </td>
          </tr>
          <tr class="border-top">
            <th scope="row" class="align-middle">新增項目</th>
            <td class="align-middle">
              <input
                type="text"
                name=""
                id=""
                placeholder="輸入項目"
                v-model="newProduct.Name"
              />
            </td>
            <td class="align-middle">
              <input
                type="text"
                name=""
                id=""
                placeholder="輸入金錢"
                v-model="newProduct.Price"
              />
            </td>
            <td class="align-middle">
              <input
                type="text"
                name=""
                id=""
                placeholder="輸入時間"
                v-model="newProduct.ServiceMinutes"
              />
            </td>
            <td class="">
              <button
                class="btn btn-success btn-sm"
                @click="addNewProductHandler"
              >
                新增
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  getStoreProductList,
  posteStoreProduct,
  putStoreProductList,
  deleteStoreProduct,
} from '@/js/AppServices';

export default {
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      servicesdata: {},
      editstatus: true,
      editId: '',
      pName: '',
      editUnitPrice: '',
      editServiceMinutes: '',
      newProduct: {
        Name: '',
        Price: '',
        ServiceMinutes: '',
      },
      loginStoreId: null,
      stoken: '',
    };
  },
  methods: {
    // 取得產品資訊
    getInfoHandler() {
      getStoreProductList(this.loginStoreId).then((res) => {
        if (res.data.status) {
          this.servicesdata = res.data.BasicData;
          this.isLoading = false;
        } else {
          this.servicesdata = {};
          this.isLoading = false;
        }
      });
    },
    // 新增產品
    addNewProductHandler() {
      const data = this.$qs.stringify({
        Name: this.newProduct.Name,
        UnitPrice: this.newProduct.Price,
        StoreId: this.loginStoreId,
        ServiceMinutes: this.newProduct.ServiceMinutes,
        Summary: '',
        ReferencePrice: 'true',
        Remark: '',
        PublicInformation: 'true',
      });
      posteStoreProduct(data, this.stoken).then((res) => {
        if (res.data.message === '名稱重複' && res.status === 200) {
          this.unsuccessed();
          this.newProduct = {};
        } else if (res.data.status) {
          const msg = '新增';
          this.successed(msg);
          this.newProduct = {};
        }
      });
    },

    // 修改產品的價格、時間
    updateProductHandler(pId) {
      this.getInfoHandler();
      this.servicesdata.forEach((item) => {
        if (item.Id === pId) {
          this.pName = item.Name;
          this.editUnitPrice = item.UnitPrice;
          this.editServiceMinutes = item.ServiceMinutes;
        }
      });
      const data = this.$qs.stringify({
        Id: pId,
        Name: this.pName,
        UnitPrice: this.editUnitPrice,
        StoreId: '2',
        ServiceMinutes: this.editServiceMinutes,
        Summary: '',
        ReferencePrice: 'true',
        Remark: '',
        PublicInformation: 'true',
      });
      putStoreProductList(data, pId, this.stoken).then((res) => {
        if (res.status === 200) {
          const msg = '修改';
          this.successed(msg);
        }
      });
    },

    // 刪除產品
    deleteProductHandler(pId) {
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
          deleteStoreProduct(pId, this.stoken).then(() => {
            const msg = '刪除';
            this.successed(msg);
          });
        }
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
        this.edit();
      });
    },

    // 提示-新增失敗
    unsuccessed() {
      this.$swal({
        position: 'center',
        icon: 'error',
        title: '新增失敗',
        text: '項目名稱重複',
      }).then(() => {
        this.getInfoHandler();
        this.edit();
      });
    },

    edit(id) {
      this.editId = id;
    },
    done() {
      this.editId = '';
      this.editstatus = !this.editstatus;
    },
  },
  created() {
    this.stoken = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)storeToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.loginStoreId = JSON.parse(localStorage.getItem('storeDetails')).Id;
  },
  mounted() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scoped>
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
