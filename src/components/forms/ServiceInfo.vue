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
        <tr v-for="(item, index) in servicesdata" :key="item.index">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <p>{{ item.Name }}</p>
          </td>
          <td>
            <label for="">{{ item.UnitPrice }}</label>
            <!-- <p v-show="editId !== item.index">NT. {{ item.UnitPrice }}</p> -->
            <input
              type="text"
              name=""
              id=""
              v-show="editId === item.index"
              placeholder="請輸入金額"
            />
          </td>
          <td>
            <label for="">{{ item.ServiceMinutes }}</label>
            <!-- <p v-show="editId !== item.index">{{ item.ServiceMinutes }}</p> -->
            <input
              type="text"
              name=""
              id=""
              v-show="editId === item.index"
              placeholder="請輸入時間"
            />
          </td>
          <td v-show="editId !== item.index">
            <button class="btn btn-secondary btn-sm" @click="edit(item.index)">
              修改
            </button>
          </td>
          <td v-show="editId === item.index">
            <button
              class="btn btn-secondary btn-sm mr-2"
              @click="edit(item.index)"
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
export default {
  data() {
    return {
      servicesdata: {},
      items: [
        {
          id: '1',
          title: '剪髮',
          money: 'NT:300',
          time: '30分',
        },
        {
          id: '2',
          title: '洗髮',
          money: 'NT:150',
          time: '30分',
        },
      ],
      status: true,
      editId: '',
    };
  },
  methods: {
    getServicesInfo() {
      const api = 'http://localhost:3000/store';
      this.axios.get(api).then((res) => {
        this.servicesdata = res.data.ServicesPublic;
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
