import './Services.css';
import SimpleNavbar from '../components/SimpleNavbar';
import CTASection from '../cta-section/CTASection';
import { useEffect, useRef } from 'react';

function Services() {
    const titleRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = [titleRef, card1Ref, card2Ref, card3Ref, infoRef];
        elements.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    const customLeftDecoration = (
        <svg className="simple-navbar-decoration-left" width="86" height="70" viewBox="0 0 86 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M72.6426 0.0525217C44.8093 -0.780819 -8.45768 7.95122 1.14232 51.5516C10.7423 95.152 60.8092 49.7186 84.6426 21.5518C85.792 18.5957 85.0642 14.4745 73.18 21.2425C73.0033 21.3432 72.824 21.4462 72.6423 21.5518C60.3578 26.4207 45.1785 33.7863 32.9139 39.7377C17.8894 47.0283 7.23898 52.1963 11.6426 48.0518C15.7704 44.1667 25.1651 37.7663 35.6464 30.6253C46.7484 23.0615 59.0696 14.6673 67.6426 7.55175L72.6426 0.0525217Z" fill="url(#paint0_linear_services_left)" />
            <path d="M72.6423 21.5518C72.824 21.4462 73.0033 21.3432 73.18 21.2425C77.5009 17.8456 83.9426 10.1527 77.1426 8.55273C70.3426 6.95272 68.1426 7.38508 67.6426 7.55175C59.0696 14.6673 46.7484 23.0615 35.6464 30.6253C25.1651 37.7663 15.7704 44.1667 11.6426 48.0518C7.23898 52.1963 17.8894 47.0283 32.9139 39.7377C45.1785 33.7863 60.3578 26.4207 72.6423 21.5518Z" fill="#5B1A1A" />
            <defs>
                <linearGradient id="paint0_linear_services_left" x1="0" y1="34.8119" x2="85.0329" y2="34.8119" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B1A1A" />
                    <stop offset="1" stopColor="#FF8D28" />
                </linearGradient>
            </defs>
        </svg>
    );

    const customRightDecoration = (
        <svg className="simple-navbar-decoration" width="115" height="109" viewBox="0 0 115 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_services)">
                <path d="M96.002 0C46.002 0.00077498 4.00234 43.998 4 65.4979C3.99999 95.498 41.3005 123.398 84.5005 72.9979C127.502 2.00024 107.502 0.000244141 96.002 0Z" fill="url(#paint0_linear_services)" />
            </g>
            <g filter="url(#filter1_d_services)">
                <path d="M107.499 13.0002C79.502 54.0002 17.0989 96.8002 19.4989 90.0002M37.502 66.0002C43.502 57.0002 71.002 51.0002 100.002 18.5002M18.002 84.5002C20.502 81.0002 28.7324 70.6102 43.502 53.0002C56.502 37.5002 64.002 37.5002 105.002 7.50024M12.002 78.5002C14.1686 76.5002 19.102 72.4002 21.502 72.0002M19.4989 68.0002C31.9014 55.2002 35.3353 51.0002 35.502 50.5002M11.002 66.0002C18.1686 57.3336 35.902 39.6002 49.502 38.0002C66.502 36.0002 70.502 10.5002 94.002 6.50024M9.00195 65.0002C16.1686 52.6669 31.502 28.0002 35.502 28.0002C39.502 28.0002 64.502 14.3336 76.502 7.50024" stroke="#5B1A1A" strokeWidth="2" />
            </g>
            <g filter="url(#filter2_d_services)">
                <path d="M39.002 96.5002C51.502 85.0002 61.502 90.5002 86.002 64.5002M27.502 96.5002C49.3353 84.3336 93.502 57.8002 95.502 49.0002M60.002 74.5002C74.8353 63.0002 104.402 37.8002 104.002 29.0002" stroke="#5B1A1A" strokeWidth="2" />
            </g>
            <defs>
                <filter id="filter0_d_services" x="0" y="0" width="114.81" height="108.771" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter1_d_services" x="4.1377" y="5.5144" width="108.188" height="94.2024" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter2_d_services" x="23.0156" y="28.9548" width="85.9902" height="76.4189" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_services" x1="4" y1="50.3854" x2="110.81" y2="50.3854" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B1A1A" />
                    <stop offset="1" stopColor="#FF8D28" />
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="services-page">
            <section className="services-hero">
                <img
                    src="/Main-page/navbar/sand.png"
                    alt="Sand"
                    className="services-sand"
                />
                <SimpleNavbar customLeftDecoration={customLeftDecoration} customRightDecoration={customRightDecoration} />
            </section>

            <section className="services-content">
                <h1 ref={titleRef} className="services-title fade-in-element">Services</h1>

                <div ref={card1Ref} className="service-card fade-in-element">
                    <div className="service-images">
                        <img src="/services/tea.jpg" alt="Traditional Tea Service" className="service-image" />
                        <img src="/services/tea2.jpg" alt="Tea Varieties" className="service-image" />
                    </div>
                    <div className="service-details">
                        <h2 className="service-title">Preparation and Serving of Traditional Tea</h2>
                        <ul className="service-list">
                            <li>Traditional Saharan tea, handcrafted, prepared fresh and traditionally</li>
                            <li>Tea served with a variety of homemade sweets</li>
                            <li>Various natural herbal drinks made from local plants (Jasmine, Mint, Complete Manufacture, Chamomile...)</li>
                        </ul>
                    </div>
                </div>

                <div ref={card2Ref} className="service-card service-card-reverse fade-in-element">
                    <svg className="service-decoration-left" width="216" height="263" viewBox="0 0 216 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.7532 90.001C46.5532 89.601 44.0866 93.1676 44.7532 95.501V112.001C47.2531 113.334 53.3529 115.801 57.7529 115.001C63.2529 114.001 63.7529 109.001 67.2529 111.001C70.7529 113.001 73.2529 117.001 76.7529 116.001C80.2529 115.001 84.2529 110.001 87.7529 111.001C91.2529 112.001 96.7529 118.001 98.7529 116.001C100.753 114.001 106.253 109.001 109.253 110.001C112.253 111.001 117.253 118.001 119.253 117.001C121.253 116.001 126.753 111.001 130.753 111.001C134.753 111.001 137.753 116.001 140.253 116.001C142.753 116.001 150.753 108.001 152.253 110.001C153.753 112.001 158.753 116.001 162.253 115.001C165.053 114.201 170.753 111.334 173.253 110.001V99.501C173.253 97.001 171.753 93.501 168.253 91.501C164.753 89.501 80.7532 90.501 61.7532 90.001Z" fill="url(#paint0_linear_0_1)" />
                        <path d="M108.753 42.0425C111.311 31.8099 93.2529 12.5423 109.253 2.54228C122.053 -5.45772 117.253 35.0422 108.753 42.0425Z" fill="url(#paint1_linear_0_1)" />
                        <path d="M44.2385 157.076C63.1256 157.681 128.639 157.42 171.76 157.13C172.261 157.126 172.758 157.123 173.253 157.119V110.001C170.753 111.334 165.053 114.201 162.253 115.001C158.753 116.001 153.753 112.001 152.253 110.001C150.753 108.001 142.753 116.001 140.253 116.001C137.753 116.001 134.753 111.001 130.753 111.001C126.753 111.001 121.253 116.001 119.253 117.001C117.253 118.001 112.253 111.001 109.253 110.001C106.253 109.001 100.753 114.001 98.7529 116.001C96.7529 118.001 91.2529 112.001 87.7529 111.001C84.2529 110.001 80.2529 115.001 76.7529 116.001C73.2529 117.001 70.7529 113.001 67.2529 111.001C63.7529 109.001 63.2529 114.001 57.7529 115.001C53.3529 115.801 47.2531 113.334 44.7532 112.001L44.2385 157.076Z" fill="url(#paint2_linear_0_1)" />
                        <path d="M18.2529 167.001V193.501C21.2529 193.501 26.9529 201.601 33.7529 198.001C42.2529 193.501 47.7529 185.501 57.2529 193.501C66.7529 201.501 74.7529 191.501 80.2529 191.501C85.7529 191.501 85.2529 196.001 95.2529 197.001C105.253 198.001 105.753 189.501 110.753 191.501C115.753 193.501 111.253 196.001 124.753 197.001C138.253 198.001 134.753 189.501 141.253 191.501C147.753 193.501 146.753 197.001 155.253 197.001C163.753 197.001 163.253 188.001 172.753 191.501C182.253 195.001 184.253 203.001 189.253 200.001C192.895 197.816 199.813 198.919 201.904 198.254C202.099 183.578 202.232 170.833 201.753 167.001C200.805 159.418 193.753 157.168 189.253 157.001C184.471 157.039 179.079 157.08 173.253 157.119C172.758 157.123 172.261 157.126 171.76 157.13C128.639 157.42 63.1256 157.681 44.2385 157.076C43.505 157.052 42.8418 157.027 42.2529 157.001C24.2529 156.201 18.7529 163.334 18.2529 167.001Z" fill="url(#paint3_linear_0_1)" />
                        <path d="M18.2529 244.001H201.753C201.406 232.454 201.692 214.212 201.904 198.254C199.813 198.919 192.895 197.816 189.253 200.001C184.253 203.001 182.253 195.001 172.753 191.501C163.253 188.001 163.753 197.001 155.253 197.001C146.753 197.001 147.753 193.501 141.253 191.501C134.753 189.501 138.253 198.001 124.753 197.001C111.253 196.001 115.753 193.501 110.753 191.501C105.753 189.501 105.253 198.001 95.2529 197.001C85.2529 196.001 85.7529 191.501 80.2529 191.501C74.7529 191.501 66.7529 201.501 57.2529 193.501C47.7529 185.501 42.2529 193.501 33.7529 198.001C26.9529 201.601 21.2529 193.501 18.2529 193.501V244.001Z" fill="url(#paint4_linear_0_1)" />
                        <path d="M203.753 260.001C212.153 258.001 214.253 248.501 214.253 244.001H201.753H18.2529H1.75293C2.58626 249.334 6.55293 260.001 15.7529 260.001C27.2529 260.001 193.253 262.501 203.753 260.001Z" fill="url(#paint5_linear_0_1)" />
                        <path d="M101.753 90.1678C107.173 90.1684 112.747 90.171 118.253 90.1825C118.586 77.6825 117.269 51.0423 118.253 51.5423C119.679 52.2673 111.753 48.0422 108.753 42.0425C106.753 50.0422 104.586 51.0423 101.753 51.0423V90.1678Z" fill="url(#paint6_linear_0_1)" />
                        <path d="M214.253 244.001C214.253 248.501 212.153 258.001 203.753 260.001C193.253 262.501 27.2529 260.001 15.7529 260.001C6.55293 260.001 2.58626 249.334 1.75293 244.001H18.2529M214.253 244.001H18.2529M214.253 244.001H201.753M18.2529 244.001V167.001M18.2529 244.001H201.753M18.2529 244.001V193.501M18.2529 167.001C18.7529 163.334 24.2529 156.201 42.2529 157.001M18.2529 167.001V193.501M42.2529 157.001C42.8418 157.027 43.505 157.052 44.2385 157.076M42.2529 157.001C58.0029 157.701 126.964 157.431 171.76 157.13M189.253 157.001C193.753 157.168 200.805 159.418 201.753 167.001C202.232 170.833 202.099 183.578 201.904 198.254M189.253 157.001C184.471 157.039 179.079 157.08 173.253 157.119M189.253 157.001C184.065 157.043 178.159 157.086 171.76 157.13M201.753 244.001C201.406 232.454 201.692 214.212 201.904 198.254M18.2529 193.501C21.2529 193.501 26.9529 201.601 33.7529 198.001C42.2529 193.501 47.7529 185.501 57.2529 193.501C66.7529 201.501 74.7529 191.501 80.2529 191.501C85.7529 191.501 85.2529 196.001 95.2529 197.001C105.253 198.001 105.753 189.501 110.753 191.501C115.753 193.501 111.253 196.001 124.753 197.001C138.253 198.001 134.753 189.501 141.253 191.501C147.753 193.501 146.753 197.001 155.253 197.001C163.753 197.001 163.253 188.001 172.753 191.501C182.253 195.001 184.253 203.001 189.253 200.001C192.895 197.816 199.813 198.919 201.904 198.254M202.373 198.001C202.269 198.105 202.11 198.188 201.904 198.254M44.2385 157.076L44.7532 112.001M44.2385 157.076C63.1256 157.681 128.639 157.42 171.76 157.13M44.7532 112.001V95.501C44.0866 93.1676 46.5532 89.601 61.7532 90.001C80.7532 90.501 164.753 89.501 168.253 91.501C171.753 93.501 173.253 97.001 173.253 99.501V110.001M44.7532 112.001C47.2531 113.334 53.3529 115.801 57.7529 115.001C63.2529 114.001 63.7529 109.001 67.2529 111.001C70.7529 113.001 73.2529 117.001 76.7529 116.001C80.2529 115.001 84.2529 110.001 87.7529 111.001C91.2529 112.001 96.7529 118.001 98.7529 116.001C100.753 114.001 106.253 109.001 109.253 110.001C112.253 111.001 117.253 118.001 119.253 117.001C121.253 116.001 126.753 111.001 130.753 111.001C134.753 111.001 137.753 116.001 140.253 116.001C142.753 116.001 150.753 108.001 152.253 110.001C153.753 112.001 158.753 116.001 162.253 115.001C165.053 114.201 170.753 111.334 173.253 110.001M173.253 110.001V157.119M173.253 157.119C172.758 157.123 172.261 157.126 171.76 157.13M108.753 42.0425C106.753 50.0422 104.586 51.0423 101.753 51.0423V90.1678C107.173 90.1684 112.747 90.171 118.253 90.1825C118.586 77.6825 117.269 51.0423 118.253 51.5423C119.679 52.2673 111.753 48.0422 108.753 42.0425ZM108.753 42.0425C111.311 31.8099 93.2529 12.5423 109.253 2.54228C122.053 -5.45772 117.253 35.0422 108.753 42.0425Z" stroke="url(#paint7_linear_0_1)" strokeWidth="3" />
                        <defs>
                            <linearGradient id="paint0_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_0_1" x1="1.75293" y1="131.307" x2="214.253" y2="131.307" gradientUnits="userSpaceOnUse">
                                <stop offset="1" stopColor="#5B1A1A" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="service-details">
                        <h2 className="service-title">Accompaniments, Sweets and Hospitality</h2>
                        <ul className="service-list">
                            <li>Foul, Sudanese hummus, dried fruits (nut mix)</li>
                            <li>Serving designed to suit all types of events</li>
                        </ul>
                    </div>
                    <div className="service-images">
                        <img src="/services/nuts.jpg" alt="Nuts and Accompaniments" className="service-image" />
                        <img src="/services/nuts2.jpg" alt="Traditional Hospitality" className="service-image" />
                    </div>
                </div>

                <div ref={card3Ref} className="service-card service-card-last fade-in-element">
                    <div className="service-images">
                        <img src="/services/sweets.jpg" alt="Traditional Sweets" className="service-image" />
                        <img src="/services/sweets2.jpg" alt="Pastries" className="service-image" />
                    </div>
                    <div className="service-details">
                        <h2 className="service-title">Pastries and Traditional Sweets</h2>
                        <ul className="service-list">
                            <li>Nut pastries (including small and large sizes)</li>
                            <li>Small pastries (chocolate and vanilla)</li>
                            <li>Sudanese Basbousa</li>
                            <li>Other sweets, varied according to the request</li>
                        </ul>
                    </div>
                    <svg className="service-decoration-right" width="412" height="465" viewBox="0 0 412 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.8294 180.264C-25.2836 200.604 8.53055 315.43 28.3811 362.264C28.9782 364.617 32.3279 367.042 37.8311 369.475C45.1546 372.712 56.2919 375.962 69.8311 379.069C113.158 389.01 181.082 397.487 227.331 399.411C242.858 400.056 255.941 399.964 264.831 398.94C266.499 398.748 268.02 398.523 269.381 398.264C287.388 387.942 316.293 371.492 339.831 358.372C354.879 349.985 367.733 342.958 374.143 339.764C375.515 339.08 376.591 338.572 377.331 338.264C386.931 334.264 395.998 289.931 399.331 268.264C407.731 167.864 425.831 51.7643 390.831 27.7643C303.631 -18.6357 222.164 3.43093 192.331 20.2643C154.831 42.7643 160.831 116.764 134.33 147.264C116.331 154.764 110.831 151.264 30.8294 180.264Z" fill="url(#paint0_linear_185_139)" />
                        <path d="M37.8311 369.475C33.1644 389.905 26.0311 430.564 34.8311 429.764C43.6311 428.964 61.8311 395.634 69.8311 379.069C56.2919 375.962 45.1546 372.712 37.8311 369.475Z" fill="#5B1A1A" />
                        <path d="M227.331 399.411C230.831 423.528 240.831 470.264 252.831 464.264C264.831 458.264 265.831 418.215 264.831 398.94C255.941 399.964 242.858 400.056 227.331 399.411Z" fill="#5B1A1A" />
                        <path d="M339.831 358.372C343.664 379.503 354.031 420.064 364.831 413.264C375.631 406.464 375.539 361.431 374.143 339.764C367.733 342.958 354.879 349.985 339.831 358.372Z" fill="#5B1A1A" />
                        <defs>
                            <linearGradient id="paint0_linear_185_139" x1="0" y1="232.395" x2="411.546" y2="232.395" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5B1A1A" />
                                <stop offset="1" stopColor="#FF8D28" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <p ref={infoRef} className="services-additional-info fade-in-element">
                    In addition to tea service and hospitality, Family Tea offers a hall for private and adapted meetings, ideal for professional meetings, creative workshops or training sessions, birthday parties, cultural meetings or community exchanges, welcoming a dear and warm guest with a Sudanese touch, and any occasion. Tea service, natural juices and hospitality are available as an additional option. We combine practical and aesthetic functions to provide you and your guests with an experience to communicate in a warm and welcoming environment.
                </p>

                <CTASection />
            </section>
        </div>
    );
}

export default Services;
