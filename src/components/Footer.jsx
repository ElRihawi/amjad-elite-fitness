import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            Amjad <span>Elite</span>
          </Link>
          <p className="footer-text">
            Building strength, discipline, and elite performance every day.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>Hamra Street</li>
            <li>Beirut, Lebanon</li>
            <li>+961 81 682 971</li>
            <li>info@amjadelite.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Amjad Elite Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}
