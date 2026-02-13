import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrustedByMany.css';
import gsap from 'gsap';

const TrustedByMany = () => {
    const decorationRef = useRef(null);
    const sponsorsRef = useRef(null);
    const ctaOverlayRef = useRef(null);
    const ctaTitleRef = useRef(null);
    const ctaButtonRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Button decoration animation
        gsap.to(decorationRef.current, {
            y: -10,
            rotateZ: 15,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Sponsors image animation
        const sponsorsTimeline = gsap.timeline();

        // Slide in from left
        sponsorsTimeline.fromTo(sponsorsRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.in" }
        );

        // Scale down
        sponsorsTimeline.to(sponsorsRef.current, {
            scale: 0.95,
            duration: 0.2,
            ease: "power2.in"
        });

        // Scale up
        sponsorsTimeline.to(sponsorsRef.current, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.in"
        });

        // Small rotation and back to normal scale
        sponsorsTimeline.to(sponsorsRef.current, {
            scale: 1,
            rotation: 2,
            duration: 0.3,
            ease: "power2.in"
        });

        // Return to normal
        sponsorsTimeline.to(sponsorsRef.current, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.in"
        });

        // CTA animation sequence
        const ctaTimeline = gsap.timeline({ delay: 0.5 });

        // Overlay fade in
        ctaTimeline.fromTo(ctaOverlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        // Title fade in
        ctaTimeline.fromTo(ctaTitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );

        // Button fade in
        ctaTimeline.fromTo(ctaButtonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, []);

    return (
        <div className="trusted-by-many">
            <div className="trusted-header">
                <svg className="trusted-decoration-svg" width="370" height="377" viewBox="0 0 370 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.3498 191.534C47.7498 183.534 30.8498 164.201 22.3498 155.534C12.6831 160.534 -4.25021 169.834 5.3498 167.034C17.3498 163.534 32.3498 212.534 25.8498 220.534C19.3498 228.534 64.3498 279.034 63.3498 307.034C62.5498 329.434 100.016 359.701 118.85 372.034C151.016 374.701 219.35 376.934 235.35 364.534C255.35 349.034 263.85 336.534 264.35 324.034C264.85 311.534 301.85 334.534 315.85 336.534C329.85 338.534 325.85 332.534 325.85 324.034C325.85 315.534 316.85 322.034 325.85 307.034C334.85 292.034 364.35 266.034 366.35 242.034C368.35 218.034 356.35 191.534 325.85 183.534C295.35 175.535 280.85 191.534 274.85 191.534C268.85 191.534 239.35 208.534 235.35 199.534C231.35 190.534 252.35 152.034 247.85 138.034C243.35 124.034 194.35 108.534 197.85 99.0344C201.35 89.5345 187.35 56.0343 182.85 47.5343C178.35 39.0343 183.35 37.5344 187.35 29.5344C191.35 21.5344 182.85 8.53442 178.35 6.03442C174.75 4.03442 170.85 3.201 169.35 3.03429C148.85 -0.465694 153.05 14.1343 151.85 20.5343C150.35 28.5343 149.85 23.5343 156.35 47.5343C162.85 71.5343 156.85 46.0343 144.85 56.0343C132.85 66.0343 144.85 100.534 123.35 108.534C106.15 114.934 88.5165 133.201 81.8498 141.534L88.3498 167.034C91.5165 179.034 97.5498 206.534 96.3498 220.534C94.8498 238.034 76.8498 250.534 71.3498 251.534C65.8498 252.534 46.8498 201.534 47.3498 191.534Z" stroke="url(#paint0_linear_0_1)" strokeWidth="5" />
                    <path d="M104.849 157.034C184.049 163.434 219.35 156.201 235.35 153.534C220.35 149.701 202.449 142.263 182.849 145.063C158.349 148.563 125.349 137.063 113.849 145.063C104.649 151.463 104.85 145.063 104.849 157.034Z" fill="url(#paint1_linear_0_1)" />
                    <path d="M246.85 224.534L235.35 234.034C242.35 239.368 257.35 255.934 261.35 279.534C266.35 309.034 256.35 309.534 269.85 309.034C283.35 308.534 292.35 287.534 303.85 287.534C315.35 287.534 348.849 267.534 350.849 246.034C352.849 224.534 350.85 208.034 327.35 209.034C303.85 210.034 283.85 224.534 269.85 224.534H246.85Z" fill="url(#paint2_linear_0_1)" />
                    <path d="M246.85 224.534L235.35 234.034C242.35 239.368 257.35 255.934 261.35 279.534C266.35 309.034 256.35 309.534 269.85 309.034C283.35 308.534 292.35 287.534 303.85 287.534C315.35 287.534 348.849 267.534 350.849 246.034C352.849 224.534 350.85 208.034 327.35 209.034C303.85 210.034 283.85 224.534 269.85 224.534M246.85 224.534C249.85 224.534 258.65 224.534 269.85 224.534M246.85 224.534H269.85M104.849 157.034C184.049 163.434 219.35 156.201 235.35 153.534C220.35 149.701 202.449 142.263 182.849 145.063C158.349 148.563 125.349 137.063 113.849 145.063C104.649 151.463 104.85 145.063 104.849 157.034Z" stroke="url(#paint3_linear_0_1)" strokeWidth="5" />
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="2.49902" y1="188.309" x2="366.562" y2="188.309" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_0_1" x1="104.849" y1="225.648" x2="351.439" y2="225.648" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_0_1" x1="104.849" y1="225.648" x2="351.439" y2="225.648" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_0_1" x1="104.849" y1="225.648" x2="351.439" y2="225.648" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className="trusted-by-many-title">Trusted by Many</h1>
            </div>
            <img ref={sponsorsRef} src="/sponsors.png" alt="Sponsors" className="sponsors-image" />

            <div className="cta-section">
                <div className="cta-overlay" ref={ctaOverlayRef}></div>
                <div className="cta-content">
                    <h2 className="cta-title" ref={ctaTitleRef}>
                        Let's create meaningful moments together,<br />
                        inspired by the Saharan tea tradition.
                    </h2>
                    <button className="cta-button" ref={ctaButtonRef} onClick={() => navigate('/partners')}>
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

            <svg className="trusted-decoration-svg-bottom" width="204" height="151" viewBox="0 0 204 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M83.0503 30.8834C109.749 32.7168 166.327 35.2834 179.05 30.8834C194.955 25.3834 152.05 26.3835 147.05 20.8834C142.05 15.3834 148.55 3.38344 144.05 1.38344C140.45 -0.216557 126.884 0.716776 120.55 1.38344C119.717 7.88344 118.55 20.8834 120.55 20.8834C123.05 20.8834 83.0503 23.8835 83.0503 30.8834Z" fill="url(#paint0_linear_159_97_bottom)" />
                <path d="M83.0503 30.8834C109.749 32.7168 166.327 35.2834 179.05 30.8834M83.0503 30.8834C83.0503 23.8835 123.05 20.8834 120.55 20.8834C118.55 20.8834 119.717 7.88344 120.55 1.38344C126.884 0.716776 140.45 -0.216557 144.05 1.38344C148.55 3.38344 142.05 15.3834 147.05 20.8834C152.05 26.3835 194.955 25.3834 179.05 30.8834M83.0503 30.8834C85.4503 38.8834 71.717 47.5501 64.5503 50.8834C59.0503 53.8834 60.0503 68.3835 55.5503 72.3834C51.0503 76.3834 28.0503 54.8834 20.5503 43.3834C14.5503 34.1834 5.05029 35.8834 1.05029 37.8834C3.05029 39.0501 7.55029 43.2834 9.55029 50.8834C12.0503 60.3834 20.5503 72.3834 20.5503 84.3834C20.5503 96.3834 26.0503 121.383 31.5503 121.883C37.0503 122.383 40.5503 128.883 41.0503 127.883C41.5503 126.883 56.0503 126.383 59.0503 124.883C63.717 129.883 74.4503 140.083 80.0503 140.883C87.0503 141.883 92.5503 148.883 100.55 148.383C108.55 147.883 145.55 151.883 163.05 148.383C177.05 145.583 192.55 129.55 198.55 121.883C200.717 106.717 204.55 76.3834 202.55 76.3834C201.384 71.5501 199.75 62.0834 202.55 62.8834C206.05 63.8834 195.05 56.8834 195.55 53.8834C183.95 53.8834 179.717 37.7167 179.05 30.8834" stroke="url(#paint1_linear_159_97_bottom)" strokeWidth="5" />
                <defs>
                    <linearGradient id="paint0_linear_159_97_bottom" x1="1.05029" y1="75.1668" x2="203.239" y2="75.1668" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5B1A1A" />
                        <stop offset="1" stopColor="#FF8D28" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_159_97_bottom" x1="1.05029" y1="75.1668" x2="203.239" y2="75.1668" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5B1A1A" />
                        <stop offset="1" stopColor="#FF8D28" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default TrustedByMany;
