// Add js class for CSS fallback (no-JS / reduced-motion guard)
document.documentElement.classList.add('js');

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
            hero_desc: "Transformamos la neurodivergencia en la ventaja competitiva de tu empresa. Conectamos mentes extraordinarias con equipos que buscan resultados innovadores.",
            hero_btn_discover: "Descubre cómo",
            hero_btn_about: "Conócenos",
            node_talent: "Talento",
            node_company: "Empresa",

            // -- index.html: Neurodiversity summary --
            neuro_title: "¿Qué es la neurodiversidad?",
            neuro_desc: "Diferentes por naturaleza, extraordinarios por diseño. La neurodiversidad no es una variación; es la ventaja de procesar el mundo con una mirada única que aporta el detalle y la innovación que el futuro exige.",
            neuro_tag_1: "Perspectiva Única",
            neuro_tag_2: "Innovación",
            neuro_tag_3: "Resolución de problemas",

            // -- index.html: About summary --
            about_title: "Nuestra Misión",
            about_desc: "Construir el futuro del trabajo hoy. Conectamos la brillantez de mentes diversas con empresas líderes, asegurando que cada capacidad única encuentre su lugar para brillar y transformar la sociedad.",
            about_stat_1: "Alianzas de Valor",
            about_stat_2: "Crecimiento Acompañado",
            about_stat_3: "Legado Humano",

            // -- index.html: Services summary --
            services_title: "Nuestros Pilares de Acción",
            services_subtitle: "Transformamos atmósferas de fricción en equipos de alto rendimiento mediante el ajuste estratégico de roles y la resolución de conflictos estructurales, creando una cultura de pertenencia.",
            s1_title: "Evolución Organizacional y Estrategia",
            s1_desc: "Convierte la diversidad en tu mayor ventaja competitiva. Rediseñamos tu cultura para que el talento neurodivergente impulse la innovación real.",
            s1_f1: "Diagnóstico Estratégico Express",
            s1_f2: "Diseño de Cultura Inclusiva",
            s1_f3: "Optimización de Equipos",
            s2_title: "Impulso al Talento de Alto Rendimiento",
            s2_desc: "El puente definitivo entre tu potencial único y el éxito profesional. Te acompañamos en un proceso de adaptación mutua.",
            s2_f1: "Entrenamiento en Soft Skills",
            s2_f2: "Preparación Estratégica",
            s2_f3: "Mentoría Individualizada",
            s3_title: "Capacitación Especializada y Empoderamiento",
            s3_desc: "Domina los estándares de la industria con formación práctica y experta diseñada para perfiles neurodivergentes.",
            s3_f1: "Programas de Inmersión Total",
            s3_f2: "Aprendizaje Basado en Producción",
            s3_f3: "Auditoría de Perfil Profesional",

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
            contact_form_privacy: "He leído y acepto la <a href=\"/politica-privacidad\">Política de Privacidad</a>",
            contact_form_submit: "Enviar mensaje",
            contact_form_sending: "Enviando...",
            contact_form_success: "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
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
            page_services_title: "Soluciones que Transforman el Talento en Impacto | Talento Divergente",
            page_services_heading: "Soluciones que Transforman el Talento en Impacto",
            breadcrumb_services: "Servicios",
            services_intro: "No solo hacemos inclusión; activamos el máximo potencial de tu organización. En la Fundación Talento Divergente, eliminamos la fricción entre el talento único y los entornos de alta exigencia, convirtiendo la diversidad cognitiva en tu mayor activo estratégico.",
            srv_training_title: "Diagnóstico y Estrategia Empresarial",
            srv_training_desc: "De entornos en conflicto a atmósferas de alto rendimiento. Dejamos atrás la \"inclusión simbólica\" para realizar una transformación profunda en la arquitectura de tu empresa. Identificamos las causas reales de la baja productividad y el burnout, rediseñando una cultura donde cada empleado se siente parte de la misión y rinde con máxima eficiencia.",
            srv_training_f1: "<strong>Diagnóstico Estratégico Express:</strong> Evaluación ágil de 2 semanas para detectar riesgos, barreras ocultas y oportunidades de mejora inmediata en tu gestión de talento.",
            srv_training_f2: "<strong>Resolución de Conflictos Estructurales:</strong> Eliminamos malentendidos y fallos de comunicación, convirtiendo equipos bloqueados en sistemas de colaboración fluida y asertiva.",
            srv_training_f3: "<strong>Adaptación de Procesos 360°:</strong> Rediseñamos el onboarding y la evaluación del desempeño para que el sistema trabaje a favor del talento, no en su contra.",
            srv_support_title: "Mentoría de Alto Rendimiento",
            srv_support_desc: "El puente definitivo hacia una carrera competitiva y sostenible. Este no es un programa académico tradicional; es un entrenamiento de estándares profesionales diseñado para que tu talento artístico y técnico se traduzca en una empleabilidad real. Te preparamos para destacar en industrias de alta demanda.",
            srv_support_f1: "<strong>Auditoría de Portfolio Estratégico:</strong> Elevamos la calidad de tu trabajo actual para proyectar un perfil profesional sólido que atraiga a los mejores estudios.",
            srv_support_f2: "<strong>Entrenamiento en Soft Skills Técnicas:</strong> Aprende a gestionar el feedback (retakes) de forma lógica y a comunicar tus procesos con claridad a supervisores y equipos.",
            srv_support_f3: "<strong>Estrategia de Mercado Personalizada:</strong> Optimizamos tu presencia en LinkedIn y plataformas especializadas, enseñándote a aplicar con éxito a vacantes nacionales e internacionales.",
            srv_consulting_title: "Programa de Adaptación Mutua (PAM)",
            srv_consulting_desc: "Garantía de integración real: donde la persona y el entorno encajan. La mayoría de los fracasos laborales no se deben a la falta de capacidad, sino a desajustes en el sistema. Nuestro programa interviene de forma simultánea en el individuo y en la organización para asegurar una relación laboral duradera y productiva.",
            srv_consulting_f1: "<strong>Mediación Conductual Activa:</strong> Actuamos como puente para traducir percepciones en datos accionables, facilitando la comprensión mutua entre el trabajador y su equipo.",
            srv_consulting_f2: "<strong>Entrenamiento en Comunicación Adaptada:</strong> Implementamos metodologías para que el liderazgo y la gestión de equipos fluyan sin sesgos ni fricciones.",
            srv_consulting_f3: "<strong>Seguimiento y Prevención de Recaídas:</strong> Consolidamos los cambios mediante sesiones de refuerzo, asegurando que el éxito inicial se convierta en una cultura de trabajo sostenible.",
            srv_tiers_title: "Soluciones a Medida de tu Crecimiento",
            srv_tiers_intro: "Adaptamos nuestra intervención al ADN y madurez de tu organización para maximizar el retorno de la inversión.",
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


            // -- aviso-legal.html (content) --
            legal_s1_title: "1. Datos identificativos",
            legal_s1_intro: "En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos:",
            legal_s1_list: "<li><strong>Denominación social:</strong> Fundación de la Comunitat Valenciana Talento Divergente</li><li><strong>CIF:</strong> G27561760</li><li><strong>Domicilio social:</strong> Calle Torremolinos 35, bajo C, CP 12593, Moncofa, Castellón</li><li><strong>Correo electrónico:</strong> contacto@fundaciontalentodivergente.org</li><li><strong>Sitio web:</strong> www.fundaciontalentodivergente.org</li>",
            legal_s2_title: "2. Registro",
            legal_s2_text: "La Fundación de la Comunitat Valenciana Talento Divergente se encuentra inscrita en el Registro de Fundaciones de la Comunitat Valenciana, adscrito a la Conselleria competente de la Generalitat Valenciana, y está sujeta al Protectorado de Fundaciones de la Comunitat Valenciana.",
            legal_s3_title: "3. Objeto del sitio web",
            legal_s3_text1: "El presente sitio web tiene como finalidad informar sobre la misión, actividades, servicios y proyectos de la Fundación de la Comunitat Valenciana Talento Divergente. La Fundación tiene como objeto posicionar la neurodiversidad como ventaja competitiva empresarial, facilitar la inclusión sociolaboral de personas neurodivergentes y asesorar a empresas en materia de diversidad cognitiva.",
            legal_s3_text2: "La información proporcionada en este sitio web es de carácter general y no constituye, en modo alguno, asesoramiento profesional de ningún tipo.",
            legal_s4_title: "4. Propiedad intelectual e industrial",
            legal_s4_text1: "Todos los contenidos de este sitio web, incluyendo, a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, logotipos, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de la Fundación de la Comunitat Valenciana Talento Divergente o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.",
            legal_s4_text2: "Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de este sitio web, ni aun citando las fuentes, salvo consentimiento previo, expreso y por escrito de la Fundación.",
            legal_s5_title: "5. Responsabilidad",
            legal_s5_text1: "La Fundación no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles daños que puedan causarse al sistema informático del usuario (hardware y software), los ficheros o documentos almacenados en el mismo, como consecuencia de:",
            legal_s5_list: "<li>La presencia de un virus en el ordenador del usuario que sea utilizado para la conexión a los servicios y contenidos del sitio web.</li><li>Un mal funcionamiento del navegador.</li><li>El uso de versiones no actualizadas del navegador.</li>",
            legal_s5_text2: "La Fundación se reserva el derecho de retirar todos aquellos contenidos que pudieran contravenir la legislación vigente, la moral o el orden público, así como de suspender temporal o definitivamente la prestación de los servicios ofrecidos a través del sitio web.",
            legal_s6_title: "6. Enlaces externos",
            legal_s6_text: "Este sitio web puede contener enlaces a sitios web de terceros. La Fundación no asume ninguna responsabilidad sobre el contenido, la disponibilidad o la política de privacidad de dichos sitios web externos. La inclusión de cualquier enlace no implica la aprobación o respaldo por parte de la Fundación del sitio web enlazado ni de sus contenidos.",
            legal_s7_title: "7. Legislación aplicable y jurisdicción",
            legal_s7_text: "Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, la Fundación y el usuario se someten expresamente a la jurisdicción de los Juzgados y Tribunales de Castellón, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.",
            legal_update: "<em>Última actualización: marzo de 2026.</em>",

            // -- politica-privacidad.html (content) --
            privacy_s1_title: "1. Responsable del tratamiento",
            privacy_s1_intro: "De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de que los datos personales que pudiera facilitar serán tratados por:",
            privacy_s1_list: "<li><strong>Responsable:</strong> Fundación de la Comunitat Valenciana Talento Divergente</li><li><strong>Dirección:</strong> Calle Torremolinos 35, bajo C, CP 12593, Moncofa, Castellón</li><li><strong>Correo electrónico:</strong> contacto@fundaciontalentodivergente.org</li>",
            privacy_s2_title: "2. Datos personales recogidos",
            privacy_s2_text: "Este sitio web dispone de un formulario de contacto. Los datos que tratamos son los que el usuario nos proporciona voluntariamente al enviarnos un mensaje: nombre, dirección de correo electrónico, asunto y cualquier otra información que decida incluir en su comunicación.",
            privacy_s3_title: "3. Finalidad del tratamiento",
            privacy_s3_intro: "Los datos personales recibidos se tratarán con las siguientes finalidades:",
            privacy_s3_list: "<li>Atender y responder a las consultas, solicitudes o peticiones de información formuladas por el usuario.</li><li>Gestionar la relación con personas y organizaciones interesadas en los servicios de la Fundación.</li><li>Enviar comunicaciones relacionadas con la actividad de la Fundación, siempre que el usuario haya prestado su consentimiento expreso.</li>",
            privacy_s4_title: "4. Legitimación",
            privacy_s4_intro: "La base jurídica para el tratamiento de los datos personales es:",
            privacy_s4_list: "<li><strong>Consentimiento del interesado</strong> (art. 6.1.a RGPD): al enviarnos un mensaje a través del formulario de contacto, el usuario presta su consentimiento para el tratamiento de los datos incluidos en su comunicación.</li><li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): para la gestión de relaciones profesionales y la atención de consultas relacionadas con los fines fundacionales.</li>",
            privacy_s5_title: "5. Derechos del interesado",
            privacy_s5_intro: "En cualquier momento, el usuario puede ejercer los siguientes derechos reconocidos por el RGPD y la LOPDGDD:",
            privacy_s5_list: "<li><strong>Derecho de acceso:</strong> conocer si se están tratando sus datos personales y, en tal caso, obtener información sobre los mismos.</li><li><strong>Derecho de rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li><li><strong>Derecho de supresión (cancelación):</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos.</li><li><strong>Derecho de oposición:</strong> oponerse al tratamiento de sus datos personales en determinadas circunstancias.</li><li><strong>Derecho a la portabilidad:</strong> recibir los datos personales que le incumban en un formato estructurado, de uso común y lectura mecánica.</li><li><strong>Derecho a la limitación del tratamiento:</strong> solicitar la suspensión del tratamiento de sus datos en los supuestos legalmente previstos.</li>",
            privacy_s5_exercise: "Para ejercer cualquiera de estos derechos, el usuario puede enviar un correo electrónico a <a href=\"mailto:contacto@fundaciontalentodivergente.org\">contacto@fundaciontalentodivergente.org</a> indicando el derecho que desea ejercer y acompañando, en su caso, copia de su documento de identidad.",
            privacy_s5_aepd: "Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">www.aepd.es</a>) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.",
            privacy_s6_title: "6. Cookies",
            privacy_s6_intro: "Este sitio web utiliza los siguientes tipos de cookies:",
            privacy_s6_list: "<li><strong>Cookies técnicas (estrictamente necesarias):</strong> permiten el correcto funcionamiento de la página. No recogen datos personales identificables y se eliminan al cerrar el navegador.</li><li><strong>Cookies analíticas (Google Analytics):</strong> recogen información <strong>seudonimizada y agregada</strong> sobre el uso del sitio web (páginas visitadas, duración de la visita, origen del tráfico). Estas cookies solo se activan si el usuario acepta expresamente a través del banner de consentimiento. El proveedor de este servicio es Google LLC. Puede consultar su política de privacidad en <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">policies.google.com/privacy</a>. El tratamiento lo realiza Google LLC, lo que puede implicar transferencia de datos a Estados Unidos (ver apartado 8).</li>",
            privacy_s6_text: "El usuario puede aceptar o rechazar las cookies analíticas a través del banner que se muestra en su primera visita. La preferencia se almacena en el navegador (localStorage) y puede modificarse en cualquier momento borrando los datos del sitio en la configuración del navegador. También puede revocar su consentimiento en cualquier momento mediante el botón «Configurar cookies» disponible en el pie de página.",
            privacy_s7_title: "7. Periodo de conservación",
            privacy_s7_intro: "Los datos personales proporcionados se conservarán durante el tiempo necesario para atender la solicitud o consulta del usuario y, en su caso, durante los plazos legalmente establecidos. Una vez cumplida la finalidad del tratamiento, los datos serán suprimidos de forma segura o, en su caso, bloqueados conforme a la normativa aplicable.",
            privacy_s7_detail: "En particular:",
            privacy_s7_list: "<li>Datos de consultas por correo electrónico o formulario: se conservarán durante el tiempo necesario para resolver la consulta y un máximo de 12 meses adicionales.</li><li>Datos de relaciones profesionales: durante la vigencia de la relación y los plazos de prescripción legal aplicables.</li>",
            privacy_s8_title: "8. Destinatarios de los datos",
            privacy_s8_text: "Para la prestación de determinados servicios, la Fundación utiliza proveedores tecnológicos que actúan como encargados del tratamiento: <strong>Google LLC</strong> (alojamiento del formulario de contacto mediante Google Apps Script y analítica web mediante Google Analytics). Estos proveedores pueden tratar los datos en servidores ubicados en <strong>Estados Unidos</strong>, por lo que se producen transferencias internacionales de datos, amparadas en el marco de adecuación <strong>EU-US Data Privacy Framework</strong> y/o en las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea. Salvo esta utilización de encargados del tratamiento y las obligaciones legales exigibles, los datos no serán cedidos a terceros.",
            privacy_s9_title: "9. Seguridad",
            privacy_s9_text: "La Fundación ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.",
            privacy_s10_title: "10. Contacto",
            privacy_s10_intro: "Para cualquier cuestión relacionada con el tratamiento de sus datos personales o el ejercicio de sus derechos, puede contactar con nosotros en:",
            privacy_s10_list: "<li><strong>Email:</strong> <a href=\"mailto:contacto@fundaciontalentodivergente.org\">contacto@fundaciontalentodivergente.org</a></li><li><strong>Dirección postal:</strong> Fundación de la Comunitat Valenciana Talento Divergente, Calle Torremolinos 35, bajo C, CP 12593, Moncofa, Castellón</li>",
            privacy_update: "<em>Última actualización: junio de 2026.</em>",
            page_legal_title: "Aviso Legal | Talento Divergente",
            page_legal_heading: "Aviso Legal",
            breadcrumb_legal: "Aviso Legal",

            // -- politica-privacidad.html --
            page_privacy_title: "Política de Privacidad | Talento Divergente",
            page_privacy_heading: "Política de Privacidad",
            breadcrumb_privacy: "Política de Privacidad",

            // -- Global: skip link + form privacy notice --
            skip_link: "Saltar al contenido",
            form_privacy_notice: "Responsable: Fundación de la Comunitat Valenciana Talento Divergente. Finalidad: atender tu consulta. Legitimación: tu consentimiento. No se ceden datos salvo obligación legal; se usan encargados (Google) con transferencia a EE.UU. amparada en el EU-US Data Privacy Framework. Derechos: acceso, rectificación, supresión y otros, escribiendo a contacto@fundaciontalentodivergente.org. Más información en la Política de Privacidad.",

            // -- empresas.html: business-case stat cards --
            emp_stat1_title: "Innovación",
            emp_stat1_desc: "El pensamiento divergente genera soluciones que los equipos homogéneos no alcanzan. Nuevas perspectivas para problemas complejos.",
            emp_stat2_title: "Atención al detalle",
            emp_stat2_desc: "Capacidad excepcional para detectar errores, patrones y anomalías en datos, código y procesos de calidad.",
            emp_stat3_title: "Pensamiento analítico",
            emp_stat3_desc: "Razonamiento lógico y sistemático que aporta rigor en la toma de decisiones y la resolución de problemas técnicos.",

            // -- empresas.html: profile cards --
            emp_prof1_title: "Perfil Creativo",
            emp_prof1_desc: "Profesionales con talento excepcional en <strong>Animación 3D, VFX, UX/UI</strong> y diseño digital. Su capacidad para visualizar soluciones complejas y su atención obsesiva al detalle los convierte en activos de alto valor para la industria creativa.",
            emp_prof1_sector: "<em>Sector objetivo: industria de animación, gaming y VFX del eje Valencia-Alicante.</em>",
            emp_prof1_role1: "Animación 3D",
            emp_prof1_role2: "VFX",
            emp_prof1_role3: "UX/UI",
            emp_prof1_role4: "Diseño digital",
            emp_prof2_title: "Perfil Analítico",
            emp_prof2_desc: "Especialistas en <strong>ciberseguridad, QA (testing) y análisis de datos</strong>. Su pensamiento sistemático, capacidad para detectar anomalías y resistencia a la fatiga cognitiva en tareas repetitivas los hacen ideales para roles donde la precisión es crítica.",
            emp_prof2_sector: "<em>Sector objetivo: ecosistema startup y tech del hub de Valencia.</em>",
            emp_prof2_role1: "Ciberseguridad",
            emp_prof2_role2: "QA Testing",
            emp_prof2_role3: "Análisis de datos",
            emp_prof3_title: "Perfil Estabilizador",
            emp_prof3_desc: "Profesionales con fortaleza en <strong>control de calidad, logística y procesos</strong>. Su consistencia, fiabilidad y capacidad para mantener estándares elevados los convierten en pilares fundamentales de las operaciones industriales.",
            emp_prof3_sector: "<em>Sector objetivo: clúster cerámico, logístico e industrial de Castellón y la Plana Baixa.</em>",
            emp_prof3_role1: "Control de calidad",
            emp_prof3_role2: "Logística",
            emp_prof3_role3: "Procesos industriales",

            // -- empresas.html: process steps --
            emp_step1_title: "Contacto inicial",
            emp_step1_desc: "Nos cuentas qué necesitas: qué perfil buscas, qué retos tiene tu equipo y qué nivel de madurez tiene tu organización en materia de inclusión. Sin compromiso.",
            emp_step2_title: "Análisis de necesidades",
            emp_step2_desc: "Evaluamos tu entorno de trabajo, cultura de equipo y requisitos del puesto. Identificamos ajustes necesarios para garantizar una incorporación exitosa.",
            emp_step3_title: "Matching talento-empresa",
            emp_step3_desc: "Seleccionamos candidatos cuyo perfil, fortalezas y estilo de trabajo encajan con tu organización. No se trata solo de habilidades técnicas, sino de compatibilidad real.",
            emp_step4_title: "Acompañamiento y seguimiento",
            emp_step4_desc: "Una vez incorporada la persona, proporcionamos mediación y seguimiento continuo durante los primeros meses. Resolvemos fricciones antes de que se conviertan en problemas.",

            // -- empresas.html: service tiers --
            emp_tier1_label: "Startups &lt;50 empleados",
            emp_tier1_title: "Kit de Diseño de Cultura Inclusiva",
            emp_tier1_desc: "Intervención ágil de <strong>2-3 semanas</strong> para startups que quieren incorporar la inclusión desde el principio. Incluye diagnóstico rápido, guía de buenas prácticas y sesión de sensibilización para el equipo fundador.",
            emp_tier2_label: "Medianas 51-250 empleados",
            emp_tier2_title: "Programa de Cohesión y Adaptación Mutua",
            emp_tier2_desc: "Programa de <strong>3-4 meses</strong> que trabaja la cultura organizacional en profundidad. Incluye diagnóstico, formación de mandos intermedios, acompañamiento en incorporaciones y medición de impacto con indicadores de seguridad psicológica y retención.",
            emp_tier3_label: "Grandes +250 empleados",
            emp_tier3_title: "Auditoría Forense de RRHH y Cumplimiento Normativo",
            emp_tier3_desc: "Revisión exhaustiva del cumplimiento de la <strong>LGD</strong> (cuota del 2%), la <strong>ISO 45003</strong> (riesgos psicosociales) y criterios <strong>ESG</strong> relacionados con diversidad. Informe con hallazgos, riesgos legales y plan de acción priorizado.",

            // -- empresas.html: page CTA --
            emp_cta_title: "Potencia tu equipo con talento divergente",
            emp_cta_desc: "Cuéntanos qué necesita tu empresa. Te propondremos un plan a medida sin compromiso.",

            // -- neurodiversidad.html: type stat cards --
            neuro_type1_title: "Autismo (TEA)",
            neuro_type1_desc: "Afecta a 1 de cada 100 personas. Se caracteriza por un pensamiento sistemático, atención excepcional al detalle, honestidad directa y capacidad de hiperfoco en áreas de interés.",
            neuro_type2_title: "TDAH",
            neuro_type2_desc: "Presente en un 5-7% de la población. Aporta creatividad, pensamiento rápido, capacidad para trabajar bajo presión, energía y habilidad para conectar ideas aparentemente inconexas.",
            neuro_type3_title: "Dislexia",
            neuro_type3_desc: "Afecta al 10% de la población. Las personas disléxicas destacan por su pensamiento espacial y visual, creatividad, capacidad narrativa y visión global de los problemas.",
            neuro_type4_title: "Altas Capacidades",
            neuro_type4_desc: "Presente en un 2-5% de la población. Se caracterizan por un aprendizaje rápido, pensamiento crítico, alta sensibilidad, capacidad de abstracción y visión estratégica.",

            // -- neurodiversidad.html: strengths service cards --
            neuro_str1_title: "Autismo",
            neuro_str1_li1: "Detección de errores y patrones",
            neuro_str1_li2: "Consistencia y fiabilidad",
            neuro_str1_li3: "Análisis sistemático de datos",
            neuro_str1_li4: "Concentración profunda sostenida",
            neuro_str1_li5: "Comunicación honesta y directa",
            neuro_str2_title: "TDAH",
            neuro_str2_li1: "Creatividad e ideación rápida",
            neuro_str2_li2: "Capacidad multitarea en entornos dinámicos",
            neuro_str2_li3: "Pensamiento lateral e innovador",
            neuro_str2_li4: "Alto rendimiento bajo presión",
            neuro_str2_li5: "Hiperfoco en proyectos motivantes",
            neuro_str3_title: "Altas Capacidades",
            neuro_str3_li1: "Aprendizaje acelerado",
            neuro_str3_li2: "Visión estratégica y pensamiento crítico",
            neuro_str3_li3: "Conexión de ideas complejas",
            neuro_str3_li4: "Liderazgo intelectual",
            neuro_str3_li5: "Resolución creativa de problemas",

            // -- neurodiversidad.html: FAQ --
            neuro_faq1_q: "¿Las personas neurodivergentes necesitan adaptaciones especiales en el trabajo?",
            neuro_faq1_a: "No siempre. Muchas veces se trata de ajustes sencillos y de bajo coste: reducir estímulos sensoriales innecesarios, ofrecer instrucciones claras por escrito, permitir auriculares con cancelación de ruido o flexibilizar horarios. Estos ajustes, además, suelen beneficiar a todo el equipo, no solo a la persona neurodivergente.",
            neuro_faq2_q: "¿Contratar talento neurodivergente es solo una cuestión de RSC?",
            neuro_faq2_a: "No. Es una decisión empresarial basada en datos. Empresas como SAP, Microsoft, JP Morgan y EY han demostrado que los equipos neurodiversos son más productivos, más innovadores y cometen menos errores en tareas que requieren precisión. La neurodiversidad bien gestionada genera retorno de inversión medible.",
            neuro_faq3_q: "¿Cómo afecta la neurodiversidad a la dinámica de equipo?",
            neuro_faq3_a: "Un equipo cognitivamente diverso analiza los problemas desde múltiples perspectivas, lo que reduce el pensamiento grupal y mejora la toma de decisiones. La clave está en la gestión: con la mediación adecuada, las diferencias se convierten en complementariedad. Sin ella, pueden generar fricciones. Por eso ofrecemos acompañamiento continuo.",
            neuro_faq4_q: "¿Qué obligaciones legales tienen las empresas respecto a la neurodiversidad?",
            neuro_faq4_a: "En España, la Ley General de Discapacidad (LGD) establece una cuota del 2% para empresas de más de 50 trabajadores. Además, la ISO 45003 regula los riesgos psicosociales y los criterios ESG cada vez valoran más la diversidad e inclusión. No cumplir puede suponer sanciones, pero más allá de la obligación legal, gestionar bien la neurodiversidad es una ventaja competitiva."
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
            hero_desc: "We transform neurodivergence into your company's competitive advantage. We connect extraordinary minds with teams seeking innovative results.",
            hero_btn_discover: "Discover how",
            hero_btn_about: "Learn more",
            node_talent: "Talent",
            node_company: "Company",

            // -- index.html: Neurodiversity summary --
            neuro_title: "What is Neurodiversity?",
            neuro_desc: "Different by nature, extraordinary by design. Neurodiversity is not a variation; it is the advantage of processing the world with a unique perspective that delivers the detail and innovation the future demands.",
            neuro_tag_1: "Unique Perspective",
            neuro_tag_2: "Innovation",
            neuro_tag_3: "Problem Solving",

            // -- index.html: About summary --
            about_title: "Our Mission",
            about_desc: "Building the future of work today. We connect the brilliance of diverse minds with leading companies, ensuring every unique capability finds its place to shine and transform society.",
            about_stat_1: "Valuable Alliances",
            about_stat_2: "Supported Growth",
            about_stat_3: "Human Legacy",

            // -- index.html: Services summary --
            services_title: "Our Pillars of Action",
            services_subtitle: "We transform friction-filled atmospheres into high-performing teams through strategic role adjustment and structural conflict resolution, creating a culture of belonging.",
            s1_title: "Organizational Evolution and Strategy",
            s1_desc: "Turn diversity into your greatest competitive advantage. We redesign your culture so neurodivergent talent drives real innovation.",
            s1_f1: "Express Strategic Assessment",
            s1_f2: "Inclusive Culture Design",
            s1_f3: "Team Optimization",
            s2_title: "High-Performance Talent Development",
            s2_desc: "The definitive bridge between your unique potential and professional success. We accompany you through a mutual adaptation process.",
            s2_f1: "Soft Skills Training",
            s2_f2: "Strategic Preparation",
            s2_f3: "Individualized Mentoring",
            s3_title: "Specialized Training and Empowerment",
            s3_desc: "Master industry standards with practical, expert-led training designed for neurodivergent profiles.",
            s3_f1: "Total Immersion Programs",
            s3_f2: "Production-Based Learning",
            s3_f3: "Professional Profile Audit",

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
            contact_form_privacy: "I have read and accept the <a href=\"/politica-privacidad\">Privacy Policy</a>",
            contact_form_submit: "Send message",
            contact_form_sending: "Sending...",
            contact_form_success: "We have received your message. We'll get back to you as soon as possible.",
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
            page_services_title: "Solutions that Transform Talent into Impact | Talento Divergente",
            page_services_heading: "Solutions that Transform Talent into Impact",
            breadcrumb_services: "Services",
            services_intro: "We don't just do inclusion; we activate the full potential of your organization. At the Talento Divergente Foundation, we eliminate the friction between unique talent and high-demand environments, turning cognitive diversity into your greatest strategic asset.",
            srv_training_title: "Business Assessment and Strategy",
            srv_training_desc: "From conflict-ridden environments to high-performance atmospheres. We leave behind \"symbolic inclusion\" to deliver a deep transformation of your company's architecture. We identify the real causes of low productivity and burnout, redesigning a culture where every employee feels part of the mission and performs at peak efficiency.",
            srv_training_f1: "<strong>Express Strategic Assessment:</strong> Agile 2-week evaluation to detect risks, hidden barriers, and immediate improvement opportunities in your talent management.",
            srv_training_f2: "<strong>Structural Conflict Resolution:</strong> We eliminate misunderstandings and communication failures, turning blocked teams into fluid and assertive collaboration systems.",
            srv_training_f3: "<strong>360° Process Adaptation:</strong> We redesign onboarding and performance evaluation so the system works in favor of talent, not against it.",
            srv_support_title: "High-Performance Mentoring",
            srv_support_desc: "The definitive bridge to a competitive and sustainable career. This is not a traditional academic program; it is professional standards training designed so your artistic and technical talent translates into real employability. We prepare you to stand out in high-demand industries.",
            srv_support_f1: "<strong>Strategic Portfolio Audit:</strong> We elevate the quality of your current work to project a solid professional profile that attracts top studios.",
            srv_support_f2: "<strong>Technical Soft Skills Training:</strong> Learn to manage feedback (retakes) logically and communicate your processes clearly to supervisors and teams.",
            srv_support_f3: "<strong>Personalized Market Strategy:</strong> We optimize your LinkedIn presence and specialized platforms, teaching you to successfully apply to national and international positions.",
            srv_consulting_title: "Mutual Adaptation Program (MAP)",
            srv_consulting_desc: "Real integration guarantee: where the person and the environment fit together. Most workplace failures are not due to lack of ability, but to system misalignments. Our program intervenes simultaneously in the individual and the organization to ensure a lasting and productive working relationship.",
            srv_consulting_f1: "<strong>Active Behavioral Mediation:</strong> We act as a bridge to translate perceptions into actionable data, facilitating mutual understanding between the worker and their team.",
            srv_consulting_f2: "<strong>Adapted Communication Training:</strong> We implement methodologies so that leadership and team management flow without biases or friction.",
            srv_consulting_f3: "<strong>Follow-up and Relapse Prevention:</strong> We consolidate changes through reinforcement sessions, ensuring initial success becomes a sustainable work culture.",
            srv_tiers_title: "Solutions Tailored to Your Growth",
            srv_tiers_intro: "We adapt our intervention to the DNA and maturity of your organization to maximize return on investment.",
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


            // -- aviso-legal.html (content) --
            legal_s1_title: "1. Identification details",
            legal_s1_intro: "In compliance with the duty of information set forth in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), the following details are provided:",
            legal_s1_list: "<li><strong>Legal name:</strong> Fundación de la Comunitat Valenciana Talento Divergente</li><li><strong>Tax ID (CIF):</strong> G27561760</li><li><strong>Registered office:</strong> Calle Torremolinos 35, bajo C, CP 12593, Moncofa, Castellón, Spain</li><li><strong>Email:</strong> contacto@fundaciontalentodivergente.org</li><li><strong>Website:</strong> www.fundaciontalentodivergente.org</li>",
            legal_s2_title: "2. Registration",
            legal_s2_text: "Fundación de la Comunitat Valenciana Talento Divergente is registered in the Foundation Registry of the Valencian Community, attached to the competent Department of the Generalitat Valenciana, and is subject to the Foundation Protectorate of the Valencian Community.",
            legal_s3_title: "3. Purpose of the website",
            legal_s3_text1: "This website aims to provide information about the mission, activities, services, and projects of Fundación de la Comunitat Valenciana Talento Divergente. The Foundation's purpose is to position neurodiversity as a competitive business advantage, facilitate the social and labour inclusion of neurodivergent individuals, and advise companies on cognitive diversity.",
            legal_s3_text2: "The information provided on this website is of a general nature and does not constitute professional advice of any kind.",
            legal_s4_title: "4. Intellectual and industrial property",
            legal_s4_text1: "All content on this website, including but not limited to text, photographs, graphics, images, logos, icons, technology, software, links, and other audiovisual or sound content, as well as its graphic design and source code, are the intellectual property of Fundación de la Comunitat Valenciana Talento Divergente or of third parties who have authorised their use. No exploitation rights are transferred to the user beyond what is strictly necessary for proper use of the website.",
            legal_s4_text2: "The reproduction, distribution, public communication, transformation, or any other activity involving the content of this website is prohibited, even when citing sources, without the prior, express, written consent of the Foundation.",
            legal_s5_title: "5. Liability",
            legal_s5_text1: "The Foundation shall not be held liable for any security errors that may occur or any damage that may be caused to the user's computer system (hardware and software), files, or documents stored therein, as a result of:",
            legal_s5_list: "<li>The presence of a virus on the user's computer used to connect to the website's services and content.</li><li>A browser malfunction.</li><li>The use of outdated browser versions.</li>",
            legal_s5_text2: "The Foundation reserves the right to remove any content that may contravene current legislation, morality, or public order, as well as to temporarily or permanently suspend the provision of services offered through the website.",
            legal_s6_title: "6. External links",
            legal_s6_text: "This website may contain links to third-party websites. The Foundation assumes no responsibility for the content, availability, or privacy policy of such external websites. The inclusion of any link does not imply endorsement or approval by the Foundation of the linked website or its content.",
            legal_s7_title: "7. Applicable law and jurisdiction",
            legal_s7_text: "These conditions are governed by Spanish law. For the resolution of any dispute arising from access to or use of this website, the Foundation and the user expressly submit to the jurisdiction of the Courts and Tribunals of Castellón, expressly waiving any other jurisdiction that may apply.",
            legal_update: "<em>Last updated: March 2026.</em>",

            // -- politica-privacidad.html (content) --
            privacy_s1_title: "1. Data controller",
            privacy_s1_intro: "In accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and Organic Law 3/2018, of 5 December, on the Protection of Personal Data and guarantee of digital rights (LOPDGDD), we inform you that any personal data you may provide will be processed by:",
            privacy_s1_list: "<li><strong>Controller:</strong> Fundación de la Comunitat Valenciana Talento Divergente</li><li><strong>Address:</strong> Calle Torremolinos 35, bajo C, CP 12593, Moncofa, Castellón, Spain</li><li><strong>Email:</strong> contacto@fundaciontalentodivergente.org</li>",
            privacy_s2_title: "2. Personal data collected",
            privacy_s2_text: "This website has a contact form. The data we process is that which the user voluntarily provides when sending us a message: name, email address, subject, and any other information they choose to include in their communication.",
            privacy_s3_title: "3. Purpose of data processing",
            privacy_s3_intro: "Personal data received will be processed for the following purposes:",
            privacy_s3_list: "<li>To respond to queries, requests, or information requests made by the user.</li><li>To manage the relationship with individuals and organisations interested in the Foundation's services.</li><li>To send communications related to the Foundation's activities, provided the user has given their express consent.</li>",
            privacy_s4_title: "4. Legal basis",
            privacy_s4_intro: "The legal basis for the processing of personal data is:",
            privacy_s4_list: "<li><strong>Consent of the data subject</strong> (Art. 6.1.a GDPR): by sending us a message through the contact form, the user consents to the processing of the data included in their communication.</li><li><strong>Legitimate interest</strong> (Art. 6.1.f GDPR): for the management of professional relationships and handling of queries related to the Foundation's purposes.</li>",
            privacy_s5_title: "5. Data subject rights",
            privacy_s5_intro: "At any time, the user may exercise the following rights recognised by the GDPR and the LOPDGDD:",
            privacy_s5_list: "<li><strong>Right of access:</strong> to know whether their personal data is being processed and, if so, to obtain information about it.</li><li><strong>Right to rectification:</strong> to request the correction of inaccurate or incomplete data.</li><li><strong>Right to erasure:</strong> to request the deletion of their data when it is no longer necessary for the purpose for which it was collected.</li><li><strong>Right to object:</strong> to object to the processing of their personal data in certain circumstances.</li><li><strong>Right to data portability:</strong> to receive their personal data in a structured, commonly used, and machine-readable format.</li><li><strong>Right to restriction of processing:</strong> to request the suspension of data processing in legally prescribed cases.</li>",
            privacy_s5_exercise: "To exercise any of these rights, the user may send an email to <a href=\"mailto:contacto@fundaciontalentodivergente.org\">contacto@fundaciontalentodivergente.org</a> specifying the right they wish to exercise and enclosing, where applicable, a copy of their identity document.",
            privacy_s5_aepd: "The user also has the right to lodge a complaint with the Spanish Data Protection Agency (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">www.aepd.es</a>) if they consider that the processing of their data does not comply with current regulations.",
            privacy_s6_title: "6. Cookies",
            privacy_s6_intro: "This website uses the following types of cookies:",
            privacy_s6_list: "<li><strong>Technical cookies (strictly necessary):</strong> enable the proper functioning of the website. They do not collect identifiable personal data and are deleted when the browser is closed.</li><li><strong>Analytical cookies (Google Analytics):</strong> collect <strong>pseudonymised and aggregated</strong> information about website usage (pages visited, visit duration, traffic source). These cookies are only activated if the user expressly accepts them through the consent banner. The service provider is Google LLC. You can review their privacy policy at <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">policies.google.com/privacy</a>. Processing is carried out by Google LLC, which may involve data transfers to the United States (see section 8).</li>",
            privacy_s6_text: "The user can accept or reject analytical cookies through the banner displayed on their first visit. The preference is stored in the browser (localStorage) and can be changed at any time by clearing the site data in the browser settings. You can also withdraw your consent at any time using the «Cookie settings» button available in the page footer.",
            privacy_s7_title: "7. Data retention period",
            privacy_s7_intro: "Personal data provided will be retained for the time necessary to respond to the user's request or query and, where applicable, for the legally established periods. Once the purpose of the processing has been fulfilled, the data will be securely deleted or, where applicable, blocked in accordance with applicable regulations.",
            privacy_s7_detail: "In particular:",
            privacy_s7_list: "<li>Data from email or form queries: retained for the time necessary to resolve the query and a maximum of 12 additional months.</li><li>Data from professional relationships: for the duration of the relationship and the applicable legal limitation periods.</li>",
            privacy_s8_title: "8. Data recipients",
            privacy_s8_text: "For the provision of certain services, the Foundation uses technology providers acting as data processors: <strong>Google LLC</strong> (hosting of the contact form via Google Apps Script and web analytics via Google Analytics). These providers may process data on servers located in the <strong>United States</strong>, resulting in international data transfers covered by the <strong>EU-US Data Privacy Framework</strong> adequacy decision and/or the Standard Contractual Clauses approved by the European Commission. Except for the use of these processors and legally required disclosures, data will not be shared with third parties.",
            privacy_s9_title: "9. Security",
            privacy_s9_text: "The Foundation has adopted the necessary technical and organisational measures to guarantee the security of personal data and prevent its alteration, loss, processing, or unauthorised access, taking into account the state of technology, the nature of the data stored, and the risks to which it is exposed.",
            privacy_s10_title: "10. Contact",
            privacy_s10_intro: "For any matter related to the processing of your personal data or the exercise of your rights, you may contact us at:",
            privacy_s10_list: "<li><strong>Email:</strong> <a href=\"mailto:contacto@fundaciontalentodivergente.org\">contacto@fundaciontalentodivergente.org</a></li><li><strong>Postal address:</strong> Fundación de la Comunitat Valenciana Talento Divergente, Calle Torremolinos 35, bajo C, CP 12593, Moncofa, Castellón, Spain</li>",
            privacy_update: "<em>Last updated: June 2026.</em>",
            page_legal_title: "Legal Notice | Talento Divergente",
            page_legal_heading: "Legal Notice",
            breadcrumb_legal: "Legal Notice",

            // -- politica-privacidad.html --
            page_privacy_title: "Privacy Policy | Talento Divergente",
            page_privacy_heading: "Privacy Policy",
            breadcrumb_privacy: "Privacy Policy",

            // -- Global: skip link + form privacy notice --
            skip_link: "Skip to content",
            form_privacy_notice: "Data controller: Fundación de la Comunitat Valenciana Talento Divergente. Purpose: to handle your enquiry. Legal basis: your consent. Data is not shared except where legally required; processors (Google) are used, with transfers to the USA covered by the EU-US Data Privacy Framework. Rights: access, rectification, erasure and others, by writing to contacto@fundaciontalentodivergente.org. More information in the Privacy Policy.",

            // -- empresas.html: business-case stat cards --
            emp_stat1_title: "Innovation",
            emp_stat1_desc: "Divergent thinking generates solutions that homogeneous teams cannot reach. Fresh perspectives for complex problems.",
            emp_stat2_title: "Attention to detail",
            emp_stat2_desc: "Exceptional ability to detect errors, patterns, and anomalies in data, code, and quality processes.",
            emp_stat3_title: "Analytical thinking",
            emp_stat3_desc: "Logical and systematic reasoning that brings rigour to decision-making and technical problem-solving.",

            // -- empresas.html: profile cards --
            emp_prof1_title: "Creative Profile",
            emp_prof1_desc: "Professionals with exceptional talent in <strong>3D Animation, VFX, UX/UI</strong> and digital design. Their ability to visualise complex solutions and their obsessive attention to detail make them high-value assets for the creative industry.",
            emp_prof1_sector: "<em>Target sector: animation, gaming, and VFX industry in the Valencia-Alicante corridor.</em>",
            emp_prof1_role1: "3D Animation",
            emp_prof1_role2: "VFX",
            emp_prof1_role3: "UX/UI",
            emp_prof1_role4: "Digital design",
            emp_prof2_title: "Analytical Profile",
            emp_prof2_desc: "Specialists in <strong>cybersecurity, QA (testing), and data analysis</strong>. Their systematic thinking, ability to detect anomalies, and resistance to cognitive fatigue in repetitive tasks make them ideal for roles where precision is critical.",
            emp_prof2_sector: "<em>Target sector: startup and tech ecosystem in the Valencia hub.</em>",
            emp_prof2_role1: "Cybersecurity",
            emp_prof2_role2: "QA Testing",
            emp_prof2_role3: "Data analysis",
            emp_prof3_title: "Stabiliser Profile",
            emp_prof3_desc: "Professionals with strengths in <strong>quality control, logistics, and processes</strong>. Their consistency, reliability, and ability to maintain high standards make them fundamental pillars of industrial operations.",
            emp_prof3_sector: "<em>Target sector: ceramic, logistics, and industrial cluster of Castellón and la Plana Baixa.</em>",
            emp_prof3_role1: "Quality control",
            emp_prof3_role2: "Logistics",
            emp_prof3_role3: "Industrial processes",

            // -- empresas.html: process steps --
            emp_step1_title: "Initial contact",
            emp_step1_desc: "Tell us what you need: what profile you are looking for, what challenges your team faces, and how mature your organisation is in terms of inclusion. No commitment required.",
            emp_step2_title: "Needs analysis",
            emp_step2_desc: "We evaluate your work environment, team culture, and role requirements. We identify the adjustments needed to ensure a successful onboarding.",
            emp_step3_title: "Talent-company matching",
            emp_step3_desc: "We select candidates whose profile, strengths, and working style fit your organisation. It is not just about technical skills, but real compatibility.",
            emp_step4_title: "Support and follow-up",
            emp_step4_desc: "Once the person joins, we provide mediation and ongoing support during the first months. We resolve friction before it becomes a problem.",

            // -- empresas.html: service tiers --
            emp_tier1_label: "Startups &lt;50 employees",
            emp_tier1_title: "Inclusive Culture Design Kit",
            emp_tier1_desc: "Agile <strong>2-3 week</strong> intervention for startups that want to embed inclusion from the outset. Includes a rapid assessment, best-practice guide, and awareness session for the founding team.",
            emp_tier2_label: "Medium 51-250 employees",
            emp_tier2_title: "Cohesion and Mutual Adaptation Programme",
            emp_tier2_desc: "<strong>3-4 month</strong> programme that works on organisational culture in depth. Includes assessment, middle-management training, onboarding support, and impact measurement with psychological safety and retention indicators.",
            emp_tier3_label: "Large +250 employees",
            emp_tier3_title: "HR Forensic Audit and Regulatory Compliance",
            emp_tier3_desc: "Comprehensive review of compliance with the <strong>LGD</strong> (2% quota), <strong>ISO 45003</strong> (psychosocial risks), and <strong>ESG</strong> criteria related to diversity. Report with findings, legal risks, and prioritised action plan.",

            // -- empresas.html: page CTA --
            emp_cta_title: "Power up your team with divergent talent",
            emp_cta_desc: "Tell us what your company needs. We will propose a tailored plan with no commitment.",

            // -- neurodiversidad.html: type stat cards --
            neuro_type1_title: "Autism (ASD)",
            neuro_type1_desc: "Affects 1 in 100 people. Characterised by systematic thinking, exceptional attention to detail, direct honesty, and the ability to hyperfocus on areas of interest.",
            neuro_type2_title: "ADHD",
            neuro_type2_desc: "Present in 5-7% of the population. Brings creativity, rapid thinking, the ability to work under pressure, energy, and the skill to connect seemingly unrelated ideas.",
            neuro_type3_title: "Dyslexia",
            neuro_type3_desc: "Affects 10% of the population. Dyslexic individuals stand out for their spatial and visual thinking, creativity, narrative ability, and a global view of problems.",
            neuro_type4_title: "High Abilities",
            neuro_type4_desc: "Present in 2-5% of the population. Characterised by rapid learning, critical thinking, high sensitivity, capacity for abstraction, and strategic vision.",

            // -- neurodiversidad.html: strengths service cards --
            neuro_str1_title: "Autism",
            neuro_str1_li1: "Error and pattern detection",
            neuro_str1_li2: "Consistency and reliability",
            neuro_str1_li3: "Systematic data analysis",
            neuro_str1_li4: "Sustained deep concentration",
            neuro_str1_li5: "Honest and direct communication",
            neuro_str2_title: "ADHD",
            neuro_str2_li1: "Creativity and rapid ideation",
            neuro_str2_li2: "Multitasking ability in dynamic environments",
            neuro_str2_li3: "Lateral and innovative thinking",
            neuro_str2_li4: "High performance under pressure",
            neuro_str2_li5: "Hyperfocus on motivating projects",
            neuro_str3_title: "High Abilities",
            neuro_str3_li1: "Accelerated learning",
            neuro_str3_li2: "Strategic vision and critical thinking",
            neuro_str3_li3: "Connecting complex ideas",
            neuro_str3_li4: "Intellectual leadership",
            neuro_str3_li5: "Creative problem-solving",

            // -- neurodiversidad.html: FAQ --
            neuro_faq1_q: "Do neurodivergent people need special adaptations at work?",
            neuro_faq1_a: "Not always. Many times it involves simple, low-cost adjustments: reducing unnecessary sensory stimuli, providing clear written instructions, allowing noise-cancelling headphones, or offering flexible schedules. These adjustments also tend to benefit the whole team, not just the neurodivergent person.",
            neuro_faq2_q: "Is hiring neurodivergent talent just a matter of CSR?",
            neuro_faq2_a: "No. It is a data-driven business decision. Companies such as SAP, Microsoft, JP Morgan, and EY have demonstrated that neurodiverse teams are more productive, more innovative, and make fewer errors in tasks requiring precision. Well-managed neurodiversity generates measurable return on investment.",
            neuro_faq3_q: "How does neurodiversity affect team dynamics?",
            neuro_faq3_a: "A cognitively diverse team analyses problems from multiple perspectives, which reduces groupthink and improves decision-making. The key lies in management: with the right mediation, differences become complementarity. Without it, they can generate friction. That is why we offer ongoing support.",
            neuro_faq4_q: "What legal obligations do companies have regarding neurodiversity?",
            neuro_faq4_a: "In Spain, the General Disability Law (LGD) sets a 2% quota for companies with more than 50 workers. ISO 45003 also regulates psychosocial risks, and ESG criteria increasingly value diversity and inclusion. Non-compliance can result in penalties, but beyond the legal obligation, managing neurodiversity well is a competitive advantage."
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

        // Update active state and aria-pressed in all switchers
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            var isActive = btn.getAttribute('data-lang') === lang;
            if (isActive) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
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

    // Apply stored language on load (always call setLanguage to sync aria-pressed)
    var currentLang = detectLang();
    setLanguage(currentLang);

    // ========================================
    // CONTACT FORM
    // ========================================
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Honeypot: abort silently if the hidden field is filled
            var honeypot = contactForm.querySelector('[name="website"]');
            if (honeypot && honeypot.value) {
                return;
            }

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
                // Google Apps Script submission via hidden iframe to handle redirects
                var payload = JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                });

                // Create a hidden form that posts to GAS (avoids CORS entirely)
                var hiddenForm = document.createElement('form');
                hiddenForm.method = 'POST';
                hiddenForm.action = GAS_URL;
                hiddenForm.target = 'gas-iframe';
                hiddenForm.style.display = 'none';

                // Add data as hidden fields
                var fields = {name: name, email: email, subject: subject, message: message};
                for (var key in fields) {
                    var input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = fields[key];
                    hiddenForm.appendChild(input);
                }

                // Create hidden iframe to receive the response
                var iframe = document.getElementById('gas-iframe');
                if (!iframe) {
                    iframe = document.createElement('iframe');
                    iframe.name = 'gas-iframe';
                    iframe.id = 'gas-iframe';
                    iframe.style.display = 'none';
                    document.body.appendChild(iframe);
                }

                document.body.appendChild(hiddenForm);
                hiddenForm.submit();
                document.body.removeChild(hiddenForm);

                // Show success (we can't read iframe response due to cross-origin)
                setTimeout(function() {
                    statusEl.className = 'form-status success';
                    statusEl.textContent = translations[lang].contact_form_success;
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = translations[lang].contact_form_submit;
                }, 1500);
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

    function openMobileMenu() {
        mobileToggle.classList.add('active');
        mobileMenu.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
        mobileToggle.setAttribute('aria-label', 'Cerrar menú');
        document.body.style.overflow = 'hidden';
        // Move focus to the first link in the menu
        var firstLink = mobileMenu.querySelector('a, button');
        if (firstLink) { firstLink.focus(); }
    }

    function closeMobileMenu() {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
        mobileToggle.focus();
    }

    if (mobileToggle && mobileMenu) {
        // Ensure initial ARIA state
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-controls', 'mobile-menu');

        mobileToggle.addEventListener('click', function() {
            var isOpen = mobileMenu.classList.contains('active');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
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
    // Only animate when JS is active AND user has no reduced-motion preference
    // ========================================
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
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
            card.setAttribute('data-animate', '');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });

        var style = document.createElement('style');
        style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
        document.head.appendChild(style);
    }
});
