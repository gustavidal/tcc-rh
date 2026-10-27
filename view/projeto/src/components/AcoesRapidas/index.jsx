import { Link } from "react-router-dom";
import { UserPlus, Star, Target, FileText } from "lucide-react";
import Card from "../Card";
import "./style.css";

const acoes = [
  { icone: UserPlus, texto: "Novo colaborador", rota: "/colaboradores" },
  { icone: Star,     texto: "Nova avaliação",    rota: "/avaliacoes" },
  { icone: Target,   texto: "Cadastrar meta",    rota: "/metas" },
  { icone: FileText, texto: "Gerar relatório",   rota: "/relatorios" },
];

export default function AcoesRapidas({ className = "" }) {
  return (
    <Card titulo="Ações rápidas" className={className}>
      <div className="acoes">
        {acoes.map(({ icone: Icone, texto, rota }) => (
          <Link key={texto} to={rota} className="acoes__botao">
            <span className="acoes__icone">
              <Icone size={26} />
            </span>
            {texto}
          </Link>
        ))}
      </div>
    </Card>
  );
}