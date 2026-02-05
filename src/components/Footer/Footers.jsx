import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/help">Help Center</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="footer-copy">© 2026 Alpha-Flix__Raja Lingam G</p>
      <p>grajalingam2004@gmail.com</p>
    </div>
  </footer>
);

export default Footer;
