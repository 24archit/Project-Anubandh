import React, { useState } from "react";
import { Modal, Box, Button, Typography } from '@mui/material';
import '../assets/styles/DonationComponent.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Importing an icon

const DonationComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    
    <div className="donation-container">
      <h2 className="donation-heading">Enhancing Campus Facilities</h2>
      <p className="donation-description">
        Your generous donations help us improve facilities and provide better opportunities for students. Join us in supporting the next generation of leaders.
      </p>
      <div className="donation-buttons">
        <Button className="donate-now-btn" variant="contained" color="primary">Donate Now</Button>
        <Button className="more-details-btn" variant="outlined" color="primary" onClick={handleOpen}>
          More Details
        </Button>
      </div>

      {/* Modal for More Details */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal-container"
      >
        <Box className="modal-content">
          <Box className="modal-inner-content">
            <Typography id="modal-title" variant="h4" component="h2" gutterBottom className="modal-heading">
              Detailed Plan for Your Contribution
            </Typography>

            <Typography id="modal-description" variant="body1" gutterBottom className="modal-description">
              Your donation will make a significant difference. Here’s how we plan to use the funds and make an impact on the future of education at our institute.
            </Typography>

            {/* Plan of Action Section */}
            <Box className="modal-section plan-of-action-box">
              <Typography variant="h5" className="section-heading">Plan of Action</Typography>
              <Typography variant="body1" className="section-description">
                The funds will be allocated towards enhancing the infrastructure, expanding research opportunities, and providing scholarships for deserving students.
              </Typography>
            </Box>

            {/* Steps Section */}
            <Box className="modal-section steps-box">
              <Typography variant="h5" className="section-heading">Steps for Completion</Typography>
              <ul className="steps-list">
                <li>
                  <CheckCircleOutlineIcon className="step-icon" /> Step 1: Infrastructure development – Renovating labs, libraries, and classrooms.
                </li>
                <li>
                  <CheckCircleOutlineIcon className="step-icon" /> Step 2: Research support – Funding innovative student and faculty research projects.
                </li>
                <li>
                  <CheckCircleOutlineIcon className="step-icon" /> Step 3: Scholarships – Ensuring access to education for underprivileged students.
                </li>
              </ul>
            </Box>

            {/* Image Gallery */}
            <Box className="modal-section image-gallery">
              <Typography variant="h5" className="section-heading">Gallery</Typography>
              <div className="image-gallery-grid">
                <img src="https://via.placeholder.com/150" alt="Campus Renovation" />
                <img src="https://via.placeholder.com/150" alt="Student Research" />
                <img src="https://via.placeholder.com/150" alt="Scholarship Recipients" />
              </div>
            </Box>

            {/* Call to Action Button */}
            <Button className="modal-donate-btn" variant="contained" color="primary">
              Donate Now
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DonationComponent;
