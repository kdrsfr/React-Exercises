/*import {Home,Profile,About} from "./views/"*/
import Home from "./views/Home"
import Profile from "./views/Profile"
import About from "./views/About"
import Login from "./views/Login"
import { Navigate } from "react-router-dom"

export const routes = (user) => [
    {
        path:'/',
        exact:true,
        element: <Home/>,
        auth:false,
    },
    {
        path:'/about',
        exact: true,
        element: <About/>,
        auth: false,
    },
    {
        path:'/profile',
        exact: true,
        element: user ? <Profile/> : <Login/>,
        auth: true,
    },
    {
        path:"/login",
        exact: true,
        element: <Login/> ,
        auth: false
    },
]