import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footers";

import Home from "./pages/Home/Home";
import TVShows from "./pages/Tvshows/Tvshows";
import Movies from "./pages/Movies/Movies";
import Newpop from "./pages/Newpop/Newpop";
import Mylist from "./pages/Mylist/Mylist";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Contact from "./pages/Contact/contact";
import Privacy from "./pages/Privacy/Privacy";
import FAQ from "./pages/FAQ/FAQs";
import Help from "./pages/Help/Help";
import Subscribe from "./pages/Subscribe/Subscribe";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/Editprofile";

function App() {
  const [user, setUser] = useState({
    name: "Raja Lingam G",
    email: "grajalingam2004@gmail.com",
    plan: "Premium",
  });

  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ marginTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newpop" element={<Newpop />} />
          <Route path="/mylist" element={<Mylist />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/subscribe" element={<Subscribe />} />

          { /*  Profile Routes  */}
          <Route path="/profile" element={<Profile user={user} />} />
          <Route
            path="/profile/edit"
            element={<EditProfile user={user} setUser={setUser} />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
