document.addEventListener('DOMContentLoaded', () => {
    // Translations Data
    const translations = {
        es: {
            head_title: "Talento Divergente | Inclusión Laboral Neurodivergente",
            nav_start: "Inicio",
            nav_services: "Servicios",
            nav_about: "Nosotros",
            nav_companies: "Para Empresas",
            nav_neuro: "Neurodiversidad",
            nav_cta: "Únete a Nosotros",
            hero_title: "Transformando la <span>neurodiversidad</span> en ventaja competitiva",
            hero_desc: "Somos el puente entre el talento único de las personas neurodivergentes y las empresas innovadoras. Creamos entornos donde todos pueden brillar.",
            hero_btn_discover: "Descubre cómo",
            hero_btn_about: "Conócenos",
            stat_people: "Personas Apoyadas",
            stat_companies: "Empresas Aliadas",
            node_talent: "Talento",
            node_company: "Empresa",
            neuro_title: "¿Qué es la neurodiversidad?",
            neuro_desc: "La neurodiversidad es la idea de que las diferencias en el cerebro humano son variaciones naturales y no déficits. Reconoce que cada mente procesa la información de manera única, aportando fortalezas indispensables como el pensamiento analítico, la creatividad y la atención al detalle.",
            neuro_tag_1: "Perspectiva Única",
            neuro_tag_2: "Innovación",
            neuro_tag_3: "Resolución de problemas",
            about_title: "Nuestra Misión",
            about_desc: "En la Fundación Talento Divergente, trabajamos para derribar las barreras que impiden el acceso al empleo de personas con neurodiversidad. Creemos en un mercado laboral inclusivo donde las capacidades únicas sean el motor del cambio.",
            about_stat_1: "Inclusión Real",
            about_stat_2: "Apoyo Continuo",
            about_stat_3: "Impacto Social",
            services_title: "Nuestros Pilares de Acción",
            services_subtitle: "Un enfoque integral para garantizar una inclusión sociolaboral efectiva y duradera.",
            s1_title: "Formación Especializada",
            s1_desc: "Programas enfocados en desarrollar tanto competencias técnicas como habilidades interpersonales necesarias en el entorno profesional.",
            s1_f1: "Soft skills laborales",
            s1_f2: "Habilidades sociales",
            s1_f3: "Gestión del entorno",
            s2_title: "Acompañamiento Laboral",
            s2_desc: "Mediación continua durante la adaptación. El 'empleo con apoyo' garantiza que la comunicación entre trabajador y empresa sea fluida.",
            s2_f1: "Mediación personalizada",
            s2_f2: "Seguimiento periódico",
            s2_f3: "Resolución de conflictos",
            s3_title: "Consultoría Empresarial",
            s3_desc: "Asesoramos a las organizaciones para adaptar procesos de selección y dinámicas de equipo, promoviendo una inclusión real.",
            s3_f1: "Auditoría de inclusión",
            s3_f2: "Sesiones de sensibilización",
            s3_f3: "Adaptación de procesos",
            dual_talent_title: "Para el Talento",
            dual_talent_desc: "Encontramos empresas que valoran tu forma única de ver el mundo. Te preparamos y acompañamos en todo el proceso.",
            dual_talent_btn: "Busco Empleo",
            dual_company_title: "Para Empresas",
            dual_company_desc: "La neurodiversidad aporta enfoque, atención al detalle e innovación. Potencia tu equipo con talento divergente.",
            dual_company_btn: "Contratar Talento",
            contact_title: "Contacto",
            contact_subtitle: "¿Tienes preguntas o quieres colaborar? Estamos aquí para ayudarte.",
            contact_email_title: "Email",
            contact_location_title: "Ubicación",
            contact_location_desc: "Moncofa, Castellón<br>Comunitat Valenciana, España",
            contact_linkedin_desc: "Síguenos en LinkedIn para estar al día de nuestras novedades y oportunidades.",
            footer_desc: "Construyendo puentes entre el talento neurodivergente y empresas preparadas para el futuro.",
            footer_links_title: "Enlaces",
            footer_legal_title: "Información",
            footer_about_us: "Quiénes Somos",
            footer_legal_notice: "Aviso Legal",
            footer_privacy_policy: "Política de Privacidad",
            footer_contact_title: "Contacto",
            footer_copy: "&copy; 2026 Fundación Talento Divergente. Todos los derechos reservados."
        },
        en: {
            head_title: "Talento Divergente | Neurodivergent Employment Inclusion",
            nav_start: "Home",
            nav_services: "Services",
            nav_about: "About Us",
            nav_companies: "For Companies",
            nav_neuro: "Neurodiversity",
            nav_cta: "Join Us",
            hero_title: "Transforming <span>neurodiversity</span> into competitive advantage",
            hero_desc: "We are the bridge between the unique talent of neurodivergent people and innovative companies. We create environments where everyone can shine.",
            hero_btn_discover: "Discover how",
            hero_btn_about: "Learn more",
            stat_people: "People Supported",
            stat_companies: "Partner Companies",
            node_talent: "Talent",
            node_company: "Company",
            neuro_title: "What is Neurodiversity?",
            neuro_desc: "Neurodiversity is the idea that differences in the human brain are natural variations rather than deficits. It recognizes that every mind processes information uniquely, providing indispensable strengths such as analytical thinking, creativity, and attention to detail.",
            neuro_tag_1: "Unique Perspective",
            neuro_tag_2: "Innovation",
            neuro_tag_3: "Problem Solving",
            about_title: "Our Mission",
            about_desc: "At the Talento Divergente Foundation, we work to break down the barriers that prevent neurodivergent individuals from accessing employment. We believe in an inclusive labor market where unique abilities are the engine of change.",
            about_stat_1: "Real Inclusion",
            about_stat_2: "Continuous Support",
            about_stat_3: "Social Impact",
            services_title: "Our Pillars of Action",
            services_subtitle: "A comprehensive approach to ensure effective and lasting social and labor inclusion.",
            s1_title: "Specialized Training",
            s1_desc: "Programs focused on developing both technical competencies and interpersonal skills needed in professional environments.",
            s1_f1: "Workplace soft skills",
            s1_f2: "Social skills",
            s1_f3: "Environment management",
            s2_title: "Job Coaching",
            s2_desc: "Continuous mediation during adaptation. 'Supported employment' ensures fluid communication between worker and company.",
            s2_f1: "Personalized mediation",
            s2_f2: "Regular follow-ups",
            s2_f3: "Conflict resolution",
            s3_title: "Business Consulting",
            s3_desc: "We advise organizations on adapting selection processes and team dynamics, promoting real inclusion.",
            s3_f1: "Inclusion audit",
            s3_f2: "Awareness sessions",
            s3_f3: "Process adaptation",
            dual_talent_title: "For Talent",
            dual_talent_desc: "We find companies that value your unique way of seeing the world. We prepare and accompany you throughout.",
            dual_talent_btn: "Looking for Work",
            dual_company_title: "For Companies",
            dual_company_desc: "Neurodiversity brings focus, attention to detail, and innovation. Power up your team with divergent talent.",
            dual_company_btn: "Hire Talent",
            contact_title: "Contact",
            contact_subtitle: "Have questions or want to collaborate? We are here to help.",
            contact_email_title: "Email",
            contact_location_title: "Location",
            contact_location_desc: "Moncofa, Castellón<br>Comunitat Valenciana, Spain",
            contact_linkedin_desc: "Follow us on LinkedIn to stay up to date with our news and opportunities.",
            footer_desc: "Building bridges between neurodivergent talent and companies prepared for the future.",
            footer_links_title: "Links",
            footer_legal_title: "Information",
            footer_about_us: "About Us",
            footer_legal_notice: "Legal Notice",
            footer_privacy_policy: "Privacy Policy",
            footer_contact_title: "Contact",
            footer_copy: "&copy; 2026 Talento Divergente Foundation. All rights reserved."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active state in switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.service-card, .glass-card, .split-content');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Add a class specifically for the intersection observer animation override
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
