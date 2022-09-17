import React from "react";
import {Button} from "@mui/material";

import './LoginRegister.css'

const LoginForm = () => {

    return (
        <div className="loginregister">
            <Button variant="outlined">
                Login
            </Button>
            Dont have account? <Button variant="outlined">
            Register
        </Button>
        </div>
    )
}


export default LoginForm;