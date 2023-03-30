import Home from "../components/home/Home";
import Login  from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Dashboard from "../components/dashboard/Dashboard";

const RouteData = {
    Home: {path:"/", component:Home, isPrivate:false, menuText: "Home"},
    Login: {path:"login", component:Login, isPrivate:false, menuText: "Login"},
    Singup: {path:"signup", component:Signup, isPrivate:false, menuText: "Register"},
    Feed: {path:"dashboard", component:Dashboard, isPrivate:true, menuText: "Dashboard"}
}

export default RouteData;