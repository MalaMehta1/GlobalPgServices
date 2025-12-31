const FaqAccordion = () => {
  const faqData = [
    {
      id: "faq1",
      question: "What types of rooms are available?",
      answer:
        "We offer single, double, and shared rooms to suit different comfort and budget needs."
    },
    {
      id: "faq2",
      question: "Is kitchen service available?",
      answer:
        "Yes, kitchen facilities are available; however, cooking and meal preparation must be done by the guests themselves."
    },
    {
      id: "faq3",
      question: "Is Wi-Fi available?",
      answer:
        "Yes, high-speed Wi-Fi is available throughout the hostel."
    },
    {
      id: "faq4",
      question: "Is the hostel safe and secure?",
      answer:
        "Our hostel is equipped with CCTV surveillance and secure access for resident safety."
    },
    {
      id: "faq5",
      question: "Are visitors allowed?",
      answer:
        "Visitors are allowed during designated hours, subject to hostel rules and management approval."
    },
    
    {
      id: "faq7",
      question: "Is there a minimum stay period?",
      answer:
        "Yes, a minimum stay period may apply depending on room type and availability."
    },
   
    {
      id: "faq9",
      question: "Do you provide housekeeping services?",
      answer:
        "Yes, regular housekeeping services are provided to maintain cleanliness and hygiene."
    },
    {
      id: "faq10",
      question: "How can I book a room?",
      answer:
        "You can book a room by contacting us directly or filling out the enquiry form on our website."
    }
  ];

  return (
    <section className="faq-section" data-reveal="fade-up" data-reveal-stagger="80">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqData.map((faq) => (
        <div className="faq-item" key={faq.id} data-reveal-item="fade-up">
          <input type="checkbox" id={faq.id} />
          <label htmlFor={faq.id}>{faq.question}</label>
          <div className="faq-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FaqAccordion;
