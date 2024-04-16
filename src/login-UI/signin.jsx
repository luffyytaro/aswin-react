import {useFormik} from "formik";
import toast,{Toaster} from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            
        },  
        validate: validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (value) =>{
            let res = axios.post("http://localhost:5000/api/login",value);
            res.then((data) => {
                console.log(data);
                localStorage.setItem("token",data.data.token);
            })
            res.then(()=> {
                navigate("/profile",{replace:true});
            });
            toast.promise(res,{
                success: "Login success",
                error: "Login failed",
                loading: "login in  please wait......"
            })
        }

        
    });
    return(
        <main>
        <Toaster position= "top-center"/>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <input {...formik.getFieldProps("username")} type="text" name="username" placeholder="username" />
            {formik.errors.username}
            <input {...formik.getFieldProps("password")} type="password" name="password" placeholder="password" />
            {formik.errors.password}
            <button type="submit">login</button>

            
        </form>
        </main>
    );
}

function validate(value) {
    const errors = {};
    if(!value.username){
        toast.error("Invalid username");
        errors.username = "invalid username";
    }
    else if (!value.password){
        errors.password = "invalid password";
    }
    return errors;
}