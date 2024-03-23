import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout= ()=> {
    return(
        <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
        </React.Fragment>
    );
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: (
                <Suspense fallback={<h1>Loading</h1>}>
                <About/>
                </Suspense>
                ),
                children: [{
                    path:"profile", //parent path/{path} => localhost:1234/about/profile
                    element:<Profile/>,
                }]
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestrauntMenu/>,
            },
            {
                path: "/instamart",
                element: (
                  <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                  </Suspense>
                ),
            },
        ],
    },
    
]);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
