import  ReactDOM  from "react-dom/client";;
import "./style.css";
// import App from "./App";
// import New from "./New";
// import Mount from "./Mount";
import App from "./app2";


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>);

// ReactDOM.createRoot(root).render(<Mount/>);
// ReactDOM.createRoot(root).render(<New/>);
// ReactDOM.createRoot(root).render(<App/>);
// ReactDOM.createRoot(root).render(
//     <main className="container">
//         <h1>Sign-up Page</h1>
//         <input type="text" name="username"  placeholder="enter your username"/>
//         <input type="password" name="password" placeholder="enter your password" />
//         <input type="submit" value="submit" />
//     </main>
// )