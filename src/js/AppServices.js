import axios from 'axios';

const storeApi = axios.create({
  baseURL: 'https://salon.rocket-coding.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

/** 店家 */
// 店家登入
const storeLogin = (data) => storeApi.post('/LoginStore', data);
// 店家註冊
const storeRegister = (data) => storeApi.post('/POST/Store', data);
// 店家全部資料
const storeTotalInfo = () => storeApi.get('/GET/Store?id=2');
const updateStore = (data) => storeApi.put('/PUT/Store?id=2', data);

// eslint-disable-next-line object-curly-newline
export { storeLogin, storeRegister, storeTotalInfo, updateStore };
