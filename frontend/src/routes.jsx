import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/mainLayout';
import Recipes from './components/Recipes';
import WeekCalendar from './components/Calendar';
import Dashboard from './pages/Dashboard';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="recipes" element={<Recipes />} />
        <Route path="saved" element={<Recipes favorites={true}/>} />
        <Route path="calendar" element={<WeekCalendar/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
