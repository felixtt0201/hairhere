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
const storeLogin = (data) => storeApi.post('/LoginStore', data);

// post店家註冊
const storeRegister = (data) => storeApi.post('/POST/Store', data);

// get店家全部資料
const storeTotalInfo = () => storeApi.get('/GET/Store?id=2');

// put修改店家資料
const updateStore = (data) => storeApi.put('/PUT/Store?id=2', data);

/** 產品 */
// get全部產品
const storeProductList = () => storeApi.get('/GET/ProductList?storeId=2');

// post新增產品
const postestoreProduct = (data) => storeApi.post('/POST/Product', data);

// put修改產品
const updatestoreProductList = (data, pId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.put(`/PUT/Product?id=${pId}`, data);

// delete刪除產品
const deletestoreProduct = (pId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  storeApi.delete(`/DELETE/Product?id=${pId}`);

// eslint-disable-next-line object-curly-newline
export {
  storeLogin,
  storeRegister,
  storeTotalInfo,
  updateStore,
  storeProductList,
  updatestoreProductList,
  postestoreProduct,
  deletestoreProduct,
};
