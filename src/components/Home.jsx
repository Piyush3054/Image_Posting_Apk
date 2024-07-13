import React, { useEffect } from 'react'
import avatar from "../Images/man.png"
import post from "../Images/abcd.jpg"
import post1 from "../Images/xyz.jpg"
import afterLike from "../Images/afterLike.png"
import beforeLike from "../Images/beforeLike.png"
import share from "../Images/share.png"
import chat from "../Images/chat.png"
import home from "../Images/home.png"
import add from "../Images/plus.png"
import user from "../Images/user.png"
import group from "../Images/group.png"
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    useEffect(()=>{
        if(!token)
            {
                navigate("/login");
            }
    })

    return (
        <div className='home-container'>
            <div className='post-container'>
                <div>
                    <div style={{ display: "flex" }}>
                        <img src={avatar} style={{ width: "8%", margin: "1%" }}></img>
                        <p>M۝ƝAƦÇH</p>
                    </div>
                    <div>
                        <img src={post} style={{ width: "100%", borderRadius: "5%" }}></img>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={afterLike} style={{ width: "28px", height: "28px", margin: "2vh" }}></img>
                            <p>25</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={chat} style={{ width: "28px", height: "28px", margin: "2vh" }}></img>
                            <p>5</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex" }}>
                        <img src={avatar} style={{ width: "8%", margin: "1%" }}></img>
                        <p>XeƝ۝DE</p>
                    </div>
                    <div>
                        <img src={post1} style={{ width: "100%", borderRadius: "5%" }}></img>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={beforeLike} style={{ width: "28px", height: "28px", margin: "2vh" }}></img>
                            <p>45</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={chat} style={{ width: "28px", height: "28px", margin: "2vh" }}></img>
                            <p>7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='option-container'>
                <img src={home} style={{ width: "28px", height: "28px" ,marginRight:"9vh",cursor:"pointer"}} onClick={()=>{navigate("/home")}}></img>
                <img src={add} style={{ width: "28px", height: "28px",cursor:"pointer",marginRight:"9vh"}} onClick={()=>{navigate("/handlePost")}}></img>
                <img src={group} style={{ width: "33px", height: "33px",cursor:"pointer"}} onClick={()=>{navigate("/userList")}}></img>
                <img src={user} style={{ width: "28px", height: "28px",marginLeft:"9vh" ,cursor:"pointer"}} onClick={()=>{navigate("/profile")}}></img>
            </div>
        </div>
    )
}