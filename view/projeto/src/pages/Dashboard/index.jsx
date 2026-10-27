import { Users, FileText, TrendingUp, Target, Gauge } from "lucide-react";
import StatCard from "../../components/StatCard";
import GraficoSobrecarga from "../../components/GraficoSobrecarga";
import GraficoDesempenho from "../../components/GraficoDesempenho";
import Alertas from "../../components/Alertas";
import AcoesRapidas from "../../components/AcoesRapidas";
import ColaboradoresDestaque from "../../components/ColaboradoresDestaque";
import "./style.css";

// por enquanto são dados fixos; depois vêm da API
const metricas = [
  { icone: Users, cor: "azul", titulo: "Total de colaboradores", valor: "267", rodape: "8% maior que o mês anterior" },
  { icone: FileText, cor: "roxo", titulo: "Avaliações pendentes", valor: "20", rodape: "Aguardando avaliação" },
  { icone: TrendingUp, cor: "amarelo", titulo: "Desempenho médio", valor: "55%", rodape: "5% vs mês anterior" },
  { icone: Target, cor: "verde", titulo: "Metas em andamento", valor: "50", rodape: "12% vs mês anterior" },
  { icone: Gauge, cor: "vermelho", titulo: "Índice de sobrecarga", valor: "9,0", rodape: "65% em relação ao mês anterior" },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard__metricas">
        {metricas.map((m) => (
          <StatCard key={m.titulo} {...m} />
        ))}
      </section>

      <section className="dashboard__corpo">
        <GraficoSobrecarga />
        <GraficoDesempenho />
        <Alertas className="dashboard__alertas" />
        <AcoesRapidas className="dashboard__acoes" />
        <ColaboradoresDestaque className="dashboard__tabela" />
      </section>
    </div>
  );
}