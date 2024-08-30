import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "RideZoomo made my commute so much easier!",
            author: "John Doe",
        },
        {
            text: "Affordable and convenient. Highly recommend!",
            author: "Jane Smith",
        },
        {
            text: "Best rental experience I've ever had.",
            author: "Sarah Johnson",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next testimonial every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // 1000ms = 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonial-slider">
                <button className="prev-btn" onClick={prevTestimonial}>
                    &lt;
                </button>
                <div className="testimonial-content">
                    <p className="testimonial-text">
                        "{testimonials[currentIndex].text}"
                    </p>
                    <h4 className="testimonial-author">
                        - {testimonials[currentIndex].author}
                    </h4>
                </div>
                <button className="next-btn" onClick={nextTestimonial}>
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
