document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.parentElement.classList.toggle('active');
    });
});
