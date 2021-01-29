import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
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

// get全部設計師＆分頁
const getAllDesignerPage = (index, limit) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/DesignerList?storeId=2&Index=${index}&Limit=${limit}`);

// get單一設計師資料
const getDesigner = (dId, page, limit) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/Designer?id=${dId}&Index=${page}&Limit=${limit}`);

// post新增設計師
const postDesinger = (data) => storeApi.post('/POST/Designer?storeid=2', data);

// delete設計師
const deleteDesigner = (dId) => storeApi.delete(`/DELETE/Designer?id=${dId}`);

// put修改設計師資料
const putDesigner = (dId) => storeApi.put(`/PutDesigner?id=${dId}`);

/** 訂單 */
// post新增訂單
const postOrder = (data) => storeApi.post('/POST/Order', data);

// get單一訂單
const getOrder = (data) => storeApi.get(`/Get/Order?id=${data}`);

// get空閑時間
const getFreetime = (designerId, selectTime) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(
    `/Get/Designer/FreeTime?id=${designerId}&selectTime=${selectTime}`,
  );

/** 作品 */
// get全部作品
const getworkss = () => storeApi.get('/GET/PortfolioList');

// get單一作品
const getSingleWork = (workid) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/Portfolio?id=${workid}`);

// get分頁
const getpages = (page, showWorks) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/PortfolioList?Index=${page}&Limit=${showWorks}`);

// get查詢作品關鍵字
const searchworks = (data, page, show) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/PortfolioList?index=${page}&limit=${show}&search=${data}`);

// post查詢訂單
const postOrderInfo = (data) => storeApi.post('POST/Order/Search', data);

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
  getDesigner,
  postDesinger,
  deleteDesigner,
  putDesigner,
  getAllDesigner,
  postOrder,
  getworkss,
  getpages,
  searchworks,
  getOrder,
  getSingleWork,
  getFreetime,
  postOrderInfo,
  getAllDesignerPage,
};
