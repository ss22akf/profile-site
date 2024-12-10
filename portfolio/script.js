// Modal Functionality
const modal = document.getElementById("modal");
const modalButtons = document.querySelectorAll(".modal-button");
const closeButton = document.querySelector(".close-button");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");

// Project Data
const projects = {
    1: {
        title: "Interactive Quiz App",
        description: "This engaging quiz app tests your knowledge with multiple categories and difficulty levels. Built with HTML, CSS, and JavaScript, it features a dynamic question-answer format, interactive elements, and a scoring system to track your progress.",
        link: "https://your-quiz-app-link.com" // Replace with your actual link
    },
    2: {
        title: "To-Do List Application",
        description: "Stay organized and boost your productivity with this user-friendly to-do list app. Built with HTML, CSS, and JavaScript, it allows you to add, edit, and delete tasks, mark them as complete, and manage your daily schedule effectively.",
        link: "https://your-todo-list-link.com" // Replace with your actual link
    }
    // Add more projects here...
};

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const projectId = button.dataset.project;
        const project = projects[projectId];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalLink.href = project.link;
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Keyboard Accessibility for Modal
modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
    }
});

closeButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        modal.style.display = "none";
    }
});