import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiSlice } from '@/app/apiSlice';
import { createSocket } from '@/features/websocket/socketClient';

export function useJobWebSocket() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = createSocket();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'job.completed') {
        dispatch(apiSlice.util.invalidateTags(['Job']));
      }
    };

    return () => ws.close();
  }, [dispatch]);
}
