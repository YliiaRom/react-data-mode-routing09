import { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import bgImg from "../../../assets/img/loader.jpg";
function SiteLoader() {
  const [isOpen, setIsOpen] = useState(false);

  const data = useLoaderData();
  console.log(data);
  return (
    <div className="sectionWrap">
      <h2>
        Перехід на сторінку після завантаження даних
        <br />
        loader: f/ const y = useLoaderData()
      </h2>
      <div className="imgBox" style={{ backgroundImage: `url(${bgImg})` }}>
        m
      </div>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && (
        <div className="moreBody">
          &#123;
          <br />
          element: &lt;SuspenseSiteLoader /&gt;,
          <br />
          path: "loader",
          <br />
          loader: getData,
          <br />
          &#125;,
        </div>
      )}

      {/*========== data */}
      <Suspense fallback={<p>Loading....</p>}>
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
      </Suspense>
    </div>
  );
}
export default SiteLoader;
