document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.menu-desplegable');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
                submenu.style.opacity = '0';
                setTimeout(() => {
                    submenu.style.opacity = '1';
                }, 10); 
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.opacity = '0';
                setTimeout(() => {
                    submenu.style.display = 'none';
                }, 300); 
            }
        });
    });
});
