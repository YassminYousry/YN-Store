import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Layout from "./components/Layout/Layout";

function App() {
  // const router = createBrowserRouter([
  //   {path: "/login", element: <Login/>},
  //   {path: "/signup", element: <Signup/>},
  //   {path: "/home", element: <Home/>},
  // ])

  const router = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
      {path: "/login", element: <Login/>},
      {path: "/signup", element: <Signup/>},
      {path: "/home", element: <Home/>},
    ]}
  ])

  return(
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App