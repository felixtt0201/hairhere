/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // Authorization: `Bearer ${document.cookie.replace(
    //   // eslint-disable-next-line no-useless-escape
    //   /(?:(?:^|.*;\s*)desingerToken\s*\=\s*([^;]*).*$)|^.*$/,
    //   '$1',
    // )}`,
  },
});

/** 登入 */
const postDesingerLogin = (data) => storeApi.post('/POST/Login/Designer', data);

/** 產品 */
// get全部產品*
const getStoreProductList = (storeId) =>
  storeApi.get(`/GET/ProductList?storeId=${storeId}`);

/** 設計師 */
// get 單一設計師資料(後台)*
const getDesignerInfoBack = (dId) =>
  storeApi.get(`/GET/Designer/Detail?id=${dId}`);

// get 設計師清單（下拉選單*
const getDesignerListSelect = (storeId) =>
  storeApi.get(`GET/DesignerList/Drop?storeId=${storeId}`);

// put修改設計師資料*
const putDesigner = (data, dId, token) =>
  storeApi.put(`/PUT/Designer?id=${dId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// patch上傳設計師照片*
const patchDesignerPhoto = (dId, data, token) =>
  storeApi.patch(`/PATCH/Designer/Picture?id=${dId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

/** 訂單 */
// post新增訂單*
const postOrder = (data, token) =>
  storeApi.post('/POST/Order', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// get訂單*
const getOrder = (token) =>
  storeApi.get('/GET/OrderList', {
    headers: { Authorization: `Bearer ${token}` },
  });

// get單一訂單*
const getOrderDetail = (oId) => storeApi.get(`/GET/Order?id=${oId}`);

// patch訂單狀態*
const patchOrderDetailStatus = (oId, data, token) =>
  storeApi.patch(`PATCH/Order?id=${oId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// get搜尋訂單(by設計師Id)*
const getOrderListbyDesinger = (dId, token) =>
  storeApi.get(`/GET/OrderList?designerId=${dId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

/** 作品 bycin */
// post新增作品*
const postPortfolio = (data, token) =>
  storeApi.post('/POST/Portfolio', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// patch作品*
const patchWork = (workId, data, token) =>
  storeApi.put(`/PUT/Portfolio?id=${workId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// delete作品*
const deleteWork = (workId, token) =>
  storeApi.delete(`DELETE/Portfolio?id=${workId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// get單一設計師全部作品*
const getDesignerWorks = (storeId, dId, page) =>
  storeApi.get(
    `/GET/PortfolioList?storeId=${storeId}&designerId=${dId}&index=${page}`,
  );

/** 帳單 */
// get全部帳單*
const getBillList = (token) =>
  storeApi.get('/GET/BillList', {
    headers: { Authorization: `Bearer ${token}` },
  });

// get單一帳單*
const getSingleBill = (billId, token) =>
  storeApi.get(`/GET/Bill?id=${billId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// post帳單*
const postBill = (data, token) =>
  storeApi.post('/POST/Bill', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// patch帳單狀態*
const patchBillStatus = (billId, data, token) =>
  storeApi.patch(`/PATCH/Bill?id=${billId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// 查詢帳單*
const postCheckInfo = (data, token) =>
  storeApi.post('POST/Bill/Search', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

/** 上傳照片 */
const postPhoto = (data, token) =>
  storeApi.post('/POST/Photo', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// eslint-disable-next-line object-curly-newline
export {
  postDesingerLogin,
  getStoreProductList,
  getDesignerListSelect,
  getDesignerInfoBack,
  patchDesignerPhoto,
  putDesigner,
  postOrder,
  getOrder,
  getOrderDetail,
  getOrderListbyDesinger,
  patchOrderDetailStatus,
  postPortfolio,
  getBillList,
  getSingleBill,
  postBill,
  postCheckInfo,
  patchBillStatus,
  patchWork,
  deleteWork,
  getDesignerWorks,
  postPhoto,
};
