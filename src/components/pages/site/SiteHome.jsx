import { useState } from "react";

function SiteHome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap">
      <h2>const LazyX = lazy(() =&gt; import("../.../X"));</h2>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && (
        <div className="moreBody">
          <p>
            useNavigate()
            <br /> — просто хук для перехода (navigate('/page'))
          </p>
          <p>
            useNavigation()
            <br /> — хук, который отслеживает состояние перехода (idle, loading,
            submitting)
          </p>
        </div>
      )}

      <ol>
        <li>Suspense;</li>
        <li>loader: f// useLoaderData() || useNavigation() ;</li>
        <li>
          action: f// useActionData()
          <br /> (result || result.error)
        </li>
        <li>
          <p> Form method="x"</p>

          <p>
            actionF(&#123;request&#125;) &gt; <br />
            const x = await request.formData()
          </p>
        </li>
        <li>
          <p>
            handle: &#123;
            <br />
            crumb: () =&gt; &#123;...&#125;
          </p>
          <p>useMatches()/ filter + map</p>
        </li>
      </ol>
    </div>
  );
}
export default SiteHome;
