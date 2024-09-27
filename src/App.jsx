import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const router = createBrowserRouter([

  {
    path: "/",
    element: <NavigationBar />
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
