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
      {isOpen && (
        <div>
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
      )}
    </div>
  );
}
export default Home;
