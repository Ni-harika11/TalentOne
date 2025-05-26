 
import Tabs from "./Tabs";

function Tabpanels() {
  const tabsData = [
    {
      label: "Home",
      content: <p>🏠 Welcome to the home tab!</p>,
    },
    {
      label: "Profile",
      content: <p>👤 This is your profile.</p>,
    },
    {
      label: "Settings",
      content: <p>⚙️ Adjust your preferences here.</p>,
    },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>🔖 Tab Component Example</h1>
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default Tabpanels;
