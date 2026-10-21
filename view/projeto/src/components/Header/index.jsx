import { useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import "./style.css";

const titulos = {
  "/dashboard": "Dashboard",
  "/colaboradores": "Colaboradores",
  "/avaliacoes": "Avaliações",
  "/competencias": "Competências",
  "/metas": "Metas",
  "/relatorios": "Relatórios",
  "/configuracoes": "Configurações",
};

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <h1 className="header__titulo">{titulos[pathname] ?? ""}</h1>

      <div className="header__busca">
        <Search size={20} />
        <input placeholder="Buscar colaborador, setor, competência..." />
      </div>

      <div className="header__direita">
        <button className="header__sino" aria-label="Notificações">
          <Bell size={22} />
          <span className="header__ponto" />
        </button>

        <div className="header__usuario">
          <span className="header__avatar" />
          <div>
            <strong>Gustavo Vidal</strong>
            <small>Gestor</small>
          </div>
        </div>
      </div>
    </header>
  );
}