import { useEffect, useState } from "react";
import { AboutPage, HomePage, LandingPage } from "./Pages/Index";
import Open from "./Pages/Opening-hello-pg/Open";
import Projects from "./Pages/Projects-pg/Projects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Connect from "./Pages/Connect/Connect";
import SingleProject from "./Pages/Single-Project-pg/SingleProject";

const App = () => {
  const [showHellow, setShowHellow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowHellow(false);
    }, 6500);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },

        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/connect",
          element: <Connect />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: `/project/:id`,
          element: <SingleProject />,
        },
      ],
    },
  ]);

  if (showHellow) {
    return <Open />;
  } else {
    return (
      <div id="portfolio-pages">
        <RouterProvider router={router} />
      </div>
    );
  }
};

export default App;
