import React from "react";
import {Button} from "@mui/material";

import './LoginRegister.css'

const LoginRegister = () => {

    return(
        <div class="loginregister">
            <button variant="outlined">
                Login
            </button>
            <button variant="outlined">
                Register
            </button>
        </div>
    )
}


export default LoginRegister;