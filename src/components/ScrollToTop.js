import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const btnVisabile = () => {
    if (window.scrollY > 300) 
        { 
            setVisible(true);
    } else {
            setVisible(false);
    }
    };
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };

    useEffect(() => {
    window.addEventListener("scroll", btnVisabile);
    return () => window.removeEventListener("scroll", btnVisabile);
    }, []);

    return (
    <div>
        {visible && (
        <button className="BtnScrollTop" onClick={scrollToTop}>
            <i class='bx bx-chevron-up'></i>
        </button>
        )}
    </div>
    );
};

export default ScrollToTop;
