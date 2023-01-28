import axios from 'axios';

const API_KEY = '75cb9e2e5676e68210ce339dc9ffb5fe';
const LANGUAGE = 'pt-BR';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  headers: {
    'content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
    language: LANGUAGE,
  };

  return config;
});

export default instance;
