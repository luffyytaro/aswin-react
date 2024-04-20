import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(){
    const navigate = useNavigate();
    const [data, setData] = useState({});
    let token = localStorage.getItem("token");
    useEffect(() => {
        axios.get("http://localhost:5000/api/profile",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(res =>{
            setData(res.data.result);
        })
    },[]);

    const newButton = () =>{
    let value = document.getElementById("note").value;
    axios.post("http://localhost:5000/api/textbox",{text: value} ,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => {
        alert(res.data.msg)
    })
    }

    const logoutHandler = () =>{
        localStorage.removeItem("token");
        navigate("/login", {replace:true});
    }
    return(
        <main>
            PROFILE 
            <h4>Username: {data.username}</h4>
            <h5>E-mail: {data.email}</h5>
            <button onClick={logoutHandler}>Logout</button>

            <div className="textbox">
                <textarea name="" id="note" cols="50" rows="30">
                </textarea>
                <button onClick={newButton}>ADD</button>
            </div>
        </main>
    );
};