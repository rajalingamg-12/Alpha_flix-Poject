import "./Newpop.css";
import cobara from "./assets/cobara.jpg";
import dry from "./assets/dry.webp";
import john from "./assets/john.jpg";
import wolf from "./assets/wolf.jpg";
import lucy from "./assets/lucy.jpg";
import godless from "./assets/godless.jpg";
import wep from "./assets/wep.jpg";
import madmax from "./assets/madmax.jpeg";
import scream from "./assets/scream.jpg";
import vijay from "./assets/vijay.jpg";
import worldjur from "./assets/worldjur.jpg";
import logan from "./assets/logan.jpg";
import onepieces from "./assets/onepiece-2.jpg";
import tales from "./assets/85.jpg";
import my2 from "./assets/my2.jpg";
import wednes from "./assets/wednesday-3.jpg";
import magical from "./assets/magical-narnia.jpg";
import alldead from "./assets/alldead.webp";
import action from "./assets/action.jpg";
import lookup from "./assets/lookup.jpg";
import quit from "./assets/quit.webp";
import red from "./assets/Red-Notice.jpg";
import demon from "./assets/demon.webp";
import avenger from "./assets/avengers.jpg";
import hanuman from "./assets/hanuman.jpg";
import amman from "./assets/amman.webp";
import omg from "./assets/omg.png";
import bible from "./assets/bible.webp";
import mirai from "./assets/mirai.jpg";
import allah from "./assets/allah.jpg";

const Newpop = () => {
  return (
    <div className="newpop">
      {/* Banner */}
      <section className="newpop-banner">
        <h1>New & Popular</h1>
        <p>Discover the latest releases and trending content.</p>
      </section>

      {/* New Releases */}
      <div className="row">
        <h2>New Releases</h2>
        <div className="posters">
          <img src={dry} alt="dry-martina" />
          <img src={john} alt="john" />
          <img src={cobara} alt="cobara" />
          <img src={wolf} alt="wolf-man" />
          <img src={lucy} alt="lucy" />
          <img src={wep} alt="weapon" />
        </div>
      </div>

      {/* Trending Now */}
      <div className="row">
        <h2>Trending Now</h2>
        <div className="posters">
          <img src={madmax} alt="madmax" />
          <img src={scream} alt="sceam" />
          <img src={vijay} alt="vijay" />
          <img src={worldjur} alt="juassic-world" />
          <img src={logan} alt="logan" />
          <img src={godless} alt="godless" />
        </div>
      </div>

      {/* Coming Soon */}
      <div className="row">
        <h2>Coming Soon</h2>
        <div className="posters">
          <img src={onepieces} alt="one-piece-2" />
          <img src={my2} alt="my2" />
          <img src={wednes} alt="wednesday-3" />
          <img src={magical} alt="magical-narnia" />
          <img src={alldead} alt="all-dead" />
          <img src={tales} alt="stranger-things-85" />
        </div>
      </div>

      {/* Top Rated */}
      <div className="row">
        <h2>Top Rated</h2>
        <div className="posters">
          <img src={action} alt="action" />
          <img src={demon} alt="demon" />
          <img src={red} alt="red-notice" />
          <img src={quit} alt="quit" />
          <img src={lookup} alt="lookup" />
          <img src={avenger} alt="avenger" />
        </div>
      </div>
      {/* Top Rated */}
      <div className="row">
        <h2>Regional Side</h2>
        <div className="posters">
          <img src={hanuman} alt="hanuman" />
          <img src={amman} alt="amman" />
          <img src={allah} alt="allah" />
          <img src={omg} alt="omg" />
          <img src={bible} alt="bible" />
          <img src={mirai} alt="mirai" />
        </div>
      </div>

      {/* View all */}
      <div className="view-all-container">
        <button className="view-all-btn">View All New & Popular</button>
      </div>
    </div>
  );
};

export default Newpop;
