import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HandlePost() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const userId = token;

  const [post, setPost] = useState(null);
  const [postDes, setPostDes] = useState("");


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  const createPost = async () => {
    if (userId && post && postDes) {
      const res = await fetch('http://localhost:5000/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, post, postDes }),
      });
      if(res.ok){
        alert("Post created successfully");
      }
      else{
        alert("Server error,Please try again");
      }

    }
    else{
      alert('All details are required');
    }
  }

  const handleChange = (event) => {
    setPostDes(event.target.value);
  };

  return (
    <div className='handPost-cont'>
      <div>

      </div>
      <div>
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPost(e.target.files[0])}
            required
          />
        </label>
        <textarea
          value={postDes}
          onChange={handleChange}
          placeholder="Write a caption..."
          rows="4"
          cols="50"
        />
      </div>
      <div>
        <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  )
}
