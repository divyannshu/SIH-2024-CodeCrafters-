import React, { useState } from 'react';
import styles from './OrgProfile.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const OrgProfile = () => {
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [roles, setRoles] = useState('');
  const [logo, setLogo] = useState(null);

  // Handle the change for logo file input
  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send form data including files
    const formData ={
      "name":userName,
      "description":description,
      "roles":roles,
      "logo":logo,
    }

    try {
      // Send the form data to the backend API endpoint
      const response = await axios.post(
        'http://localhost:4000/api/v1/org/create_org',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      alert('Profile created successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to create profile.');
    }
  };

  return (
    <main
      className={styles['profile-container']}
      style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <section className={`${styles['profile-form-container']} ${styles['card']}`}>
        <h1 className={styles['profile-title']}>CREATE ORGANIZATION PROFILE</h1>
        <form onSubmit={handleSubmit} className={styles['profile-form']}>
          <div className={styles['form-group']}>
            <label htmlFor="userName">Organization Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Name"
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="roles">Roles Offered:</label>
            <textarea
              id="roles"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
              placeholder="Enter Roles Offered"
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="logo">Upload Company Logo:</label>
            <input
              type="file"
              id="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className={styles['brutalist-input']}
            />
            {logo && <img src={URL.createObjectURL(logo)} alt="Profile" className={styles['profile-photo']} />}
          </div>

          <div className='flex justify-between'>
            <button type="submit" className={styles['button']}>Create Profile</button>
            <Link to="/updateOrgProfile">
            <button type="submit" className={styles['button']}>Update Profile</button>
            </Link>
          </div>
        </form>
      </section>
      <section className={styles['profile-image-container']}>
        <h1 style={{ fontFamily: 'monospace' }} className='font-bold h-auto text-2xl self-center text-black py-10'>
          "Empowering your mission with the right tools"
        </h1>
        <img className={styles['object-fill']} src="/3714960.jpg" alt="Decorative" />
      </section>
    </main>
  );
};

export default OrgProfile;
