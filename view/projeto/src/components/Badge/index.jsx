import "./style.css";

export default function Badge({ cor = "verde", children }) {
  return <span className={`badge badge--${cor}`}>{children}</span>;
}