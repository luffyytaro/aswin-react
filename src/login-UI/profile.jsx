import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    let token = localStorage.getItem("token");
    useEffect(() => {
        axios.get("http://localhost:5000/api/profile",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(res =>{
            setData(res.data.userData);
        })
    },[]);

    const logoutHandler = () =>{
        localStorage.removeItem("token");
        navigate("/login", {replace:true});
    }
    return(
        <main>
            PROFILE 
            <h2>Username: {data.username}</h2>
            <h3>E-mail: {data.email}</h3>
            <button onClick={logoutHandler}>Logout</button>
        </main>
    );
};