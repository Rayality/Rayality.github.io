import Intro from "../pages/intro";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Tree from '../components/Tree'

const Routes = () => {
    const publicRoutes = [
        {
            path: "/",
            Component: Intro,
        },
        {
            path: "/tree",
            Component: Tree,
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
