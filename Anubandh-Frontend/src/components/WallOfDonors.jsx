import React from 'react';
import '../assets/styles/WallOfDonors.css';

const donorsData = [
  {
    name: 'Arijit Singh',
    amount: '₹50,000',
    badge: 'Gold Donor',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
  },
  {
    name: 'Sherya Ghosal',
    amount: '₹30,000',
    badge: 'Silver Donor',
    photo: 'https://www.shreyaghoshal.com/assest/images/shreya-image.png',
  },
  {
    name: 'Alan Walker',
    amount: '₹20,000',
    badge: 'Bronze Donor',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zFT25RLkJ9LCUk0vUudaKbGRh5cTXFyNpg&s',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },
  {
    name: 'Ed Sheeran',
    amount: '₹10,000',
    badge: 'Regular Donor',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
  },    
  // Add more donor entries as needed
];

const WallOfDonors = () => {
  return (
    <div className="wall-of-donors-container">
      
      <div className="donors-grid">
        {donorsData.map((donor, index) => (
          <div key={index} className="donor-card">
            <img src={donor.photo} alt={donor.name} className="donor-photo" />
            <div className="donor-info">
              <h3 className="donor-name">{donor.name}</h3>
              <p className="donor-badge">{donor.badge}</p>
              <p className="donor-amount">{donor.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="wall-heading">Thank You for Your Support</h2>
    </div>
  );
};

export default WallOfDonors;
