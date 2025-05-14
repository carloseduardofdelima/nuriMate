import Header from '../../components/Header';
import Sidebar from '../../components/Header copy';
import { Outlet } from 'react-router-dom';
import './mainLayout.css'; // opcional

export default function MainLayout() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Outlet /> {/* Aqui será carregado o conteúdo das páginas */}
      </div>
    </div>
  );
}
