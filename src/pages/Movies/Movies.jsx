import "./Movies.css";
import harrypotter from "./assert/harry-potter.avif";
import roma from "./assert/roma.png";
import narnia from "./assert/narnia.jpg";
import watcher from "./assert/watcher.jpg";
import silence from "./assert/silence.webp";
import island from "./assert/island.jpg";
import marco from "./assert/marco.jpg";
import lifelist from "./assert/lifelist.jpg";
import boardpeek from "./assert/broadpeek.webp";
import women from "./assert/women.png";
import ashes from "./assert/ashes.jpg";
import love from "./assert/love.jpg";
import sin from "./assert/sin.webp";
import time from "./assert/time.jpg";
import little from "./assert/little.jpg";
import damsel from "./assert/damsel.jpg";
import uncharacter from "./assert/uncharacter.jpg";
import underground from "./assert/underground.jpg";
import outside from "./assert/outside.jpg";
import vitam from "./assert/vitam.jpg";
import dragon from "./assert/how-train-dragon.webp";
import spiderman from "./assert/spiderman1.jpg";
import moana from "./assert/moana.jpg";
import panda from "./assert/panda.jpg";
import moon from "./assert/moon.jpg";
import onepiece from "./assert/onepiece.jpg";
import naurto from "./assert/naruto.jpg";
import ball from "./assert/ball.jpg";
import bleach from "./assert/bleach.jpg"
import hero from "./assert/hero.jpg";


const Movies = () => {
  return (
    <div className="movies">
      {/* Banner */}
      <section className="movies-banner">
        <h1>Movies</h1>
        <p>Watch the latest blockbusters and timeless classics.</p>
      </section>

      {/* Popular Movies */}
      <div className="row">
        <h2>Popular Movies</h2>
        <div className="posters">
          <img src={harrypotter} alt="harrypotter" />
          <img src={roma} alt="roma" />
          <img src={narnia} alt="narnia" />
          <img src={watcher} alt="watcher" />
          <img src={silence} alt="silence" />
        </div>
      </div>

      {/* Trending */}
      <div className="row">
        <h2>Trending Movies</h2>
        <div className="posters">
          <img src={island} alt="fantancy-island" />
          <img src={marco} alt="marcos" />
          <img src={lifelist} alt="lifelist" />
          <img src={boardpeek} alt="board-peek" />
          <img src={women} alt="little-women" />
        </div>
      </div>

      {/* New Releases */}
      <div className="row">
        <h2>New Releases</h2>
        <div className="posters">
          <img src={ashes} alt="ashes" />
          <img src={love} alt="love" />
          <img src={time} alt="time-to-time" />
          <img src={sin} alt="sin" />
          <img src={little} alt="our-little-secret" />
        </div>
      </div>

      {/* Action */}
      <div className="row">
        <h2>Action Movies</h2>
        <div className="posters">
          <img src={damsel} alt="damsel" />
          <img src={uncharacter} alt="uncharacter" />
          <img src={underground} alt="underground" />
          <img src={outside} alt="outside" />
          <img src={vitam} alt="vitam" />
        </div>
      </div>

      {/* Animation*/}
      <div className="row">
        <h2>Animation </h2>
        <div className="posters">
          <img src={onepiece} alt="onepiece" />
          <img src={naurto} alt="naurto" />
          <img src={ball} alt="dragon-ball" />
          <img src={bleach} alt="bleach" />
          <img src={hero} alt="hero" />
        </div>
      </div>

      {/* Kids Movies */}
      <div className="row">
        <h2>Kids Movies</h2>
        <div className="posters">
          <img src={dragon} alt="how-to-train-dragon" />
          <img src={spiderman} alt="spiderman-1" />
          <img src={moana} alt="moana" />
          <img src={panda} alt="kunfo-panda" />
          <img src={moon} alt="our-moon" />
        </div>
      </div>
 
      {/* View All */}
      <div className="view-all-container">
        <button className="view-all-btn">View All Movies</button>
      </div>
    </div>
  );
};

export default Movies;
