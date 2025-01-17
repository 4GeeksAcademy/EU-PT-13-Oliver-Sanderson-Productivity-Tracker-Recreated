import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import Home  from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import  NavbarDash  from "./component/NavbarDash";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


import  Footer  from "./component/Footer";
import ContactUs from "./component/ContactUs";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
               
                    <Routes> 
                    <Route element={<Home />} path="/" />
                    <Route element={<Dashboard/>} path="/Dashboard" />
                    <Route element={<NavbarDash/>} path="NavbarDash"/>

                       
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Footer/>} path="/Footer" />
                        <Route element={<ContactUs/>} path="/ContactUs" />
                    
                        

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                   
              
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
