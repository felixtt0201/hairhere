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
        <tr v-for="(item, index) in items" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <p>{{ item.title }}</p>
          </td>
          <td>
            <p v-show="editId !== item.id">{{ item.money }}</p>
            <input
              type="text"
              name=""
              id=""
              v-show="editId === item.id"
              placeholder="請輸入金額"
            />
          </td>
          <td>
            <p v-show="editId !== item.id">{{ item.time }}</p>
            <input
              type="text"
              name=""
              id=""
              v-show="editId === item.id"
              placeholder="請輸入時間"
            />
          </td>
          <td v-show="editId !== item.id">
            <button class="btn btn-secondary btn-sm" @click="edit(item.id)">
              修改
            </button>
          </td>
          <td v-show="editId === item.id">
            <button
              class="btn btn-secondary btn-sm mr-2"
              @click="edit(item.id)"
            >
              取消
            </button>
            <button class="btn btn-secondary btn-sm" @click="done">
              確定
            </button>
          </td>
        </tr>
        <!-- <tr>
          <th scope="row">1</th>
          <td>
            <p>洗頭</p>
          </td>
          <td>
            <p v-show="status">NT:150</p>
            <input
              type="text"
              name=""
              id=""
              v-show="!status"
              placeholder="請輸入金額"
            />
          </td>
          <td>
            <p v-show="status">30分</p>
            <input
              type="text"
              name=""
              id=""
              v-show="!status"
              placeholder="請輸入時間"
            />
          </td>
          <td v-show="status">
            <button class="btn btn-secondary btn-sm" @click="edit">
              修改
            </button>
          </td>
          <td v-show="!status">
            <button class="btn btn-secondary btn-sm mr-2" @click="edit">
              取消
            </button>
            <button class="btn btn-secondary btn-sm" @click="edit">
              確定
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    edit(id) {
      this.editId = id;
    },
    done() {
      this.editId = '';
      this.status = !this.status;
    },
  },
};
</script>

<style lang="scss" scoped></style>
