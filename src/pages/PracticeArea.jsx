import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageBanner from '../components/common/PageBanner';
import { useLocation } from 'react-router-dom';

const PracticeArea = () => {
  const location = useLocation();
  const pathname = location.pathname.startsWith('/')
    ? location.pathname.substring(1)
    : location.pathname;
 const [showMore, setShowMore] = useState(true);

  const photos = [
    {
      src: "/images/more/spacious.jpeg",
      title: "Spacious Rooms"
    },
    {
    src: "/images/more/dining.jpeg",
      title: "Dining Area"
    },
    {
      src: "/images/more/common.jpeg",
      title: "Common Lounge"
    },
    {
    src: "/images/more/washroom.jpeg",
      title: "Clean Washrooms"
    },
    {
    src: "/images/more/kitchen.jpeg",
      title: "kitchen Area"
    }
  ];

  const videos = [
    {
      src: "/images/more/walkthrough.mp4",
      title: "Hostel Walkthrough"
    },
    {
     src: "/images/more/roomtour.mp4",
      title: "Room Tour"
    }
  ];

  return (
    <>
    <Header />
    <PageBanner title={pathname} />
    <section className="feature-media-section" data-reveal="fade-up">
      <h2 className="feature-title">Feature Properties</h2>
      <p className="feature-subtitle">
        Explore our hostel facilities through photos and videos
      </p>

      {/* <button
        className="see-more-btn"
        onClick={() => setShowMore(showMore)}
      >
       
      </button> */}

      {showMore && (
        <>
          {/* Photo Section */}
          <div className="media-section" data-reveal="fade-up" data-reveal-stagger="90">
            <h3 className="media-heading">Photos</h3>
            <div className="media-grid">
              {photos.map((item, index) => (
                <div className="media-card" key={index} data-reveal-item="fade-up">
                  <img src={item.src} alt={item.title} />
                  <span className="media-title">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="media-section" data-reveal="fade-up" data-reveal-stagger="120">
            <h3 className="media-heading">Videos</h3>
            <div className="media-grid">
              {videos.map((item, index) => (
                <div className="media-card" key={index} data-reveal-item="fade-up">
                  <video controls>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <span className="media-title">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
    <Footer />
    </>
  );
};

export default PracticeArea;
