import   { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tab headers */}
      <div style={{ display: "flex", gap: "1rem", borderBottom: "2px solid #ddd" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={activeIndex === index}
            style={{
              padding: "10px 15px",
              cursor: "pointer",
              border: "none",
              borderBottom: activeIndex === index ? "2px solid blue" : "none",
              backgroundColor: "transparent",
              fontWeight: activeIndex === index ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div role="tabpanel" style={{ padding: "20px" }}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
