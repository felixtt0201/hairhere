import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  // baseURL: 'http://todoapi.balliiballii.com/api/v1',
  withCredentials: false,
  headers: {
    // Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

/** 店家 */
// 店家登入
const storeLogin = (data) => storeApi.post('/LoginStore', data);
// 店家註冊
const storeRegister = (data) => storeApi.post('/CreateStore', data);
// 店家全部資料
const storeTotalInfo = () => storeApi.get('/GET/Store?id=2');
const updateStore = (data) => storeApi.put('/PutStore?id=2', data);
// const updateStore = (data) => storeApi.patch('/todos/3', data);

// eslint-disable-next-line object-curly-newline
export { storeLogin, storeRegister, storeTotalInfo, updateStore };
