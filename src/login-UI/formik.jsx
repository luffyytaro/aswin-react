import {useFormik} from "formik";
import toast,{Toaster} from "react-hot-toast";
import axios from "axios";

export default function Formik() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        },  
        validate: validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (value) =>{
            let res = axios.post("http://localhost:5000/register",value);
            toast.promise(res,{
                success: "Registration success",
                error: "Registration failed",
                loading: "Registering please wait......"
            })
        }
    });
    return(
        <main>
        <Toaster position= "top-center"/>
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <input {...formik.getFieldProps("username")} type="text" name="username" placeholder="username" />
            {formik.errors.username}
            <input {...formik.getFieldProps("email")} type="email" name="email" placeholder="email" />
            {formik.errors.email}
            <input {...formik.getFieldProps("password")} type="password" name="password" placeholder="password" />
            {formik.errors.password}
            <button type="submit">register</button>
        </form>
        </main>
    );
}

function validate(value) {
    const errors = {};
    if(!/^[a-zA-Z0-9]{4,12}$/.test(value.username)){
        toast.error("Invalid username");
        errors.username = "invalid username";
    }else if (!/^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-z]{2,6}$/.test(value.email)){
        errors.username = "invalid username";
    }else if (!/^[w\W]{4,15}$/.test(value.password)){
        errors.password = "invalid password";
    }
    return errors;
}