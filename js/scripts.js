document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // TRANSLATIONS
    // ========================================
    const translations = {
        es: {
            // -- Shared / Nav / Footer --
            head_title: "Talento Divergente | Inclusión Laboral Neurodivergente",
            nav_start: "Inicio",
            nav_services: "Servicios",
            nav_about: "Nosotros",
            nav_companies: "Para Empresas",
            nav_neuro: "Neurodiversidad",
            nav_cta: "Únete a Nosotros",
            nav_back_home: "Volver al inicio",
            breadcrumb_home: "Inicio",
            footer_desc: "Construyendo puentes entre el talento neurodivergente y empresas preparadas para el futuro.",
            footer_links_title: "Enlaces",
            footer_legal_title: "Legal",
            footer_about_us: "Quiénes Somos",
            footer_legal_notice: "Aviso Legal",
            footer_privacy_policy: "Política de Privacidad",
            footer_contact_title: "Contacto",
            footer_copy: "&copy; 2026 Fundación Talento Divergente. Todos los derechos reservados.",

            // -- index.html: Hero --
            hero_title: "Transformando la <span>neurodiversidad</span> en ventaja competitiva",
            hero_desc: "Somos el puente entre el talento único de las personas neurodivergentes y las empresas innovadoras. Creamos entornos donde todos pueden brillar.",
            hero_btn_discover: "Descubre cómo",
            hero_btn_about: "Conócenos",
            stat_people: "Personas Apoyadas",
            stat_companies: "Empresas Aliadas",
            node_talent: "Talento",
            node_company: "Empresa",

            // -- index.html: Neurodiversity summary --
            neuro_title: "¿Qué es la neurodiversidad?",
            neuro_desc: "La neurodiversidad es la idea de que las diferencias en el cerebro humano son variaciones naturales y no déficits. Reconoce que cada mente procesa la información de manera única, aportando fortalezas indispensables como el pensamiento analítico, la creatividad y la atención al detalle.",
            neuro_tag_1: "Perspectiva Única",
            neuro_tag_2: "Innovación",
            neuro_tag_3: "Resolución de problemas",

            // -- index.html: About summary --
            about_title: "Nuestra Misión",
            about_desc: "En la Fundación Talento Divergente, trabajamos para derribar las barreras que impiden el acceso al empleo de personas con neurodiversidad. Creemos en un mercado laboral inclusivo donde las capacidades únicas sean el motor del cambio.",
            about_stat_1: "Inclusión Real",
            about_stat_2: "Apoyo Continuo",
            about_stat_3: "Impacto Social",

            // -- index.html: Services summary --
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

            // -- index.html: Dual target --
            dual_talent_title: "Para el Talento",
            dual_talent_desc: "Encontramos empresas que valoran tu forma única de ver el mundo. Te preparamos y acompañamos en todo el proceso.",
            dual_talent_btn: "Busco Empleo",
            dual_company_title: "Para Empresas",
            dual_company_desc: "La neurodiversidad aporta enfoque, atención al detalle e innovación. Potencia tu equipo con talento divergente.",
            dual_company_btn: "Contratar Talento",

            // -- index.html: Contact --
            contact_title: "Contacto",
            contact_subtitle: "¿Tienes preguntas o quieres colaborar? Estamos aquí para ayudarte.",
            contact_email_title: "Email",
            contact_location_title: "Ubicación",
            contact_location_desc: "Moncofa, Castellón<br>Comunitat Valenciana, España",
            contact_linkedin_desc: "Síguenos en LinkedIn para estar al día de nuestras novedades y oportunidades.",
            contact_form_name: "Nombre",
            contact_form_email: "Email",
            contact_form_subject: "Asunto",
            contact_form_subject_info: "Solicitar información",
            contact_form_subject_talent: "Busco empleo",
            contact_form_subject_collab: "Propuesta de colaboración",
            contact_form_subject_other: "Otro",
            contact_form_message: "Mensaje",
            contact_form_privacy: "He leído y acepto la <a href=\"politica-privacidad.html\">Política de Privacidad</a>",
            contact_form_submit: "Enviar mensaje",
            contact_form_sending: "Enviando...",
            contact_form_success: "Mensaje enviado correctamente. Te responderemos pronto.",
            contact_form_error: "Hubo un error. Por favor, inténtalo de nuevo o escríbenos directamente a contacto@fundaciontalentodivergente.org",

            // -- quienes-somos.html --
            page_about_title: "Quiénes Somos | Talento Divergente",
            page_about_heading: "Quiénes Somos",
            breadcrumb_about: "Quiénes Somos",
            about_mission_title: "Nuestra Misión",
            about_mission_text: "La Fundación de la Comunitat Valenciana Talento Divergente nace con un propósito claro: <strong>posicionar la neurodiversidad como ventaja competitiva empresarial</strong>, superando el enfoque asistencialista que ha dominado durante décadas. Creemos que las diferencias cognitivas no son déficits, sino fuentes de innovación, precisión y creatividad que las organizaciones necesitan para competir en un mundo complejo.",
            about_mission_text_2: "Trabajamos en la intersección entre el talento neurodivergente y las necesidades reales del tejido empresarial de la Comunitat Valenciana, construyendo puentes donde antes solo había barreras.",
            about_groups_title: "Tres Colectivos Prioritarios",
            about_group1_title: "Autismo Tipo 1",
            about_group1_desc: "Personas autistas con capacidades laborales plenas que encuentran barreras en los procesos de selección y en los entornos de trabajo convencionales. Nos centramos en la inclusión laboral efectiva: preparación, mediación y acompañamiento continuo para que el talento autista ocupe el lugar que merece.",
            about_group2_title: "Altas Capacidades",
            about_group2_desc: "Profesionales con altas capacidades intelectuales que experimentan desajuste con entornos laborales poco estimulantes, falta de retos y conflictos derivados de la incomprensión. Trabajamos en la retención de talento, ayudando a las empresas a crear entornos donde estas personas puedan desarrollar todo su potencial.",
            about_group3_title: "Mujeres Adultas con AACC",
            about_group3_desc: "Mujeres con altas capacidades diagnosticadas tardíamente o no diagnosticadas, cuyas fortalezas han permanecido invisibles por sesgos de género en la detección. Trabajamos en su visibilización profesional y en derribar la doble barrera que enfrentan: la de género y la de la neurodivergencia no reconocida.",
            about_values_title: "Nuestros Valores",
            about_value1_title: "Inclusión Real",
            about_value1_desc: "No hablamos de cuotas ni de cumplimiento normativo vacío. Buscamos una integración auténtica donde la persona neurodivergente aporta valor y la empresa lo reconoce. La inclusión real se mide en resultados, no en declaraciones de intenciones.",
            about_value2_title: "Base Científica",
            about_value2_desc: "Nuestras intervenciones se apoyan en evidencia científica y colaboración con centros de investigación como el IDOCAL de la Universitat de València. Medimos el impacto con indicadores reales: seguridad psicológica, retención y calidad de vida laboral.",
            about_value3_title: "Enfoque Empresarial",
            about_value3_desc: "Hablamos el lenguaje de las empresas. No pedimos caridad: demostramos retorno de inversión. La neurodiversidad bien gestionada reduce rotación, mejora la innovación y fortalece los equipos. Nuestro modelo busca la sostenibilidad a través de servicios B2B de valor.",
            about_team_title: "Nuestro Equipo",
            about_team_text: "La Fundación Talento Divergente está gobernada por un <strong>Patronato</strong> comprometido con la misión de transformar el mercado laboral. Nuestro equipo combina experiencia en psicología organizacional, gestión empresarial, neurodiversidad y políticas de inclusión.",
            about_team_text_2: "Estamos registrados como fundación de la Comunitat Valenciana, con domicilio en Moncofa (Castellón), y operamos en todo el territorio de la Comunitat, con especial foco en Valencia, Alicante y Castellón.",

            // -- servicios.html --
            page_services_title: "Nuestros Servicios | Talento Divergente",
            page_services_heading: "Nuestros Servicios",
            breadcrumb_services: "Servicios",
            services_intro: "En la Fundación Talento Divergente ofrecemos un enfoque integral para garantizar una inclusión sociolaboral efectiva y duradera. Nuestros servicios se dirigen tanto a personas neurodivergentes que buscan empleo como a empresas que quieren aprovechar el potencial de la diversidad cognitiva.",
            srv_training_title: "Formación Especializada",
            srv_training_desc: "Programas formativos diseñados para desarrollar las competencias que el entorno profesional demanda, adaptados a las fortalezas y necesidades de cada persona neurodivergente.",
            srv_training_f1: "<strong>Soft skills laborales:</strong> comunicación profesional, trabajo en equipo, gestión del tiempo y habilidades de presentación adaptadas a perfiles neurodivergentes.",
            srv_training_f2: "<strong>Habilidades sociales en el entorno de trabajo:</strong> interpretación de dinámicas de equipo, gestión de reuniones, comunicación con superiores y compañeros.",
            srv_training_f3: "<strong>Gestión del entorno:</strong> estrategias para manejar la sobrecarga sensorial, técnicas de autorregulación y herramientas para crear un espacio de trabajo óptimo.",
            srv_support_title: "Acompañamiento Laboral / Empleo con Apoyo",
            srv_support_desc: "Nuestro modelo de empleo con apoyo va más allá de la colocación. Proporcionamos mediación continua durante todo el proceso de incorporación y adaptación, garantizando que la comunicación entre el trabajador y la empresa sea fluida y productiva.",
            srv_support_f1: "<strong>Mediación personalizada:</strong> un profesional de referencia actúa como puente entre la persona neurodivergente y su entorno laboral, facilitando la comprensión mutua.",
            srv_support_f2: "<strong>Seguimiento periódico:</strong> sesiones regulares con el trabajador y su equipo para evaluar la adaptación, identificar fricciones y ajustar las dinámicas.",
            srv_support_f3: "<strong>Resolución de conflictos:</strong> intervención temprana ante malentendidos o desajustes, evitando que pequeños problemas se conviertan en bajas o despidos.",
            srv_consulting_title: "Consultoría Empresarial",
            srv_consulting_desc: "Asesoramos a las organizaciones para que la inclusión del talento neurodivergente no sea un gesto simbólico, sino una transformación real que impacte en la cultura, los procesos y los resultados.",
            srv_consulting_f1: "<strong>Auditoría de inclusión:</strong> evaluación del estado actual de la organización en materia de diversidad cognitiva, identificando barreras y oportunidades.",
            srv_consulting_f2: "<strong>Sesiones de sensibilización:</strong> talleres para equipos directivos y mandos intermedios sobre neurodiversidad, sesgos inconscientes y gestión de la diferencia.",
            srv_consulting_f3: "<strong>Adaptación de procesos:</strong> rediseño de procesos de selección, onboarding y evaluación del desempeño para eliminar barreras innecesarias.",
            srv_tiers_title: "Servicios por Tamaño de Empresa",
            srv_tiers_intro: "Cada organización tiene necesidades distintas. Por eso hemos diseñado programas específicos según el tamaño y madurez de la empresa.",
            srv_tier1_title: "Startups (<50 empleados)",
            srv_tier1_name: "<strong>Kit de Diseño de Cultura Inclusiva</strong>",
            srv_tier1_desc: "Intervención ágil de 2-3 semanas para startups que quieren incorporar la inclusión desde el principio. Incluye diagnóstico rápido, guía de buenas prácticas y sesión de sensibilización para el equipo fundador.",
            srv_tier2_title: "Medianas (51-250 empleados)",
            srv_tier2_name: "<strong>Programa de Cohesión y Adaptación Mutua</strong>",
            srv_tier2_desc: "Programa de 3-4 meses que trabaja la cultura organizacional en profundidad. Incluye diagnóstico, formación de mandos intermedios, acompañamiento en incorporaciones y medición de impacto con indicadores de seguridad psicológica y retención.",
            srv_tier3_title: "Grandes (+250 empleados)",
            srv_tier3_name: "<strong>Auditoría Forense de RRHH y Cumplimiento Normativo</strong>",
            srv_tier3_desc: "Revisión exhaustiva del cumplimiento de la LGD (cuota del 2%), la ISO 45003 (riesgos psicosociales) y criterios ESG relacionados con diversidad. Informe con hallazgos, riesgos legales y plan de acción priorizado.",
            srv_cta_title: "¿Necesitas más información?",
            srv_cta_desc: "Contacta con nosotros y te explicaremos cómo podemos ayudar a tu organización o a ti como profesional neurodivergente.",
            srv_cta_btn: "Contáctanos",

            // -- empresas.html --
            page_companies_title: "Para Empresas | Talento Divergente",
            page_companies_heading: "Para Empresas",
            breadcrumb_companies: "Para Empresas",
            emp_why_title: "¿Por qué contratar talento neurodivergente?",
            emp_why_desc1: "No hablamos de responsabilidad social corporativa ni de cumplir cuotas. Hablamos de <strong>ventaja competitiva</strong>. Las personas neurodivergentes aportan formas de pensar que los equipos homogéneos simplemente no tienen: hiperfoco en tareas complejas, detección de patrones que otros pasan por alto, creatividad disruptiva y una honestidad profesional que mejora los procesos.",
            emp_why_desc2: "Empresas como SAP, Microsoft y JP Morgan llevan años demostrándolo con datos: los equipos que incluyen talento neurodivergente son hasta un 30% más productivos en tareas que requieren precisión y pensamiento analítico. La clave está en crear el entorno adecuado, y ahí es donde entramos nosotros.",
            emp_profiles_title: "Perfiles de Talento",
            emp_profiles_intro: "Trabajamos con tres perfiles de talento neurodivergente, cada uno con fortalezas específicas alineadas con sectores clave de la Comunitat Valenciana.",
            emp_process_title: "¿Cómo funciona?",
            emp_process_intro: "Un proceso sencillo en cuatro pasos para que tu empresa acceda al mejor talento neurodivergente con total garantía.",
            emp_tiers_title: "Servicios por Tamaño de Empresa",
            emp_tiers_intro: "Cada organización tiene necesidades distintas. Por eso hemos diseñado programas específicos según el tamaño y madurez de la empresa.",
            emp_cta_btn: "Solicitar información",

            // -- neurodiversidad.html --
            page_neuro_title: "Neurodiversidad | Talento Divergente",
            page_neuro_heading: "Neurodiversidad",
            breadcrumb_neuro: "Neurodiversidad",
            neuro_what_title: "¿Qué es la neurodiversidad?",
            neuro_what_desc1: "La <strong>neurodiversidad</strong> es un concepto acuñado por la socióloga australiana Judy Singer en 1998 que reconoce que las variaciones neurológicas humanas son diferencias naturales, no patologías. Del mismo modo que la biodiversidad fortalece un ecosistema, la diversidad cognitiva fortalece a las organizaciones y a la sociedad.",
            neuro_what_desc2: "Ser neurodivergente significa que tu cerebro funciona de forma diferente a la mayoría estadística. Esto incluye condiciones como el autismo, el TDAH, la dislexia, las altas capacidades intelectuales, la dispraxia, el síndrome de Tourette y otras variaciones neurológicas. Estas diferencias no son defectos: son formas distintas de procesar la información, resolver problemas y percibir el mundo.",
            neuro_what_desc3: "Se estima que entre el <strong>15% y el 20% de la población mundial</strong> es neurodivergente. Esto significa que en cualquier empresa de más de 50 personas, es estadísticamente seguro que ya hay profesionales neurodivergentes en la plantilla, estén o no diagnosticados.",
            neuro_types_title: "Tipos de neurodivergencia",
            neuro_types_intro: "Cada tipo de neurodivergencia tiene características propias y fortalezas específicas que, bien gestionadas, se traducen en ventajas competitivas reales.",
            neuro_strengths_title: "Fortalezas en el entorno laboral",
            neuro_strengths_intro: "Las personas neurodivergentes no solo cumplen, sino que a menudo superan las expectativas en roles alineados con sus fortalezas naturales.",
            neuro_faq_title: "Preguntas frecuentes",

            // -- aviso-legal.html --
            page_legal_title: "Aviso Legal | Talento Divergente",
            page_legal_heading: "Aviso Legal",
            breadcrumb_legal: "Aviso Legal",

            // -- politica-privacidad.html --
            page_privacy_title: "Política de Privacidad | Talento Divergente",
            page_privacy_heading: "Política de Privacidad",
            breadcrumb_privacy: "Política de Privacidad"
        },
        en: {
            // -- Shared / Nav / Footer --
            head_title: "Talento Divergente | Neurodivergent Employment Inclusion",
            nav_start: "Home",
            nav_services: "Services",
            nav_about: "About Us",
            nav_companies: "For Companies",
            nav_neuro: "Neurodiversity",
            nav_cta: "Join Us",
            nav_back_home: "Back to home",
            breadcrumb_home: "Home",
            footer_desc: "Building bridges between neurodivergent talent and companies prepared for the future.",
            footer_links_title: "Links",
            footer_legal_title: "Legal",
            footer_about_us: "About Us",
            footer_legal_notice: "Legal Notice",
            footer_privacy_policy: "Privacy Policy",
            footer_contact_title: "Contact",
            footer_copy: "&copy; 2026 Talento Divergente Foundation. All rights reserved.",

            // -- index.html: Hero --
            hero_title: "Transforming <span>neurodiversity</span> into competitive advantage",
            hero_desc: "We are the bridge between the unique talent of neurodivergent people and innovative companies. We create environments where everyone can shine.",
            hero_btn_discover: "Discover how",
            hero_btn_about: "Learn more",
            stat_people: "People Supported",
            stat_companies: "Partner Companies",
            node_talent: "Talent",
            node_company: "Company",

            // -- index.html: Neurodiversity summary --
            neuro_title: "What is Neurodiversity?",
            neuro_desc: "Neurodiversity is the idea that differences in the human brain are natural variations rather than deficits. It recognizes that every mind processes information uniquely, providing indispensable strengths such as analytical thinking, creativity, and attention to detail.",
            neuro_tag_1: "Unique Perspective",
            neuro_tag_2: "Innovation",
            neuro_tag_3: "Problem Solving",

            // -- index.html: About summary --
            about_title: "Our Mission",
            about_desc: "At the Talento Divergente Foundation, we work to break down the barriers that prevent neurodivergent individuals from accessing employment. We believe in an inclusive labor market where unique abilities are the engine of change.",
            about_stat_1: "Real Inclusion",
            about_stat_2: "Continuous Support",
            about_stat_3: "Social Impact",

            // -- index.html: Services summary --
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

            // -- index.html: Dual target --
            dual_talent_title: "For Talent",
            dual_talent_desc: "We find companies that value your unique way of seeing the world. We prepare and accompany you throughout the process.",
            dual_talent_btn: "Looking for Work",
            dual_company_title: "For Companies",
            dual_company_desc: "Neurodiversity brings focus, attention to detail, and innovation. Power up your team with divergent talent.",
            dual_company_btn: "Hire Talent",

            // -- index.html: Contact --
            contact_title: "Contact",
            contact_subtitle: "Have questions or want to collaborate? We are here to help.",
            contact_email_title: "Email",
            contact_location_title: "Location",
            contact_location_desc: "Moncofa, Castellón<br>Comunitat Valenciana, Spain",
            contact_linkedin_desc: "Follow us on LinkedIn to stay up to date with our news and opportunities.",
            contact_form_name: "Name",
            contact_form_email: "Email",
            contact_form_subject: "Subject",
            contact_form_subject_info: "Request information",
            contact_form_subject_talent: "Looking for work",
            contact_form_subject_collab: "Collaboration proposal",
            contact_form_subject_other: "Other",
            contact_form_message: "Message",
            contact_form_privacy: "I have read and accept the <a href=\"politica-privacidad.html\">Privacy Policy</a>",
            contact_form_submit: "Send message",
            contact_form_sending: "Sending...",
            contact_form_success: "Message sent successfully. We will get back to you soon.",
            contact_form_error: "There was an error. Please try again or email us directly at contacto@fundaciontalentodivergente.org",

            // -- quienes-somos.html --
            page_about_title: "About Us | Talento Divergente",
            page_about_heading: "About Us",
            breadcrumb_about: "About Us",
            about_mission_title: "Our Mission",
            about_mission_text: "The Fundación de la Comunitat Valenciana Talento Divergente was born with a clear purpose: <strong>to position neurodiversity as a competitive business advantage</strong>, overcoming the assistentialist approach that has dominated for decades. We believe that cognitive differences are not deficits, but sources of innovation, precision, and creativity that organizations need to compete in a complex world.",
            about_mission_text_2: "We work at the intersection of neurodivergent talent and the real needs of the business fabric of the Valencian Community, building bridges where there were only barriers before.",
            about_groups_title: "Three Priority Groups",
            about_group1_title: "Autism Level 1",
            about_group1_desc: "Autistic individuals with full professional capabilities who face barriers in selection processes and conventional work environments. We focus on effective employment inclusion: preparation, mediation, and continuous support so that autistic talent occupies the place it deserves.",
            about_group2_title: "High Abilities",
            about_group2_desc: "Professionals with high intellectual abilities who experience misalignment with understimulating work environments, lack of challenges, and conflicts arising from misunderstanding. We work on talent retention, helping companies create environments where these individuals can develop their full potential.",
            about_group3_title: "Adult Women with High Abilities",
            about_group3_desc: "Women with high abilities diagnosed late or undiagnosed, whose strengths have remained invisible due to gender biases in detection. We work on their professional visibility and on breaking down the double barrier they face: gender and unrecognized neurodivergence.",
            about_values_title: "Our Values",
            about_value1_title: "Real Inclusion",
            about_value1_desc: "We don't talk about quotas or empty regulatory compliance. We seek authentic integration where the neurodivergent person adds value and the company recognizes it. Real inclusion is measured in results, not statements of intent.",
            about_value2_title: "Scientific Foundation",
            about_value2_desc: "Our interventions are supported by scientific evidence and collaboration with research centers such as IDOCAL at the Universitat de València. We measure impact with real indicators: psychological safety, retention, and quality of work life.",
            about_value3_title: "Business Focus",
            about_value3_desc: "We speak the language of business. We don't ask for charity: we demonstrate return on investment. Well-managed neurodiversity reduces turnover, improves innovation, and strengthens teams. Our model seeks sustainability through valuable B2B services.",
            about_team_title: "Our Team",
            about_team_text: "The Talento Divergente Foundation is governed by a <strong>Board of Trustees</strong> committed to the mission of transforming the labor market. Our team combines expertise in organizational psychology, business management, neurodiversity, and inclusion policies.",
            about_team_text_2: "We are registered as a foundation of the Valencian Community, headquartered in Moncofa (Castellón), and we operate throughout the entire Valencian Community, with special focus on Valencia, Alicante, and Castellón.",

            // -- servicios.html --
            page_services_title: "Our Services | Talento Divergente",
            page_services_heading: "Our Services",
            breadcrumb_services: "Services",
            services_intro: "At the Talento Divergente Foundation, we offer a comprehensive approach to ensure effective and lasting social and labor inclusion. Our services are aimed at both neurodivergent individuals seeking employment and companies that want to harness the potential of cognitive diversity.",
            srv_training_title: "Specialized Training",
            srv_training_desc: "Training programs designed to develop the competencies that the professional environment demands, adapted to the strengths and needs of each neurodivergent person.",
            srv_training_f1: "<strong>Workplace soft skills:</strong> professional communication, teamwork, time management, and presentation skills adapted to neurodivergent profiles.",
            srv_training_f2: "<strong>Social skills in the work environment:</strong> interpreting team dynamics, managing meetings, communicating with supervisors and colleagues.",
            srv_training_f3: "<strong>Environment management:</strong> strategies for handling sensory overload, self-regulation techniques, and tools for creating an optimal workspace.",
            srv_support_title: "Job Coaching / Supported Employment",
            srv_support_desc: "Our supported employment model goes beyond placement. We provide continuous mediation throughout the onboarding and adaptation process, ensuring that communication between the worker and the company is fluid and productive.",
            srv_support_f1: "<strong>Personalized mediation:</strong> a reference professional acts as a bridge between the neurodivergent person and their work environment, facilitating mutual understanding.",
            srv_support_f2: "<strong>Regular follow-ups:</strong> periodic sessions with the worker and their team to assess adaptation, identify friction points, and adjust dynamics.",
            srv_support_f3: "<strong>Conflict resolution:</strong> early intervention in misunderstandings or misalignments, preventing small problems from becoming absences or dismissals.",
            srv_consulting_title: "Business Consulting",
            srv_consulting_desc: "We advise organizations so that the inclusion of neurodivergent talent is not a symbolic gesture, but a real transformation that impacts culture, processes, and results.",
            srv_consulting_f1: "<strong>Inclusion audit:</strong> assessment of the organization's current state in terms of cognitive diversity, identifying barriers and opportunities.",
            srv_consulting_f2: "<strong>Awareness sessions:</strong> workshops for management teams and middle managers on neurodiversity, unconscious biases, and managing difference.",
            srv_consulting_f3: "<strong>Process adaptation:</strong> redesign of selection processes, onboarding, and performance evaluation to eliminate unnecessary barriers.",
            srv_tiers_title: "Services by Company Size",
            srv_tiers_intro: "Every organization has different needs. That's why we've designed specific programs based on the company's size and maturity.",
            srv_tier1_title: "Startups (<50 employees)",
            srv_tier1_name: "<strong>Inclusive Culture Design Kit</strong>",
            srv_tier1_desc: "Agile 2-3 week intervention for startups that want to incorporate inclusion from the start. Includes rapid assessment, best practices guide, and awareness session for the founding team.",
            srv_tier2_title: "Medium (51-250 employees)",
            srv_tier2_name: "<strong>Cohesion and Mutual Adaptation Program</strong>",
            srv_tier2_desc: "3-4 month program that works on organizational culture in depth. Includes assessment, middle management training, onboarding support, and impact measurement with psychological safety and retention indicators.",
            srv_tier3_title: "Large (+250 employees)",
            srv_tier3_name: "<strong>HR Forensic Audit and Regulatory Compliance</strong>",
            srv_tier3_desc: "Comprehensive review of compliance with the LGD (2% quota), ISO 45003 (psychosocial risks), and ESG criteria related to diversity. Report with findings, legal risks, and prioritized action plan.",
            srv_cta_title: "Need more information?",
            srv_cta_desc: "Contact us and we'll explain how we can help your organization or you as a neurodivergent professional.",
            srv_cta_btn: "Contact us",

            // -- empresas.html --
            page_companies_title: "For Companies | Talento Divergente",
            page_companies_heading: "For Companies",
            breadcrumb_companies: "For Companies",
            emp_why_title: "Why hire neurodivergent talent?",
            emp_why_desc1: "We're not talking about corporate social responsibility or meeting quotas. We're talking about <strong>competitive advantage</strong>. Neurodivergent people bring ways of thinking that homogeneous teams simply don't have: hyperfocus on complex tasks, pattern detection that others miss, disruptive creativity, and professional honesty that improves processes.",
            emp_why_desc2: "Companies like SAP, Microsoft, and JP Morgan have been demonstrating this with data for years: teams that include neurodivergent talent are up to 30% more productive in tasks requiring precision and analytical thinking. The key is creating the right environment, and that's where we come in.",
            emp_profiles_title: "Talent Profiles",
            emp_profiles_intro: "We work with three neurodivergent talent profiles, each with specific strengths aligned with key sectors of the Valencian Community.",
            emp_process_title: "How does it work?",
            emp_process_intro: "A simple four-step process for your company to access the best neurodivergent talent with full guarantees.",
            emp_tiers_title: "Services by Company Size",
            emp_tiers_intro: "Every organization has different needs. That's why we've designed specific programs based on the company's size and maturity.",
            emp_cta_btn: "Request information",

            // -- neurodiversidad.html --
            page_neuro_title: "Neurodiversity | Talento Divergente",
            page_neuro_heading: "Neurodiversity",
            breadcrumb_neuro: "Neurodiversity",
            neuro_what_title: "What is neurodiversity?",
            neuro_what_desc1: "<strong>Neurodiversity</strong> is a concept coined by Australian sociologist Judy Singer in 1998 that recognizes human neurological variations as natural differences, not pathologies. Just as biodiversity strengthens an ecosystem, cognitive diversity strengthens organizations and society.",
            neuro_what_desc2: "Being neurodivergent means your brain works differently from the statistical majority. This includes conditions such as autism, ADHD, dyslexia, high intellectual abilities, dyspraxia, Tourette syndrome, and other neurological variations. These differences are not defects: they are distinct ways of processing information, solving problems, and perceiving the world.",
            neuro_what_desc3: "It is estimated that between <strong>15% and 20% of the world's population</strong> is neurodivergent. This means that in any company with more than 50 people, it is statistically certain that there are already neurodivergent professionals on staff, whether diagnosed or not.",
            neuro_types_title: "Types of neurodivergence",
            neuro_types_intro: "Each type of neurodivergence has its own characteristics and specific strengths that, well managed, translate into real competitive advantages.",
            neuro_strengths_title: "Strengths in the workplace",
            neuro_strengths_intro: "Neurodivergent people don't just meet expectations — they often exceed them in roles aligned with their natural strengths.",
            neuro_faq_title: "Frequently asked questions",

            // -- aviso-legal.html --
            page_legal_title: "Legal Notice | Talento Divergente",
            page_legal_heading: "Legal Notice",
            breadcrumb_legal: "Legal Notice",

            // -- politica-privacidad.html --
            page_privacy_title: "Privacy Policy | Talento Divergente",
            page_privacy_heading: "Privacy Policy",
            breadcrumb_privacy: "Privacy Policy"
        }
    };

    // ========================================
    // LANGUAGE SYSTEM
    // ========================================
    var LANG_KEY = 'td_language';

    function getStoredLang() {
        try {
            return localStorage.getItem(LANG_KEY);
        } catch (e) {
            return null;
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch (e) {}
    }

    function detectLang() {
        // Priority: URL param > localStorage > default (es)
        var params = new URLSearchParams(window.location.search);
        if (params.get('lang') === 'en') return 'en';
        if (params.get('lang') === 'es') return 'es';
        var stored = getStoredLang();
        if (stored === 'en' || stored === 'es') return stored;
        return 'es';
    }

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update lang attribute on html
        document.documentElement.lang = lang === 'en' ? 'en' : 'es';

        // Update active state in all switchers
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update form placeholders if form exists
        updateFormLang(lang);

        storeLang(lang);
    }

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Apply stored language on load
    var currentLang = detectLang();
    if (currentLang !== 'es') {
        setLanguage(currentLang);
    } else {
        // Still update buttons for es
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            if (btn.getAttribute('data-lang') === 'es') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var submitBtn = contactForm.querySelector('button[type="submit"]');
            var statusEl = document.getElementById('form-status');
            var lang = getStoredLang() || 'es';

            // Disable button
            submitBtn.disabled = true;
            submitBtn.textContent = translations[lang].contact_form_sending || 'Enviando...';

            // Collect form data
            var name = contactForm.querySelector('[name="name"]').value.trim();
            var email = contactForm.querySelector('[name="email"]').value.trim();
            var subject = contactForm.querySelector('[name="subject"]').value;
            var message = contactForm.querySelector('[name="message"]').value.trim();

            // Google Apps Script endpoint
            var GAS_URL = 'https://script.google.com/macros/s/AKfycbwZyaxQczP98rRNHhl0seDYAHKBPnDoa_Sn8k0ggq0x4ZzQnd0h_FhCv8TME2J-kXdr/exec';

            if (GAS_URL) {
                // Google Apps Script submission (no-cors to avoid CORS/redirect issues)
                fetch(GAS_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    })
                }).then(function() {
                    // With no-cors, response is opaque but data was sent
                    statusEl.className = 'form-status success';
                    statusEl.textContent = translations[lang].contact_form_success;
                    contactForm.reset();
                }).catch(function() {
                    statusEl.className = 'form-status error';
                    statusEl.innerHTML = translations[lang].contact_form_error;
                }).finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = translations[lang].contact_form_submit;
                });
            } else {
                // Mailto fallback
                var mailSubject = encodeURIComponent(subject + ' - ' + name);
                var mailBody = encodeURIComponent(
                    'Nombre: ' + name + '\n' +
                    'Email: ' + email + '\n' +
                    'Asunto: ' + subject + '\n\n' +
                    message
                );
                window.location.href = 'mailto:contacto@fundaciontalentodivergente.org?subject=' + mailSubject + '&body=' + mailBody;

                statusEl.className = 'form-status success';
                statusEl.textContent = lang === 'en'
                    ? 'Your email client should open now. If not, please email us at contacto@fundaciontalentodivergente.org'
                    : 'Tu cliente de correo debería abrirse ahora. Si no, escríbenos a contacto@fundaciontalentodivergente.org';

                submitBtn.disabled = false;
                submitBtn.textContent = translations[lang].contact_form_submit;
            }
        });
    }

    function updateFormLang(lang) {
        var form = document.getElementById('contact-form');
        if (!form) return;
        var t = translations[lang];
        var nameInput = form.querySelector('[name="name"]');
        var emailInput = form.querySelector('[name="email"]');
        var messageInput = form.querySelector('[name="message"]');
        if (nameInput) nameInput.placeholder = t.contact_form_name;
        if (emailInput) emailInput.placeholder = t.contact_form_email;
        if (messageInput) messageInput.placeholder = t.contact_form_message;

        // Update select options
        var select = form.querySelector('[name="subject"]');
        if (select) {
            var options = select.querySelectorAll('option');
            options.forEach(function(opt) {
                var key = opt.getAttribute('data-i18n');
                if (key && t[key]) opt.textContent = t[key];
            });
        }

        // Update submit button
        var btn = form.querySelector('button[type="submit"]');
        if (btn && !btn.disabled) btn.textContent = t.contact_form_submit;

        // Update privacy label
        var privacyLabel = form.querySelector('.privacy-label');
        if (privacyLabel) privacyLabel.innerHTML = t.contact_form_privacy;
    }

    // ========================================
    // MOBILE MENU
    // ========================================
    var mobileToggle = document.getElementById('mobile-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileLinks = document.querySelectorAll('.mobile-links a');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    var cards = document.querySelectorAll('.service-card, .glass-card, .split-content, .stat-card, .profile-card, .step-item, .service-detail-card');
    cards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    var style = document.createElement('style');
    style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
});
