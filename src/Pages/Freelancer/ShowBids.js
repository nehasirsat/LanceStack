import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/freelancer/ShowBids.css';

const ShowBids = () => {
  const navigate = useNavigate();

  const handleUpdateBid = () => {
    navigate('/bidconfirmation');
  };

  const handleDiscardBid = () => {
    // Implement bid discard logic here
  };

  return (
    <div className="show-bids">
      <div className="header">
        <div className="freelancer-name">Freelancer Name</div>
        <div className="navbar">
          <a href="my-projects">My Projects</a>
          <a href="profile">Profile</a>
          <a href="show-bids">Show Bids</a>
        </div>
      </div>
      <div className="bids-container">
        <div className="bid-card">
          <h3>Bid on Project 1</h3>
          <p>Details about bid on project 1</p>
          <button onClick={handleUpdateBid}>Update</button>
          <button onClick={handleDiscardBid}>Discard</button>
        </div>
        <div className="bid-card">
          <h3>Bid on Project 2</h3>
          <p>Details about bid on project 2</p>
          <button onClick={handleUpdateBid}>Update</button>
          <button onClick={handleDiscardBid}>Discard</button>
        </div>
        <div className="bid-card">
          <h3>Bid on Project 3</h3>
          <p>Details about bid on project 3</p>
          <button onClick={handleUpdateBid}>Update</button>
          <button onClick={handleDiscardBid}>Discard</button>
        </div>
        {/* Add more bid cards as needed */}
      </div>
    </div>
  );
};

export default ShowBids;