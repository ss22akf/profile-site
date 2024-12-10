// 1. Modal Functionality

const modal = document.getElementById("modal");
const modalButtons = document.querySelectorAll(".modal-button");
const closeButton = document.querySelector(".close-button");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");

const projects = {
    1: { 
        title: "Simple Calculator Application",
        description: "A user-friendly calculator app built with HTML, CSS, and JavaScript. It performs basic arithmetic operations (addition, subtraction, multiplication, division) and provides a clear display for easy calculations.",
        link: "https://your-calculator-app-link.com" 
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;
    modal.style.display = "block";
}

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const projectId = button.dataset.project;
        openModal(projectId);
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


const focusableElements = 'button, a, input, textarea, select';
const focusableContent = document.querySelectorAll(focusableElements);

focusableContent.forEach(element => {
  element.addEventListener('focus', () => {
    element.classList.add('keyboard-focus'); 
  });

  element.addEventListener('blur', () => {
    element.classList.remove('keyboard-focus'); 
  });
});


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});



modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        try {
            const projectId = button.dataset.project;
            openModal(projectId);
        } catch (error) {
            console.error("Error opening modal:", error);
            alert("An error occurred. Please try again later."); 
        }
    });
});