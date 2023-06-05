import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Start from "./Components/Start/Start";
import Creators from "./Components/Nav/Creators";
import Events from "./Components/Nav/Events";
import Series from "./Components/Nav/Series";
import Stories from "./Components/Nav/Stories";
import Characters from "./Components/Nav/Characters";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "Home",
      element: <Home />,
      children: [
        {
          path: "/Home/characters",
          element: <Characters />,
        },
        {
          path: "/Home/creators",
          element: <Creators />,
        },
        {
          path: "/Home/events",
          element: <Events />,
        },
        {
          path: "/Home/stories",
          element: <Stories />,
        },
        {
          path: "/Home/series",
          element: <Series />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
