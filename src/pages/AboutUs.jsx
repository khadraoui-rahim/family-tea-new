import './AboutUs.css';
import { useNavigate } from 'react-router-dom';
import SimpleNavbar from '../components/SimpleNavbar';
import CTASection from '../cta-section/CTASection';

function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="about-us-page">
            <section className="about-us-hero">
                <img
                    src="/Main-page/navbar/sand.png"
                    alt="Sand"
                    className="about-us-sand"
                />
                <SimpleNavbar />
            </section>

            <section className="about-us-content">
                <h1 className="about-us-title">Who We Are</h1>
                <p className="about-us-description">
                    We are Family Tea, more than just a place to serve tea; we are creators of moments etched in memory.
                    Inspired by the ancient traditions of Saharan tea, we revive rituals, tell stories, and transform every cup into a unique experience.
                </p>
                <img
                    src="/team.png"
                    alt="Our Team"
                    className="about-us-team-image"
                />
                <div className="about-us-paragraph-container">
                    <svg className="about-us-decoration-left" width="146" height="129" viewBox="0 0 146 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_183_98)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M121.092 94.6951C120.531 91.0986 108.204 91.8408 102.299 87.4101C106.242 82.8323 113.356 69.6268 113.492 65.1567C122.647 55.9657 141.136 36.068 141.858 30.0051C142.761 22.4265 136.347 -9.31252 106.507 15.5034L104.76 14.108C105.188 9.87053 105.694 1.1165 104.296 2.25306e-05L4 46.3786C7.18198 52.0685 24.1256 61.3104 27.9031 69.4793C34.0344 81.1503 45.038 101.769 71.8924 101.471C71.8976 108.629 62.9296 118.065 65.725 120.298L121.092 94.6951ZM111.106 48.082L106.206 31.067C111.788 25.7318 109.752 11.7995 124.735 10.3801C126.827 9.41252 142.512 15.9315 135.471 34.0609C128.568 51.8341 115.275 50.7447 111.106 48.082Z" fill="url(#paint0_linear_183_98)" />
                        </g>
                        <defs>
                            <filter id="filter0_dd_183_98" x="0" y="0" width="145.938" height="128.298" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_183_98" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_183_98" result="effect2_dropShadow_183_98" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_183_98" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_183_98" x1="65.4578" y1="17.9595" x2="104.491" y2="102.371" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="about-us-decoration-right" width="132" height="122" viewBox="0 0 132 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M91 0V16C124 15 161.8 76.8 91 98V119C91 120.2 89 121.167 88 121.5H3.5C1.1 121.5 0.166667 118.167 0 116.5V0.5L91 0ZM91 36.5C109.5 38 127.5 70 91 77V36.5Z" fill="url(#paint0_linear_183_108)" />
                        <defs>
                            <linearGradient id="paint0_linear_183_108" x1="65.5703" y1="0" x2="65.5703" y2="121.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className="about-us-description about-us-description-second">
                        We believe that tea is a bridge that brings people together, and that every gathering holds the potential for warm moments and genuine connection. From authentic hospitality to thoughtful details, we design our services to suit every space and occasion, from intimate gatherings to grand events, while keeping warmth, authenticity, and cultural spirit at the heart of every experience.
                    </p>
                    <div className="about-us-button-wrapper">
                        <button className="about-us-button" onClick={() => navigate('/partners')}>
                            <span className="about-us-button-text">Become a Partner</span>
                            <img
                                src="/Main-page/buttons/btn-asset-1.png"
                                alt=""
                                className="about-us-button-decoration"
                            />
                        </button>
                    </div>
                </div>

                <div className="our-team-section">
                    <h2 className="our-team-title">Our Team!</h2>
                    <div className="team-roles">
                        <div className="team-role">
                            <div className="role-number">02</div>
                            <h3 className="role-title">Content Creator & Operations Manager</h3>
                        </div>
                        <div className="team-role">
                            <div className="role-number">09</div>
                            <h3 className="role-title">Specialized Preparers & Servers</h3>
                        </div>
                        <div className="team-role">
                            <div className="role-number">02</div>
                            <h3 className="role-title">Coordinators & Operations Managers</h3>
                        </div>
                    </div>
                    <p className="team-description">
                        Family Tea is built on a dynamic, passionate team distributed across roles: tea service, hospitality, logistics, specialized events, and content production.
                    </p>
                </div>

                <CTASection />
            </section>
        </div>
    );
}

export default AboutUs;
