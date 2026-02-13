import CTASection from '../cta-section/CTASection';
import SimpleNavbar from '../components/SimpleNavbar';
import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        number: '',
        event: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
                return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
            case 'number':
                return !/^\+?[\d\s-]{10,}$/.test(value) ? 'Please enter a valid phone number' : '';
            case 'event':
                return value.trim().length < 3 ? 'Event name must be at least 3 characters' : '';
            case 'description':
                return value.trim().length < 10 ? 'Description must be at least 10 characters' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);
        setTouched({ fullName: true, number: true, event: true, description: true });

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
            setFormData({ fullName: '', number: '', event: '', description: '' });
            setTouched({});
        }
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
        <div className="contact-us-page">
            <section className="contact-us-hero">
                <img
                    src="/Main-page/navbar/sand.png"
                    alt="Sand"
                    className="contact-us-sand"
                />
                <SimpleNavbar customLeftDecoration={customLeftDecoration} customRightDecoration={customRightDecoration} />
            </section>

            <div className="contact-us-content">
                <h1 className="contact-us-title">Contact Us</h1>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.fullName && errors.fullName ? 'error' : touched.fullName ? 'valid' : ''}
                        />
                        {touched.fullName && errors.fullName && <span className="error-message">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.number && errors.number ? 'error' : touched.number ? 'valid' : ''}
                        />
                        {touched.number && errors.number && <span className="error-message">{errors.number}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="event">Event</label>
                        <input
                            type="text"
                            id="event"
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.event && errors.event ? 'error' : touched.event ? 'valid' : ''}
                        />
                        {touched.event && errors.event && <span className="error-message">{errors.event}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows="5"
                            className={touched.description && errors.description ? 'error' : touched.description ? 'valid' : ''}
                        />
                        {touched.description && errors.description && <span className="error-message">{errors.description}</span>}
                    </div>

                    <button type="submit" className="submit-button">
                        <span className="submit-button-text">Send Message</span>
                    </button>
                </form>

                <CTASection />
            </div>
        </div>
    );
}

export default ContactUs;
