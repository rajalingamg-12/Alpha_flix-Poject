import "./Tvshows.css";
import fall from "./assets/fallout.jpg";
import might from "./assets/might.jpg";
import run from "./assets/runaway.webp";
import steal from "./assets/steal.jpg";
import summer from "./assets/summer.webp";
import asurr from "./assets/asurr.webp";
import school from "./assets/school.webp";
import search from "./assets/search.webp";
import mir from "./assets/Mirzapur.webp";
import touch from "./assets/touch.jpg";
import lokie from "./assets/lokie.jpg";
import falls from "./assets/fall.webp";
import justice from "./assets/justice.jpg";
import sach from "./assets/sach.webp";
import days from "./assets/56days.webp";
import oops from "./assets/oops.jpg";
import ozark from "./assets/ozark.jpg";
import name from "./assets/name.webp";
import alien from "./assets/alien.jpg";
import crown from "./assets/crown.jpg";

const Tvshows = () => {
  return (
    <div className="tvshows">
      {/* Banner */}
      <section className="tv-banner">
        <h1>TV Shows</h1>
        <p>Binge-watch the latest and greatest TV series.</p>
      </section>

      {/* Popular TV Shows */}
      <div className="row">
        <h2>Popular on Netflix</h2>
        <div className="posters">
          <img src={fall} alt="fallout" />
          <img src={might} alt="might" />
          <img src={run} alt="runaway" />
          <img src={steal} alt="steal" />
          <img src={summer} alt="summer" />
        </div>
      </div>

      {/* Trending TV */}
      <div className="row">
        <h2>Trending TV Shows</h2>
        <div className="posters">
          <img src={asurr} alt="asurr" />
          <img src={school} alt="school-of-lies" />
          <img src={touch} alt="touch-me-not" />
          <img src={search} alt="search" />
          <img src={mir} alt="mirapur" />
        </div>
      </div>

      {/* New Releases */}
      <div className="row">
        <h2>New TV Releases</h2>
        <div className="posters">
          <img src={lokie} alt="lokie" />
          <img src={falls} alt="fall" />
          <img src={justice} alt="justice" />
          <img src={sach} alt="sach"/>
          <img src={days} alt="56days"/>
        </div>
      </div>

      {/* Drama */}
      <div className="row">
        <h2>Drama Series</h2>
        <div className="posters">
          <img src={oops} alt="oops" />
          <img src={ozark} alt="ozark" />
          <img src={name} alt="name" />
          <img src={alien} alt="girlfriend-alien"/>
          <img src={crown} alt="crown"/>
        </div>
      </div>

      {/* View all */}
      <div className="view-all-container">
        <button className="view-all-btn">View All TV Shows</button>
      </div>
    </div>
  );
};

export default Tvshows;
