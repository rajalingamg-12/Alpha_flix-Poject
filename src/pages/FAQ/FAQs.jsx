import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is Alpha-Flix?",
    answer:
      "Alpha-Flix is a streaming platform that offers movies, TV shows, and exclusive content across devices.",
  },
  {
    question: "How much does Alpha-Flix cost?",
    answer:
      "Alpha-Flix offers flexible plans. Pricing may vary depending on your subscription.",
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime on your phone, tablet, laptop, or TV.",
  },
  {
    question: "How do I cancel?",
    answer:
      "You can cancel your subscription anytime from your account settings.",
  },
  {
    question: "Is Alpha-Flix safe for kids?",
    answer:
      "Yes, Alpha-Flix includes parental controls and kids-friendly profiles.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
