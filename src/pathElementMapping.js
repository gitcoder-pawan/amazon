import Checkout from "./page-components/Checkout";
import Home from "./page-components/Home";
import Login from "./page-components/Login/Login";
import Signup from "./page-components/Signup/Signup";
import NotFound from "./page-components/NotFound"
const pathElement = [
    {
      path: '/',
      element: <Home/>,
      showHeader: true,
    },
    {
      path: '/login',
      element: <Login/>,
      showHeader: false,
    },
    {
      path: '/signup',
      element: <Signup/>,
      showHeader: false,
    },
    {
      path: '/checkout',
      element: <Checkout/>,
      showHeader: true,
    },
    {
      path: '*',
      element: <NotFound/>,
      showHeader: true,
    }
  ]

  export default pathElement;