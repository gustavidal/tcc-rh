import { Link } from "react-router-dom";
import { User, ChevronRight } from "lucide-react";
import Card from "../Card";
import Badge from "../Badge";
import "./style.css";

// dados fixos por enquanto; depois vêm da API
const colaboradores = [
  { id: 1, nome: "Kemilly Santos", cargo: "Analista de marketing",    setor: "Comercial",         desempenho: ["9,1", "verde"],   sobrecarga: ["91%", "verde"],   status: ["Sobrecarga", "verde"] },
  { id: 2, nome: "Kemilly Santos", cargo: "Desenvolvedor pleno",      setor: "Tecnologia",        desempenho: ["9,1", "amarelo"], sobrecarga: ["91%", "vermelho"], status: ["Sobrecarga", "vermelho"] },
  { id: 3, nome: "Kemilly Santos", cargo: "Analista financeiro",      setor: "Financeiro",        desempenho: ["9,1", "amarelo"], sobrecarga: ["91%", "amarelo"], status: ["Sobrecarga", "amarelo"] },
  { id: 4, nome: "Kemilly Santos", cargo: "Cordenador de operações",  setor: "Operações",         desempenho: ["9,1", "verde"],   sobrecarga: ["91%", "verde"],   status: ["Sobrecarga", "verde"] },
  { id: 5, nome: "Kemilly Santos", cargo: "Analista de RH",           setor: "Recursos humanos",  desempenho: ["9,1", "verde"],   sobrecarga: ["91%", "verde"],   status: ["Sobrecarga", "verde"] },
];

export default function ColaboradoresDestaque({ className = "" }) {
  return (
    <Card titulo="Colaboradores em destaque" className={className}>
      <div className="destaque__rolagem">
        <table className="destaque__tabela">
          <thead>
            <tr>
              <th className="esq">Colaborador</th>
              <th className="esq">Cargo</th>
              <th className="esq">Setor</th>
              <th>Desempenho</th>
              <th>Sobrecarga</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {colaboradores.map((c) => (
              <tr key={c.id}>
                <td className="esq">
                  <span className="destaque__pessoa">
                    <span className="destaque__avatar">
                      <User size={16} />
                    </span>
                    {c.nome}
                  </span>
                </td>
                <td className="esq">{c.cargo}</td>
                <td className="esq">{c.setor}</td>
                <td><Badge cor={c.desempenho[1]}>{c.desempenho[0]}</Badge></td>
                <td><Badge cor={c.sobrecarga[1]}>{c.sobrecarga[0]}</Badge></td>
                <td><Badge cor={c.status[1]}>{c.status[0]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/colaboradores" className="destaque__ver-todos">
        Ver todos os colaboradores <ChevronRight size={16} />
      </Link>
    </Card>
  );
}