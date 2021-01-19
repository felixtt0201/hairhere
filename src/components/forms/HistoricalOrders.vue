<template>
  <div id="historicalorders" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="text-gray-800">
        歷史訂單
      </h3>
    </div>
    <div class="row">
      <div class="col-6">
        <p>請選擇設計師：</p>
        <select class="custom-select">
          <option disabled value="">選擇設計師</option>
          <option>小明</option>
          <option>小王</option>
          <option>小美</option>
          <option>小吉</option>
          <option>小傑</option>
        </select>
      </div>
      <div class="col-6">
        <p>請選擇日期：</p>
        <select class="custom-select">
          <option disabled value="">選擇日期</option>
          <option>20210101</option>
          <option>20210102</option>
          <option>20210103</option>
          <option>20210104</option>
          <option>20210105</option>
        </select>
      </div>
    </div>
    <button class="btn btn-success mt-4 mb-4">搜尋</button>
    <div class="row">
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
              <div
                class="badge badge-danger text-gray-900"
                style="width: 6rem;"
              >
                未結帳
              </div>
            </td>
            <td>
              <button
                class="btn btn-warning text-gray-900"
                style="width: 6rem;"
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
                style="width: 6rem;"
              >
                已結帳
              </div>
            </td>
            <td>
              <button
                class="btn btn-success text-gray-900"
                style="width: 6rem;"
              >
                帳單明細
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
