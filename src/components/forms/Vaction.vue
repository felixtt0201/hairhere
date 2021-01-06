<template>
  <div id="reservation" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="mb-0 text-gray-800">休假表</h3>
    </div>
    <div class="row">
      <div class="col mt-4"><Calendarvacation /></div>
      <div class="col mt-4">
        <div>
          <p>請選擇設計師：</p>
          <select class="custom-select">
            <option selected disabled hidden>選擇設計師</option>
            <option>小明</option>
            <option>小王</option>
            <option>小美</option>
            <option>小吉</option>
            <option>小傑</option>
          </select>
        </div>
        <div>
          <p>請選擇日期：</p>
          <select class="custom-select">
            <option selected disabled hidden>選擇日期</option>
            <option>20210101</option>
            <option>20210102</option>
            <option>20210103</option>
            <option>20210104</option>
            <option>20210105</option>
          </select>
        </div>
        <button class="btn btn-success btn-sm mt-2">確認</button>
      </div>
    </div>
  </div>
</template>

<script>
import Calendarvacation from '../dashboarditem/Calendar_vacation.vue';

export default {
  components: {
    Calendarvacation,
  },
};
</script>

<style></style>
