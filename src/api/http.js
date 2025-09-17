import axios from 'axios';

const baseURL =
  import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;

const baseURLWithVersion = `${baseURL}/api/v1`;

/** HTTP client. */
export const http = axios.create({ baseURL: baseURLWithVersion });
