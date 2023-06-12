import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Start from "./Components/Start/Start";
import Creators from "./Components/Nav/Creators";
import Events from "./Components/Nav/Events";
import Series from "./Components/Nav/Series";
import Stories from "./Components/Nav/Stories";
import Comics from "./Components/Nav/Comics";
import Characters from "./Components/Nav/Characters";
import CharacterDetails from "./Components/Nav/CharacterDetails";
import EventDetails from "./Components/Nav/EventsDetails";
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
          path: "characters",
          element: <Characters />,
        },
        {
          path: "characters/:id",
          element: <CharacterDetails />,
        },
        {
          path: "comics",
          element: <Comics />,
        },
        {
          path: "creators",
          element: <Creators />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "events/:id",
          element: <EventDetails />,
        },
        {
          path: "stories",
          element: <Stories />,
        },
        {
          path: "series",
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
