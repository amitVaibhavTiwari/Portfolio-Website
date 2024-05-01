import { AboutPage, HomePage, LandingPage } from "./Pages/Index";
import Projects from "./Pages/Projects-pg/Projects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Connect from "./Pages/Connect/Connect";

const App = () => {
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
      ],
    },
  ]);

  return (
    <div id="portfolio-pages">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
