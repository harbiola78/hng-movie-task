import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.API_URL || 'https://api.themoviedb.org/3/',
});

const token = process.env.ACCESS_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGI0ZGZmNzUxNGVmNGQ0OGNjMDMwMzA5NDBlYzI0NiIsInN1YiI6IjYwY2MzYWNjYWFlYzcxMDAyOTZiMzhhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.26Lkuzd2upChHV0yjiS5z1O7wEvQLKd27zkJQbcac1w'

// console.log(token);

Axios.defaults.headers.common.Authorization = `Bearer ${token}`;

Axios.defaults.headers.post['Content-Type'] = 'application/json';

export default Axios;
