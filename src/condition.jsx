import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import PageNotFound from "./pages/pageNotFound";
import NavBar from "./pages/navbar";
import Register from "./login-UI/registration";
import Formik from "./login-UI/formik";
import Login from "./login-UI/signin";
import Profile from "./login-UI/profile";
import Auth from "./auth/auth";


function Condition() {

    return (
        <main>
            <BrowserRouter>
            
                <NavBar/>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/contact" Component={Contact} />
                        <Route path="/about" Component={About} />
                        <Route path="/register" Component={Formik}/>
                        <Route path="/login" Component={Login}/>
                        <Route path="/profile" element={<Auth><Profile/></Auth>}/>
                        <Route path="/*" Component={PageNotFound} />
                    </Routes>
                
            </BrowserRouter>
        </main>
    );
}

export default Condition;