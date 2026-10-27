import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Card from "../Card";

const dados = [
  { nome: "Excelente", valor: 35, cor: "#3a6bc4" },
  { nome: "Bom",       valor: 40, cor: "#0a47d8" },
  { nome: "Regular",   valor: 15, cor: "#1a8aff" },
  { nome: "Baixo",     valor: 10, cor: "#4a7cff" },
];

export default function GraficoDesempenho() {
  return (
    <Card titulo="Distribuição por desempenho">
      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dados}
              dataKey="valor"
              nameKey="nome"
              innerRadius={65}
              outerRadius={100}
              label={({ name, value }) => `${name} ${value}%`}
            >
              {dados.map((d) => (
                <Cell key={d.nome} fill={d.cor} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}