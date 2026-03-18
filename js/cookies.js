// Cookie Consent Banner + Google Analytics loader
(function() {
    var GA_ID = 'G-MHVMTM0H6R';
    var CONSENT_KEY = 'td_cookie_consent';

    function loadGA() {
        if (document.getElementById('ga-script')) return;
        var s = document.createElement('script');
        s.id = 'ga-script';
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
    }

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch(e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch(e) {}
    }

    function removeBanner() {
        var b = document.getElementById('cookie-banner');
        if (b) {
            b.style.opacity = '0';
            b.style.transform = 'translateY(100%)';
            setTimeout(function() { b.remove(); }, 300);
        }
    }

    function showBanner() {
        var banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML =
            '<div class="cookie-content">' +
                '<p>Utilizamos cookies de Google Analytics para analizar el uso de esta web y mejorar nuestros servicios. ' +
                '<a href="politica-privacidad.html">Pol\u00edtica de Privacidad</a></p>' +
                '<div class="cookie-buttons">' +
                    '<button id="cookie-reject" class="cookie-btn cookie-btn-reject">Rechazar</button>' +
                    '<button id="cookie-accept" class="cookie-btn cookie-btn-accept">Aceptar</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(banner);

        // Force reflow before adding visible class
        banner.offsetHeight;
        banner.classList.add('visible');

        document.getElementById('cookie-accept').addEventListener('click', function() {
            setConsent('accepted');
            loadGA();
            removeBanner();
        });

        document.getElementById('cookie-reject').addEventListener('click', function() {
            setConsent('rejected');
            removeBanner();
        });
    }

    // Add styles
    var style = document.createElement('style');
    style.textContent =
        '#cookie-banner {' +
            'position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;' +
            'background: #1a1f2e; color: #f0f0f0; padding: 1rem;' +
            'box-shadow: 0 -4px 20px rgba(0,0,0,0.2);' +
            'transition: opacity 0.3s ease, transform 0.3s ease;' +
            'opacity: 0; transform: translateY(100%);' +
        '}' +
        '#cookie-banner.visible { opacity: 1; transform: translateY(0); }' +
        '.cookie-content {' +
            'max-width: 1200px; margin: 0 auto;' +
            'display: flex; align-items: center; justify-content: space-between;' +
            'gap: 1.5rem; flex-wrap: wrap;' +
        '}' +
        '.cookie-content p { margin: 0; font-size: 0.875rem; line-height: 1.5; flex: 1; min-width: 280px; }' +
        '.cookie-content a { color: #60a5fa; text-decoration: underline; }' +
        '.cookie-buttons { display: flex; gap: 0.75rem; flex-shrink: 0; }' +
        '.cookie-btn {' +
            'padding: 0.5rem 1.25rem; border: none; border-radius: 6px;' +
            'font-size: 0.875rem; font-weight: 600; cursor: pointer;' +
            'transition: opacity 0.2s;' +
        '}' +
        '.cookie-btn:hover { opacity: 0.85; }' +
        '.cookie-btn-accept { background: #3b82f6; color: white; }' +
        '.cookie-btn-reject { background: transparent; color: #9ca3af; border: 1px solid #4b5563; }' +
        '@media (max-width: 600px) {' +
            '.cookie-content { flex-direction: column; text-align: center; }' +
            '.cookie-buttons { justify-content: center; width: 100%; }' +
        '}';
    document.head.appendChild(style);

    // Check consent on load
    var consent = getConsent();
    if (consent === 'accepted') {
        loadGA();
    } else if (!consent) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showBanner);
        } else {
            showBanner();
        }
    }
    // If 'rejected', do nothing
})();
