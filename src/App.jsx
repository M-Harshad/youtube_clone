import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Shorts from "./Pages/Shorts";
import Subs from "./Pages/Subs";
import Video from "./Pages/Video";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Dashboard />,
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
    {
       path: "/video/:id",
       element: <Video />
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
