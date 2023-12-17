import React, { useState } from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.jpg';

export default function Contact() {

    // state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    // function 
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password should be at least 6 characters long";
            isValid = false;
        }
        if (!message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const submittedData = {
                name,
                email,
                password,
                message
            };

            setSubmittedData(submittedData);
            console.log("Form Submitted", submittedData);
        }
    }

    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="contact_wrapper">
                        <div className="contact_col">
                            <div className="contact_image">
                                <img src={ContactImage} alt="Contact" />
                            </div>
                        </div>

                        <div className="contact_col">
                            <h2>Contact Us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input_wrapper">
                                    <input type="text" className="form-control" placeholder="Your Name..."
                                        value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" />
                                </div>
                                {errors.name && <span className="error">{errors.name}</span>}

                                <div className="input_wrapper">
                                    <input type="email" className="form-control" placeholder="Your Email..."
                                        value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="off" />
                                </div>
                                {errors.email && <span className="error">{errors.email}</span>}

                                <div className="input_wrapper">
                                    <input type="password" className="form-control" placeholder="Your Password..."
                                        value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                                </div>
                                {errors.password && <span className="error">{errors.password}</span>}

                                <div className="input_wrapper">
                                    <textarea placeholder="Write a Message..." value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off"></textarea>
                                </div>
                                {errors.message && <span className="error">{errors.message}</span>}
                                <div className="btn_wrapper">
                                    <button type="submit" className="btn">Submit</button>
                                </div>
                            </form>
                            {
                                submittedData && (
                                    <div>
                                        <h2>Submitted Data:</h2>
                                        <p>Name: {submittedData.name}</p>
                                        <p>Email: {submittedData.email}</p>
                                        <p>Password: {submittedData.password}</p>
                                        <p>Message: {submittedData.message}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
