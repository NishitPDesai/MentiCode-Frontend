import { Outlet } from 'react-router-dom';
import DevSidebar from '@/components/sidebars/DevSidebar';
import { LayoutDashboard, Rocket, BarChart } from 'lucide-react';

const navItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  { name: 'Playgrounds', path: '/dev/playgrounds', icon: <Rocket size={20} /> },
  { name: 'My Analyses', path: '/dev/my-analyses', icon: <BarChart size={20} /> },
];

export default function DevLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <DevSidebar navItems={navItems}/>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
