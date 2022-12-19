import React from "react";
import Banner from "../banner/Banner";
import Bannerone from "../bannerone/Bannerone";
import Footer from "../footer/Footer";
import Games from "../games/Games";
import Header from "../header/Header";
import Highestjackpot from "../highestjackpot/Highestjackpot";
import Information from "../informationcenter/Information";
import NavBar from "../nav/NavBar";
import Newsletter from "../newsletter/Newsletter";
import Participate from "../participate/Participate";
import Sidebar from "../sidebar/Sidebar";
import Whykinkhel from "../whykinkhel/Whykinkhel";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <Header />
      <Games />
      <Bannerone />
      <Highestjackpot />
      <Banner />
      <Newsletter />
      <Whykinkhel />
      <Participate />
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
