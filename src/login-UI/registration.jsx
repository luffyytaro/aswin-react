import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Register(){
    const navigate = useNavigate();
    const[data, setData] = useState({
        username: "",
        email:"",
        password: ""
    });

    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/register",data)
        .then(res => {
            alert(res.data.msg);
            if(res.status==200){
                navigate("/signin");
            }
        })
    }
    console.log(data);


    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input onInput={(e) => setData({...data, username: e.target.value})} type="text" name="username"  placeholder="username" />
                <input onInput={(e) => setData({...data, email: e.target.value})} type="email" name="email" placeholder="email" />
                <input onInput={(e) => setData({...data, password: e.target.value})} type="password" name="password" placeholder="password"/>
                <button type="submit">register</button>
            </form>
        </main>
    );
}