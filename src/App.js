import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Saharghoniem from "./pages/Saharghoniem";
import Frontend from "./pages/Frontend";
import Erroe404 from './pages/erroe404';
import Profile from "./pages/Profile";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from './pages/Singin';
import Signup from './pages/Signup';
import Html from './pages/Html';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Saharghoniem />,
    errorElement: <Erroe404 />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },


  {
    path: "/signup",
    element: <Signup />,
  },



  {
    path: "/Frontend",
    element: <Frontend />,
  },

 
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Html",
    element: <Html/>,
  },

]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
