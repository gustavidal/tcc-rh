import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./style.css";

const menu = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Colaboradores", path: "/colaboradores" },
  { label: "Avaliações", path: "/avaliacoes" },
  { label: "Competências", path: "/competencias" },
  { label: "Metas", path: "/metas" },
  { label: "Relatórios", path: "/relatorios" },
  { label: "Configurações", path: "/configuracoes" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        {/* troque pelo <img src={logo} /> quando tiver o arquivo */}
        <strong>Colabore</strong>
      </div>

      <nav className="sidebar__menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link--ativo" : "sidebar__link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__rodape">
        <NavLink to="/perfil" className="sidebar__usuario">
          <span className="sidebar__avatar" />
          Gustavo Vidal
        </NavLink>

        <button className="sidebar__sair">
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}