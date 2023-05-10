const button = document.querySelector('svg');
const sections = document.querySelectorAll('.section');

button.addEventListener('click', function () {
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
});