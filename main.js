"use strict";
// Get buttons and sections from the DOM
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');
const toggleEducationBtn = document.getElementById('toggleEducationBtn');
const educationSection = document.getElementById('educationSection');
// Add event listener to toggle the visibility of the Skills section
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills Section';
    }
});
// Add event listener to toggle the visibility of the Education section
toggleEducationBtn.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducationBtn.textContent = 'Hide Education Section';
    }
    else {
        educationSection.style.display = 'none';
        toggleEducationBtn.textContent = 'Show Education Section';
    }
});
