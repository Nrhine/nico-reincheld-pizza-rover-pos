import './Header.scss';
import { Link } from 'react-router-dom';

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header">
      <nav className="header__nav">
        <button
          className={`header__nav-button ${
            activeTab === 'PIZZA' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('PIZZA')}
        >
          PIZZA
        </button>
        <button
          className={`header__nav-button ${
            activeTab === 'SIDES' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('SIDES')}
        >
          SIDES
        </button>
        <button
          className={`header__nav-button ${
            activeTab === 'DRINKS' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('DRINKS')}
        >
          DRINKS
        </button>

        <Link to="/directory" className="header__nav-button ">
          BACK
        </Link>
      </nav>
    </header>
  );
}

export default Header;
