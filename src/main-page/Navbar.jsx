import './Navbar.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Navbar() {
  const navItems = ['Home', 'About Us', 'Services', 'Partners', 'Contact US'];
  const decorationRef = useRef(null);
  const sandRef = useRef(null);
  const navListRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
// fuck this bs
  useEffect(() => {
    const timeline = gsap.timeline();

    // Sand animation
    timeline.fromTo(sandRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Nav elements
    timeline.fromTo(navListRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Logo
    timeline.fromTo(logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Title
    timeline.fromTo(titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Subtitle
    timeline.fromTo(subtitleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Description
    timeline.fromTo(descriptionRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Button
    timeline.fromTo(buttonRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Button decoration animation (starts after everything is visible)
    timeline.to(decorationRef.current, {
      y: -10,
      rotateZ: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <nav className="navbar">
      <img 
        ref={sandRef}
        src="/Main-page/navbar/sand.png" 
        alt="Sand" 
        className="navbar-sand"
      />
      <div className="navbar-content">
        <ul ref={navListRef} className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <img 
          ref={logoRef}
          src="/Main-page/logos/logo.png" 
          alt="Logo" 
          className="navbar-logo"
        />
        <h1 ref={titleRef} className="navbar-title">شاي العائلة</h1>
        <h2 ref={subtitleRef} className="navbar-subtitle">More than Tea, an Experience</h2>
        <p ref={descriptionRef} className="navbar-description">More than tea… a Saharan experience</p>
        <button ref={buttonRef} className="navbar-button">
          <span className="navbar-button-text">Book Now</span>
          <img 
            ref={decorationRef}
            src="/Main-page/buttons/btn-asset-1.png" 
            alt="" 
            className="button-decoration"
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
