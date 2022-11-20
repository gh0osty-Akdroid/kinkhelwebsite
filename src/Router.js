import { Outlet, Router, useRoutes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import About from "./Pages/about/About";
import HomePage from "./Pages/Home";
import ExtraPage from './Pages/about/ExtraPage'
import Contact from './Pages/Contact'
import UserSupport from './Pages/support/UserSupport'
import MerchantsSupport from './Pages/support/MerchantSupport'
import Complaints from './Pages/support/Complaints'

function Routes() {
    let element = useRoutes([
        {
            element: <MainLayout />,
            path: '/',
            children: [
                { path: '/', index: true, element: <HomePage /> },  
                {path:'/about-us', element:<Outlet/>, children:[
                    {element:<About/>, index:true},
                    {element:<ExtraPage/>, path:"extra"}
                ]},
                {path:"/contact-us", element:<Contact/>},
                {path:"/support", element:<Outlet/>,children:[
                    {element:<UserSupport/>, index:true, path:"user-support"},
                    {element:<MerchantsSupport/>, path:"merchant-support"},
                    {element:<Complaints/>, path:"submit-complaint"}

                ]}      
            ]
        },
    ]);

    return element;
}
export default Routes;