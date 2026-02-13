import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CTASection.css';
import gsap from 'gsap';

const CTASection = () => {
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
        <div className="cta-section">
            <div className="cta-overlay"></div>
            <div className="cta-content">
                <h2 className="cta-title">
                    Let's create meaningful moments together,<br />
                    inspired by the Saharan tea tradition.
                </h2>
                <button className="cta-button" onClick={() => navigate('/partners')}>
                    <span className="cta-button-text">Become a Partner</span>
                    <img
                        ref={decorationRef}
                        src="/Main-page/buttons/btn-asset-1.png"
                        alt=""
                        className="cta-button-decoration"
                    />
                </button>
            </div>
        </div>
    );
};

export default CTASection;
