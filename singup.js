document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const form = document.getElementById("signupForm");
  const message = document.getElementById("signupMessage");

  hamburger?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!fullName || !email || !password || !confirmPassword) {
      message.textContent = "Please fill in all fields.";
      message.style.color = "#b91c1c";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters long.";
      message.style.color = "#b91c1c";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      message.style.color = "#b91c1c";
      return;
    }

    const users = JSON.parse(localStorage.getItem("staffingUsers") || "[]");
    const exists = users.some((user) => user.email === email);

    if (exists) {
      message.textContent = "An account with this email already exists.";
      message.style.color = "#b91c1c";
      return;
    }

    users.push({ name: fullName, email, password });
    localStorage.setItem("staffingUsers", JSON.stringify(users));
    message.textContent = "Account created successfully! Redirecting to login...";
    message.style.color = "#065f46";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  });
});
