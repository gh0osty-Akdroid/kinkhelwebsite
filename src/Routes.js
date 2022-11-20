import { FaFlag, FaLanguage } from "react-icons/fa";
import "flag-icons/css/flag-icons.css"

export const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
  
      subRoutes: [
        {
          name: "About Our Company",
          link: "/about-us/",
        },
        // {
        //   name: "About Our Members",
        //   link: "/about/members",
        // }
      ],
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Support",
      link: "/support",
      subRoutes: [
        {
          name: "User Support",
          link: "/support/user-support",
        },
        {
          name: "Merchant Support",
          link: "/support/merchant-support",
        },
        {
          name: "Submit Complaint",
          link: "/support/submit-complaint",
        },
        
      ],
    },
    {
      name:<FaLanguage fill="white"/>,
      link: "/language",
      subRoutes: [
        {
          name:<span class="fi fi-np" style={{backgroundRepeat: "no-repeat"}}></span> ,
          link: "/support/user-support",
        },
        {
          name: <span class="fi fi-in" style={{backgroundRepeat: "no-repeat"}}></span> ,
          link: "/support/merchant-support",
        },
        {
          name: <span class="fi fi-br" style={{backgroundRepeat: "no-repeat"}}></span> ,
          link: "/support/submit-complaint",
        },
        
      ],
    },
  ];