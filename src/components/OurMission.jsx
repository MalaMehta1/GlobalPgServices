const OurMission = () => {
  const data = [
    {
      title: "Our Mission",
      text:
        "To provide a safe, comfortable, and affordable living space where residents feel at home while pursuing their goals."
    },
    {
      title: "Our Vision",
      text:
        "To become a trusted name in hostel living by setting new standards in comfort, safety, and community living."
    },
    {
      title: "Our Values",
      text:
        "Integrity, care, cleanliness, and commitment to creating a welcoming environment for every resident."
    }
  ];

  return (
    <section className="mvv-section" data-reveal="fade-up">
      <h2 className="mvv-title">Where Value Meets Vision</h2>
      <p className="mvv-subtitle">
        Our mission, vision, and values define who we are and how we serve our
        residents.
      </p>

      <div className="mvv-container" data-reveal-stagger="110">
        {data.map((item, index) => (
          <div className="mvv-card" key={index} data-reveal-item="fade-up">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
