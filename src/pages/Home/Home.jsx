import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import front from "./assets/front.jpg";
import stranger from "./assets/stranger.jpg";
import wednesday from "./assets/wednesday.jpg";
import superman from "./assets/superman.jpg";
import It from "./assets/it.jpg";
import lio from "./assets/lio&stich.jpg";
import white from "./assets/white.jpg";
import year from "./assets/1899.jpg";
import evil from "./assets/evil-daed.jpg";
import getout from "./assets/getout.jpg";
import ourplanet from "./assets/ourplanent.jpg";
import sevenking from "./assets/sevenking.jpg";
import indianan from "./assets/indianan.jpg";
import greyman from "./assets/greyman.jpg";
import backtoaction from "./assets/backtoaction.webp";
import birdbox from "./assets/birdbox.png";
import wehaveghost from "./assets/wehaveghost.jpg";
import familyswitch from "./assets/familyswitch.jpg";
import hallpass from "./assets/hallpass.jpg";
import bossbaby from "./assets/bossbaby.jpg";
import jumanji from "./assets/jumanji.jpg";
import unlocked from "./assets/unlocked.webp";
import you from "./assets/you.jpg";
import kissingbooth from "./assets/kissingbooth.jpg";
import myfault from "./assets/myfault.jpg";
import oursecret from "./assets/our-secret.jpg";
import terifier from "./assets/terifier.jpg";
import dark from "./assets/dark.jpg";
import annabella from "./assets/annabella.jpg";
import nun from "./assets/nun.jpg";
import conjuring from "./assets/conjuring.jpg";
import avg from "./assets/avg.jpg";
import wed from "./assets/wed.jpg";
import harri from "./assets/harri.jpg";

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  const navigate = useNavigate();
  const bannerImages = [front, harri, avg, wed];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const allMovies = [
    stranger,
    It,
    wednesday,
    superman,
    lio,
    white,
    year,
    evil,
    getout,
    ourplanet,
    sevenking,
    indianan,
    greyman,
    backtoaction,
    birdbox,
    wehaveghost,
    familyswitch,
    hallpass,
    bossbaby,
    jumanji,
    unlocked,
    kissingbooth,
    you,
    myfault,
    oursecret,
    terifier,
    dark,
    annabella,
    nun,
    conjuring,
  ];
  return (
    <div className="home">
      {/* Banner */}
      <section
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${bannerImages[bannerIndex]})`,
        }}
      >
        {!playVideo ? (
          <>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>

            <div className="buttons">
              <button className="play" onClick={() => setPlayVideo(true)}>
                ▶ Play
              </button>
              <button className="info" onClick={() => navigate("/contact")}>
                ℹ More Info
              </button>
            </div>
          </>
        ) : (
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/e0Eo0D038rQ?autoplay=1&mute=1"
              title="Stranger Things Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>

            <button className="close-btn" onClick={() => setPlayVideo(false)}>
              ✕
            </button>
          </div>
        )}
      </section>

      {/* VIEW ALL */}
      {viewAll ? (
        <>
          <div className="row">
            <h2>All Movies</h2>

            {Array.from({ length: Math.ceil(allMovies.length / 5) }).map(
              (_, rowIndex) => (
                <div className="posters" key={rowIndex}>
                  {allMovies
                    .slice(rowIndex * 5, rowIndex * 5 + 5)
                    .map((img, index) => (
                      <img key={index} src={img} alt="movie" />
                    ))}
                </div>
              ),
            )}
          </div>

          <div className="view-all-container">
            <button className="view-all-btn" onClick={() => setViewAll(false)}>
              ← Back
            </button>
          </div>
        </>
      ) : (
        <>
          {/* TRENDING */}
          <div className="row">
            <h2>Trending Now</h2>
            <div className="posters">
              <img src={stranger} />
              <img src={It} />
              <img src={wednesday} />
              <img src={superman} />
              <img src={lio} />
            </div>
          </div>

          {/* TOP PICKS */}
          <div className="row">
            <h2>Top Picks For You</h2>
            <div className="posters">
              <img src={white} />
              <img src={year} />
              <img src={evil} />
              <img src={getout} />
              <img src={ourplanet} />
            </div>
          </div>

          {/* ACTION */}
          <div className="row">
            <h2>Action Movies</h2>
            <div className="posters">
              <img src={sevenking} />
              <img src={indianan} />
              <img src={greyman} />
              <img src={backtoaction} />
              <img src={birdbox} />
            </div>
          </div>

          {/* COMEDY */}
          <div className="row">
            <h2>Comedy Movies</h2>
            <div className="posters">
              <img src={wehaveghost} />
              <img src={familyswitch} />
              <img src={hallpass} />
              <img src={bossbaby} />
              <img src={jumanji} />
            </div>
          </div>

          {/* DRAMA */}
          <div className="row">
            <h2>Drama & Romance</h2>
            <div className="posters">
              <img src={unlocked} />
              <img src={kissingbooth} />
              <img src={you} />
              <img src={myfault} />
              <img src={oursecret} />
            </div>
          </div>

          {/* HORROR */}
          <div className="row">
            <h2>Horror & Thriller</h2>
            <div className="posters">
              <img src={terifier} />
              <img src={dark} />
              <img src={annabella} />
              <img src={nun} />
              <img src={conjuring} />
            </div>
          </div>

          {/* VIEW ALL BUTTON */}
          <div className="view-all-container">
            <button className="view-all-btn" onClick={() => setViewAll(true)}>
              View All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
