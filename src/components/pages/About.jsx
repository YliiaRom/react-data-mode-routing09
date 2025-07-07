import { useState } from "react";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap">
      <h2>About</h2>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && <div></div>}
    </div>
  );
}
export default About;
