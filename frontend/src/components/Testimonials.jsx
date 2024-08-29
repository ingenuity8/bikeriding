import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-list">
                <div className="testimonial">
                    <p>"RideZoomo made my commute so much easier!"</p>
                    <h4>- John Doe</h4>
                </div>
                <div className="testimonial">
                    <p>"Affordable and convenient. Highly recommend!"</p>
                    <h4>- Jane Smith</h4>
                </div>
                <div className="testimonial">
                    <p>"Best rental experience I've ever had."</p>
                    <h4>- Sarah Johnson</h4>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
