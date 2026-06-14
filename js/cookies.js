// Cookie Consent Banner + Google Analytics loader
// Author: Project Forge — Agente 5
// Changelog: 2026-06-14 — G1 revocación persistente; G2 GA sin script inline; G3 ARIA banner accesible
(function () {
    'use strict';

    var GA_ID = 'G-MHVMTM0H6R';
    var CONSENT_KEY = 'td_cookie_consent';
    var LANG_KEY = 'td_language';

    // ------------------------------------------------------------------ //
    // Helpers de consentimiento                                            //
    // ------------------------------------------------------------------ //

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    }

    function getLang() {
        try { return localStorage.getItem(LANG_KEY) || 'es'; } catch (e) { return 'es'; }
    }

    // ------------------------------------------------------------------ //
    // Google Analytics — carga SOLO como script externo, nunca inline     //
    // ------------------------------------------------------------------ //

    function loadGA() {
        // Evitar doble carga
        if (document.getElementById('ga-script')) return;

        // 1. Inyectar el script externo de gtag.js
        var s = document.createElement('script');
        s.id = 'ga-script';
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);

        // 2. Configurar dataLayer y gtag DENTRO de este fichero externo (no inline en HTML)
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
    }

    // ------------------------------------------------------------------ //
    // Revocar / inhabilitar GA cuando el usuario rechaza tras haber        //
    // aceptado previamente                                                 //
    // ------------------------------------------------------------------ //

    function disableGA() {
        // Señal de opt-out de gtag
        window['ga-disable-' + GA_ID] = true;

        // Borrar cookies _ga* (scope dominio actual y su padre)
        var cookieNames = document.cookie
            .split(';')
            .map(function (c) { return c.trim().split('=')[0]; })
            .filter(function (name) { return name.indexOf('_ga') === 0; });

        var hostParts = location.hostname.split('.');
        // Intentar borrar para el dominio actual y el dominio raíz (e.g. .ejemplo.com)
        var domains = [location.hostname];
        if (hostParts.length >= 2) {
            domains.push('.' + hostParts.slice(-2).join('.'));
        }

        cookieNames.forEach(function (name) {
            domains.forEach(function (domain) {
                ['/', ''].forEach(function (path) {
                    document.cookie =
                        name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;' +
                        ' path=' + (path || '/') + ';' +
                        ' domain=' + domain + ';';
                });
            });
        });
    }

    // ------------------------------------------------------------------ //
    // Estilos del banner (inyectados como <style>, no como script inline)  //
    // ------------------------------------------------------------------ //

    function injectStyles() {
        if (document.getElementById('cookie-styles')) return;
        var style = document.createElement('style');
        style.id = 'cookie-styles';
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
    }

    // ------------------------------------------------------------------ //
    // Referencia al elemento que tenia el foco antes de abrir el banner   //
    // (para restituirlo al cerrar)                                        //
    // ------------------------------------------------------------------ //

    var _focusBeforeBanner = null;

    // ------------------------------------------------------------------ //
    // Banner de consentimiento                                             //
    // ------------------------------------------------------------------ //

    function removeBanner(restoreFocus) {
        var b = document.getElementById('cookie-banner');
        if (!b) return;
        b.style.opacity = '0';
        b.style.transform = 'translateY(100%)';
        setTimeout(function () {
            b.remove();
            // Restituir foco al elemento que lo tenia antes de abrir el banner
            if (restoreFocus && _focusBeforeBanner && _focusBeforeBanner.focus) {
                _focusBeforeBanner.focus();
            }
        }, 300);
    }

    function showBanner(isReopen) {
        // Si ya existe, no duplicar
        if (document.getElementById('cookie-banner')) return;

        // Guardar referencia al foco actual para restituirlo al cerrar
        _focusBeforeBanner = isReopen
            ? (document.activeElement || document.querySelector('.cookie-settings-btn'))
            : null;

        var lang = getLang();
        var isEN = (lang === 'en');

        var textMsg = isEN
            ? 'We use Google Analytics cookies to analyse usage of this website and improve our services. '
            : 'Utilizamos cookies de Google Analytics para analizar el uso de esta web y mejorar nuestros servicios. ';
        var linkText = isEN ? 'Privacy Policy' : 'Política de Privacidad';
        var rejectLabel = isEN ? 'Reject' : 'Rechazar';
        var acceptLabel = isEN ? 'Accept' : 'Aceptar';
        var ariaRegionLabel = isEN ? 'Cookie consent' : 'Consentimiento de cookies';

        var banner = document.createElement('div');
        banner.id = 'cookie-banner';
        // G3 — Accesibilidad: landmark region + etiqueta
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', ariaRegionLabel);
        banner.setAttribute('aria-live', 'polite');

        banner.innerHTML =
            '<div class="cookie-content">' +
                '<p>' + textMsg +
                '<a href="/politica-privacidad">' + linkText + '</a></p>' +
                '<div class="cookie-buttons">' +
                    '<button id="cookie-reject" class="cookie-btn cookie-btn-reject" type="button">' + rejectLabel + '</button>' +
                    '<button id="cookie-accept" class="cookie-btn cookie-btn-accept" type="button">' + acceptLabel + '</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(banner);

        // Force reflow antes de añadir clase visible
        banner.offsetHeight;
        banner.classList.add('visible');

        // G3 — Mover el foco al primer boton del banner al abrirlo
        setTimeout(function () {
            var rejectBtn = document.getElementById('cookie-reject');
            if (rejectBtn) rejectBtn.focus();
        }, 50);

        // G3 — Permitir cerrar con Escape (sin cambiar decision)
        function onKeydown(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                document.removeEventListener('keydown', onKeydown);
                removeBanner(true);
            }
        }
        document.addEventListener('keydown', onKeydown);

        document.getElementById('cookie-accept').addEventListener('click', function () {
            document.removeEventListener('keydown', onKeydown);
            setConsent('accepted');
            loadGA();
            removeBanner(true);
        });

        document.getElementById('cookie-reject').addEventListener('click', function () {
            document.removeEventListener('keydown', onKeydown);
            var previousConsent = getConsent();
            setConsent('rejected');
            // G1 — Si habia aceptado antes, inhabilitar GA ahora
            if (previousConsent === 'accepted') {
                disableGA();
            }
            removeBanner(true);
        });
    }

    // ------------------------------------------------------------------ //
    // Boton persistente "Configurar cookies" en el footer (G1 / C5 AEPD) //
    // ------------------------------------------------------------------ //

    function injectSettingsButton() {
        if (document.getElementById('cookie-settings-btn')) return;

        var lang = getLang();
        var isEN = (lang === 'en');
        var label = isEN ? 'Cookie settings' : 'Configurar cookies';

        var btn = document.createElement('button');
        btn.id = 'cookie-settings-btn';
        btn.className = 'cookie-settings-btn';
        btn.type = 'button';
        btn.textContent = label;

        btn.addEventListener('click', function () {
            showBanner(true);
        });

        // Insertar dentro del primer <footer> encontrado
        var footer = document.querySelector('footer');
        if (footer) {
            // Intentar añadirlo al final del contenido del footer
            var footerBottom = footer.querySelector('.footer-bottom');
            if (footerBottom) {
                footerBottom.appendChild(btn);
            } else {
                footer.appendChild(btn);
            }
        } else {
            // Fallback: al final del body
            document.body.appendChild(btn);
        }
    }

    // ------------------------------------------------------------------ //
    // Arranque: verificar consentimiento guardado                          //
    // ------------------------------------------------------------------ //

    function init() {
        injectStyles();

        var consent = getConsent();

        if (consent === 'accepted') {
            loadGA();
        } else if (!consent) {
            showBanner(false);
        }
        // Si 'rejected': no hacer nada (GA permanece bloqueado)

        // El boton de configuracion se muestra siempre (RGPD: revocacion en cualquier momento)
        injectSettingsButton();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

}());
