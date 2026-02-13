import './Partners.css';
import SimpleNavbar from '../components/SimpleNavbar';
import CTASection from '../cta-section/CTASection';
import { useState, useRef, useEffect } from 'react';

function Partners() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [videoWidth, setVideoWidth] = useState(0);

    useEffect(() => {
        const updateVideoWidth = () => {
            if (videoRef.current) {
                setVideoWidth(videoRef.current.offsetWidth);
            }
        };

        updateVideoWidth();
        window.addEventListener('resize', updateVideoWidth);

        return () => window.removeEventListener('resize', updateVideoWidth);
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            setVideoWidth(videoRef.current.offsetWidth);
        }
    };

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100;
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setIsMuted(newVolume === 0);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    const customLeftDecoration = (
        <svg className="simple-navbar-decoration-left" width="506" height="403" viewBox="0 0 506 403" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
            <path d="M46 220L51 403L453 301V213C457.333 213.333 470.8 213.8 490 213C509.2 212.2 506 207.333 502 205L379 94V24H331C314.2 24 314 36.6668 316 43.0002C294.667 25.0002 271 -6.47305e-05 253 0C242.119 3.91304e-05 78.6667 150.334 0 220H46Z" fill="url(#paint0_linear_186_143_left)" />
            <defs>
                <linearGradient id="paint0_linear_186_143_left" x1="0" y1="201.5" x2="505.034" y2="201.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B1A1A" />
                    <stop offset="1" stopColor="#FF8D28" />
                </linearGradient>
            </defs>
        </svg>
    );

    const customRightDecoration = (
        <svg className="simple-navbar-decoration" width="506" height="403" viewBox="0 0 506 403" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46 220L51 403L453 301V213C457.333 213.333 470.8 213.8 490 213C509.2 212.2 506 207.333 502 205L379 94V24H331C314.2 24 314 36.6668 316 43.0002C294.667 25.0002 271 -6.47305e-05 253 0C242.119 3.91304e-05 78.6667 150.334 0 220H46Z" fill="url(#paint0_linear_186_143)" />
            <defs>
                <linearGradient id="paint0_linear_186_143" x1="0" y1="201.5" x2="505.034" y2="201.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B1A1A" />
                    <stop offset="1" stopColor="#FF8D28" />
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="partners-page">
            <section className="partners-hero">
                <img
                    src="/Main-page/navbar/sand.png"
                    alt="Sand"
                    className="partners-sand"
                />
                <SimpleNavbar customLeftDecoration={customLeftDecoration} customRightDecoration={customRightDecoration} />
            </section>

            <section className="partners-content">
                <h1 className="partners-title">Find Us</h1>

                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="partners-video"
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={() => setIsPlaying(false)}
                    >
                        <source src="/findusvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="video-controls" style={{ width: videoWidth ? `${videoWidth}px` : '100%' }}>
                        <button className="control-btn play-btn" onClick={togglePlay}>
                            {isPlaying ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                                    <rect x="14" y="4" width="4" height="16" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5v14l11-7z" fill="currentColor" />
                                </svg>
                            )}
                        </button>

                        <button className="control-btn volume-btn" onClick={toggleMute}>
                            {isMuted || volume === 0 ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <CTASection />
            </section>
        </div>
    );
}

export default Partners;
