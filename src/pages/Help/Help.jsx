import { Link } from "react-router-dom";
import "./Help.css";

const helpTopics = [
  {
    title: "Getting Started",
    desc: "Learn how to sign up, log in, and start watching.",
    link: "/faq",
  },
  {
    title: "Account & Billing",
    desc: "Manage your account, plans, and payment details.",
    link: "/faq",
  },
  {
    title: "Watching on Devices",
    desc: "Watch Alpha-Flix on mobile, TV, and desktop.",
    link: "/faq",
  },
  {
    title: "Troubleshooting",
    desc: "Fix playback, buffering, and login issues.",
    link: "/faq",
  },
];

const Help = () => {
  return (
    <div className="help">
      <div className="help-container">
        <h1>Help Center</h1>
        <p className="subtitle">How can we help you today?</p>

        <div className="help-grid">
          {helpTopics.map((item, index) => (
            <div className="help-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={item.link}>Learn more →</Link>
            </div>
          ))}
        </div>

        {/* Contact  */}
        <div className="help-contact">
          <h2>Still need help?</h2>
          <p>Our support team is always here for you.</p>
          <Link to="/contact" className="help-btn">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
