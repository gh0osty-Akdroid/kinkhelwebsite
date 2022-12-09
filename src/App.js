import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./components/results/Results";
import InformationCard from "./components/informationcentre/InformationCard";
import Home from "./components/home/Home";
import Uspowerball from "./pages/Uspowerball";
import UsMegamillions from "./pages/UsMegamillions";
import EuroJackpot from "./pages/EuroJackpot";
import Bonoloto from "./pages/Bonoloto";
import EuroMillions from "./pages/EuroMillions";
import News from "./components/news/News";

import Faqs from "./components/faqs/Faqs";
import ReferandEarn from "./components/referandearn/ReferandEarn"
import EuroMillionsInfo from "./pages/gamesinformation/EuroMillionsInfo";
import Giftcard from "./pages/Giftcard";
import Store from "./pages/Store";
import AboutUs from "./pages/AboutUs";
import Login from "./components/login/Login";
import Rewards from "./pages/Rewards";
import PlayandWin from "./components/participate/PlayandWin";



function App() {
  return (
    <Router>
    
      <Routes  >
        <Route path="" element={<Home/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
        <Route path="/alllotteries/USPowerball" exact element={<Uspowerball/>} />
        <Route path="/alllotteries/usmegamillions" exact element={<UsMegamillions/>} />
        <Route path="/alllotteries/eurojackpot" exact element={<EuroJackpot/>} />
        <Route path="/alllotteries/bonoloto" exact element={<Bonoloto/>} />
        <Route path="/alllotteries/euromillions" exact element={<EuroMillions /> } />
        <Route path="/informationcentre" element={<InformationCard/>} />
        <Route path="/news" element={<News/>} />
        
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/referandearn" element={<ReferandEarn/>} />
        <Route path="/alllotteries/USPowerball" exact element={<Uspowerball/>} />
        <Route path="/pages/gamesinformation/euromillionsinfo" exact element={<EuroMillionsInfo/>} />
        <Route path="/pages/giftcard" element={<Giftcard/>} />
        <Route path="/pages/store" element={<Store/>} />
        <Route path="/pages/aboutus" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/rewards" element={<PlayandWin/>} />

      </Routes>
    </Router>
  );
}

export default App;
