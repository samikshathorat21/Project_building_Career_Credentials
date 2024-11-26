import { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch('/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);



return (
  <div style={styles.container}>
    <h1 style={styles.title}>Profile Page</h1>
    <div style={styles.profileContainer}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png" 
        alt="Sticker"
        style={styles.sticker}
      />
      <p style={styles.text}>
        <strong>Name: {profile.first_name}</strong> 
      </p>
      <p style={styles.text}>
        <strong>Email:{profile.email}</strong> 
      </p>
      <p style={styles.text}>
        <strong>Phone:{profile.phone}</strong> 
      </p>
      <button style={styles.button} onClick={handleEditProfile}>
        Edit Profile
      </button>
    </div>
  </div>
);
}

const styles = {
container: {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  margin: "50px auto",
  maxWidth: "400px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
},
title: {
  color: "#333",
},
profileContainer: {
  textAlign: "center",
},
sticker: {
  width: "100px",
  height: "100px",
  marginBottom: "20px",
},
text: {
  fontSize: "16px",
  margin: "8px 0",
},
button: {
  display: "block",
  margin: "20px auto",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
},
};

export default Profile;
