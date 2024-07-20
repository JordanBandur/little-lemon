import '../assets/styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-logo">
        <img src="/images/footer-logo.png" alt="Little Lemon logo" />
      </section>
      <section className="footer-nav">
        <nav aria-label="Doormat Navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </section>
      <section className="footer-contact">
        <h2>Contact</h2>
        <address>
          <p>Address: Chicago, Illinois, USA</p>
          <p>Phone: 312-938-7229</p>
          <p>Email: hello@littlelemon.com</p>
        </address>
      </section>
      <section className="footer-social">
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href="#facebook" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#twitter" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#instagram" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </section>
      <section className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All Rights Reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
