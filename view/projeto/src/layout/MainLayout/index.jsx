import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "./style.css";

export default function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__principal">
        <Header />
        <main className="layout__conteudo">
          <Outlet />
        </main>
      </div>
    </div>
  );
}