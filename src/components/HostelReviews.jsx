const HostelReviews = () => {
  const reviews = [
    {
      name: "Rj akku Singh",
      role: "",
      review: "Great place to stay! The PG is well-maintained, rooms are clean, and all basic amenities like Wi-Fi, hot water, and regular cleaning are provided. The location is convenient and easily accessible. Management is polite and responsive whenever any issue is raised. Also, the food served is fresh and homely. Highly recommended for anyone looking for a safe and comfortable stay.",
      rating: "★★★★★"
    },
    {
      name: "Aryan Giri",
      role: "",
      review: "Perfect PG near the metro! Clean rooms, peaceful environment, and super convenient location. The metro station is just a few minutes away, which makes daily travel effortless. Highly recommended for students and working professionals.",
      rating: "★★★★★"
    },
    {
      name: "Satayabrat Mishra",
      role: "",
      review: "My stay as a paying guest was truly wonderful. The accommodation was clean, comfortable, and well-maintained. The hosts were incredibly kind, supportive, and always available when needed. It felt like a home away from home. I’m grateful for the hospitality and would highly recommend this place to anyone looking for a safe and pleasant stay.",
      rating: "★★★★☆"
    },
    {
      name: "Abhi Mishra",
      role: "",
      review: "One of the best PGs I’ve stayed in. Neat rooms, regular cleaning, tasty food, high-speed Wi-Fi, and proper security—everything is well organized. The management really prioritizes the comfort of the residents. Totally worth it!",
      rating: "★★★★★"
    },
    {
      name: "Iram Khan",
      role: "",
      review: "You should definitely visit this PG. This is a very good PG. It has a very good service. They provide very good service. They talk very politely to their customers and the view is also very good, All the nasessary facilities are available around SPG,must visit ,highly recommended for students,It is also good for those who work away from home. They can also stay,...",
      rating: "★★★★★"
    },
  ];

  return (
    <section className="review-section" data-reveal="fade-up">
      <h2 className="review-title">What Our Residents Say</h2>

      <div className="review-slider">
        <div className="review-track">
          {[...reviews, ...reviews].map((item, index) => (
            <div className="review-card" key={index}>
              <div className="review-rating">{item.rating}</div>
              <p className="review-text">“{item.review}”</p>
              <div className="review-user">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostelReviews;
