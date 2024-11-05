import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
 
    console.log('Request:', config); 
    return config;
  },
  (error) => {
    console.error('Request error:', error); 
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response); 
    return response;
  },
  (error) => {
    console.error('Response error:', error.response || error.message);
    if (error.response && error.response.status === 404) {
      alert('Requested resource not found.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
