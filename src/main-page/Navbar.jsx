import './Navbar.css'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact US', path: '/contact-us' }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const decorationRef = useRef(null);
  const sandRef = useRef(null);
  const navListRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline();

    // Sand animation
    timeline.fromTo(sandRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    // Nav elements
    timeline.fromTo(navListRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      "-=0.2"
    );

    // Hamburger menu
    timeline.fromTo(hamburgerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      "-=0.3"
    );

    // Logo
    timeline.fromTo(logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );

    // Title
    timeline.fromTo(titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );

    // Subtitle
    timeline.fromTo(subtitleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );

    // Description
    timeline.fromTo(descriptionRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );

    // Button
    timeline.fromTo(buttonRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
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

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img
        ref={sandRef}
        src="/Main-page/navbar/sand.png"
        alt="Sand"
        className="navbar-sand"
      />
      <div className={`navbar-content ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul ref={navListRef} className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          ref={hamburgerRef}
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <img
          ref={logoRef}
          src="/Main-page/logos/logo.png"
          alt="Logo"
          className="navbar-logo"
        />
        <h1 ref={titleRef} className="navbar-title">شاي العائلة</h1>
        <h2 ref={subtitleRef} className="navbar-subtitle">More than Tea, an Experience</h2>
        <p ref={descriptionRef} className="navbar-description">More than tea… a Saharan experience</p>
        <button ref={buttonRef} className="navbar-button" onClick={() => navigate('/contact-us')}>
          <span className="navbar-button-text">Book Now</span>
          <img
            ref={decorationRef}
            src="/Main-page/buttons/btn-asset-1.png"
            alt=""
            className="button-decoration"
          />
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
          <div ref={mobileMenuRef} className="mobile-menu">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <Link to={item.path} className="mobile-nav-link" onClick={closeMenu}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
