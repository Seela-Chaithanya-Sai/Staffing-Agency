// ==========================
// HAMBURGER MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// ==========================
// SEARCH & FILTER
// ==========================

const searchBtn = document.getElementById("searchBtn");
const jobSearch = document.getElementById("jobSearch");
const locationSearch = document.getElementById("locationSearch");
const experienceFilter = document.getElementById("experienceFilter");
const typeFilter = document.getElementById("typeFilter");

const cards = document.querySelectorAll(".job-card");

function filterJobs() {

    const job = jobSearch.value.toLowerCase().trim();
    const location = locationSearch.value.toLowerCase().trim();
    const experience = experienceFilter.value;
    const type = typeFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {

        const cardJob = card.dataset.job.toLowerCase();
        const cardLocation = card.dataset.location.toLowerCase();
        const cardExp = card.dataset.exp;
        const cardType = card.dataset.type;

        const matchJob =
            cardJob.includes(job);

        const matchLocation =
            cardLocation.includes(location);

        const matchExp =
            experience === "" || experience === cardExp;

        const matchType =
            type === "" || type === cardType;

        if (
            matchJob &&
            matchLocation &&
            matchExp &&
            matchType
        ) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    let msg = document.getElementById("noJobs");

    if (!msg) {

        msg = document.createElement("h2");

        msg.id = "noJobs";

        msg.style.textAlign = "center";
        msg.style.margin = "40px";
        msg.style.color = "#666";

        document.querySelector(".jobs-section")
            .appendChild(msg);

    }

    if (visibleCount === 0) {

        msg.innerHTML = "😔 No jobs found.";

        msg.style.display = "block";

    } else {

        msg.style.display = "none";

    }

}

searchBtn.addEventListener("click", filterJobs);

jobSearch.addEventListener("keyup", filterJobs);

locationSearch.addEventListener("keyup", filterJobs);

experienceFilter.addEventListener("change", filterJobs);

typeFilter.addEventListener("change", filterJobs);


// ==========================
// APPLY POPUP
// ==========================

const popup = document.getElementById("popup");

const closeBtn = document.querySelector(".close");

const applyButtons =
    document.querySelectorAll(".apply-btn");

applyButtons.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});


// ==========================
// FORM SUBMIT
// ==========================

const form = document.getElementById("jobForm");

const successPopup =
    document.getElementById("successPopup");

const okBtn =
    document.getElementById("okBtn");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    popup.style.display = "none";

    successPopup.style.display = "flex";

    form.reset();

});

okBtn.addEventListener("click", () => {

    successPopup.style.display = "none";

});


// ==========================
// CLOSE MOBILE MENU
// ==========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.querySelector("i")
            .classList.replace("fa-times", "fa-bars");

    });

});