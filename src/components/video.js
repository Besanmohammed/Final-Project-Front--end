import React from "react";
import { useState, useEffect, useRef } from "react";

const Video = () => 
  {
  const [isOpen, setIsOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  const handleScroll = () => 
    {
    if (!sectionRef.current) return;

    const Rectent = sectionRef.current.getBoundingClientRect();
    const WindowHeight = window.innerHeight;

    if (Rectent.top < WindowHeight && Rectent.bottom > 0) {
      const Percentage = (WindowHeight - Rectent.top) / (WindowHeight + Rectent.height);
      const MaxScroll = 100; 
      setOffsetY(Math.min(Math.max(Percentage * MaxScroll, 0), MaxScroll));
    }
  };

  useEffect(() => 
    {
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    
    return () => 
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="AreaVideo">
      <div
        className="BackgroundImg"
        style={{
          transform: `translateY(-${offsetY}px)`,
        }}
      />

      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="BtnPlay">
          <i className="bx bx-play"></i>
        </button>
      )}

      {isOpen && (
        <div className="VideoContainer">
          <div className="VideoBox">
            <button onClick={() => setIsOpen(false)} className="VideoClose">
              <i className="bx bx-x"></i>
            </button>

            <iframe
              src="https://www.youtube.com/embed/0KYxN1kJSb0?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
