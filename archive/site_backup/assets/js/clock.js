function updateClock() {
    const clockElement = document.getElementById('local-clock');
    if (!clockElement) return;

    const now = new Date();
    const options = {
        timeZone: 'America/Caracas',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const timeString = new Intl.DateTimeFormat('es-VE', options).format(now);
    clockElement.textContent = timeString;
}

// Inicializar el reloj cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar reloj
    updateClock();
    setInterval(updateClock, 1000);

    // Lógica para el menú móvil con botón grande "MENÚ"
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    if (nav && navLinks) {
        const container = nav.querySelector('.container') || nav;

        const existingBtn = nav.querySelector('.mobile-menu-text-btn');
        if (!existingBtn) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-text-btn';
            menuBtn.textContent = 'MENÚ';
            
            container.insertBefore(menuBtn, navLinks);

            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }
});
