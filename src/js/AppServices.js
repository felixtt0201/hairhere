/* eslint-disable quote-props */
import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${document.cookie.split('=')[1]}`,
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

/** 設計師 */

// post新增設計師
// const postDesinger = (data) =>
//   // eslint-disable-next-line implicit-arrow-linebreak
//   picuploaded.post('/POST/Designer?storeid=2', data);

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
};
