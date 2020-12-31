<template>
  <div id="checkout">
    <h1>結帳管理</h1>
    <table class="table table-hover table-borderless">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">設計師</th>
          <th scope="col">客人姓名</th>
          <th scope="col">消費金額</th>
          <th scope="col">狀態</th>
          <th scope="col">結帳</th>
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
            <div class="badge badge-danger" style="width: 6rem;">
              未結帳
            </div>
          </td>
          <td>
            <button class="btn btn-warning">結帳</button>
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
            <div class="badge badge-success" style="width: 6rem;">
              已結帳
            </div>
          </td>
          <td>
            <button class="btn btn-dark">帳單明細</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
