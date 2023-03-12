import { Outlet, useRoutes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import InformationCard from "./components/informationcentre/InformationCard";
import Home from "./components/home/Home";

import News from "./components/news/News";

import Faqs from "./components/faqs/Faqs";
import ReferandEarn from "./components/referandearn/ReferandEarn"

import Category from "./pages/Category";
import LoginPage from './pages/LoginPage';
import ForgetPassword from './pages/ForgetPassword';
import Point from './pages/Points';
import PointHistory from './pages/points/PointHistory';
import PointRedeemed from './pages/pointsredeemed/PointRedeemed';
import GameInformation from './pages/gamesinformation/GameInformation';
import Play from './pages/Play'
import GamesCollection from './pages/Games';
import ContactUs from './pages/contactus/ContactUs';
import TermsandCondition from './pages/termsandcondition/TermsandCondition';
import ReturnandRefund from './pages/returnandrefund/ReturnandRefund';
import CustomerReward from './pages/customerrewardpolicy/CustomerReward';
import AboutUs from './pages/aboutus/AboutUs';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import RequireAdmin from './Middleware/RequireAdmin';
import Results from './components/results/Results';

function Router() {
    const element = useRoutes([
        {
            element: <MainLayout />,
            path: '/',
            children: [
                { index: true, element: <Home /> },
                { path: "category/:id", element: <Category /> },
                { path: "points", element: <> <Point /> </> },
                { path: "games", element: <GamesCollection /> },
                { path: "contact-us", element: <ContactUs /> },
                { path: ":uid/play", element: <RequireAdmin><Play /> </RequireAdmin> },

                { path: "points-history", element: <RequireAdmin> <PointHistory /></RequireAdmin> },
                { path: "results", element: <> <Results /></> },
                { path: "points-redeem", element: <RequireAdmin> <PointRedeemed /></RequireAdmin> },
                {
                    path: "information-center", element: <Outlet />, children: [
                        { index: true, element: <InformationCard /> },
                        { path: ":id", element: <GameInformation /> }
                    ]
                },
                {
                    path: 'profile', element: <RequireAdmin><Outlet /></RequireAdmin>, children: [
                        { index: true, element: <Profile /> },
                        { path: 'update', element: <UpdateProfile /> },
                    ]
                },
                { path: "news", element: <News /> },
                { path: "customer-reward-policy", element: <CustomerReward /> },
                { path: "return-and-refundpolicy", element: <ReturnandRefund /> },
                { path: "terms-and-conditions", element: <TermsandCondition /> },
                { path: "faqs", element: <Faqs /> },
                { path: "about-us", element: <AboutUs /> },
                { path: "refer-and-earn", element: <> <ReferandEarn /> </> },
                {
                    path: 'information', element: <Outlet />, children: [
                    ]
                }
            ],

        },
        { path: '/login', index: true, element: <LoginPage /> },
        { path: '/forget-password', index: true, element: <ForgetPassword /> },


    ]);

    return element;
}
export default Router;


   // <Router>
    //   <Routes path="/" element={<MainLayout />}>
    //     <Route path="/home" element={ />}></Route>
    //     <Route path="/category/:id" element={<Category />}></Route>
    //     <Route path="/results" element={<Results />}></Route>
    //     <Route path="/game/:id" exact element={<Uspowerball />} />
    //     <Route path="/alllotteries/usmegamillions" exact element={<UsMegamillions />} />
    //     <Route path="/alllotteries/eurojackpot" exact element={<EuroJackpot />} />
    //     <Route path="/alllotteries/bonoloto" exact element={<Bonoloto />} />
    //     <Route path="/alllotteries/euromillions" exact element={<EuroMillions />} />
    //     <Route path="/informationcentre" element={<InformationCard />} />
    //     <Route path="/news" element={<News />} />

    //     <Route path="/faqs" element={<Faqs />} />
    //     <Route path="/referandearn" element={<ReferandEarn />} />
    //     <Route path="/alllotteries/USPowerball" exact element={<Uspowerball />} />
    //     <Route path="/pages/gamesinformation/euromillionsinfo" exact element={<EuroMillionsInfo />} />
    //     <Route path="/pages/giftcard" element={<Giftcard />} />
    //     <Route path="/pages/store" element={<Store />} />
    //     <Route path="/pages/aboutus" element={<AboutUs />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/rewards" element={<PlayandWin />} />
    //     <Route path="/pages/customerrewardpolicy" element={<CustomerReward />} />
    //     <Route path="/pages/returnandrefundpolicy" element={<ReturnandRefund />} />
    //     <Route path="/pages/termsandconditions" element={<TermsandCondition />} />
    //     <Route path="/pages/contactus" element={<ContactUs />} />
    //   </Routes>


    // </Router>
