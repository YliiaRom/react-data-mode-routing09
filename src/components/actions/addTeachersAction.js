import apiRouter from "../../api/apiRouter.js";

async function addTeacherAction({ request }) {
  const formData = await request.formData();

  const teacher = {
    name: formData.get("name") || "not value",
    subject: formData.get("subject") || "not value",
    photo:
      formData.get("photo") ||
      "https://cdn-icons-png.flaticon.com/512/168/168723.png",
  };

  const res = await fetch(apiRouter.addTeacher, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(teacher),
  });

  return res.ok ? { success: true } : { error: "Не вдалося додати вчителя" };
}
export default addTeacherAction;
