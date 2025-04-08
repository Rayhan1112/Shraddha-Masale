import React from 'react';
import './Founder.css';

// Replace local images with Cloudinary URLs
const maleImage = 'https://res.cloudinary.com/djlhicadd/image/upload/v1743694784/elfttugevgej6ei4au3x.jpg';
const femaleImage = 'https://res.cloudinary.com/djlhicadd/image/upload/v1743694777/al3oxvc4yjt0lrl1zqwt.jpg';
const decorative1 = 'https://res.cloudinary.com/djlhicadd/image/upload/v1743578588/olxowratddvm4k9aueg3.png';
const decorative2 = 'https://res.cloudinary.com/djlhicadd/image/upload/v1743679736/lrylfd3qjj0qyxacqiyi.png';

const FounderComponent = () => {
  const founders = [
    {
      name: 'Mr. Manoj Kangude',
      image: maleImage,
      info: 'Three years ago, Mr. Kangude took a bold step and established Hetika Masale, lovingly named after his daughter, Hetika. With a vision to preserve the age-old Maharashtrian tradition of handcrafting masalas on a Chulha (earthen stove), he meticulously ensured that every spice blend carried the warmth and purity of home-cooked flavors.',
    },
    {
      name: 'Mrs. Poonam Kangude',
      image: femaleImage,
      info: 'Through every challenge and milestone, Mrs. Poonam Kangude, a B.Com graduate and his strongest pillar of support, has been an integral part of this journey. Her unwavering belief, dedication, and hands-on involvement in the business have played a vital role in shaping Hetika Masale into the trusted brand it is today.',
    },
  ];

  return (
    <div className="founder-wrapper">
      {/* Decorative image in top right corner */}
      <img 
        src={decorative1} 
        alt="Decorative element" 
        className="decorative-image top-right" 
      />
      
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
      
      {/* Decorative image in bottom left corner */}
      <img 
        src={decorative2} 
        alt="Decorative element" 
        className="decorative-image bottom-left" 
      />
    </div>
  );
};

export default FounderComponent;
