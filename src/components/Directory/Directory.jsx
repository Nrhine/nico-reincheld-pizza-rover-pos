import './Directory.scss';
import { Link } from 'react-router-dom';

function Directory() {
  return (
    <>
      <section className="directory__container">
        <div className="directory__welcome">Welcome!</div>
        <section className="directory__link-container">
          <Link to="/POS" className="directory__link">
            Menu
          </Link>
          <div className="directory__link">Inventory</div>
          <div className="directory__link">Transactions</div>
          <div className="directory__link">Admin Settings</div>
        </section>
      </section>
    </>
  );
}

export default Directory;
