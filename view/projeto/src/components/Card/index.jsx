import "./style.css";

export default function Card({ titulo, children, className = "" }) {
  return (
    <section className={`card ${className}`}>
      {titulo && <h3 className="card__titulo">{titulo}</h3>}
      {children}
    </section>
  );
}