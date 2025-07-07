import { useState } from "react";
import bgImg from "../../../assets/img/action.jpg";
import { useMatches } from "react-router";

function SiteMatches() {
  const [isOpen, setIsOpen] = useState(false);

  const matches = useMatches();

  const crumbs = matches
    .filter((match) => match.handle?.crumb)
    .map((match) => match.handle.crumb(match.data));

  return (
    <div className="sectionWrap">
      {/* ============crumb */}
      <ul className="crumbs">
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {crumb}
            {index < crumbs.length - 1 && " > "}
          </li>
        ))}
      </ul>
      <h2>
        BREAD CRUMBS <br />
        useMatches()/ useRouteHandle() <br />
        handle: &gt; crumb:
      </h2>
      <div className="imgBox" style={{ backgroundImage: `url(${bgImg})` }}>
        f
      </div>
      <div className="flexLeft">
        <p style={{ opacity: ".5" }}>
          element: &lt;SiteMatches /&gt;,
          <br />
          path: "bread-crumbs",
          <br />
          📎handle: &#123;
          <br />
          crumb: () =&gt; &lt;Link to="/site/bread-crumbs"&gt;
          📄Matches&lt;/Link&gt;,
          <br />
          title: "Matches",
          <br />
          svg: "📄",
          <br />
          &#125;,
        </p>
      </div>

      {/* ================info code */}
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && (
        <div className="moreBody">
          <p>
            const matches = useMatches();
            <br />
            const crumbs = matches
            <br />
            .filter((match) =&gt; match.handle?.crumb)
            <br />
            .map((match) =&gt; match.handle.crumb(match.data));
            <br />
          </p>
          <hr />
          <p>
            return <br />
            &lt;ul className="crumbs"&gt;
            <br />
            &#123;crumbs.map((crumb, index) =&gt; (<br />
            &lt;li key=&#123;index&#125; &gt;
            <br />
            &#123;crumb&#125; <br />
            &#123;index *lt; crumbs.length - 1 && " &gt; "&#125; <br />
            ...
          </p>
        </div>
      )}
    </div>
  );
}
export default SiteMatches;
