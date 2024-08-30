import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Do I need to be a delivery courier to rent a bike?",
            answer: "No. While our bikes were designed for delivery riders, they are still able to be ridden by anyone."
        },
        {
            question: "What's included with my bike subscription?",
            answer: "Your subscription includes maintenance, theft protection, and access to a network of support."
        },
        {
            question: "How do I book a return?",
            answer: "You can book a return through our app or by contacting customer service."
        },
        {
            question: "What do I do if my bike needs a repair?",
            answer: "If your bike needs repair, contact support, and we will arrange for a replacement or repair service."
        },
        {
            question: "What happens if I lose my bike or it gets stolen?",
            answer: "Our theft protection plan covers you in case of loss or theft, subject to the terms and conditions."
        }
    ];

    return (
        <section className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <span className="faq-arrow">{activeIndex === index ? '▲' : '▶'}</span>
                        </div>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
