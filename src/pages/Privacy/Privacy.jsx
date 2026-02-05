import { Link } from "react-router-dom";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: January 2026</p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly, including account
            details, preferences, and communication with our support team.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>
            Information is used to improve content recommendations, maintain
            security, and enhance your viewing experience.
          </p>
        </section>

        <section>
          <h2>Data Protection</h2>
          <p>
            We apply industry-standard security practices to protect your data
            from unauthorized access.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You may access, update, or delete your personal information at any
            time through your account settings.
          </p>
        </section>

        {/* Help section*/}
        <div className="privacy-help">
          <h3>Need more help?</h3>
          <p>
            If you have questions about our Privacy Policy or need support,
            please contact us.
          </p>

          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
          <p className="email">
            Or email us at <span>grajalingam2004@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
