import axios from 'axios';

const clientsAxios = axios.create({
  baseURL: 'http://localhost:4000'
});

export default clientsAxios;