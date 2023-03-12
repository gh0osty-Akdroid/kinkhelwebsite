import React from "react";
import Banner from "../banner/Banner";
import Bannerone from "../bannerone/Bannerone";
import Games from "../games/Games";
import Header from "../header/Header";
import Highestjackpot from "../highestjackpot/Highestjackpot";
import Information from "../informationcenter/Information";
import Newsletter from "../newsletter/Newsletter";
import Participate from "../participate/Participate";
import Whykinkhel from "../whykinkhel/Whykinkhel";

const Home = () => {
  return (
    <div>
      <div id="mainbodygame">
        <Header />
        <Games />
        <Bannerone />
        <Highestjackpot />
        <Whykinkhel />
        <Participate />
        <Information />
      </div>
    </div>
  );
};

export default Home;
