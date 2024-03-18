import  ReactDOM  from "react-dom/client";;
import "./style.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <main className="container">
        <h1>Welcome to my Page</h1>
        <input type="text" name="username"  placeholder="enter your username"/>
        <input type="password" name="password" placeholder="enter your password" />
        <input type="submit" value="submit" />
    </main>
)