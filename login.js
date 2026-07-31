document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");

  hamburger?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      message.textContent = "Please fill in both fields.";
      message.style.color = "#b91c1c";
      return;
    }

    const users = JSON.parse(localStorage.getItem("staffingUsers") || "[]");
    const user = users.find((item) => item.email === email && item.password === password);

    if (!user) {
      message.textContent = "No matching account found. Please sign up first.";
      message.style.color = "#b91c1c";
      return;
    }

    localStorage.setItem("activeUser", JSON.stringify({ name: user.name, email: user.email }));
    message.textContent = `Welcome back, ${user.name}!`;
    message.style.color = "#065f46";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 900);
  });
});
