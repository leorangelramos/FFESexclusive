document.addEventListener('DOMContentLoaded', () => {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const panel = trigger.nextElementSibling;
            const isCurrentlyActive = trigger.classList.contains('active');

            // Fecha todos os outros acordeões
            accordionTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    otherTrigger.classList.remove('active');
                    otherTrigger.nextElementSibling.style.maxHeight = null;
                    otherTrigger.setAttribute('aria-expanded', 'false'); // Atualiza acessibilidade
                }
            });
            
            // Alterna o estado do item clicado (abre ou fecha)
            if (isCurrentlyActive) {
                trigger.classList.remove('active');
                panel.style.maxHeight = null;
                trigger.setAttribute('aria-expanded', 'false'); // Atualiza acessibilidade
            } else {
                trigger.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + "px";
                trigger.setAttribute('aria-expanded', 'true'); // Atualiza acessibilidade
            }
        });
    });
});