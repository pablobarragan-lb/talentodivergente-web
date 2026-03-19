// PREVIEW ENVIRONMENT - No analytics, no cookie banner
(function() {
    // Inject noindex meta tag
    var meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    // Remove any existing index,follow meta
    var existing = document.querySelector('meta[name="robots"][content="index, follow"]');
    if (existing) existing.setAttribute('content', 'noindex, nofollow');

    // Inject preview banner
    function addBanner() {
        var banner = document.createElement('div');
        banner.id = 'preview-banner';
        banner.style.cssText = 'background:#f59e0b;color:#000;text-align:center;padding:10px 16px;font-weight:bold;font-size:14px;position:fixed;top:0;left:0;right:0;z-index:99999;font-family:sans-serif;letter-spacing:0.5px;box-shadow:0 2px 8px rgba(0,0,0,0.15);';
        banner.textContent = 'PREVIEW \u2014 Entorno de pruebas \u2014 Los cambios aqu\u00ed NO son p\u00fablicos';
        document.body.insertBefore(banner, document.body.firstChild);

        // Add top padding to body so content isn't hidden behind banner
        document.body.style.paddingTop = '44px';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addBanner);
    } else {
        addBanner();
    }
})();
