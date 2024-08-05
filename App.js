import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Freelancer from './Components/Freelancer/Freelancer';  // Correct path to Freelancer
import BidConfirmation from './Components/Freelancer/BidConfirmation';  // Correct path to BidConfirmation
import EditProfile from './Components/Freelancer/EditProfile';
import ShowBids from './Components/Freelancer/ShowBids';
import MyProjects from './Components/Freelancer/MyProjects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Freelancer />} />
        <Route path="/bid-confirmation" element={<BidConfirmation />} />
        <Route path="/my-projects" element={< MyProjects/>} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/show-bids" element={<ShowBids />} />



      </Routes>
    </Router>
  );
};

export default App;
