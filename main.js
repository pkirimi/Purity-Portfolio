// Mobile navigation toggle
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    var header = document.querySelector('.site-header');

    if (!toggle || !navLinks || !header) return;

    function closeMenu() {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        var isOpen = header.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    }

    toggle.addEventListener('click', toggleMenu);

    // Close the menu when a nav link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    // Close if the viewport is resized back to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 650) closeMenu();
    });
})();
