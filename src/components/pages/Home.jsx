import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap">
      <h2>Home / (Data Mode)</h2>
      <p className="flexLeft">
        &#91;
        <br />
        &#123;
        <br />
        Component: MainLayout,
        <br />
        path: "/",
        <br />
        errorElement: &lt;ErrorPage /&gt;,
        <br />
        children: &#91;
        <br />
        &#123;
        <br />
        Component: Home,
        <br />
        index: true,
        <br />
        &#125;,
        <br />
        ...
      </p>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && <div></div>}
    </div>
  );
}
export default Home;
