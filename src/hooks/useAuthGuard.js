import { useSelector } from 'react-redux';

export function useAuthGuard() {
  return useSelector((state) => state.auth.isAuthenticated);
}
