import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TheExperience.css';
import '../main-page/Navbar.css';
import gsap from 'gsap';

const TheExperience = () => {
  const decorationRef = useRef(null);
  const navigate = useNavigate();

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
      <div className="experience-button-wrapper">
        <button className="experience-custom-button" onClick={() => navigate('/services')}>
          <span className="experience-custom-button-text">See Now</span>
          <img
            ref={decorationRef}
            src="/Main-page/buttons/btn-asset-1.png"
            alt=""
            className="experience-custom-button-decoration"
          />
        </button>
      </div>

      <div className="experience-gallery-container">
        <div className="experience-gallery">
          <div className="experience-gallery-item">
            <img src="/the experience/26.png" alt="Experience 1" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/33.png" alt="Experience 2" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/34.png" alt="Experience 3" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/35.png" alt="Experience 4" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/36.png" alt="Experience 5" />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="experience-gallery-item">
            <img src="/the experience/26.png" alt="Experience 1" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/33.png" alt="Experience 2" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/34.png" alt="Experience 3" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/35.png" alt="Experience 4" />
          </div>
          <div className="experience-gallery-item">
            <img src="/the experience/36.png" alt="Experience 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheExperience;
