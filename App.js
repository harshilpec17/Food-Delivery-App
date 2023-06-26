import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import AboutUs from "./src/Component/AboutUs";
import ContactUs from "./src/Component/ContactUs";
import { ShimmerMenuPage } from "./src/Component/ShimmerComponent/ShimmerBody";

import Offers from "./src/Component/Offers";
import Menu from "./src/Component/Menu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "offers",
        element: <ShimmerMenuPage />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
