import React, { useEffect, useState } from 'react'
import "../styles/login.css"
import chack from "../Images/check.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Toaster from './Toaster';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    if(token)
        {
            localStorage.removeItem("token");
        }

    const handleUser = async () => {
        console.log(email + "  " + password);
        if (!email || !password) {
            setError({ key: Math.random(), msg: "Email and password are both required." });
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', { email, password });
            if (response.data) {
                localStorage.setItem("token", response.data._id);
            }
            if (response.status === 201) {
                navigate('/handleProfile');
            } else {
                setError({ key: Math.random(), msg: "Registration error." });
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError({ key: Math.random(), msg: "User already exists or invalid input." });
            } else {
                setError({ key: Math.random(), msg: "An error occurred. Please try again later." });
            }
        }
    }

    return (
        <div className='lr-container'>
            <div className='btnForlr'>
                <button style={{ color: "#0b58d8" }} onClick={() => { navigate("/") }}>Sign up</button>
                <button style={{ color: "#31a9ff" }} onClick={() => { navigate("/login") }}>Sign in</button>
            </div>
            <div className='lrInfo'>
                <input name='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ marginBottom: '15px' }} />
                <input name='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", marginTop: "5vh" }}>
                <img src={chack} style={{ width: "22px", height: '22px', marginRight: "1vw" }}></img>
                <p style={{ display: "flex" }}><p style={{ marginRight: "5px", color: "#0b58d8" }}>Agree With </p><p style={{ color: "#31a9ff" }}>Terms & Conditions</p></p>
            </div>
            <div className='lrBtn'>
                <button onClick={handleUser}>Sign up</button>
            </div>

            {error ? (
                <Toaster key={Error.key} message={error.msg} />
            ) : null}
        </div>
    )
}
