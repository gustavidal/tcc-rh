import "./style.css";

export default function StatCard({ icone: Icone, cor = "azul", titulo, valor, rodape }) {
  return (
    <div className="stat-card">
      <div className="stat-card__topo">
        <span className={`stat-card__icone stat-card__icone--${cor}`}>
          <Icone size={32} />
        </span>

        <div className="stat-card__info">
          <span className="stat-card__titulo">{titulo}</span>
          <strong className="stat-card__valor">{valor}</strong>
        </div>
      </div>

      <small className="stat-card__rodape">{rodape}</small>
    </div>
  );
}