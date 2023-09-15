import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.API_URL ,
});

const token = process.env.ACCESS_TOKEN

Axios.defaults.headers.common.Authorization = `Bearer ${token}`;

Axios.defaults.headers.post['Content-Type'] = 'application/json';

export default Axios;
