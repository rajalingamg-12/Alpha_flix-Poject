import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          We’re here to help. Reach out to Alpha-Flix support anytime.
        </p>

        <div className="contact-box">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Support</h3>
            <p>
              Email: <span>grajalingam2004@gmail.com</span>
            </p>
            <p>Available:<span> 24/7</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
