import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./home/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",  
        element: <Skills/>,  
      },
      {
        path: "/project",  
        element: <Project/>,  
      },
      {
        path: "/contact",  
        element: <Contact/>,  
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
