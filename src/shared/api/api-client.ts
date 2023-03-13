import axios from 'axios';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';

export const apiClient = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: localStorage.getItem(LOCAL_STORAGE_VIEWER_KEY) ?? '',
  },
});
