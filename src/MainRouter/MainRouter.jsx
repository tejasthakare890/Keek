import { createBrowserRouter } from "react-router-dom";
import Home from '../components/home/Home'
import Settings from "../settings/setting"
// import Manage from '../components/manage/Manage'
// import Header from "../Header/Header";
import Testing from "../Header/Components/Testing/Testing";

const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    
      children: [{
        path: "/",
        element:<Home/>
      },
      {
        path: "/settings",
        element:<Settings/>  
      }

      ],
    },
  ]);
  export default MainRouter;