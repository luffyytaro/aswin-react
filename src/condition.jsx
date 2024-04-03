import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import PageNotFound from "./pages/pageNotFound";
import NavBar from "./pages/navbar";
import Register from "./login-UI/registration";


function Condition() {

    return (
        <main>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/contact" Component={Contact} />
                        <Route path="/about" Component={About} />
                        <Route path="/*" Component={PageNotFound} />
                    </Routes>
                
            </BrowserRouter>
        </main>
    );
}

export default Condition;