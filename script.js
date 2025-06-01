// Animación parallax mejorada
document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const parallaxBg = document.querySelector('.parallax-bg');
    
    // Reemplaza todo el evento scroll del parallax
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Efecto de zoom en el fondo
        if (parallaxBg) {
            const bgSize = 100 + (scrollPosition * 0.1);
            parallaxBg.style.backgroundSize = `${bgSize}%`;
        }
        
        // Overlay dinámico
        const parallaxOverlay = document.querySelector('.parallax-overlay');
        if (parallaxOverlay) {
            const opacity = Math.min(scrollPosition * 1.7 / windowHeight, 0.7);
            parallaxOverlay.style.opacity = opacity;
        }
        
        // Efecto en elementos flotantes (opcional)
        parallaxElements.forEach((element, index) => {
            const speed = 0.05 + (index * 0.02);
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Cambiar estilo de navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.padding = '10px 0';
            nav.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
        }
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
            contactForm.reset();
        });
    }
    
    // Efecto de aparición en elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});