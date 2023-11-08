import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import { Dashboard } from "../views/DashBoard";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import DetailPage from "../views/DetailPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/signIn",
        element: <SignIn />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path:"/detailPage/:id",
        element: <DetailPage/>
    }


]);


const Router = () => {
    return <RouterProvider router={router} />

}

export default Router;