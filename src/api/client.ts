import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://app.xts.vn/dungbaby-service/hs/apps/execute/xts',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;