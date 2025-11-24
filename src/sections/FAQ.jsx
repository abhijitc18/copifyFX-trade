import React, { useState } from "react";
import "../styles/FAQ.css";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Is copy trading safe?",
    answer:
      "Copy trading can be safe when you choose reputable brokers and proven traders/strategies. Always check platform transparency and use built-in risk controls to protect your funds.",
  },
  {
    question: "How do I connect my MT4/MT5 account?",
    answer:
      "Simply follow our secure step-by-step guide to link your MetaTrader account credentials in the dashboard. Your connection uses encrypted protocols for maximum security.",
  },
  {
    question: "What is the minimum balance required?",
    answer:
      "Minimum balance depends on your broker, but most accounts start from as little as $100. Check your broker’s specific requirements before starting.",
  },
  {
    question: "Are there any fees?",
    answer:
      "There are no hidden signup fees. Platform fees depend on the chosen trader/strategy, and all charges are transparently displayed before you begin.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-heading">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <span className="angled-underline accent-bar">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </div>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div
            className={`faq-card${openIndex === idx ? " open" : ""}`}
            key={idx}
          >
            <button
              className={`faq-question${openIndex === idx ? " expanded" : ""}`}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => toggleFAQ(idx)}
            >
              <span>{item.question}</span>
              <FiChevronDown
                className={`faq-chevron${openIndex === idx ? " rotated" : ""}`}
              />
            </button>
            <div
              id={`faq-panel-${idx}`}
              className={`faq-answer${openIndex === idx ? " open" : ""}`}
              style={{ maxHeight: openIndex === idx ? "340px" : "0" }}
              aria-hidden={openIndex !== idx}
            >
              {openIndex === idx && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
