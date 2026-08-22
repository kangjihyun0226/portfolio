export default function Section({ children, className = "", id, as: Component = "section" }) {
  return (
    <Component id={id} className={`section-padding ${className}`}>
      <div className="container-portfolio">{children}</div>
    </Component>
  );
}
