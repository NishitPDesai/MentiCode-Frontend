import axios from 'axios';
import { config } from './config';

export const axiosBaseQuery =
  () =>
  async ({ url, method = 'GET', body, params, headers }) => {
    const token = localStorage.getItem('access_token');

    try {
      const result = await axios({
        url: `${config.apiUrl}${url}`,
        method,
        data: body,
        params,
        headers: {
          ...(headers ?? {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data ?? axiosError.message,
        },
      };
    }
  };
