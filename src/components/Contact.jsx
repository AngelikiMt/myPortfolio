import { Container, Row, Col } from "react-bootstrap";
import '../components/Contact.css';
import { useState } from "react";
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch("http://localhost:5173/contact", {
                method: 'POST',
                headers: { ' Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.code === 200) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Something went wrong. Try again later.');
            }
        } catch (error) {
            setStatus('Error sending message.');
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
                                    <input type="text" class="form-group" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                    <input type="email" class="form-group" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    <input type="text" class="form-group" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                    <textarea class="form-group" name="message" placeholder="Message" rows="6" value={formData.message} onChange={handleChange} required ></textarea>
                                    <button type="submit" className="send-btn">Send Message</button>
                                    {status && <p className="status">{status}</p>}
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