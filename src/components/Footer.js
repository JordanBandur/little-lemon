function Footer() {
  return (
    <footer>
      <section>
        <img src="images/logo.svg" alt="Little Lemon logo" />
      </section>
      <section>
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
      <section>
        <h2>Contact</h2>
        <address>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </address>
      </section>
      <section>
        <h2>Social Media Links</h2>
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#instagram">Instagram</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;