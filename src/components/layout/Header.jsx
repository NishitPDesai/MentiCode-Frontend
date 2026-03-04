import { useDispatch } from 'react-redux';
import Button from '@/components/ui/Button';
import { logout } from '@/features/auth/authSlice';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
      <p className="text-sm text-slate-500">Code Quality Platform</p>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </header>
  );
}
