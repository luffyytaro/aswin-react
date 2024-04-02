import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <main style={{ display: "flex"}}>
            <h1>NavBar</h1>
            <Link to = {"/"}>Home</Link>
            <Link to = {"/about"}>About</Link>
            <Link to = {"/contact"}>Contact</Link>
      </main>
    );
}