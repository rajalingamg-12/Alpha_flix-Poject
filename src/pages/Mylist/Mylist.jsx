import "./Mylist.css";
import game from "./assets/game-of-thrones.jpg";
import shazam from "./assets/shazam.jpg";
import aqua from "./assets/aquaman.webp";
import squidgame from "./assets/squidgame.jpg";
import wheel from "./assets/wheel.jpg";
import bird from "./assets/bird.jpg";
import dr from "./assets/dr.jpg";
import river from "./assets/river.jpg";
import night from "./assets/night.jpg";
import sinner from "./assets/sinner.jpg";
import lord from "./assets/lord.jpg";
import money from "./assets/money.webp";
import creulla from "./assets/cruella.jpg";
import titanic from "./assets/titanic.webp";
import things from "./assets/things.jpg";
import heart from "./assets/heart.webp";
import spi from "./assets/spiderman-noway.jpg";
import onepi from "./assets/one-piece1.webp";

const Mylist = () => {
  return (
    <div className="mylist">
      {/* Banner */}
      <section className="mylist-banner">
        <h1>My List</h1>
        <p>Your favorite movies and shows, all in one place.</p>
      </section>

      {/* Saved Movies */}
      <div className="row">
        <h2>Saved Movies</h2>
        <div className="posters">
          <img src={game} alt="game-of-thrones" />
          <img src={shazam} alt="shazam" />
          <img src={aqua} alt="aquaman" />
          <img src={squidgame} alt="squid" />
          <img src={wheel} alt="wheel-of-time" />
          <img src={spi} alt="spiderman" />
        </div>
      </div>

      {/* Saved TV Shows */}
      <div className="row">
        <h2>Saved TV Shows</h2>
        <div className="posters">
          <img src={bird} alt="birds" />
          <img src={dr} alt="dr-romantic" />
          <img src={river} alt="virigin-river" />
          <img src={heart} alt="heartbeat" />
          <img src={night} alt="night" />
          <img src={sinner} alt="sinner" />
        </div>
      </div>
      {/* Favourite Movies  */}
      <div className="row">
        <h2>Favourite Movies</h2>
        <div className="posters">
          <img src={lord} alt="lord" />
          <img src={money} alt="money-hiest" />
          <img src={creulla} alt="virigin-river" />
          <img src={titanic} alt="night" />
          <img src={things} alt="sinner" />
          <img src={onepi} alt="onepiece-1" />
        </div>
      </div>

      {/* Empty Message Example */}
      <div className="empty-msg">
        <p>Add movies and shows to your list to watch later.</p>
      </div>
    </div>
  );
};

export default Mylist;
