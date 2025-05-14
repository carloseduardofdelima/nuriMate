import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/mainLayout';
import Recipes from './components/Recipes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="recipes" element={<Recipes />} />
        <Route path="saved" element={<Recipes favorites={true}/>} />
      </Route>

      <Route path="*" element={<></>} />
    </Routes>
  );
}
