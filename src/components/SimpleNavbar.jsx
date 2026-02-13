import './SimpleNavbar.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function SimpleNavbar() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Services', path: '/services' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact US', path: '/contact-us' }
    ];

    const navListRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        // Nav elements
        timeline.fromTo(navListRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );

        // Logo
        timeline.fromTo(logoRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
    }, []);

    return (
        <nav className="simple-navbar">
            <div className="simple-navbar-content">
                <svg className="simple-navbar-decoration-left" width="178" height="190" viewBox="0 0 178 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_left)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M165.454 110.612L32.2737 146.766L31.7498 144.836L21.134 147.718C20.3757 146.196 19.052 143.102 19.8241 142.892L29.4748 140.272C26.184 129.422 23.6179 107.958 26.0129 100.801C21.1943 96.4097 11.2688 86.5663 10.116 82.3199C1.76061 64.9005 -5.09711 22.4117 39.8517 4.8229C96.0531 -17.1691 122.119 42.5892 118.204 52.9778C118 53.5187 120.888 54.39 124.047 55.3432C126.353 56.0391 128.804 56.7786 130.302 57.4651L145.536 42.9676L169.953 50.8459L148.881 70.555C152.72 74.5209 161.411 88.0846 165.454 110.612ZM69.3437 60.0245C69.3437 60.0245 96.9378 50.9794 105.182 50.8137C108.717 28.7159 72.0274 3.11257 39.2181 21.574C-3.47907 45.599 27.9326 93.4029 32.1683 87.2135C41.6438 73.3678 53.8054 67.1397 62.2731 62.8033C62.7559 62.556 63.2267 62.315 63.6843 62.079L62.1538 58.3497C49.7731 55.4934 49.9381 41.9782 56.4316 39.1792C66.9592 36.7358 71.1081 51.256 66.7172 56.0747C68.5992 59.1904 69.3437 60.0245 69.3437 60.0245Z" fill="url(#paint0_linear_left)" />
                        <path d="M166.502 114.472L167.288 117.368L34.1076 153.521L33.3217 150.626L166.502 114.472Z" fill="url(#paint1_linear_left)" />
                        <path d="M170.038 127.501L173.313 139.564C174.361 143.425 170.101 148.726 165.145 149.553C161.18 150.215 85.4827 171.006 47.406 181.515C45.5793 181.148 41.6982 179.956 40.7882 178.131C39.8782 176.305 37.7892 167.719 36.8585 163.655L170.038 127.501Z" fill="url(#paint2_linear_left)" />
                    </g>
                    <defs>
                        <filter id="filter0_d_left" x="0" y="0" width="177.473" height="189.515" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_167_101" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_167_101" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_left" x1="162.355" y1="150.355" x2="19.4678" y2="8.78223" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_left" x1="162.355" y1="150.355" x2="19.4678" y2="8.78223" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_left" x1="162.355" y1="150.355" x2="19.4678" y2="8.78223" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                    </defs>
                </svg>

                <ul ref={navListRef} className="simple-nav-list">
                    {navItems.map((item, index) => (
                        <li key={index} className="simple-nav-item">
                            <Link to={item.path} className="simple-nav-link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <img
                    ref={logoRef}
                    src="/Main-page/logos/logo.png"
                    alt="Logo"
                    className="simple-navbar-logo"
                />

                <svg className="simple-navbar-decoration" width="182" height="153" viewBox="0 0 182 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dd_simple)">
                        <path d="M126.548 40.8311C137.635 23.3506 148.234 18.8609 163.441 23.8585C176.579 28.1757 177.274 48.0454 177.799 49.4532C178.323 50.8584 167.518 76.2381 166.755 77.0587C165.993 77.8768 163.518 88.4069 163.399 89.5186C163.304 90.4081 160.899 91.8749 159.708 92.4972C160.694 97.9996 148.09 112.845 148.559 112.67C150.122 112.087 151.189 116.332 151.574 117.865L151.594 117.941L79.4551 144.867C77.7002 144.455 79.2298 138.547 78.293 138.897C72.1314 141.195 57.4147 130.145 55.7158 131.313C54.0162 132.48 43.4312 128.426 40.3896 127.427C37.3481 126.427 31.2154 118.576 28.9424 112.486C26.6694 106.397 17.1588 88.0647 13.9424 86.5968C11.3694 85.4225 6.24236 83.6013 4 82.837L14.1367 74.2501C19.6457 68.9917 32.5905 99.3823 49.4473 97.3604C50.3974 88.4669 54.5771 72.4981 50.8994 66.9327C48.0749 62.6593 45.641 61.4233 45.7598 60.3116C70.5283 50.8888 120.38 32.0327 121.646 31.9874C123.226 31.9313 122.045 38.7764 122.569 40.1817C122.989 41.3056 125.397 41.083 126.548 40.8311ZM171.428 43.8253C168.743 39.49 166.308 24.3893 149.626 26.88C135.149 29.0415 134.91 44.6478 136.134 47.9268C137.066 50.425 138.875 53.8414 135.946 56.002C141.771 61.1215 153.593 71.8284 154.294 73.7032C154.993 75.5769 160.207 72.3865 162.727 70.5567C166.522 63.0914 173.576 47.293 171.428 43.8253Z" fill="url(#paint0_linear_simple)" />
                    </g>
                    <path d="M44.3042 54.984L119.254 27.009C119.118 26.17 118.625 24.4682 117.736 24.3732C116.624 24.2545 107.163 11.775 100.43 13.7545C98.2848 14.3852 94.2976 5.90331 80.5877 16.3575C81.2606 10.0578 79.3273 -2.77257 67.2107 0.536317C56.5555 3.44612 60.5704 18.4921 66.3598 21.1343C60.7104 21.6497 51.2661 25.5898 50.1489 31.9006C45.5814 33.3671 41.4504 53.9825 44.3042 54.984Z" fill="url(#paint1_linear_simple)" />
                    <defs>
                        <filter id="filter0_dd_simple" x="0" y="21.9438" width="181.817" height="130.923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_simple" x1="4" y1="83.4051" x2="177.817" y2="83.4051" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_simple" x1="36.4815" y1="34.9303" x2="111.846" y2="6.80042" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B1A1A" />
                            <stop offset="1" stopColor="#FF8D28" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </nav>
    );
}

export default SimpleNavbar;
