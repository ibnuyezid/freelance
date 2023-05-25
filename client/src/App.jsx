import NavBar from "./components/NavBar/NavBar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Home from "./pages/home/Home";
import "./app.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
