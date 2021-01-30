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

// get取得全部店家
const getAllStoreInfo = () => storeApi.get('/GET/StoreList');

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

// post設計師登入
const postDesingerLogin = (data) => storeApi.post('/POST/Login/Designer', data);
// get全部設計師
const getAllDesigner = (page, limit) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/DesignerList?storeId=2&Index=${page}&limit=${limit}`);
// get單一設計師資料
const getDesigner = (dId) => storeApi.get(`/GET/Designer?id=${dId}`);

// get 單一設計師資料(後台)
const getDesignerInfoBack = (dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/Designer/Detail?id=${dId}`);

// get 設計師清單（下拉選單）
const getDesignerListSelect = (storeId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`GET/DesignerList/Drop?storeId=${storeId}`);

// post新增設計師
const postDesinger = (data) => storeApi.post('/POST/Designer?storeid=2', data);

// patch修改設計師狀態(在職/離職)
const patchDesignerStatus = (data, dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`/PATCH/Designer?id=${dId}`, data);

// put修改設計師資料
const putDesigner = (data, dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.put(`/PUT/Designer?id=${dId}`, data);

// patch上傳設計師照片
const patchDesignerPhoto = (dId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`/PATCH/Designer/Picture?id=${dId}`, data);

/** 訂單 */
// post新增訂單
const postOrder = (data) => storeApi.post('/POST/Order', data);

// get訂單
const getOrder = () => storeApi.get('/GET/OrderList');
// get單一訂單
const getOrderDetail = (oId) => storeApi.get(`/GET/Order?id=${oId}`);
// patch訂單狀態
const patchOrderDetailStatus = (oId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`PATCH/Order?id=${oId}`, data);
// get搜尋訂單（by設計師Id）
const getOrderListbyDesinger = (dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/OrderList?designerId=${dId}`);

/** 作品 bycin */
// post新增作品
const postPortfolio = (data) => storeApi.post('/POST/Portfolio', data);

// get全部作品
const getAllworkss = () => storeApi.get('/GET/PortfolioList');

// patch作品
const patchWork = (workId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.put(`/PUT/Portfolio?id=${workId}`, data);

// delete作品
const deleteWork = (workId) => storeApi.delete(`DELETE/Portfolio?id=${workId}`);

// get單一設計師全部作品
const getDesignerWorks = (dId, pages, index) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(
    `/GET/PortfolioList?storeId=2&designerId=${dId}&limit=${pages}&index=${index}`,
  );

/** 帳單 */
// get全部帳單
const getBillList = () => storeApi.get('/GET/BillList');
// get單一帳單
const getSingleBill = (billId) => storeApi.get(`/GET/Bill?id=${billId}`);
// post帳單
const postBill = (data) => storeApi.post('/POST/Bill', data);
// patch帳單狀態
const patchBillStatus = (billId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`/PATCH/Bill?id=${billId}`, data);
// 查詢帳單
const postCheckInfo = (data) => storeApi.post('POST/Bill/Search', data);

/** 上傳照片 */
const postPhoto = (data) => storeApi.post('/POST/Photo', data);

// eslint-disable-next-line object-curly-newline
export {
  postStoreLogin,
  postStoreRegister,
  getAllStoreInfo,
  getStoreTotalInfo,
  putStoreInfo,
  getStoreProductList,
  posteStoreProduct,
  putStoreProductList,
  deleteStoreProduct,
  getAllDesigner,
  getDesigner,
  getDesignerListSelect,
  getDesignerInfoBack,
  postDesinger,
  patchDesignerPhoto,
  patchDesignerStatus,
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
  getAllworkss, // 要修改名字
  patchWork,
  deleteWork,
  getDesignerWorks,
  postDesingerLogin,
  postPhoto,
};
