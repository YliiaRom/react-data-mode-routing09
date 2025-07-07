import { useState } from "react";

function SiteAbout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap">
      <h2>Site About</h2>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && <div></div>}
    </div>
  );
}
export default SiteAbout;
