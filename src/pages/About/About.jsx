import "./About.css";
import myprofile from "./assets/raja.jpeg";

const About = () => {
  return (
    <div className="about">
      {/* Banner */}
      <section className="about-banner">
        <h1>About Us</h1>
        <p>
          We are dedicated to bringing the best movies and TV shows to your
          screen.
        </p>
      </section>

      {/* Our Story */}
      <div className="section">
        <h2>Our Story</h2>
        <p>
          Alpa-flix Clone is a personal project designed to emulate the look and
          feel of Alpha-flix. It showcases movies, TV shows, and trending
          content with a clean, modern interface. This project uses React.js,
          CSS, and LocalStorage to provide a realistic user experience.
        </p>
      </div>

      {/* Our Mission */}
      <div className="section">
        <h2>Our Mission</h2>
        <p>
          To provide users with an interactive and visually appealing platform
          for exploring movies and TV shows. We focus on simplicity,
          responsiveness, and usability.
        </p>
      </div>

      {/* Our Team */}
      <div className="section">
        <h2>Our Developer</h2>
        <div className="team">
          <div className="member">
            <img src={myprofile} alt="Raja" />
            <h1>Raja Lingam G</h1>
            <h3>Software Developer</h3>
            <p>MERN Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
