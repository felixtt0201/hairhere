import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)desingerToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    )}`,
  },
});

/** 產品 */
// get全部產品*
const getStoreProductList = (storeId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/ProductList?storeId=${storeId}`);

/** 設計師 */
// get 單一設計師資料(後台)*
const getDesignerInfoBack = (dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/Designer/Detail?id=${dId}`);

// get 設計師清單（下拉選單*
const getDesignerListSelect = (storeId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`GET/DesignerList/Drop?storeId=${storeId}`);

// put修改設計師資料*
const putDesigner = (data, dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.put(`/PUT/Designer?id=${dId}`, data);

// patch上傳設計師照片*
const patchDesignerPhoto = (dId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`/PATCH/Designer/Picture?id=${dId}`, data);

/** 訂單 */
// post新增訂單*
const postOrder = (data) => storeApi.post('/POST/Order', data);

// get訂單*
const getOrder = () => storeApi.get('/GET/OrderList');

// get單一訂單*
const getOrderDetail = (oId) => storeApi.get(`/GET/Order?id=${oId}`);

// patch訂單狀態*
const patchOrderDetailStatus = (oId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`PATCH/Order?id=${oId}`, data);

// get搜尋訂單(by設計師Id)*
const getOrderListbyDesinger = (dId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(`/GET/OrderList?designerId=${dId}`);

/** 作品 bycin */
// post新增作品*
const postPortfolio = (data) => storeApi.post('/POST/Portfolio', data);

// patch作品*
const patchWork = (workId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`/PATCH/Portfolio?id=${workId}`, data);

// delete作品*
const deleteWork = (workId) => storeApi.delete(`DELETE/Portfolio?id=${workId}`);

// get單一設計師全部作品*
const getDesignerWorks = (dId, pages, index) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.get(
    `/GET/PortfolioList?designerId=${dId}&limit=${pages}&index=${index}`,
  );

/** 帳單 */
// get全部帳單*
const getBillList = () => storeApi.get('/GET/BillList');

// get單一帳單*
const getSingleBill = (billId) => storeApi.get(`/GET/Bill?id=${billId}`);

// post帳單*
const postBill = (data) => storeApi.post('/POST/Bill', data);

// patch帳單狀態*
const patchBillStatus = (billId, data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.patch(`/PATCH/Bill?id=${billId}`, data);

// 查詢帳單*
const postCheckInfo = (data) => storeApi.post('POST/Bill/Search', data);

/** 上傳照片 */
const postPhoto = (data) => storeApi.post('/POST/Photo', data);

// eslint-disable-next-line object-curly-newline
export {
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
