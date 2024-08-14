document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.card, .large-card');

    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            element.style.backgroundColor = '#000';
            element.style.color = '#fff';
            element.style.borderColor = '#fff';
        });

        element.addEventListener('mouseleave', function() {
            element.style.backgroundColor = '#fff';
            element.style.color = '#000';
            element.style.borderColor = '#000';
        });
    });

    const resumeButton = document.getElementById('resume-button');
    resumeButton.addEventListener('click', function() {
        window.location.href = 'path/to/your/resume.pdf'; // Replace with the actual path to your resume file
    });
});
