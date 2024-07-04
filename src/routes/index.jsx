import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import LowContrastPage from "../pages/LowContrastPage";
import AltImagePage from "../pages/AltImagePage";
import InputLabelPage from "../pages/InputLabelPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/low-contrast",
        element: <LowContrastPage />,
      },
      {
        path: "/alt-image",
        element: <AltImagePage />,
      },
      {
        path: "/input-label",
        element: <InputLabelPage />,
      },
    ],
  },
];
