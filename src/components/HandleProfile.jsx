import React, { useEffect, useState } from "react";
import prof from "../Images/profile.png";
import "../styles/handleProfile.css";
import editProf from "../Images/editProf.png"
import edit from "../Images/edit.png"
import { useNavigate } from "react-router-dom";

export default function HandleProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = token;
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const createProfile = async () => {
    if (!avatar || !name) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, avatar, name }),
      });

      if (response.ok) {
        alert('Profile created successfully');
        navigate("/home");
      } else {
        alert('Failed to create profile');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };


 
  if (token) {
    return (
      <div className="prof-container">
        <div className="inProfPic">
          <img
            src={prof}
            style={{ width: "350px", height: "350px" }}
          ></img>
          <span>
            Edit your profile picture and Name that will be visible to other
            users
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="avt-container">
            {avatar ? (
              <img className="avt-img" src={avatar} alt="avatar" />
            ) : (
              <img className="editProf" src={editProf}></img>
            )}
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatarInput"><img className="edit" src={edit}></img></label>
          </div>
          <input name='name' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} style={{ marginBottom: '15px' }} />
        </div>
        <div className="profBtn">
          <button onClick={createProfile}>Create</button>
        </div>
      </div>
    );
  }
}
