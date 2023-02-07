

import  Login  from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Dashboard from "../components/dashboard/Dashboard";

const RouteData = {
    Login: {path:"login", component:Login, isPrivate:false, menuText: "Login"},
    Singup: {path:"signup", component:Signup, isPrivate:false, menuText: "Register"},
    Feed: {path:"dashboard", component:Dashboard, isPrivate:false, menuText: "Dashboard"}
}

export default RouteData;