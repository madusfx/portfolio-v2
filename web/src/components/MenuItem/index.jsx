import './style.css';

export function MenuItem({ href, title }) {
  return (
    <a
      href={href}
      className="text-customGray text-xl font-medium text-gradient-hover"
    >
      {title}
    </a>
  );
}
