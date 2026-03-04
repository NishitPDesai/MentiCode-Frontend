import { config } from '@/lib/config';

export const createSocket = () => {
  const token = localStorage.getItem('access_token');
  return new WebSocket(`${config.wsUrl}?token=${token ?? ''}`);
};
