import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NavigationBar from "./Pages/NavigationBar";
import Home from "./Pages/Home";
import Shorts from "./Pages/Shorts";
import Subs from "./Pages/Subs";


const router = createBrowserRouter([

  {
    path: "/",
    element: <NavigationBar />,
    children: [{
      path: "/",
      element: <Home />,
    },

    {
      path: "/shorts",
      element: <Shorts />,
    },

    {
      path: "/subs",
      element: <Subs />,
    },
  ]
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
