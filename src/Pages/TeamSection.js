import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../Components/css/TeamSection.css';
import p1 from '../Assests/p1.jpg';
import p2 from '../Assests/p2.jpg';
import p3 from '../Assests/p3.jpg';
import p4 from '../Assests/p4.jpg';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: p1 },
  { name: 'Jane Smith', role: 'Chief Designer', image: p2 },
  { name: 'Michael Johnson', role: 'Lead Developer', image: p3 },
  { name: 'Emily Brown', role: 'Marketing Head', image: p4 },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="team-section" ref={sectionRef}>
      {/* Animated Heading (Only animates when scrolled into view) */}
      <motion.h2 
        className="team-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Meet Our Team
      </motion.h2>

      {/* Team Members Grid */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
