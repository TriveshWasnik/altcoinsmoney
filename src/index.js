import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BuyPage from "./pages/BuyPage";
import RoadmapPage from "./pages/RoadmapPage";
import LaunchpadPage from "./pages/LaunchpadPage";
import AIPluginPlayPage from "./pages/AIPluginPlayPage";
import TradingPage from "./pages/TradingPage";
// basename="template_react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/contactus",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/buy",
        element: <BuyPage />,
      },
      {
        path: "/roadmap",
        element: <RoadmapPage />,
      },
      {
        path: "/launchpad",
        element: <LaunchpadPage />,
      },
      {
        path: "/ai-plugin-play",
        element: <AIPluginPlayPage />,
      },
      {
        path: "/trading",
        element: <TradingPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);

/*
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); */
