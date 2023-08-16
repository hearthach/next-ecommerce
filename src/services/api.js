import axios from 'axios';

// Configura la URL base de la API
const API_BASE_URL = 'http://apiprosalesmanager.somee.com';

const axiosInstance = axios.create({ baseURL: API_BASE_URL });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// Define los endpoints específicos
export const endpoints = {
  login: '/api/Login/GetTokenLogin', // Endpoint para iniciar sesión
  // Agrega más endpoints aquí según sea necesario
};
