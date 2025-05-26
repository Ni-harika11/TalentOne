import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "8px",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTopButton;
