import { useState } from "react";
import bgImg from "../assets/img/start.jpg";

function x() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap">
      <h2>x</h2>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && <div></div>}
    </div>
  );
}
export default x;
