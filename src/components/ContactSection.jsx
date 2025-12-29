const ContactSection = () => {
  return (
    <section className="contact-section-2">
      <div className="contact-container">
       

        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <a href="tel:+918424995088" className="contact-value">
              +91 84249 95088
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a
              href="mailto:globalpgservices@gmail.com"
              className="contact-value"
            >
              globalpgservices@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Head Office</span>
            <p className="contact-address">
              Ghanshyam Vijay, Shivaji Nagar JJC, Marol,
              <br />
              Andheri East, Mumbai,
              <br />
              Maharashtra 400059
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
