import { Suspense, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import bgImg from "../../../assets/img/navigation.jpg";

import apiRouter from "../../../api/apiRouter.js";

function SiteNavigationStateLoading() {
  const [isOpen, setIsOpen] = useState(false);
  const data = useLoaderData();

  return (
    <div className="sectionWrap">
      <h2>
        Layout &gt; useNavigation()
        <br />
        isLoading = navigation.state === "loading"
      </h2>
      <div className="imgBox" style={{ backgroundImage: `url(${bgImg})` }}>
        f
      </div>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && (
        <div className="moreBody">
          <p>
            &#123;isLoading && &lt;p&gt;Завантаження ...&lt;/p&gt;&#125;
            <br />
            &#123;data && ( <br />
            &lt;ul&gt;
            <br />
            &#123;data.map...
          </p>
        </div>
      )}

      {/*========== data */}

      {data && (
        <ul>
          {data.map((el, index) => {
            return (
              <li key={index}>{`${el.name || "not value"}- ${
                el.subject || "not value"
              }`}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default SiteNavigationStateLoading;
