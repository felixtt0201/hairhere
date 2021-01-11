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
// get店家全部產品
const storeProductList = () => storeApi.get('/GET/ProductList?storeId=2');
// eslint-disable-next-line object-curly-newline
export {
  storeLogin,
  storeRegister,
  storeTotalInfo,
  updateStore,
  storeProductList,
};
