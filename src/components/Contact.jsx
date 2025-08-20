import { Container, Row } from "react-bootstrap";
import '../components/Contact.css';
import { useState } from "react";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        timestamp: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const now = new Date().toLocaleString();
        const dataToSend = { ...formData, timestamp: now };

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        try {
            await emailjs.send(serviceID, templateId, dataToSend, publicKey);

            setStatus('Message sent successfully!');
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '', timestamp: ''});
                setStatus('');
            }, 4000);
        } catch (error) {
            console.log('EmailJS error: ', error);
            setStatus('Error sending message. Please, try again later');
        }
    };

    return (
       <section className="contact" id="contact">
            <Container>
                <Row className="justify-content-center">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={`contact-box ${isVisible ? "show" : ""}`}>
                                <h2 className="contact-title">CONTACT ME</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" className="form-group" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                    <input type="email" className="form-group" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    <input type="text" className="form-group" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                    <textarea className="form-group" name="message" placeholder="Message" rows="6" value={formData.message} onChange={handleChange} required ></textarea>
                                    <button type="submit" className="send-btn">Send Message</button>
                                    {status && <p className="status-message">{status}</p>}
                                </form>
                            </div>
                        )}
                    </TrackVisibility>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;