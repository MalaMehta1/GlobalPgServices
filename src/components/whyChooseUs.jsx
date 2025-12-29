const WhyChooseUs = () => {
  const facilities = [
    {
      title: "Safe & Secure Living",
      text:
        "24/7 CCTV surveillance and controlled access ensure a safe environment for all residents."
    },
    {
      title: "Comfortable Rooms",
      text:
        "Well-furnished rooms designed to provide comfort and a homely feel."
    },
   
    {
      title: "High-Speed Wi-Fi",
      text:
        "Uninterrupted internet connectivity for work, study, and entertainment."
    }
  ];

  const images = [
    "/images/about/about1.jpeg",
    "/images/about/about5.jpeg",
    "/images/about/about2.jpeg",
    "/images/about/about3.jpeg",
  
   
  ];

  return (
    <section className="why-section" data-reveal="fade-up">
      <div className="why-container" data-reveal-stagger="120">
        {/* Left Content */}
        <div className="why-content" data-reveal-item="fade-right">
          <h2 className="why-title">Why We’re the Right Choice for You</h2>
          <p className="why-subtitle">
            Everything you need for a comfortable, safe, and peaceful stay.
          </p>

          <div className="facility-list" data-reveal-stagger="80">
            {facilities.map((item, index) => (
              <div className="facility-item" key={index} data-reveal-item="fade-up">
                <span className="facility-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="why-images" data-reveal="fade-left" data-reveal-stagger="90">
          {images.map((img, index) => (
            <div className="image-box" key={index} data-reveal-item="zoom-in">
              <img src={img} alt="Hostel Facility" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
