// import { useLocation } from 'react-router-dom';
import './header.scss';

export function Header() {
  const projectTitle = process.env.REACT_APP_PRODUCT_NAME;
  // const location = useLocation;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="align-items-center nav-left-items">
          <a href="/" className="brand">
            {/* TODO: add svg logo */}
            <span>{projectTitle}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
