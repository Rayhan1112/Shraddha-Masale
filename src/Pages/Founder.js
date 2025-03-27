import React from 'react';
import './Founder.css'; // Import the CSS file for styling
import male from '../Assests/pn2.jpg';
import female from '../Assests/pn1.jpg';

const FounderComponent = () => {
  const founders = [
    {
      name: 'Mr. Manoj Kangude',
      image: male, // Replace with your image URL
      info: 'Three years ago, Mr. Kangude took a bold step and established Hetika Masale, lovingly named after his daughter, Hetika. With a vision to preserve the age-old Maharashtrian tradition of handcrafting masalas on a Chulha (earthen stove), he meticulously ensured that every spice blend carried the warmth and purity of home-cooked flavors.',
    },
    {
      name: 'Mrs. Poonam Kangude',
      image: female, // Replace with your image URL
      info: 'Through every challenge and milestone, Mrs. Poonam Kangude, a B.Com graduate and his strongest pillar of support, has been an integral part of this journey. Her unwavering belief, dedication, and hands-on involvement in the business have played a vital role in shaping Hetika Masale into the trusted brand it is today.',
    },
  ];

  return (
    <div className="founder-wrapper">
      <h1 className="founder-heading">Meet Our Founders</h1>
      <div className="founder-container">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`founder-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="image-container">
              <img src={founder.image} alt={founder.name} className="founder-image" />
            </div>
            <div className="info-container">
              <h3 className="founder-name">{founder.name}</h3>
              <div className="founder-info">
                <p>{founder.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderComponent;