/* Cookie Banner Logic */
(function() {
    // Check if the user has already accepted cookies
    if (localStorage.getItem('cookies-accepted')) {
        return;
    }

    // Create the banner element
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <h4>Aviso de Cookies</h4>
            <p>Utilizamos cookies técnicas necesarias para que la web funcione correctamente. Al continuar navegando, aceptas su uso. Puedes consultar más detalles en nuestro <a href="legal.html" target="_blank">Aviso Legal</a>.</p>
        </div>
        <div class="cookie-actions">
            <button class="btn-cookie btn-accept">Entendido</button>
        </div>
    `;

    // Add to document
    document.body.appendChild(banner);

    // Show with a slight delay for smooth transition
    setTimeout(() => {
        banner.classList.add('show');
    }, 1000);

    // Event listener for the accept button
    banner.querySelector('.btn-accept').addEventListener('click', function() {
        localStorage.setItem('cookies-accepted', 'true');
        banner.classList.remove('show');
        setTimeout(() => {
            banner.remove();
        }, 600);
    });
})();
