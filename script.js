// Variables globales para el sistema de idiomas
let currentLanguage = 'es';

const translations = {
    es: {
        'nav-inicio': 'Inicio',
        'nav-funcionalidades': 'Funcionalidades',
        'nav-demo': 'Demo',
        'nav-comentarios': 'Comentarios',
        'nav-equipo': 'Equipo',
        'hero-title': 'Simplifica y controla tus envíos con SENDIFY',
        'hero-subtitle': 'Una plataforma centralizada para gestionar, rastrear y optimizar tus envíos.',
        'btn-comenzar': 'Comenzar gratis',
        'btn-ver-planes': 'Ver planes',
        'features-title': 'Funcionalidades Clave de SENDIFY',
        'feature-1-title': 'Gestión de envíos',
        'feature-1-desc': 'Organiza, crea y gestiona todos tus envíos desde una única plataforma intuitiva. Simplifica tus operaciones logísticas.',
        'feature-2-title': 'Tracking en tiempo real',
        'feature-2-desc': 'Monitorea la ubicación y el estado de tus paquetes con actualizaciones en tiempo real. Nunca pierdas de vista un envío.',
        'feature-3-title': 'Historial y reportes',
        'feature-3-desc': 'Accede a un historial detallado de tus envíos y genera reportes personalizados para analizar tu rendimiento logístico.',
        'slogan': 'Envia rapido, envia seguro',
        'video-title': 'Te presentamos SENDIFY',
        'testimonials-title': 'Comentarios de nuestros clientes',
        'team-title': 'Equipo Horizon',
        'pricing-title': 'Listo para comenzar a enviar?',
        'plan-basico': 'Plan Básico',
        'plan-pro': 'Plan Pro',
        'plan-empresarial': 'Plan Empresarial',
        'btn-comenzar-gratis': 'Comenzar gratis',
        'btn-unete-ahora': 'Únete ahora',
        'btn-contactanos': 'Contáctanos',
        'features-description': 'SENDIFY es una plataforma web que te permite gestionar todos tus envíos desde un solo lugar, con herramientas intuitivas y reportes detallados para optimizar tu logística.',
        'team-description': 'Horizon es el equipo core detrás de SENDIFY, comprometido con la innovación y la excelencia en la gestión logística.',
        'plan-basic-1': 'Hasta 10 envíos al mes',
        'plan-basic-2': 'Seguimiento básico de paquetes (tracking estándar)',
        'plan-basic-3': 'Gestión de clientes y direcciones frecuentes',
        'plan-basic-4': 'Notificaciones por email',
        'plan-basic-5': 'Acceso desde web y mobile',
        'plan-pro-1': 'Hasta 500 envíos al mes',
        'plan-pro-2': 'Reportes detallados de costos, tiempos y destinos frecuentes',
        'plan-pro-3': 'Exportación de reportes en PDF/Excel',
        'plan-pro-4': 'Soporte prioritario',
        'plan-pro-5': 'Opciones de personalización en branding del panel',
        'plan-enterprise-1': 'Envíos ilimitados',
        'plan-enterprise-2': 'Tracking avanzado con geolocalización',
        'plan-enterprise-3': 'API personalizada y integraciones',
        'plan-enterprise-4': 'Soporte 24/7 con gestor dedicado',
        'plan-enterprise-5': 'Branding completo y personalización total',
        'footer-copyright': '© 2024 Sendify. Todos los derechos reservados.'
    },
    en: {
        'nav-inicio': 'Home',
        'nav-funcionalidades': 'Features',
        'nav-demo': 'Demo',
        'nav-comentarios': 'Reviews',
        'nav-equipo': 'Team',
        'hero-title': 'Simplify and control your shipments with SENDIFY',
        'hero-subtitle': 'A centralized platform to manage, track and optimize your shipments.',
        'btn-comenzar': 'Start free',
        'btn-ver-planes': 'View plans',
        'features-title': 'Key Features of SENDIFY',
        'feature-1-title': 'Shipment Management',
        'feature-1-desc': 'Organize, create and manage all your shipments from a single intuitive platform. Simplify your logistics operations.',
        'feature-2-title': 'Real-time Tracking',
        'feature-2-desc': 'Monitor the location and status of your packages with real-time updates. Never lose track of a shipment.',
        'feature-3-title': 'History and Reports',
        'feature-3-desc': 'Access detailed history of your shipments and generate custom reports to analyze your logistics performance.',
        'slogan': 'Ship fast, ship safe',
        'video-title': 'Meet SENDIFY',
        'testimonials-title': 'Customer Reviews',
        'team-title': 'Horizon Team',
        'pricing-title': 'Ready to start shipping?',
        'plan-basico': 'Basic Plan',
        'plan-pro': 'Pro Plan',
        'plan-empresarial': 'Enterprise Plan',
        'btn-comenzar-gratis': 'Start free',
        'btn-unete-ahora': 'Join now',
        'btn-contactanos': 'Contact us',
        'features-description': 'SENDIFY is a web platform that allows you to manage all your shipments from one place, with intuitive tools and detailed reports to optimize your logistics.',
        'team-description': 'Horizon is the core team behind SENDIFY, committed to innovation and excellence in logistics management.',
        'plan-basic-1': 'Up to 10 shipments per month',
        'plan-basic-2': 'Basic package tracking (standard tracking)',
        'plan-basic-3': 'Customer and frequent addresses management',
        'plan-basic-4': 'Email notifications',
        'plan-basic-5': 'Web and mobile access',
        'plan-pro-1': 'Up to 500 shipments per month',
        'plan-pro-2': 'Detailed reports on costs, times and frequent destinations',
        'plan-pro-3': 'Export reports in PDF/Excel',
        'plan-pro-4': 'Priority support',
        'plan-pro-5': 'Panel branding customization options',
        'plan-enterprise-1': 'Unlimited shipments',
        'plan-enterprise-2': 'Advanced tracking with geolocation',
        'plan-enterprise-3': 'Custom API and integrations',
        'plan-enterprise-4': '24/7 support with dedicated manager',
        'plan-enterprise-5': 'Complete branding and total customization',
        'footer-copyright': '© 2024 Sendify. All rights reserved.'
    }
};

// Función global para cambiar idioma
function changeLanguage() {
    console.log('🌐 Función changeLanguage ejecutada');
    console.log('Idioma anterior:', currentLanguage);
    
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    console.log('Idioma nuevo:', currentLanguage);
    
    updateLanguage();
    updateLanguageButtons();
    addVisualFeedback();
}

// Función para actualizar los botones de idioma
function updateLanguageButtons() {
    const langText = document.querySelector('.lang-text');
    const mobileLangText = document.querySelector('.mobile-lang-text');
    
    const newText = currentLanguage === 'es' ? 'EN' : 'ES';
    
    if (langText) {
        langText.textContent = newText;
        console.log('✅ Texto del botón desktop actualizado:', newText);
    } else {
        console.log('❌ No se encontró el elemento .lang-text');
    }
    
    if (mobileLangText) {
        mobileLangText.textContent = newText;
        console.log('✅ Texto del botón móvil actualizado:', newText);
    } else {
        console.log('❌ No se encontró el elemento .mobile-lang-text');
    }
}

// Función para agregar feedback visual
function addVisualFeedback() {
    const languageBtn = document.querySelector('.language-btn');
    const mobileLanguageBtn = document.querySelector('.mobile-language-btn');
    
    if (languageBtn) {
        languageBtn.style.backgroundColor = 'rgba(255, 123, 0, 0.2)';
        setTimeout(() => {
            languageBtn.style.backgroundColor = 'transparent';
        }, 300);
    }
    
    if (mobileLanguageBtn) {
        mobileLanguageBtn.style.backgroundColor = 'rgba(255, 123, 0, 0.2)';
        setTimeout(() => {
            mobileLanguageBtn.style.backgroundColor = 'transparent';
        }, 300);
    }
}

// Función para actualizar el contenido
function updateLanguage() {
    console.log('Función updateLanguage ejecutada');
    const lang = translations[currentLanguage];
    
    if (!lang) {
        console.error('No se encontró el idioma:', currentLanguage);
        return;
    }
    
    // Actualizar elementos con data-translate
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Elementos encontrados con data-translate:', elements.length);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            element.textContent = lang[key];
            console.log('Elemento actualizado:', key, '->', lang[key]);
        } else {
            console.log('No se encontró traducción para:', key);
        }
    });
    
    console.log('Contenido actualizado al idioma:', currentLanguage);
}

// Smooth scrolling para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar enlace activo
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Navegación activa basada en scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Actualizar navegación móvil
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Animaciones de entrada para las tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas
    const cards = document.querySelectorAll('.feature-card, .testimonial-card, .team-card, .pricing-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Botones de llamada a la acción
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para manejar los clics en los botones
            console.log('Botón CTA clickeado:', this.textContent);
            
            // Ejemplo: mostrar un modal o redirigir
            if (this.textContent.includes('gratis')) {
                alert('¡Gracias por tu interés! Te contactaremos pronto.');
            } else if (this.textContent.includes('ahora')) {
                alert('¡Excelente elección! Te redirigiremos al proceso de registro.');
            } else if (this.textContent.includes('Contáctanos')) {
                alert('¡Perfecto! Nuestro equipo se pondrá en contacto contigo.');
            }
        });
    });

    // Placeholder del video
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para reproducir el video
            alert('Reproduciendo video de presentación de SENDIFY...');
            
            // Ejemplo: cambiar el ícono de play por un ícono de pausa
            const playIcon = this.querySelector('i');
            if (playIcon.classList.contains('fa-play')) {
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
                this.style.backgroundColor = '#FF7B00';
            } else {
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
                this.style.backgroundColor = '#2C2C2C';
            }
        });
    }

    // Efectos hover mejorados para las tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Header con efecto de transparencia al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#222222';
            header.style.backdropFilter = 'none';
        }
    });

    // Contador animado para las estadísticas (opcional)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Formulario de contacto (opcional - puedes agregarlo al HTML)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #FF7B00;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 18px;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Mostrar/ocultar botón de scroll to top
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidad del botón scroll to top
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efectos de parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroImage = document.querySelector('.hero-img');
        
        if (hero && heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });


    // Carrusel de testimonios
    const testimonialsTrack = document.querySelector('.testimonials-track');
    if (testimonialsTrack) {
        // Pausar animación al hacer hover
        testimonialsTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        testimonialsTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    // Función para scroll a la sección de precios
    window.scrollToPricing = function() {
        const pricingSection = document.querySelector('.pricing');
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        if (pricingSection) {
            const targetPosition = pricingSection.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Inicializar el sistema de idiomas cuando el DOM esté listo
    console.log('🌐 Inicializando sistema de idiomas...');
    updateLanguage();
    updateLanguageButtons();
    console.log('✅ Sistema de idiomas inicializado correctamente');

    // Funcionalidad del menú hamburguesa - Versión simplificada y robusta
    function initMobileMenu() {
        console.log('=== INICIALIZANDO MENÚ MÓVIL ===');
        
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const mobileLanguageBtn = document.querySelector('.mobile-language-btn');

        console.log('Elementos encontrados:');
        console.log('- Toggle:', mobileMenuToggle);
        console.log('- Menú:', mobileMenu);
        console.log('- Enlaces móviles:', mobileNavLinks.length);
        console.log('- Botón idioma móvil:', mobileLanguageBtn);

        if (!mobileMenuToggle) {
            console.error('❌ No se encontró el botón hamburguesa');
            return;
        }

        if (!mobileMenu) {
            console.error('❌ No se encontró el menú móvil');
            return;
        }

        // Función para abrir menú
        function openMenu() {
            console.log('🔓 Abriendo menú...');
            mobileMenuToggle.classList.add('active');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Función para cerrar menú
        function closeMenu() {
            console.log('🔒 Cerrando menú...');
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Toggle del menú
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🍔 Botón hamburguesa clickeado');
            
            const isActive = mobileMenu.classList.contains('active');
            console.log('Estado actual del menú:', isActive ? 'ABIERTO' : 'CERRADO');
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Cerrar menú al hacer clic en un enlace
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                console.log('🔗 Enlace móvil clickeado:', href);
                
                closeMenu();
                
                // Actualizar enlaces activos
                mobileNavLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll suave a la sección
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Cerrar menú al hacer clic en el botón de idioma móvil
        if (mobileLanguageBtn) {
            mobileLanguageBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🌐 Botón de idioma móvil clickeado');
                closeMenu();
            });
        }

        // Cerrar menú al hacer clic fuera de él
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                console.log('👆 Clic fuera del menú');
                closeMenu();
            }
        });

        // Cerrar menú con la tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                console.log('⌨️ Tecla Escape presionada');
                closeMenu();
            }
        });

        console.log('✅ Menú hamburguesa inicializado correctamente');
    }

    // Inicializar menú móvil cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }

    console.log('SENDIFY Landing Page cargado exitosamente! 🚀');
}); 