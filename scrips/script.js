// Variables globales para el sistema de idiomas
let currentLanguage = 'es';

const translations = {
    es: {
        'nav-inicio': 'Inicio',
        'nav-funcionalidades': 'Funcionalidades',
        'nav-demo': 'Demo',
        'nav-comentarios': 'Comentarios',
        'nav-equipo': 'Equipo',
        'hero-title': 'Sistema web SaaS para gestión logística de envíos',
        'hero-subtitle': 'Sendify permite a empresas de cualquier tamaño crear, organizar y dar seguimiento a sus envíos en una sola plataforma digital. Desde pymes hasta operadores logísticos.',
        'btn-comenzar': 'Probar gratis',
        'btn-ver-planes': 'Ver planes',
        'features-title': 'Funcionalidades Clave de SENDIFY',
        'feature-1-title': 'Gestión centralizada de envíos',
        'feature-1-desc': 'Crea nuevos envíos con formulario simple (remitente, destinatario, dirección, peso, tipo de servicio). Generación automática de códigos de tracking únicos.',
        'feature-2-title': 'Tracking público en tiempo real',
        'feature-2-desc': 'Clientes finales consultan tracking sin registrarse. Línea de tiempo: Registrado → En tránsito → En reparto → Entregado.',
        'feature-3-title': 'Gestión de flota y asignación',
        'feature-3-desc': 'Registra vehículos y conductores. Asigna envíos a la flota o personal de reparto. Controla disponibilidad de cada recurso.',
        'slogan': 'Una sola plataforma digital para toda tu logística de envíos',
        'video-title': 'Te presentamos SENDIFY',
        'testimonials-title': 'Comentarios de nuestros clientes',
        'team-title': 'Equipo Horizon',
        'pricing-title': 'Planes de Suscripción',
        'plan-basico': 'Starter',
        'plan-pro': 'Pro',
        'plan-empresarial': 'Enterprise',
        'btn-comenzar-gratis': 'Comenzar',
        'btn-unete-ahora': 'Elegir plan',
        'btn-contactanos': 'Contáctanos',
        'btn-elegir-plan': 'Elegir Plan',
        'features-description': 'SENDIFY es un sistema SaaS que permite gestionar todo desde una vista central: crear y actualizar envíos, registrar y controlar flota/conductores, monitorear estados en tiempo real y generar reportes según el plan.',
        'team-description': 'Horizon es el equipo core detrás de SENDIFY, comprometido con la innovación y la digitalización de la gestión logística para empresas de cualquier tamaño.',
        'team-pietro-desc': 'Visionario tecnológico con más de 8 años de experiencia en desarrollo de software empresarial. Lidera la estrategia de SENDIFY y supervisa la innovación continua de la plataforma.',
        'team-eduardo-desc': 'Arquitecto de software especializado en sistemas SaaS escalables. Dirige el desarrollo técnico de SENDIFY, asegurando la robustez y escalabilidad de la plataforma.',
        'team-joan-desc': 'Desarrollador full-stack con expertise en tecnologías modernas. Encargado de implementar las funcionalidades core de SENDIFY y optimizar el rendimiento de la plataforma.',
        'team-harrison-desc': 'Diseñador de experiencia de usuario especializado en interfaces empresariales. Crea experiencias intuitivas que hacen de SENDIFY una herramienta fácil de usar para todos los usuarios.',
        'plan-basic-1': 'Hasta 500 envíos/mes',
        'plan-basic-2': 'Tracking público básico para clientes',
        'plan-basic-3': 'Historial y reportes simples (pendientes/entregados)',
        'plan-pro-1': 'Hasta 5,000 envíos/mes',
        'plan-pro-2': 'Gestión de flota (conductores y vehículos)',
        'plan-pro-3': 'Descargar reportes en Excel',
        'plan-pro-4': 'Módulo de empleados avanzado',
        'plan-enterprise-1': 'Envíos y usuarios ilimitados',
        'plan-enterprise-2': 'Gestión completa de flota',
        'plan-enterprise-3': 'Facturación consolidada mensual',
        'plan-enterprise-4': 'Soporte 24/7 para la plataforma',
        'plan-enterprise-5': 'Módulo de ganancias y métricas financieras',
        'pricing-starter-price': 'USD 49.90/mes',
        'pricing-pro-price': 'USD 99.90/mes',
        'pricing-enterprise-price': 'USD 149.90/mes',
        'pricing-starter-subtitle': 'Para pymes o couriers pequeños que recién digitalizan su logística',
        'pricing-pro-subtitle': 'Para negocios medianos o ecommerce con alto volumen',
        'pricing-enterprise-subtitle': 'Para grandes empresas y operadores logísticos',
        'footer-copyright': '© 2025 Sendify. Todos los derechos reservados.'
    },
    en: {
        'nav-inicio': 'Home',
        'nav-funcionalidades': 'Features',
        'nav-demo': 'Demo',
        'nav-comentarios': 'Reviews',
        'nav-equipo': 'Team',
        'hero-title': 'SaaS web system for logistics shipment management',
        'hero-subtitle': 'Sendify allows companies of any size to create, organize and track their shipments on a single digital platform. From SMEs to logistics operators.',
        'btn-comenzar': 'Try free',
        'btn-ver-planes': 'View plans',
        'features-title': 'Key Features of SENDIFY',
        'feature-1-title': 'Centralized shipment management',
        'feature-1-desc': 'Create new shipments with simple form (sender, recipient, address, weight, service type). Automatic generation of unique tracking codes.',
        'feature-2-title': 'Real-time public tracking',
        'feature-2-desc': 'End customers check tracking without registration. Timeline: Registered → In transit → Out for delivery → Delivered.',
        'feature-3-title': 'Fleet management and assignment',
        'feature-3-desc': 'Register vehicles and drivers. Assign shipments to fleet or delivery staff. Control availability of each resource.',
        'slogan': 'One digital platform for all your shipping logistics',
        'video-title': 'Meet SENDIFY',
        'testimonials-title': 'Customer Reviews',
        'team-title': 'Horizon Team',
        'pricing-title': 'Subscription Plans',
        'plan-basico': 'Starter',
        'plan-pro': 'Pro',
        'plan-empresarial': 'Enterprise',
        'btn-comenzar-gratis': 'Start',
        'btn-unete-ahora': 'Choose plan',
        'btn-contactanos': 'Contact us',
        'btn-elegir-plan': 'Choose Plan',
        'features-description': 'SENDIFY is a SaaS system that allows you to manage everything from a central view: create and update shipments, register and control fleet/drivers, monitor states in real time and generate reports according to the plan.',
        'team-description': 'Horizon is the core team behind SENDIFY, committed to innovation and digitization of logistics management for companies of any size.',
        'team-pietro-desc': 'Technology visionary with over 8 years of experience in enterprise software development. Leads SENDIFY strategy and oversees continuous platform innovation.',
        'team-eduardo-desc': 'Software architect specialized in scalable SaaS systems. Directs SENDIFY technical development, ensuring platform robustness and scalability.',
        'team-joan-desc': 'Full-stack developer with expertise in modern technologies. Responsible for implementing SENDIFY core functionalities and optimizing platform performance.',
        'team-harrison-desc': 'User experience designer specialized in enterprise interfaces. Creates intuitive experiences that make SENDIFY an easy-to-use tool for all users.',
        'plan-basic-1': 'Up to 500 shipments/month',
        'plan-basic-2': 'Basic public tracking for customers',
        'plan-basic-3': 'Simple history and reports (pending/delivered)',
        'plan-pro-1': 'Up to 5,000 shipments/month',
        'plan-pro-2': 'Fleet management (drivers and vehicles)',
        'plan-pro-3': 'Download Excel reports',
        'plan-pro-4': 'Advanced employee module',
        'plan-enterprise-1': 'Unlimited shipments and users',
        'plan-enterprise-2': 'Complete fleet management',
        'plan-enterprise-3': 'Monthly consolidated billing',
        'plan-enterprise-4': '24/7 platform support',
        'plan-enterprise-5': 'Earnings module and financial metrics',
        'pricing-starter-price': 'USD 49.90/month',
        'pricing-pro-price': 'USD 99.90/month',
        'pricing-enterprise-price': 'USD 149.90/month',
        'pricing-starter-subtitle': 'For SMEs or small couriers starting to digitize their logistics',
        'pricing-pro-subtitle': 'For medium businesses or ecommerce with high volume',
        'pricing-enterprise-subtitle': 'For large companies and logistics operators',
        'footer-copyright': '© 2025 Sendify. All rights reserved.'
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

    // Botones de prueba/planes: redirigen al producto
    const productUrl = 'https://frontend-azure-beta-84.vercel.app';
    const productButtons = document.querySelectorAll('[data-product-link]');
    productButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = productUrl;
        });
    });

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
                console.log('�� Enlace móvil clickeado:', href);
                
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
                console.log('�� Botón de idioma móvil clickeado');
                closeMenu();
            });
        }

        // Cerrar menú al hacer clic fuera de él
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                console.log('�� Clic fuera del menú');
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
