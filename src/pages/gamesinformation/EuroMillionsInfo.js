import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./euromillionsinfo.css";
import Euro from "../../assets/images/Euro1.png";

const EuroMillionsInfo = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />

      <div className="euromillions-body">
        <div className="euroimg">
          <img src={Euro} alt="" />
        </div>

        <div className="euromillions-header">
          <h1>Euro Millions</h1>
          <p>
            EuroMillions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </p>
        </div>

        <div className="euromillions-info">
          <h2>
            Here is all you need to know about playing and winning EuroMillions
          </h2>
          <p>
            EuroMillions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw. Continue reading to find out everything there is to know
            about EuroMillions.
          </p>

          <h2>The history of EuroMillions</h2>
          <p>
            The first-ever EuroMillions draw took place on 13th February 2004 in
            Paris, with France, Spain, and the United Kingdom being the only
            three countries to participate initially. The game was a hit
            straight away, due to its simplicity and big prizes. six more
            countries joined for the 8th October 2004 draw: Austria, Belgium,
            Ireland, Luxembourg, Portugal, and Switzerland,
          </p>

          <h2>How is EuroMillions played?</h2>
          <p>
            Euro\illions uses two drums. The main drum contains a pool of 50
            balls, the second drum contains a separate pool of 12 Lucky Stars To
            win the jackpot, all five main balls and the two Lucky Stars are
            needed. There are twelve lower prize tiers to be won as well,
            requiring as little as two main balls to win. Note: To win a prize,
            you do NOT need to match the numbers in any particular sequence.
          </p>

          <h2>
            Can | play EuroMillions from outside the participating countries?
          </h2>
          <p>
            There are no restrictions on what nationalities can play
            Euromillions, however, you would normally need to purchase tickets
            within one of the participating countries If you buy EuroMillions
            tickets from Super Winners, we will purchase the ticket for you and
            guarantee to transfer any winnings to your account.
          </p>

          <h2>What payout options are there?</h2>
          <p>
            EuroMillions payouts are made in a single lump sum. There is no
            annuity payment option for this lottery, Staying anonymous as a Mega
            Millions winner isn't a problem when you use our site, because Super
            Winners is collecting the prize on your behalf.
          </p>

          <h2>Fun facts about EuroMillions</h2>
          <p>
            The hottest (most frequently drawn) main EuroMillions numbers are:
            50, 44, 4, 19 and 37. The two hottest Lucky Stars are 8 and 2.
            France has the most jackpot winners of the participating countries,
            with 80. Spain is a close second with 78, while the United Kingdom
            is in third place with 63.
          </p>
        </div>

        <div className="euromillion-button">
            <button className="euromillion-next">Next Article</button>
           
        </div>
        <div className="euromillion-button2">
        <button className="euromillion-back">Back to Information Centre</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EuroMillionsInfo;
