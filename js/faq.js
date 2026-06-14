document.querySelectorAll('.faq-question').forEach(function(btn, index) {
    var answerId = 'faq-answer-' + (index + 1);
    var answer = btn.nextElementSibling;

    // Assign id to the answer panel and wire aria-controls
    if (answer) {
        answer.id = answerId;
    }
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', answerId);

    btn.addEventListener('click', function() {
        var isOpen = btn.parentElement.classList.toggle('active');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
});
