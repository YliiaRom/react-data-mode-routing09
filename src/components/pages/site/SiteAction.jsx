import { Suspense, useState } from "react";
import { Form, useNavigation } from "react-router";
import bgImg from "../../../assets/img/action.jpg";

import { useActionData } from "react-router";

function SiteAction() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const result = useActionData();

  return (
    <div className="sectionWrap">
      <h2>
        useActionDate() + Form
        <br />
        useNavigation()/ "submitting"
        <br /> &#123;isSubmitting && &lt;p&gt; "Збереження" :"Зберегти"
      </h2>
      <div className="imgBox" style={{ backgroundImage: `url(${bgImg})` }}>
        f
      </div>
      {/* ================info code */}
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && (
        <div className="moreBody">
          <div>
            <p>
              const navigation = useNavigation()
              <br />
              const isSubmitting = navigation.state ==="submitting"
              <br />
            </p>
            <p>const data = useActionData()</p>
          </div>
          <hr />
          <div>
            &lt;button disabled=&#123;isSubmitting&#125;&gt;
            <br />
            &#123;isSubmitting ? "⏳Завантаження" : "Завантажити"&#125;
            <br />
            &lt;/button&gt;
            <br />
          </div>
          <hr />
          <div>
            <p>
              &#123;result?.error &&
              &lt;p&gt;&#123;result.error&#125;&lt;/p&gt;&#125;
              <br />
              &#123;!result?.error && result && <br /> &lt;p&gt;✅ Успішно
              збережено!&lt;/p&gt;&#125;
            </p>
          </div>
        </div>
      )}
      {/* ================info f post */}
      <div className="more" onClick={() => setIsVisible((v) => !v)}>
        CODE: <br />
        action: addTeacherAction
      </div>
      {isVisible && (
        <div className="moreBody">
          <p>
            async function addTeacherAction(&#123; request &#125;) &#123;
            <br />
            const formData = await request.formData();
          </p>
          <p>
            const teacher = &#123;
            <br />
            name: formData.get("name") || "x",
            <br />
            subject: formData.get("subject") || "x",
            <br />
            photo: formData.get("photo") || "x",
            <br />
            &#125;;
            <br />
          </p>
          <hr />
          <p>
            const res = await fetch(apiRouter.addTeacher, &#123;
            <br />
            method: "POST",
            <br />
            headers: &#123; "Content-Type": "application/json" &#125;,
            <br />
            body: JSON.stringify(teacher),
            <br />
            &#125;);
          </p>
          <hr />
          <p>
            return res.ok ? &#123; success: true &#125; : &#123; error: "Не{" "}
            <br />
            вдалося додати вчителя" &#125;;
            <br />
            &#125;
          </p>
        </div>
      )}

      {/* ================Form */}
      <div>
        <h2>+ Додати вчителя</h2>
        <Form method="post">
          <label>
            name
            <input name="name" type="text" placeholder="ім'я" required />
          </label>
          <label>
            subject
            <input name="subject" type="text" placeholder="предмет" required />
          </label>
          <label>
            photo
            <input name="photo" type="text" placeholder="фото" />
          </label>
          <button disabled={isSubmitting} className="btnForm">
            {isSubmitting ? "⏳Завантаження" : "Завантажити"}
          </button>
        </Form>
      </div>

      {/*========== data */}

      {result?.error && <p>{result.error}</p>}
      {!result?.error && result && <p>✅ Успішно збережено!</p>}
    </div>
  );
}
export default SiteAction;
