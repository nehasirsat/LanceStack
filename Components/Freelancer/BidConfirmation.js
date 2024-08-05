import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/BidCinfirmation.css';

const BidConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [bidAmount, setBidAmount] = useState(state.project.bidAmount);
  const [duration, setDuration] = useState(state.project.duration);
  const [description, setDescription] = useState(state.project.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Bid submitted successfully!');
    navigate('/show-bids'); // Redirect to show bids page after submitting the bid
  };

  return (
    <div className="bid-confirmation">
      <h1>Bid Confirmation</h1>
      <div className="project-details">
        <h2>Project Details</h2>
        <p><strong>Title:</strong> {state.project.projectTitle}</p>
        <p><strong>Type:</strong> {state.project.type}</p>
        <p><strong>Bid Amount:</strong> ${state.project.bidAmount}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bidAmount">Bid Amount</label>
          <input
            type="number"
            id="bidAmount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in days)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Bid</button>
      </form>
    </div>
  );
};

export default BidConfirmation;
