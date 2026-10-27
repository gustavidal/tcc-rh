import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import Card from "../Card";

const dados = [
  { setor: "Marketing",  indice: 48 },
  { setor: "Vendas",     indice: 71 },
  { setor: "Operações",  indice: 65 },
  { setor: "Financeiro", indice: 40 },
  { setor: "TI",         indice: 55 },
  { setor: "RH",         indice: 38 },
];

export default function GraficoSobrecarga() {
  return (
    <Card titulo="Índice de sobrecarga por setor">
      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dados}>
            <CartesianGrid vertical={false} stroke="#eceff5" />
            <XAxis dataKey="setor" tickLine={false} />
            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tickFormatter={(v) => `${v}%`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip formatter={(v) => `${v}%`} />
            <Legend verticalAlign="top" iconType="circle" />
            <Bar dataKey="indice" name="Índice" fill="#0047d6" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}