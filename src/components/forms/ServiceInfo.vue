/* eslint-disable no-param-reassign */
<template>
  <div id="serviceinfo" class="container-fluid">
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
                name=""
                id=""
                v-show="editId === item.Id"
                v-model="item.UnitPrice"
              />
            </td>
            <td>
              <p v-show="editId !== item.Id">{{ item.ServiceMinutes }}</p>
              <input
                type="text"
                name=""
                id=""
                v-show="editId === item.Id"
                v-model="item.ServiceMinutes"
              />
            </td>
            <td v-show="editId !== item.Id" class="row">
              <button
                class="btn btn-danger btn-sm mr-2 mb-1"
                @click="deleteProduct(item.Id)"
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
                @click="updateServiceInfo(item.Id)"
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
            <td class="align-middle">
              <button class="btn btn-success btn-sm" @click="addNewProduct">
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
  storeProductList,
  postestoreProduct,
  updatestoreProductList,
  deletestoreProduct,
} from '@/js/AppServices';

export default {
  data() {
    return {
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
    };
  },
  methods: {
    // 取得產品資訊
    getServicesInfo() {
      storeProductList().then((res) => {
        this.servicesdata = res.data;
      });
    },
    // 新增產品
    addNewProduct() {
      const data = this.$qs.stringify({
        Name: this.newProduct.Name,
        UnitPrice: this.newProduct.Price,
        StoreId: '2',
        ServiceMinutes: this.newProduct.ServiceMinutes,
        Summary: '',
        ReferencePrice: 'true',
        Remark: '',
        PublicInformation: 'true',
      });
      postestoreProduct(data).then((res) => {
        if (res.data.errorMessage === '名稱重複' && res.status === 200) {
          this.unsuccessed();
          this.newProduct = {};
        } else if (res.status === 200) {
          const msg = '新增';
          this.successed(msg);
          this.newProduct = {};
        }
      });
    },

    // 修改產品價格時間
    updateServiceInfo(pId) {
      this.getServicesInfo();
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
      updatestoreProductList(data, pId).then((res) => {
        if (res.status === 200) {
          const msg = '修改';
          this.successed(msg);
        }
      });
    },

    // 刪除產品
    deleteProduct(pId) {
      this.$swal({
        title: '您確定要刪除？',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          deletestoreProduct(pId);
          const msg = '刪除';
          this.successed(msg);
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
        this.getServicesInfo();
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
        this.getServicesInfo();
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
  mounted() {
    this.getServicesInfo();
  },
};
</script>

<style lang="scss" scoped></style>
