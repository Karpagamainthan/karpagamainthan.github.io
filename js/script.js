document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.dynamic-content');

    function showSection(targetId) {
        contentSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
                section.classList.remove('hidden');
            } else {
                section.classList.remove('active');
                section.classList.add('hidden');
            }
        });

        navLinks.forEach(nav => nav.classList.remove('active'));
        const clickedLink = document.querySelector(`.nav-link[data-content="${targetId}"]`);
        if (clickedLink) {
            clickedLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetContent = e.target.getAttribute('data-content');
            showSection(targetContent);
        });
    });

    showSection('home');
});

