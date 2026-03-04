import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import DevLayout from '@/components/layout/DevLayout';
import LearnLayout from '@/components/layout/LearnLayout';

import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import PlaygroundsPage from '../pages/PlaygroundsPage';
import MyAnalysesPage from '../pages/MyAnalysesPage';
import PlaygroundPage from '../pages/PlaygroundPage';
import AuthPage from '../pages/AuthPage';
import AnalyzerPage from '../pages/AnalyzerPage';
import CreatePlaygroundPage from '../pages/CreatePlaygroundPage';
import ProfilePage from '../pages/ProfilePage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import WebAppCoursePage from '../pages/WebAppCoursePage';
import '../DesignSystem.css';

function ProtectedLayout() {
  const isAuthenticated = useAuthGuard();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <AppLayout />;
}
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dev/playground" element={<PlaygroundPage />} />
        <Route path="/learn/*" element={<LearnLayout />}>
          <Route path="courses" element={<CoursesPage />} />
          <Route path="course/:id" element={<CourseDetailsPage />} />
          <Route path="webapp-course" element={<WebAppCoursePage />} />
        </Route>

        <Route path="/dev" element={<DevLayout />}>
          <Route path="playgrounds" element={<PlaygroundsPage />} />
          <Route path="my-analyses" element={<MyAnalysesPage />} />
          <Route path="analyzer" element={<AnalyzerPage />} />
          <Route path="create-playground" element={<CreatePlaygroundPage />} />
        </Route>

        <Route path="/profile" element={<ProfilePage />} />



        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
