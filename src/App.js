import "./App.css";
import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import Router from "./Routes";
import axios from "axios";
import { Url } from "./Url";
import { ErrorHandler } from "./components/ErrorNotification";
import { useDispatch } from "react-redux";
import { fetchSiteSuccess } from "./action/SiteSetting";






var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {


}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}






export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://ipapi.co/json/').then(res1 => {
      Url().get('/sites').then(res2 => {
        res2?.data?.data.forEach(e => {
          if (e.site_region.toLowerCase() === res1?.data?.country_name?.toLowerCase()) {
            dispatch(fetchSiteSuccess(e.id))
          }
        });
      }).catch(err => {
        ErrorHandler(err)
      })
    })

  }, [])


  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          alert("Please enable the location.")
          //If denied then you have to show instructions to enable location
        }
        result.onchange = function () {
        };
      });
  } else {
    alert("Sorry Not available!");
  }


  return (
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles >
        <NotificationsProvider position="top-right" zIndex={2077}>
          <ModalsProvider>
            <Router />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  );

}











