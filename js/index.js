document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    let currentIndex = 0;

    function updateProjects() {
        projects.forEach((project, index) => {
            project.style.display = index === currentIndex ? "block" : "none";
        });
    }

    document.getElementById("prev-btn").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateProjects();
    });

    document.getElementById("next-btn").addEventListener("click", function () {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
        }
        updateProjects();
    });

    // Initialize the first project view
    updateProjects();
});
