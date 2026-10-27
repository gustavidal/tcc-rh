import { Link } from "react-router-dom";
import { User, TrendingDown, CalendarDays, ChevronRight, ArrowRight } from "lucide-react";
import Card from "../Card";
import "./style.css";

const alertas = [
  { icone: User,         cor: "vermelho", titulo: "Sobrecarga de trabalho", texto: "8 colaboradores acima do limite", rota: "/colaboradores" },
  { icone: TrendingDown, cor: "amarelo",  titulo: "Baixo desempenho",       texto: "5 colaboradores abaixo da meta",  rota: "/colaboradores" },
  { icone: CalendarDays, cor: "azul",     titulo: "Avaliações pendentes",   texto: "16 avaliações aguardando",        rota: "/avaliacoes" },
];

export default function Alertas({ className = "" }) {
  return (
    <Card titulo="Alertas" className={className}>
      <ul className="alertas__lista">
        {alertas.map(({ icone: Icone, cor, titulo, texto, rota }) => (
          <li key={titulo}>
            <Link to={rota} className="alertas__item">
              <span className={`alertas__icone alertas__icone--${cor}`}>
                <Icone size={22} />
              </span>

              <div className="alertas__texto">
                <strong>{titulo}</strong>
                <small>{texto}</small>
              </div>

              <ChevronRight size={18} className="alertas__seta" />
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/alertas" className="alertas__ver-todos">
        Ver todos os alertas <ArrowRight size={16} />
      </Link>
    </Card>
  );
}