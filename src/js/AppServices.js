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

// 店家登入
const userLogin = (data) => storeApi.post('/LoginStore', data);

// 店家註冊
const userRegister = (data) => storeApi.post('/CreateStore', data);

export { userLogin, userRegister };
