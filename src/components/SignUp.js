import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../config/firebase";
import Nabar from "./Navbar";


function Signup() {

    const [emailUpdate, setEmailUpdate] = useState()
    const [passwordUpdate, setPasswordUpdate] = useState()

    const navigate = useNavigate()

    function emailValue(e) {

        setEmailUpdate(e.target.value)

    }

    function passwordValue(e) {

        setPasswordUpdate((e.target.value))

    }

    function signUp() {

        register(emailUpdate, passwordUpdate)
    }
    return (

        <>
            <Nabar />
            <div style={{ textAlign: 'center', border: '1px solid #ccc', width: "500px", }} className="signIn">

                <h1 style={{ color: "white", }}>Sign Up</h1>

                <input style={{ padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }} onChange={emailValue} placeholder="Enter email here"></input>
                <br></br>
                <input style={{ padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }} onChange={passwordValue} type="password" placeholder="Enter password here"></input>
                <br></br>
                <button style={{ backgroundColor: '#D70F64', width: '80%', color: "#fff", padding: '10px 20px', border: "2px solid #fff", borderRadius: '5px', cursor: 'pointer' }} onClick={signUp}>Sign Up</button>

                <p>Already have an account ? <span style={{ cursor: "pointer", color: "#fff" }} onClick={() => navigate('/')}>Click here</span> </p>

            </div>
        </>


    )
}

export default Signup;