document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user_input = e.target["new-task-description"].value;
    console.log(user_input);
    form.reset();

    const ul = document.getElementById("tasks");
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.textContent = `x`;
    li.textContent = `${user_input} `;
    li.appendChild(btn);
    ul.appendChild(li);

    btn.addEventListener("click", (e) => e.target.parentNode.remove());
  });
});
