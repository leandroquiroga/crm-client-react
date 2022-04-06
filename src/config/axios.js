import axios from 'axios';

const clientsAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default clientsAxios;