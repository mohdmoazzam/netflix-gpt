import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import VpnNotice from "./VpnNotice";
import GptSearch from "../pages/GptSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <VpnNotice />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gpt-search",
      element: <GptSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
