import React, { useEffect, useRef } from 'react';
import './TheExperience.css';
import gsap from 'gsap';

const TheExperience = () => {
  const decorationRef = useRef(null);

  useEffect(() => {
    gsap.to(decorationRef.current, {
      y: -10,
      rotateZ: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="the-experience">
      <h1>The Experience</h1>
      <h2 className="experience-subheader">تراث دفئ ذكرايات</h2>
      <button className="experience-button">
        <span className="experience-button-text">See Now</span>
        <img 
          ref={decorationRef}
          src="/Main-page/buttons/btn-asset-1.png" 
          alt="" 
          className="experience-button-decoration"
        />
      </button>
    </div>
  );
};

export default TheExperience;
