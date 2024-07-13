import React, { useState } from 'react';
import "../styles/profile.css";

export default function Profile() {
    const [avatar, setAvatar] = useState(null);

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

    return (
        <div className='profile-container'>
            <div className='avatar-container'>
                {avatar ? (
                    <img src={avatar} alt="avatar" />
                ) : (
                    <span>Upload Avatar</span>
                )}
                <input type="file" id="avatarInput" accept="image/*" onChange={handleAvatarChange} />
                <label htmlFor="avatarInput">📷</label>
            </div>
            <div className='info-container'>
                <div style={{display:"flex"}}>
                    <div></div>
                    <div>
                        <p>Name</p>
                        <h4>M۝ƝAƦÇH</h4>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
