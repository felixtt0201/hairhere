import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    // Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

/** 店家 */
// 店家登入
const storeLogin = (data) => storeApi.post('/LoginStore', data);
// 店家註冊
const storeRegister = (data) => storeApi.post('/CreateStore', data);
// 店家全部資料
const storeTotalInfo = () => storeApi.get('/GetStore?id=2');

export { storeLogin, storeRegister, storeTotalInfo };
