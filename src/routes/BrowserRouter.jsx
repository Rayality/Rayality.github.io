import Intro from "../pages/intro";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Expirements from "../pages/expirements";
import Resume from "../pages/resume";
import MatchGame from "../components/MatchGame";
import Budget from "../pages/Budget";



const Routes = () => {
    const publicRoutes = [
      {
        path: "/",
        Component: Intro,
      },
      {
        path: "/experiments",
        Component: Expirements,
      },
      {
        path: "/resume",
        Component: Resume,
      },
      {
        path: "/matchgame",
        Component: MatchGame,
      },
      {
        path: "/budget",
        Component: Budget,
      },
    ];
  const router = createBrowserRouter([
    {
      Component: Layout,
          path: "/",
          children: [
            ...publicRoutes
      ]
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
