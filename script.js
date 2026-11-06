
// FLOWDESK - MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    const closeMenu = function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    };

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 600) {
            closeMenu();
        }
    });
}
// FLOWDESK - INTERACTIVE DASHBOARD

let progress = 75;
let projects = 24;

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const projectCount = document.getElementById("projectCount");
const dashboardMessage = document.getElementById("dashboardMessage");

const updateButton = document.getElementById("increaseProgress");
const addProjectButton = document.getElementById("addProject");

if (updateButton) {
    updateButton.addEventListener("click", function () {
        progress = Math.min(progress + 5, 100);

        progressText.textContent = progress + "%";
        progressFill.style.width = progress + "%";

        dashboardMessage.textContent =
            progress === 100
                ? "Project completed!"
                : "Project progress updated successfully!";
    });
}

if (addProjectButton) {
    addProjectButton.addEventListener("click", function () {
        projects++;

        projectCount.textContent = projects;
        dashboardMessage.textContent =
            "A new demo project has been added!";
    });
}