/* eslint-disable quote-props */
import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${localStorage.getItem('myToken')}`,
  },
});

/** 店家 */
// post店家登入
const postStoreLogin = (data) => storeApi.post('/POST/Login/Store', data);

// post店家註冊
const postStoreRegister = (data) => storeApi.post('/POST/Store', data);

// get店家全部資料
const getStoreTotalInfo = () => storeApi.get('/GET/Store?id=2');

// put修改店家資料
const putStoreInfo = (data) => storeApi.put('/PUT/Store', data);

// put修改店休日期 -未完
const updateDayOf = (data) => storeApi.put('PUT/Holiday?id=8', data);

/** 產品 */
// get全部產品
const getStoreProductList = () => storeApi.get('/GET/ProductList?storeId=2');

// post新增產品
const posteStoreProduct = (data) => storeApi.post('/POST/Product', data);

// put修改產品資料
const putStoreProductList = (data, pId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.put(`/PUT/Product?id=${pId}`, data);

// delete刪除產品
const deleteStoreProduct = (pId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.delete(`/DELETE/Product?id=${pId}`);

/** 設計師 */
// get全部設計師
const getAllDesigner = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get('/GET/DesignerList?storeId=2');

// get單一設計師資料
const getDesigner = (dId) => storeApi.get(`/GET/Designer?id=${dId}`);

// post新增設計師
const postDesinger = (data) => storeApi.post('/POST/Designer?storeid=2', data);

// delete設計師
const deleteDesigner = (dId) => storeApi.delete(`/DELETE/Designer?id=${dId}`);

// put修改設計師資料
const putDesigner = (data, dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.put(`/PUT/Designer?id=${dId}`, data);

/** 訂單 */
// post新增訂單
const postOrder = (data) => storeApi.post('/POST/Order', data);

// get訂單
const getOrder = () => storeApi.get('/GET/OrderList');
// get單一訂單
const getOrderDetail = (oId) => storeApi.get(`/GET/Order?id=${oId}`);
// patch 訂單狀態
const patchOrderDetailStatus = (oId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`PATCH/Order?id=${oId}`, data);

// eslint-disable-next-line object-curly-newline
export {
  postStoreLogin,
  postStoreRegister,
  getStoreTotalInfo,
  putStoreInfo,
  updateDayOf,
  getStoreProductList,
  posteStoreProduct,
  putStoreProductList,
  deleteStoreProduct,
  getAllDesigner,
  getDesigner,
  postDesinger,
  deleteDesigner,
  putDesigner,
  postOrder,
  getOrder,
  getOrderDetail,
  patchOrderDetailStatus,
};
