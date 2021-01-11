<template>
  <div id="serviceinfo" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h4 class="h3 mb-0 text-gray-900 font-weight-bold">服務項目</h4>
    </div>
    <table class="table table-hover table-borderless text-gray-900">
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
              placeholder="請輸入金額"
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
              placeholder="請輸入時間"
              v-model="item.ServiceMinutes"
            />
          </td>
          <td v-show="editId !== item.Id">
            <button class="btn btn-secondary btn-sm" @click="edit(item.Id)">
              修改
            </button>
          </td>
          <td v-show="editId === item.Id">
            <button
              class="btn btn-secondary btn-sm mr-2"
              @click="!edit(item.Id)"
            >
              取消
            </button>
            <button class="btn btn-secondary btn-sm" @click="done">
              確定
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { storeProductList } from '@/js/AppServices';

export default {
  data() {
    return {
      servicesdata: {},
      status: true,
      editId: '',
    };
  },
  methods: {
    getServicesInfo() {
      // this.axios
      //   .get('https://salon.rocket-coding.com/GET/ProductList?storeId=2')
      //   .then((res) => {
      //     console.log(res);
      //   });
      storeProductList().then((res) => {
        console.log(res);
        this.servicesdata = res.data;
        console.log(this.servicesdata);
      });
    },

    edit(id) {
      this.editId = id;
    },
    done() {
      this.editId = '';
      this.status = !this.status;
    },
  },
  mounted() {
    this.getServicesInfo();
  },
};
</script>

<style lang="scss" scoped></style>
