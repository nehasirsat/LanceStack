import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Freelancer.css';
import ProfilePanel from './ProfilePanel';

const projects = [
  { id: 1, title: "Web Application", type: "WebApp", bidAmount: 500 },
  { id: 2, title: "Desktop Application", type: "DesktopApp", bidAmount: 1000 },
  // Add more projects as needed
];

const Freelancer = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedBidAmounts, setSelectedBidAmounts] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  const navigate = useNavigate();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleBidAmountChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedBidAmounts(
      e.target.checked 
        ? [...selectedBidAmounts, value] 
        : selectedBidAmounts.filter(amount => amount !== value)
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedTypes(
      e.target.checked 
        ? [...selectedTypes, value] 
        : selectedTypes.filter(type => type !== value)
    );
  };

  const applyFilters = () => {
    let filtered = projects;

    if (selectedBidAmounts.length > 0) {
      filtered = filtered.filter(project => selectedBidAmounts.includes(project.bidAmount));
    }
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(project => selectedTypes.includes(project.type));
    }
    if (searchQuery) {
      filtered = filtered.filter(project => project.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredProjects(filtered);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === '') {
      setFilteredProjects(projects);
    } else {
      applyFilters();
    }
  };

  const handleBidClick = (project) => {
    navigate('/bid-confirmation', {
      state: {
        project,
      }
    });
  };

  const goToMyProjects = () => {
    navigate('/my-projects');
  };

  const goToShowBids = () => {
    navigate('/show-bids');
  };

  const toggleProfilePanel = () => {
    setShowProfilePanel(!showProfilePanel);
  };

  return (
    <div className="freelancer">
      <header className="header">
        <div className="freelancer-name">Freelancer Name</div>
        <nav className="navbar">
          <button onClick={goToMyProjects}>My Projects</button>
          <button onClick={goToShowBids}>Show Bids</button>
          <button onClick={toggleProfilePanel}>Profile</button>
        </nav>
      </header>
      <div className="content">
        <div className="search-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search for projects..." 
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button className="filter-button" onClick={toggleFilters}>Filter</button>
        <div className={`filter-section ${showFilters ? 'open' : ''}`}>
          <div className="filter-header">
            <button className="close-button" onClick={toggleFilters}>×</button>
          </div>
          {showFilters && (
            <div className="filters">
              <h3>Filters</h3>
              <div className="filter-group">
                <h4>By Bid Amount</h4>
                <label>
                  <input type="checkbox" value={500} onChange={handleBidAmountChange} />
                  $500
                </label>
                <label>
                  <input type="checkbox" value={1000} onChange={handleBidAmountChange} />
                  $1000
                </label>
                {/* Add more ranges as needed */}
              </div>
              <div className="filter-group">
                <h4>By Project Type</h4>
                <label>
                  <input type="checkbox" value="WebApp" onChange={handleTypeChange} />
                  WebApp
                </label>
                <label>
                  <input type="checkbox" value="DesktopApp" onChange={handleTypeChange} />
                  DesktopApp
                </label>
                {/* Add more project types as needed */}
              </div>
              <button onClick={applyFilters}>Apply Filters</button>
            </div>
          )}
        </div>
        <div className="project-list">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>Type: {project.type}</p>
              <p>Bid Amount: ${project.bidAmount}</p>
              <button className="bid-button" onClick={() => handleBidClick(project)}>Bid</button>
            </div>
          ))}
        </div>
      </div>
      {showProfilePanel && (
        <ProfilePanel onClose={toggleProfilePanel} />
      )}
    </div>
  );
};

export default Freelancer;
