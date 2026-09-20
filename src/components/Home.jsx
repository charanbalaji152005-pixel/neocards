import React, { useState } from 'react';
import './Home.css';
import neonDog from '../assets/images/neon-dog.jpg';
import cyberCat from '../assets/images/cyber-cat.jpg';

const Card = ({ avatar, name, role, posts, followers, following }) => {
  const [showFollowPopup, setShowFollowPopup] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showSentPopup, setShowSentPopup] = useState(false);

  const handleFollow = (e) => {
    e.stopPropagation(); // Prevent card interactions if necessary
    setShowFollowPopup(true);
    setTimeout(() => {
      setShowFollowPopup(false);
    }, 2500); // Disappear after 2.5s
  };

  const handleMessage = (e) => {
    e.stopPropagation();
    setShowChat(true);
  };

  const closeChat = (e) => {
    e.stopPropagation();
    setShowChat(false);
  };

  const handleSend = (e) => {
    e.stopPropagation();
    setShowChat(false); // Close chat box
    setShowSentPopup(true); // Show success popup
    setTimeout(() => {
      setShowSentPopup(false);
    }, 2500); // Disappear after 2.5s
  };

  return (
    <div className="profile-card">
      <div className="card-border-wrapper">
        <div className="card-animated-border"></div>
        <div className="card-inner-bg"></div>
      </div>
      
      
      <div className="avatar-wrapper">
        <div className="animated-border"></div>
        <div className="avatar-inner">
          <img src={avatar} alt={name} />
        </div>
      </div>
      
      <div className="card-content">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        
        <div className="stats-section">
          <div className="stat">
            <span className="stat-value">{posts}</span>
            <span className="stat-label">Name</span>
          </div>
          <div className="stat">
            <span className="stat-value">{followers}</span>
            <span className="stat-label">Post</span>
          </div>
          <div className="stat">
            <span className="stat-value">{following}</span>
            <span className="stat-label">Contact</span>
          </div>
        </div>
        
        <div className="actions">
          <button className="btn-primary" onClick={handleFollow}>Message</button>
          <button className="btn-secondary" onClick={handleMessage}>Contact</button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Card 
        avatar={neonDog}
        name="Intelligence Dog"
        role="CBI-Central Bureau of Investigation"
        posts="BOW BOW"
        followers="Boss"
        following="0000-0000"
      />
      <Card 
        avatar={cyberCat}
        name="Cyber-Cat"
        role="Assignment-Task HEAD"
        posts="MEOW MEOW"
        followers="Partner"
        following="1001-1001"
      />
    </div>
  );
};

export default Home;
