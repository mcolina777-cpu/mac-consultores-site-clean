/**
 * i18n.js
 * Motor liviano de internacionalización para traducir dinámicamente todo el sitio web
 * a partir del diccionario JSON embebido, persistiendo la preferencia en localStorage.
 */

// Diccionario de traducciones fusionado
const siteTranslations = {
  "es": {
    "contacto": {
      "title": "Contacto | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Atención al Cliente",
      "h1": "Contacto y Consultas",
      "info": {
        "tag": "Canales Directos",
        "title": "Estamos para proteger sus intereses.",
        "desc": "Para agendar una consulta privada o solicitar una evaluación técnica de su caso, por favor utilice los siguientes canales o complete el formulario adjunto.",
        "hq": "Sede Principal",
        "email": "Correo Electrónico",
        "hours": "Horario de Atención",
        "hours_val": "Lunes a Viernes: 8:00 AM - 5:00 PM"
      },
      "form": {
        "label_name": "Nombre completo",
        "placeholder_name": "Ej. Marco Antonio Pérez",
        "label_email": "Correo electrónico",
        "placeholder_email": "ejemplo@correo.com",
        "label_role": "Profesión / Rol principal",
        "placeholder_role": "Ej. Director financiero, empresario, docente universitario",
        "label_reason": "Motivo principal de su consulta",
        "reason_default": "Seleccione una opción",
        "reason_opt1": "Consultoría penal estratégica en materia corporativa (riesgos penales empresariales)",
        "reason_opt2": "Interposición de denuncia o querella por hechos de naturaleza económica o corporativa (caso sin proceso previo)",
        "reason_opt3": "Segunda opinión sobre un proceso penal de contenido económico o corporativo en curso (sin sustituir a su abogado)",
        "reason_opt4": "Trámites consulares y gestión de documentos en Venezuela para clientes en el extranjero",
        "reason_opt5": "Operaciones patrimoniales y corporativas (compra–venta de inmuebles, constitución o fusión de compañías, etc.)",
        "hint_practice": "La firma centra su práctica en derecho penal corporativo y en asuntos de naturaleza económica, patrimonial y consular.",
        "label_penal": "Tipo de hechos (solo si su consulta es penal)",
        "penal_default": "No aplica / No es penal",
        "penal_opt1": "Hechos de naturaleza económica o corporativa (fraude, corrupción, administración desleal, delitos societarios)",
        "penal_opt2": "Delitos violentos u otros no económicos (lesiones, homicidio, violencia doméstica, etc.)",
        "hint_violent": "Mac Consultores Jurídicos & Asociados no asume casos de delitos violentos comunes u otras materias penales ajenas al ámbito corporativo.",
        "label_desc": "Descripción breve de su consulta",
        "placeholder_desc": "Describa de forma breve y objetiva el motivo de su consulta (máximo 500 caracteres).",
        "hint_admin": "Este canal no está habilitado para emitir criterios legales ni indicar qué debe hacer en su caso concreto. Su finalidad es exclusivamente administrativa: recopilar información básica para valorar la pertinencia de una consulta profesional sujeta a honorarios.",
        "hint_fees": "Toda consulta profesional está sujeta a honorarios, que podrán ser facturados por hora o según el alcance del encargo. Para cualquier actuación de representación (por ejemplo, interposición de denuncias o querellas, gestión de trámites consulares o comparecencias en su nombre), es imprescindible el otorgamiento de un poder de representación previamente analizado y redactado de forma personalizada para su caso.",
        "hint_relation": "Las comunicaciones remitidas a través de este formulario no constituyen, por sí mismas, relación abogado–cliente ni implican aceptación del asunto por parte de la firma.",
        "btn": "ENVIAR SOLICITUD DE ADMISIÓN",
        "success": "Su solicitud de admisión ha sido registrada. La firma valorará la información aportada y, de corresponder, se contactará con usted para coordinar una consulta profesional sujeta a honorarios."
      },
      "channels": {
        "title": "Canales Alternativos",
        "phone1": "📞 Llamadas Directas (Móvil 1):",
        "phone2": "📞 Llamadas Directas (Móvil 2):",
        "landline": "☎ Línea Fija (Caracas):",
        "virtual": "💻 Consultas Virtuales:",
        "virtual_link": "Reunión por Google Meet",
        "follow": "📱 X (Twitter):",
        "follow_link": "Síganos en X para actualizaciones"
      }
    },
    "legal_pages": {
      "notice_title": "Aviso Legal | Mac Consultores Jurídicos & Asociados",
      "notice_h1": "Aviso Legal",
      "notice_breadcrumb": "Información Corporativa",
      "notice": {
        "subtitle": "Condiciones de Uso e Información Legal",
        "sec1_title": "1. Titularidad del Sitio Web",
        "sec1_desc": "El presente sitio web es titularidad de MAC CONSULTORES JURÍDICOS & ASOCIADOS. Este espacio tiene como finalidad principal proporcionar información general sobre nuestros servicios jurídicos, equipo de profesionales y áreas de práctica.",
        "sec2_title": "2. Carácter Informativo",
        "sec2_desc": "Los contenidos de este sitio web tienen un propósito exclusivamente informativo y no constituyen, bajo ninguna circunstancia, asesoría legal, fiscal o profesional. La lectura o recepción de esta información no crea una relación abogado-cliente entre el usuario y la firma.",
        "sec3_title": "3. Propiedad Intelectual e Industrial",
        "sec3_desc": "Todos los derechos de propiedad intelectual e industrial sobre el contenido de esta página web, su diseño gráfico, logos, textos e imágenes son propiedad exclusiva de MAC CONSULTORES JURÍDICOS & ASOCIADOS, quedando estrictamente prohibida su reproducción, distribución o modificación sin autorización expresa.",
        "sec4_title": "4. Limitación de Responsabilidad",
        "sec4_desc": "La firma no se responsabiliza de las decisiones tomadas a partir de la información proporcionada en este sitio ni de los posibles daños y perjuicios derivados de su uso. Las referencias a regulaciones o leyes pueden no estar actualizadas al momento de su consulta."
      },
      "privacy_title": "Política de Privacidad | Mac Consultores Jurídicos & Asociados",
      "privacy_h1": "Política de Privacidad",
      "privacy_breadcrumb": "Información Corporativa",
      "privacy": {
        "subtitle": "Protección de Datos y Confidencialidad",
        "sec1_title": "1. Recopilación de Datos",
        "sec1_desc": "A través de nuestro formulario de contacto o mediante comunicación directa por correo electrónico, recogemos únicamente los datos personales estrictamente necesarios (nombre, correo, teléfono y el motivo de consulta) para gestionar su requerimiento de servicios profesionales.",
        "sec2_title": "2. Finalidad del Tratamiento",
        "sec2_desc": "Los datos proporcionados serán utilizados de manera exclusiva para atender su consulta, evaluar preliminarmente su caso y enviarle información relevante sobre los servicios de MAC CONSULTORES JURÍDICOS & ASOCIADOS. No compartimos, vendemos ni cedemos sus datos a terceros, salvo por obligación legal.",
        "sec3_title": "3. Confidencialidad",
        "sec3_desc": "Nuestra firma se rige por el estricto cumplimiento del secreto profesional. Toda la información suministrada, incluso antes de formalizarse una relación abogado-cliente, será tratada con la máxima confidencialidad y bajo protocolos de seguridad adecuados para evitar accesos no autorizados.",
        "sec4_title": "4. Derechos del Usuario",
        "sec4_desc": "Usted tiene el derecho de solicitar en cualquier momento el acceso, rectificación, actualización o eliminación de sus datos personales de nuestras bases de datos, enviando una comunicación al correo electrónico oficial: <a href=\"mailto:infomacconsul@gmail.com\">infomacconsul@gmail.com</a>."
      }
    },
    "nav": {
      "inicio": "Inicio",
      "firma": "Firma",
      "quienes_somos": "Quiénes Somos",
      "nuestro_ceo": "Nuestro CEO",
      "blog": "Blog Jurídico",
      "noticias": "Noticias",
      "servicios": "Servicios",
      "internacional": "Internacional",
      "alianzas": "Alianzas",
      "contacto": "Contacto"
    },
    "footer": {
      "desc": "Soluciones legales de alta complejidad con enfoque en la estrategia, la prevención y la protección integral de los intereses de nuestros clientes.",
      "nav_title": "Navegación",
      "services_title": "Servicios",
      "offices_title": "Oficinas",
      "penal": "Derecho Penal",
      "constitucional": "Defensa Constitucional",
      "consular": "Gestión Consular",
      "colaboracion": "Colaboración Int.",
      "location": "Torre Financiera, Caracas",
      "cta": "AGENDAR CITA →",
      "copyright": "© 2026 Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.",
      "local_time": "Hora local",
      "legal_notice": "Aviso Legal",
      "privacy": "Privacidad"
    },
    "quienes_somos": {
      "title": "Quiénes Somos | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Inicio / La Firma",
      "h1": "Quiénes Somos",
      "history": {
        "tag": "Nuestra Historia",
        "title": "Una trayectoria definida por el rigor y la integridad.",
        "desc_1": "Mac Consultores Jurídicos & Asociados es una firma boutique con sede en Caracas, concebida para ofrecer soluciones legales de alta complejidad. Nuestra estructura se fundamenta en la excelencia técnica y el compromiso ético, brindando una defensa especializada y una asesoría estratégica que trasciende la práctica legal tradicional.",
        "desc_2": "Entendemos que cada caso es único y requiere una arquitectura de solución propia. Por ello, integramos la experiencia forense con el respaldo académico de más de dos décadas de ejercicio profesional."
      },
      "architecture": {
        "tag": "ARQUITECTURA JURÍDICA PARA DESAFÍOS DE ALTA COMPLEJIDAD",
        "title": "Conoce la historia y filosofía de la firma",
        "desc": "Explora en detalle la trayectoria de Mac Consultores Jurídicos & Asociados, nuestro modelo de asesoría integral y los principios que orientan cada decisión estratégica.",
        "link": "LEER MÁS →"
      },
      "values": {
        "tag": "Valores Institucionales",
        "title": "Nuestros Pilares",
        "card_1": {
          "title": "Visión Estratégica",
          "desc": "No solo reaccionamos ante el conflicto; construimos blindajes preventivos y anticipamos riesgos para proteger los intereses de nuestros clientes."
        },
        "card_2": {
          "title": "Rigor Técnico",
          "desc": "Cada actuación está sustentada en un profundo dominio dogmático y un análisis exhaustivo de la realidad jurídica contemporánea."
        },
        "card_3": {
          "title": "Reserva Profesional",
          "desc": "La discreción y la confidencialidad son la base de nuestra relación con el cliente, garantizando un entorno de máxima confianza."
        }
      },
      "mission": {
        "quote": "\"Nuestra misión es transformar desafíos legales en escenarios de seguridad y crecimiento.\"",
        "desc": "Buscamos ser el referente de excelencia en el mercado jurídico venezolano, destacando por nuestra capacidad de resolver asuntos de alta sensibilidad técnica con resultados sólidos y transparentes.",
        "btn": "CONOCE A NUESTRO DIRECTOR GENERAL"
      }
    },
    "quienes_somos_detalle": {
      "title": "Arquitectura jurídica | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Inicio / La Firma / Nuestra Historia",
      "h1": "Arquitectura jurídica para desafíos de alta complejidad",
      "history": {
        "tag": "Nuestra Historia",
        "p1": "Mac Consultores Jurídicos & Asociados es una firma boutique especializada en servicios jurídicos de alta complejidad, con sede en la ciudad de Caracas, Venezuela, fundada en el año 2015 por el abogado y docente universitario Marco A. Colina G.",
        "p2": "Desde su fundación, la firma se concibió como un punto de encuentro entre la formación académica y la práctica profesional del Derecho. Su socio fundador acredita más de veinte años de ejercicio profesional ininterrumpido, complementados con estudios de cuarto nivel en Derecho Constitucional y Ciencias Penales y Jurídicas, además de una trayectoria consolidada en la litigación estratégica, la consultoría jurídica especializada y la docencia universitaria.",
        "p3": "Bajo su dirección general, Mac Consultores ha construido un modelo de asesoría jurídica integral dirigido tanto a personas naturales como a personas jurídicas, con clientes dentro y fuera de Venezuela. Esta proyección internacional permite que clientes ubicados en cualquier jurisdicción confíen su representación a la firma, mediante el otorgamiento de los poderes y mandatos correspondientes, conforme a las formalidades legales aplicables.",
        "p4": "Actualmente, el Dr. Marco A. Colina G. ejerce la función de Director General (Chief Executive Officer - CEO), dentro de Mac Consultores Jurídicos & Asociados, siendo responsable de la conducción estratégica, administrativa y operativa de la firma."
      },
      "mission": {
        "title": "Misión y Valores",
        "p1": "Nuestra misión es transformar los desafíos legales de nuestros clientes en escenarios de seguridad jurídica y crecimiento, mediante soluciones estratégicas, técnicamente sólidas y desarrolladas con absoluto apego a la ética profesional.",
        "p2": "Esta misión se sostiene sobre principios que orientan cada una de nuestras actuaciones:",
        "list": [
          "<strong>Legalidad y diligencia profesional</strong> — como fundamento inquebrantable de toda actuación jurídica.",
          "<strong>Independencia técnica</strong> — que garantiza criterios objetivos, libres de injerencias ajenas al interés del cliente.",
          "<strong>Transparencia y buena fe</strong> — en cada etapa de la relación profesional con quienes confían en nosotros.",
          "<strong>Confidencialidad y secreto profesional</strong> — como compromiso absoluto en el tratamiento de la información que se nos confía."
        ]
      },
      "areas": {
        "title": "Áreas de Práctica",
        "p1": "El ejercicio profesional de la firma se concentra en tres grandes líneas de especialización, atendidas con un enfoque técnico riguroso y adaptadas a las particularidades de cada asunto:",
        "list": [
          "<strong>Derecho Penal Corporativo:</strong> Defensa técnica especializada frente a investigaciones y procesos penales que involucran a personas jurídicas, sus directivos y representantes.",
          "<strong>Consultoría Estratégica en Riesgos Jurídicos:</strong> Diagnóstico preventivo y diseño de mecanismos de mitigación frente a exposiciones legales de alto impacto.",
          "<strong>Litigación y Defensa Especializada:</strong> Representación técnica ante las instancias jurisdiccionales competentes en asuntos penales, constitucionales y de alta complejidad."
        ]
      },
      "distinction": {
        "title": "Lo Que Nos Distingue",
        "p1": "Cada asunto sometido a nuestra consideración es objeto de una evaluación preliminar rigurosa, dirigida a determinar su viabilidad técnica y jurídica antes de definir cualquier línea de acción. Este análisis integral —que examina antecedentes, elementos probatorios y normativa aplicable— permite construir una teoría del caso sólida, coherente y verificable, ajustada a los intereses legítimos de cada cliente.",
        "p2": "Complementamos esta metodología con la incorporación de herramientas tecnológicas avanzadas, que permiten optimizar el procesamiento de la información y agilizar sustancialmente los tiempos de respuesta.",
        "p3": "Esta combinación de tradición jurídica y modernidad técnica nos permite ofrecer respuestas ágiles, sin renunciar al rigor que cada caso exige.",
        "p4": "En Mac Consultores Jurídicos & Asociados no formulamos promesas de resultados, sino el compromiso de un análisis serio, una estrategia bien fundamentada y un acompañamiento cercano en cada etapa del proceso. Por ello, nos consolidamos como el aliado estratégico que personas naturales y jurídicas necesitan para proteger sus derechos, su patrimonio y su reputación.",
        "quote": "\"Nuestra misión es transformar desafíos legales en escenarios de seguridad jurídica y crecimiento.\""
      }
    },
    "ceo": {
      "title": "Nuestro CEO | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Liderazgo Institucional",
      "h1": "Abg. Marco A. Colina G.",
      "about": {
        "tag": "Director General",
        "title": "Visión técnica y liderazgo forense.",
        "desc_1": "El Abg. Marco A. Colina G. es el fundador y Director General de Mac Consultores Jurídicos & Asociados. Con más de 20 años de ejercicio profesional ininterrumpido, su trayectoria se ha consolidado en el litigio de alta complejidad en materia penal y constitucional.",
        "desc_2": "Su enfoque combina el rigor dogmático con una visión pragmática de la justicia, permitiéndole liderar estrategias de defensa que han sentado precedentes en la jurisdicción venezolana. Es especialista en Derecho Penal y cuenta con una amplia formación en protección de derechos fundamentales."
      },
      "profile": {
        "tag": "Perfil Profesional",
        "title": "Especialidades de Liderazgo",
        "card_1": {
          "title": "Litigio de Casación",
          "desc": "Experto en la interposición y defensa de recursos extraordinarios ante el Tribunal Supremo de Justicia."
        },
        "card_2": {
          "title": "Derecho Penal Superior",
          "desc": "Abordaje de delitos de cuello blanco, criminalidad organizada y defensa penal técnica avanzada."
        },
        "card_3": {
          "title": "Tutela Constitucional",
          "desc": "Especialista en la activación de garantías jurisdiccionales para la protección de la libertad y el debido proceso."
        }
      }
    },
    "socios": {
      "title": "Socios y Colaboradores | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Estructura / Equipo",
      "h1": "Socios y Colaboradores Estratégicos",
      "intro": {
        "tag": "Capital Humano",
        "title": "Excelencia profesional en red.",
        "desc": "Nuestra firma opera bajo un modelo de colaboración multidisciplinaria, integrando a los mejores especialistas en cada área para garantizar una defensa técnica de 360 grados."
      },
      "cards": {
        "card_1": {
          "title": "Socios Principales",
          "desc": "Liderazgo estratégico y supervisión forense de todos los casos de alta sensibilidad de la firma."
        },
        "card_2": {
          "title": "Consultores Externos",
          "desc": "Red de expertos en finanzas, informática forense y medicina legal que respaldan nuestras estrategias de litigio."
        },
        "card_3": {
          "title": "Aliados Internacionales",
          "desc": "Corresponsalías en jurisdicciones clave para la atención de asuntos transfronterizos y gestión consular."
        }
      }
    },
    "firma": {
      "strategies": {
        "tag": "Estrategias representativas",
        "title": "Estrategias que reflejan nuestra forma de litigar",
        "case_selection": {
          "tag": "Selección de casos",
          "title": "Priorización de casos con viabilidad real",
          "desc": "Priorizamos casos con viabilidad jurídica real, tras un análisis riguroso de los hechos y la normativa aplicable. Esta metodología evita litigios innecesarios y alinea expectativas con escenarios jurídicamente posibles."
        },
        "case_theory": {
          "tag": "Teoría del caso",
          "title": "Teoría del caso como eje de la defensa",
          "desc": "Cada asunto se estructura desde el inicio con una teoría del caso clara, coherente y verificable. Integramos hechos, prueba y derecho en una narrativa jurídica sólida que guía toda la actuación procesal, desde la primera diligencia hasta el cierre del caso."
        },
        "representative_scenarios": {
          "tag": "Escenarios representativos",
          "title": "Estrategias aplicadas en contextos sensibles",
          "desc": "Desde investigaciones penales económicas contra empresas hasta acciones de amparo constitucional, nuestro enfoque se centra en anticipar riesgos, asegurar la cadena probatoria y proteger la reputación del cliente en cada decisión estratégica."
        }
      }
    },
    "title": "Mac Consultores Jurídicos & Asociados | Excelencia Legal",
    "breadcrumb": "Áreas de Excelencia",
    "h1": "Servicios Jurídicos",
    "intro": {
      "tag": "Áreas de Excelencia",
      "h2": "Soluciones integrales diseñadas a la medida de los desafíos más exigentes."
    },
    "services": {
      "card_1": {
        "title": "Derecho Penal y Procesal Penal",
        "desc": "Asumimos la defensa técnica integral en procedimientos de alta complejidad, criminalidad económica y delitos financieros. Nos enfocamos en el control de garantías procesales y el diseño de estrategias de litigio sólidas.",
        "list": [
          "Defensa frente a acusaciones penales",
          "Recursos de Casación y Apelación",
          "Criminalidad Corporativa",
          "Legitimación de Capitales"
        ]
      },
      "card_2": {
        "title": "Derecho Constitucional",
        "desc": "Protección efectiva de derechos fundamentales mediante la activación de mecanismos de tutela constitucional. Blindamos la seguridad jurídica de nuestros clientes frente a vulneraciones institucionales.",
        "list": [
          "Acción de Amparo Constitucional",
          "Hábeas Corpus y Hábeas Data",
          "Control de Convencionalidad",
          "Consultoría en Interpretación Normativa"
        ]
      },
      "card_3": {
        "title": "Delitos Informáticos y Evidencia Digital",
        "desc": "Especialización en el abordaje jurídico de contingencias tecnológicas. Gestión de incidentes de seguridad, fraude electrónico y análisis legal de elementos probatorios digitales.",
        "list": [
          "Defensa en Delitos Informáticos",
          "Gestión de Fraude y Sabotaje Digital",
          "Auditoría Jurídica de Evidencia",
          "Protección de Privacidad de Datos"
        ]
      },
      "card_4": {
        "title": "Consultoría Jurídica Preventiva",
        "desc": "Diseño de estructuras legales para la mitigación de riesgos. Acompañamos a empresas y particulares en la toma de decisiones estratégicas para evitar contingencias procesales.",
        "list": [
          "Compliance y Cumplimiento Normativo",
          "Gestión de Riesgo Legal",
          "Estructuración Contractual Compleja",
          "Asesoría en Gobernanza Corporativa"
        ]
      }
    },
    "cta": {
      "title": "¿Requiere una evaluación estratégica de su situación legal?",
      "desc": "Nuestro equipo de expertos está preparado para analizar su caso con el rigor técnico que merece.",
      "btn": "INICIAR CONSULTA PRIVADA"
    },
    "tramites_consulares": {
      "title": "Venezolanos en el Exterior | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Servicios / Diáspora",
      "h1": "Gestión Jurídica para Venezolanos en el Exterior",
      "subtitle": "Protegemos sus intereses en Venezuela desde cualquier lugar del mundo.",
      "intro_p": "La globalización y la diáspora venezolana han multiplicado los casos en los que las personas mantienen vínculos patrimoniales, familiares y procesales en el país, aun residiendo de forma permanente en el extranjero. Asimismo, atendemos a ciudadanos de otras nacionalidades que requieren soporte jurídico local confiable en Venezuela. En Mac Consultores Jurídicos & Asociados brindamos una tutela judicial y extrajudicial efectiva, diseñada para quienes necesitan representación jurídica remota sin trasladarse al territorio nacional.",
      "support": {
        "tag": "Áreas de Soporte",
        "title": "Servicios Especializados para el Exterior",
        "card_1": {
          "title": "Práctica Consular",
          "desc": "Apoderamiento legal y representación estratégica ante misiones consulares y autoridades migratorias para garantizar su movilidad y derechos fundamentales."
        },
        "card_2": {
          "title": "Gestión Documental",
          "desc": "Legalización internacional, Apostilla de La Haya y validación de documentos públicos con eficacia garantizada y rigor técnico procesal."
        },
        "card_3": {
          "title": "Derecho de Familia",
          "desc": "Litigio especializado en casos de sustracción internacional de menores y ejecución de obligaciones alimentarias transnacionales con enfoque humano."
        },
        "card_4": {
          "title": "Sucesiones",
          "desc": "Resolución de conflictos hereditarios y planificación patrimonial integral con activos o herederos dispersos en distintas jurisdicciones globales."
        },
        "card_5": {
          "title": "Representación Judicial",
          "desc": "Defensa técnica de alta gama en procesos penales, civiles o administrativos en territorio venezolano, sin requerir su traslado físico al país."
        },
        "card_6": {
          "title": "Poderes Estratégicos",
          "desc": "Asesoría y redacción de mandatos y facultades especiales para que sus intereses patrimoniales y legales en Venezuela estén siempre blindados."
        }
      },
      "form": {
        "title": "Solicite Asistencia desde el Exterior",
        "desc": "Indíquenos su situación y el país donde reside. Un experto le contactará para coordinar su representación en Venezuela.",
        "label_name": "Nombre y Apellido",
        "placeholder_name": "Ej. Juan Pérez",
        "label_country": "País de Residencia",
        "placeholder_country": "Ej. España, Estados Unidos, Chile",
        "label_message": "Mensaje / Requerimiento",
        "placeholder_message": "Describa brevemente el trámite o caso judicial en Venezuela",
        "btn": "ENVIAR SOLICITUD DE EVALUACIÓN"
      }
    },
    "colaboracion_internacional": {
      "title": "Colaboración Internacional | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Alianzas / B2B",
      "h1": "Colaboración Internacional",
      "intro": {
        "tag": "Partnership",
        "title": "Aliados estratégicos para firmas internacionales.",
        "p1": "En un entorno jurídico globalizado, la colaboración entre firmas es esencial. Mac Consultores Jurídicos & Asociados actúa como el brazo local estratégico para bufetes internacionales que requieren soporte especializado en Venezuela.",
        "p2": "Ofrecemos una plataforma de servicios B2B diseñada para integrarse con los estándares de calidad y respuesta de las firmas globales más exigentes."
      },
      "proposal": {
        "tag": "Nuestra Propuesta",
        "title": "Soporte Local para Firmas Globales",
        "card_1": {
          "title": "Corresponsalía Jurídica",
          "desc": "Actuamos como sus corresponsales locales en Venezuela, gestionando actuaciones judiciales y trámites administrativos con total transparencia."
        },
        "card_2": {
          "title": "Due Diligence Legal",
          "desc": "Análisis exhaustivo de riesgos y auditorías legales en jurisdicción venezolana para fusiones, adquisiciones o proyectos de inversión."
        },
        "card_3": {
          "title": "Opiniones Legales",
          "desc": "Emisión de dictámenes técnicos y legal opinions sobre normativa venezolana para ser utilizados en procedimientos extranjeros."
        }
      }
    },
    "seo": {
      "blog_criminalidad_economica": {
        "title": "Análisis Penal: Evolución de la Criminalidad Económica | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Análisis Penal: Evolución de la Criminalidad Económica | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "privacidad": {
        "title": "Política de Privacidad | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Política de Privacidad | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "blog": {
        "title": "Blog Jurídico | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Blog Jurídico | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "tramites_consulares": {
        "title": "Venezolanos en el Exterior | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Venezolanos en el Exterior | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "index": {
        "title": "Mac Consultores Jurídicos & Asociados | Excelencia Legal",
        "description": "Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo a nivel nacional e internacional.",
        "og_title": "Mac Consultores Jurídicos & Asociados | Excelencia Legal",
        "og_description": "Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo."
      },
      "quienes_somos": {
        "title": "La Firma | Mac Consultores Jurídicos & Asociados",
        "description": "Conoce la historia, valores y el equipo de profesionales detrás de Mac Consultores Jurídicos & Asociados. Dedicados al ejercicio impecable del Derecho en Venezuela.",
        "og_title": "La Firma | Mac Consultores Jurídicos",
        "og_description": "Conoce la historia, valores y el equipo de profesionales detrás de Mac Consultores Jurídicos & Asociados."
      },
      "noticias": {
        "title": "Noticias & Actualidad Jurídica | Mac Consultores",
        "description": "Manténgase informado con los últimos boletines legales, sentencias destacadas del TSJ, reformas penales y opiniones expertas de nuestra firma.",
        "og_title": "Actualidad Jurídica y Noticias Legales | Mac Consultores",
        "og_description": "Últimas noticias, sentencias destacadas y análisis legal de nuestros expertos en derecho venezolano e internacional."
      },
      "blog_regimen_poderes_cpc_copp": {
        "title": "Procesal Penal: El Régimen de Poderes en el CPC y el COPP | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": null,
        "og_description": null
      },
      "socios_colaboradores": {
        "title": "Socios y Colaboradores | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Socios y Colaboradores | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "servicios": {
        "title": "Áreas de Práctica y Servicios | Mac Consultores",
        "description": "Nuestros servicios legales incluyen: Derecho Penal, Constitucional, Compliance Corporativo, Extradiciones, y consultoría para particulares y corporaciones.",
        "og_title": "Servicios Jurídicos Especializados | Mac Consultores",
        "og_description": "Derecho Penal, Constitucional, Extradiciones y Compliance Corporativo preventivo."
      },
      "colaboracion_internacional": {
        "title": "Colaboración Internacional | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Colaboración Internacional | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "nuestro_ceo": {
        "title": "Nuestro CEO | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Nuestro CEO | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "contacto": {
        "title": "Contacto | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Contacto | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      },
      "blog_amparo_garantia_vital": {
        "title": "Constitucional: El Amparo como Garantía Vital | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": null,
        "og_description": null
      },
      "aviso_legal": {
        "title": "Aviso Legal | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Aviso Legal | Mac Consultores Jurídicos & Asociados",
        "og_description": "Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad."
      }
    },
    "hero": {
      "tag": "Rigor & Estrategia",
      "h1": "Arquitectura jurídica para casos de alta complejidad.",
      "desc": "Defensa penal y constitucional diseñada a medida, con foco en la protección efectiva de derechos, patrimonio y reputación en entornos sensibles.",
      "btn": "Solicitar consulta privada"
    },
    "about": {
      "tag": "Nuestra Firma",
      "title": "Cimientos sólidos para desafíos complejos.",
      "desc_1": "En Mac Consultores Jurídicos & Asociados, entendemos el derecho como una disciplina de alta precisión. Nuestra práctica se define por la integridad, el rigor técnico y la capacidad de anticipación estratégica en cada etapa del proceso.",
      "desc_2": "Liderados por el Abg. Marco A. Colina G., combinamos más de dos décadas de experiencia en el litigio penal y constitucional con una visión académica de vanguardia, garantizando resultados sólidos y éticos para una clientela nacional e internacional.",
      "btn": "Conocer nuestra historia"
    },
    "specialties": {
      "tag": "Especialidades",
      "title": "Áreas de Práctica Estratégica",
      "details_link": "VER DETALLES →",
      "card_1": {
        "title": "Defensa Penal Técnica",
        "desc": "Estrategias de defensa integral en asuntos penales de alta complejidad, criminalidad económica y delitos informáticos con un enfoque técnico de vanguardia."
      },
      "card_2": {
        "title": "Tutela Constitucional",
        "desc": "Protección efectiva de derechos fundamentales mediante Amparo Constitucional, Hábeas Corpus y Hábeas Data ante las instancias jurisdiccionales competentes."
      },
      "card_3": {
        "title": "Derecho Internacional",
        "desc": "Representación estratégica ante misiones consulares y organismos multilaterales para la diáspora venezolana y asuntos transfronterizos complejos."
      }
    },
    "news": {
      "tag": "Actualidad",
      "title": "Noticias & Publicaciones",
      "read_more": "LEER MÁS →",
      "card_1": {
        "title": "Impacto de la Nueva Legislación Penal",
        "desc": "Análisis detallado sobre las recientes reformas procesales y sus implicaciones para la defensa corporativa."
      },
      "card_2": {
        "title": "Tendencias en Amparo Constitucional",
        "desc": "Revisión de la jurisprudencia reciente y su impacto fundamental en la protección de los derechos corporativos e individuales."
      },
      "card_3": {
        "title": "Nuevos Acuerdos Internacionales",
        "desc": "Cómo los nuevos marcos de colaboración internacional afectan de forma directa las gestiones consulares de la diáspora venezolana."
      }
    },
    "home": {
      "resources": {
        "tag": "Recursos",
        "title": "Recursos estratégicos para empresas",
        "guide": {
          "tag": "Riesgo penal económico",
          "title": "Guía en 5 pasos para proteger su empresa ante investigaciones penales económicas",
          "desc": "Documento práctico que resume las medidas clave de prevención, documentación y reacción en escenarios de riesgo penal económico.",
          "cta": "DESCARGAR GUÍA →"
        },
        "checklist": {
          "tag": "Documentación para la defensa",
          "title": "Checklist de documentación para la defensa penal de empresas",
          "desc": "Lista estructurada de documentos esenciales para organizar la defensa penal y responder con rapidez a los requerimientos de las autoridades.",
          "cta": "DESCARGAR CHECKLIST →"
        },
        "template": {
          "tag": "Servicios internacionales",
          "title": "Plantilla de contrato de prestación de servicios legales internacionales",
          "desc": "Modelo de contrato orientado a clientes internacionales, con cláusulas de jurisdicción, ley aplicable, honorarios y confidencialidad.",
          "cta": "DESCARGAR PLANTILLA →"
        },
        "cta": "Ver recursos estratégicos"
      },
      "strategies": {
        "tag": "Estrategias representativas",
        "title": "Estrategias que reflejan nuestra forma de litigar",
        "case_selection": {
          "tag": "Selección de casos",
          "title": "Priorización de casos con viabilidad real",
          "desc": "Priorizamos casos con viabilidad jurídica real, tras un análisis riguroso de los hechos y la normativa aplicable. Esta metodología evita litigios innecesarios y alinea expectativas con escenarios jurídicamente posibles."
        },
        "case_theory": {
          "tag": "Teoría del caso",
          "title": "Teoría del caso como eje de la defensa",
          "desc": "Cada asunto se estructura desde el inicio con una teoría del caso clara, coherente y verificable. Integramos hechos, prueba y derecho en una narrativa jurídica sólida que guía toda la actuación procesal, desde la primera diligencia hasta el cierre del caso.",
          "long_title": "Teoría del caso: de la hipótesis a la estrategia procesal",
          "long_desc": "La teoría del caso no es un discurso retórico; es la columna vertebral de toda defensa seria. Partimos de una hipótesis central que explica qué ocurrió, por qué ocurrió y cómo los elementos de prueba la sostienen frente a la versión acusatoria.\n\nDesde las primeras diligencias, definimos cuál será la narrativa probatoria que queremos que el tribunal escuche y entienda: qué hechos se admiten, cuáles se disputan, qué vacíos tiene la acusación y qué indicadores revelan que la imputación es forzada o desproporcionada. Esta teoría guía la preparación de declaraciones, la selección de peritos, el contrainterrogatorio y el uso de la prueba documental.\n\nEl resultado es una estrategia procesal coherente: cada escrito, cada actuación y cada alegato responde a un mismo eje argumental, evitando contradicciones defensivas, improvisaciones y giros que restan credibilidad al cliente ante los jueces y el Ministerio Público."
        },
        "representative_scenarios": {
          "tag": "Escenarios representativos",
          "title": "Estrategias aplicadas en contextos sensibles",
          "desc": "Desde investigaciones penales económicas contra empresas hasta acciones de amparo constitucional, nuestro enfoque se centra en anticipar riesgos, asegurar la cadena probatoria y proteger la reputación del cliente en cada decisión estratégica.",
          "long_title": "Estrategias en escenarios penales y constitucionales sensibles",
          "long_desc": "En los asuntos más sensibles —investigaciones penales económicas contra empresas, procedimientos con impacto mediático o acciones de amparo constitucional— diseñamos la estrategia combinando tres planos: jurídico, probatorio y reputacional.\n\nEn el plano jurídico, identificamos el marco normativo aplicable y los criterios jurisprudenciales relevantes, para saber con precisión cuáles son los márgenes reales de maniobra y qué vías procesales ofrecen mayor protección al cliente. En el plano probatorio, nos enfocamos en preservar la cadena de custodia, depurar la evidencia disponible y anticipar los ataques que la contraparte intentará dirigir contra los soportes documentales y testimoniales.\n\nFinalmente, analizamos el impacto reputacional de cada decisión: cómo comunicamos las actuaciones al cliente, qué riesgos existen de filtraciones o exposiciones públicas y qué medidas pueden tomarse para minimizar daños a la imagen personal o corporativa, sin sacrificar la solidez de la defensa técnica."
        }
      }
    },
    "strategy_case_theory": {
      "title": "Teoría del caso | Mac Consultores",
      "h1": "Teoría del caso: de la hipótesis a la estrategia procesal",
      "p1": "La teoría del caso no es un discurso retórico; es la columna vertebral de toda defensa seria. Partimos de una hipótesis central que explica qué ocurrió, por qué ocurrió y cómo los elementos de prueba la sostienen frente a la versión acusatoria.",
      "p2": "Desde las primeras diligencias, definimos cuál será la narrativa probatoria que queremos que el tribunal escuche y entienda: qué hechos se admiten, cuáles se disputan, qué vacíos tiene la acusación y qué indicadores revelan que la imputación es forzada o desproporcionada. Esta teoría guía la preparación de declaraciones, la selección de peritos, el contrainterrogatorio y el uso de la prueba documental.",
      "p3": "El resultado es una estrategia procesal coherente: cada escrito, cada actuación y cada alegato responde a un mismo eje argumental, evitando contradicciones defensivas, improvisaciones y giros que restan credibilidad al cliente ante los jueces y el Ministerio Público."
    },
    "strategy_representative_scenarios": {
      "title": "Escenarios representativos | Mac Consultores",
      "h1": "Escenarios de actuación representativos",
      "intro": "A continuación, presentamos ejemplos genéricos de asuntos en los que la firma asume representación, resguardando siempre la confidencialidad inherente a nuestra práctica:",
      "li1": "Defensa o querella por defraudación patrimonial compleja en el seno de grupos empresariales (desvío de fondos, falsedad documental, ocultación de patrimonio).",
      "li2": "Defensa técnica frente a investigaciones por legitimación de capitales, delincuencia organizada y corrupción administrativa.",
      "li3": "Asesoría preventiva y defensa en materia penal-tributaria y penal-bancaria.",
      "li4": "Litigio penal asociado a conflictos de accionistas, apropiación indebida y administración desleal.",
      "li5": "Consultoría para la prevención de riesgos penales corporativos y protocolos de cumplimiento legal (Compliance)."
    },
    "blog": {
      "title": "Blog Jurídico | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Actualidad / Análisis",
      "h1": "Blog Jurídico Estratégico",
      "read_more": "LEER MÁS →",
      "article_1": {
        "tag": "Análisis Penal",
        "title": "Evolución de la Criminalidad Económica",
        "desc": "Un análisis estratégico sobre cómo han evolucionado los delitos económicos y por qué representan hoy uno de los mayores riesgos penales y reputacionales para las empresas."
      },
      "article_2": {
        "tag": "Constitucional",
        "title": "El Amparo como Garantía Vital",
        "desc": "Reflexiones sobre la eficacia de la tutela constitucional en el entorno procesal contemporáneo y la protección de derechos fundamentales."
      },
      "article_3": {
        "tag": "Tecnología",
        "title": "Desafíos de la Evidencia Digital",
        "desc": "Cómo la cadena de custodia y el análisis forense informático están transformando la valoración probatoria en el juicio oral."
      }
    },
    "noticias": {
      "title": "Noticias & Actualidad | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Actualidad / Información",
      "h1": "Noticias & Actualidad Jurídica",
      "read_more": "LEER MÁS →",
      "news_1": {
        "tag": "Legislación",
        "title": "Nuevas Reformas en Materia Penal",
        "desc": "El Ejecutivo Nacional anunció modificaciones sustanciales al Código Orgánico Procesal Penal que impactan directamente en los procedimientos de investigación y las medidas cautelares aplicables."
      },
      "news_2": {
        "tag": "Institucional",
        "title": "Nuevo Convenio Internacional",
        "desc": "Mac Consultores firma acuerdo de colaboración estratégica con firma asociada en Madrid para la atención de casos transfronterizos de alta complejidad."
      },
      "news_3": {
        "tag": "Jurisprudencia",
        "title": "Sentencia Vinculante TSJ",
        "desc": "La Sala Constitucional establece nuevos criterios sobre la aplicación del principio de presunción de inocencia en procesos por delitos económicos y financieros."
      }
    },
    "articulo_crimen": {
      "title": "Análisis Penal: Evolución de la Criminalidad Económica | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "<a href=\"blog.html\">Blog</a> / Análisis Penal",
      "h1": "Análisis Penal: Evolución de la Criminalidad Económica",
      "meta": "Categoría: Análisis Penal",
      "p1": "El entorno empresarial contemporáneo es un ecosistema dinámico y sofisticado. Hoy en día, los mayores riesgos para el patrimonio y la reputación de una organización no se materializan a través de la violencia física, sino que se ocultan en balances financieros alterados, transferencias transfronterizas opacas y estructuras societarias complejas. En este escenario, comprender cómo ha mutado el delito financiero no es un mero ejercicio académico, sino una necesidad imperativa de supervivencia corporativa.",
      "h2_1": "Introducción: Contexto y relevancia actual",
      "p2_1": "Cuando hablamos de “criminalidad económica”, nos referimos a una categoría dogmática y criminológica autónoma, profundamente diferenciada de la delincuencia patrimonial clásica (como el hurto, el robo o la estafa simple). Mientras que el delito patrimonial tradicional ataca bienes jurídicos individuales (la propiedad de una persona), el Derecho Penal Económico se encarga de tutelar bienes jurídicos supraindividuales o colectivos: el correcto funcionamiento del mercado, la integridad del sistema financiero, la libre competencia y los intereses socioeconómicos del Estado.",
      "p2_2": "La expansión y autonomía de esta rama del Derecho Penal no ocurrió en el vacío. Está intrínsecamente vinculada a las grandes crisis económicas y a las fallas estructurales de los mercados. La Gran Depresión de 1929 evidenció que el fraude bursátil y la manipulación de valores podían quebrar naciones enteras. Más recientemente, la crisis financiera global de 2008 y las disrupciones económicas derivadas de la pandemia demostraron que la irresponsabilidad directiva y la falta de controles internos tienen un poder destructivo masivo. A medida que la globalización comercial avanzó y la actividad empresarial se hizo transnacional, también lo hicieron los riesgos.",
      "p2_3": "Para las empresas venezolanas y latinoamericanas, esta evolución tiene un impacto directo y cotidiano. Nuestras corporaciones operan en entornos altamente regulados y a menudo volátiles, lo que incrementa la exposición a riesgos de fraude financiero corporativo, corrupción privada y pública, legitimación de capitales (lavado de dinero), ilícitos cambiarios y delitos vinculados al uso de criptoactivos. Ignorar esta realidad expone a las organizaciones no solo a la quiebra, sino a la persecución penal de sus juntas directivas y cuadros gerenciales.",
      "h2_2": "Breve evolución histórica del Derecho Penal Económico",
      "intro_2": "La consolidación de la criminalidad económica como un objeto de estudio y persecución autónoma ha sido un proceso gradual. Para entender su estado actual, debemos repasar sus principales hitos históricos, que han marcado la pauta tanto en Europa como en su posterior recepción en América Latina:",
      "h3_2a": "a) Paso de la Edad Media a la Edad Moderna",
      "p3_2a": "Durante siglos, los ilícitos comerciales (como la usura o el fraude en pesos y medidas) eran castigados severamente, pero no existía un sistema orgánico. Con la consolidación del Estado de Derecho y el modelo liberal (siglos XVIII y XIX), primó el principio de mínima intervención estatal (laissez-faire). El Derecho Penal se reservó para la protección de la vida y la propiedad física, dejando las disputas comerciales a los ámbitos civil y mercantil.",
      "h3_2b": "b) Período de entreguerras",
      "p3_2b": "Las economías de emergencia y escasez obligaron a los Estados a intervenir fuertemente en la fijación de precios, distribución de bienes y control de divisas. Aquí surge una política criminal económica más intensa, destinada a castigar el acaparamiento, la especulación y el mercado negro. El Estado asume un rol directivo en la economía y utiliza el Derecho Penal como herramienta de control.",
      "h3_2c": "c) Posguerra y Guerra Fría",
      "p3_2c": "Con la consolidación del Estado social y democrático de Derecho, se legitima el intervencionismo estatal para garantizar el bienestar colectivo. El mercado deja de verse como un ente intocable. Es en esta época cuando el criminólogo Edwin Sutherland acuña el término “delitos de cuello blanco” (1939), visibilizando que el crimen también es perpetrado por personas de alto estatus socioeconómico en el ejercicio de su profesión.",
      "h3_2d": "d) Posmodernidad y globalización",
      "p3_2d": "A finales del siglo XX y durante el siglo XXI se consolidan sistemáticamente los delitos económicos. Las crisis financieras contemporáneas, la desregulación de ciertos sectores y la explosión de la economía digital obligaron a los legisladores a crear tipos penales altamente especializados, orientados a proteger bienes intangibles como los datos, los algoritmos y la información privilegiada.",
      "p3_2e": "A partir de estos procesos, se hizo evidente que las herramientas tradicionales del Derecho Penal (pensadas para el delincuente callejero) eran inútiles frente al criminal de cuello blanco. Nace así una política criminal específica para los delitos económicos, con reglas probatorias propias y nuevas formas de imputación.",
      "h2_3": "Rasgos distintivos de la criminalidad económica contemporánea",
      "p2_3a": "Para defender a una corporación, primero debemos entender la anatomía del riesgo al que se enfrenta. La criminalidad económica actual presenta características que la alejan del paradigma delictivo tradicional:",
      "list_2_3": [
        "<strong>Elevada complejidad técnica:</strong> Los delitos se ocultan detrás de operaciones de ingeniería financiera, estructuras societarias multinivel, paraísos fiscales y productos de inversión opacos, requiriendo peritajes contables y financieros avanzados.",
        "<strong>Uso de la persona jurídica:</strong> La empresa deja de ser solo la víctima y se convierte en instrumento delictivo o “pantalla” para difuminar la responsabilidad de sus directivos.",
        "<strong>Frontera difusa entre ilícito y delito:</strong> Existe una línea delgada entre la infracción administrativa y el delito penal, lo que genera tensiones sobre cuándo el Estado debe acudir a la sanción penal.",
        "<strong>Impacto macrosocial vs. visibilidad:</strong> Un fraude bancario puede destruir los ahorros de miles de familias con un daño superior al de muchos delitos violentos, pero su percepción mediática suele ser menor.",
        "<strong>Dimensión transnacional y tecnológica:</strong> El dinero fluye a la velocidad de la luz y los delitos se apoyan en internet, sistemas de compensación electrónica y redes descentralizadas."
      ],
      "p2_3b": "Entre los ejemplos más típicos destacan el fraude fiscal y tributario, los delitos societarios, la legitimación de capitales, la corrupción, los delitos contra el mercado de valores y las estafas piramidales complejas.",
      "h2_4": "Impacto de la economía digital y los delitos financieros tecnológicos",
      "p2_4": "La digitalización de la economía, la proliferación de pasarelas de pagos electrónicos y el auge de los criptoactivos han generado modalidades de criminalidad económica inéditas, que desbordan con frecuencia los marcos legales e investigativos tradicionales. Entre los principales desafíos se encuentran el anonimato o pseudonimato, los conflictos de jurisdicción, las dificultades técnico-informáticas y la asimetría de información entre delincuentes y autoridades.",
      "h2_5": "Enfoque desde el Derecho Penal venezolano y latinoamericano",
      "p2_5": "América Latina, y Venezuela en particular, ha debido adaptar su andamiaje jurídico para no convertirse en refugio de la criminalidad económica global. En las últimas décadas se ha pasado de códigos penales decimonónicos a una hiperregulación mediante leyes penales especiales, con énfasis en delincuencia organizada, financiamiento al terrorismo, sistema bancario, mercado de valores, régimen cambiario y aduanas.",
      "h2_6": "Perspectiva de análisis económico del Derecho Penal",
      "p2_6": "Desde el análisis económico del Derecho Penal (Law & Economics), el delincuente de cuello blanco se concibe como un actor racional que sopesa costos y beneficios de delinquir, en un contexto donde los beneficios potenciales son altos, la probabilidad de detección es baja y la complejidad probatoria es elevada.",
      "h2_7": "Conclusiones y recomendaciones prácticas",
      "p2_7a": "La criminalidad económica exige que las empresas adopten programas integrales de compliance penal, políticas internas estrictas, capacitación continua, due diligence exhaustivos y consulta temprana a especialistas en Derecho Penal Económico.",
      "p2_7b": "En Mac Consultores Jurídicos & Asociados contamos con experiencia en evaluación de riesgos, diseño de estrategias de prevención y litigio de casos complejos de criminalidad económica, con un enfoque orientado a la protección integral de las víctimas corporativas y a la gestión estratégica de las crisis penales."
    }
  },
  "en": {
    "contacto": {
      "title": "Contact | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Client Intake",
      "h1": "Contact & Inquiries",
      "info": {
        "tag": "Direct Channels",
        "title": "We are here to protect your interests.",
        "desc": "To schedule a private consultation or request a technical assessment of your case, please use the following channels or complete the attached form.",
        "hq": "Headquarters",
        "email": "Email Address",
        "hours": "Business Hours",
        "hours_val": "Monday to Friday: 8:00 AM - 5:00 PM"
      },
      "form": {
        "label_name": "Full name",
        "placeholder_name": "e.g., John Doe",
        "label_email": "Email address",
        "placeholder_email": "example@email.com",
        "label_role": "Profession / Main role",
        "placeholder_role": "e.g., Chief Financial Officer, entrepreneur, university professor",
        "label_reason": "Main reason for inquiry",
        "reason_default": "Select an option",
        "reason_opt1": "Strategic criminal consulting on corporate matters (corporate criminal risks)",
        "reason_opt2": "Filing a complaint or accusation for economic or corporate actions (case without prior proceedings)",
        "reason_opt3": "Second opinion on an ongoing criminal proceeding of economic or corporate content (without replacing your attorney)",
        "reason_opt4": "Consular procedures and document management in Venezuela for clients abroad",
        "reason_opt5": "Asset and corporate transactions (real estate purchases/sales, company incorporation or mergers, etc.)",
        "hint_practice": "The firm centers its practice on corporate criminal law and matters of an economic, asset, and consular nature.",
        "label_penal": "Type of facts (only if your inquiry is criminal)",
        "penal_default": "Not applicable / Non-criminal",
        "penal_opt1": "Acts of an economic or corporate nature (fraud, corruption, embezzlement, corporate crimes)",
        "penal_opt2": "Violent crimes or other non-economic offenses (assault, homicide, domestic violence, etc.)",
        "hint_violent": "Mac Consultores Jurídicos & Asociados does not handle cases of common violent crimes or other criminal matters outside the corporate scope.",
        "label_desc": "Brief description of inquiry",
        "placeholder_desc": "Describe briefly and objectively the reason for your inquiry (maximum 500 characters).",
        "hint_admin": "This channel is not authorized to issue legal criteria or indicate what you should do in your specific case. Its purpose is exclusively administrative: to collect basic information to evaluate the relevance of a professional consultation subject to fees.",
        "hint_fees": "Every professional consultation is subject to fees, which may be billed hourly or according to the scope of the engagement. For any representation actions (e.g., filing complaints or lawsuits, managing consular procedures, or appearances on your behalf), it is essential to grant a power of attorney previously analyzed and drafted in a personalized manner for your case.",
        "hint_relation": "Communications sent through this form do not, by themselves, constitute an attorney-client relationship, nor do they imply acceptance of the matter by the firm.",
        "btn": "SUBMIT REQUEST FOR ADMISSION",
        "success": "Your request for admission has been registered. The firm will assess the information provided and, if applicable, contact you to coordinate a professional consultation subject to fees."
      },
      "channels": {
        "title": "Alternative Channels",
        "phone1": "📞 Direct Calls (Mobile 1):",
        "phone2": "📞 Direct Calls (Mobile 2):",
        "landline": "☎ Landline (Caracas):",
        "virtual": "💻 Virtual Inquiries:",
        "virtual_link": "Meeting via Google Meet",
        "follow": "📱 X (Twitter):",
        "follow_link": "Follow us on X for updates"
      }
    },
    "legal_pages": {
      "notice_title": "Legal Notice | Mac Consultores Jurídicos & Asociados",
      "notice_h1": "Legal Notice",
      "notice_breadcrumb": "Corporate Information",
      "notice": {
        "subtitle": "Terms of Use and Legal Information",
        "sec1_title": "1. Website Ownership",
        "sec1_desc": "This website is owned by MAC CONSULTORES JURÍDICOS & ASOCIADOS. The primary purpose of this space is to provide general information about our legal services, professional team, and areas of practice.",
        "sec2_title": "2. Informational Purpose",
        "sec2_desc": "The contents of this website are for informational purposes only and do not, under any circumstances, constitute legal, tax, or professional advice. Reading or receiving this information does not create an attorney-client relationship between the user and the firm.",
        "sec3_title": "3. Intellectual and Industrial Property",
        "sec3_desc": "All intellectual and industrial property rights over the content of this website, its graphic design, logos, texts, and images are the exclusive property of MAC CONSULTORES JURÍDICOS & ASOCIADOS. Their reproduction, distribution, or modification without express authorization is strictly prohibited.",
        "sec4_title": "4. Limitation of Liability",
        "sec4_desc": "The firm is not responsible for decisions made based on the information provided on this site or for any potential damages arising from its use. References to regulations or laws may not be updated at the time of your inquiry."
      },
      "privacy_title": "Privacy Policy | Mac Consultores Jurídicos & Asociados",
      "privacy_h1": "Privacy Policy",
      "privacy_breadcrumb": "Corporate Information",
      "privacy": {
        "subtitle": "Data Protection and Confidentiality",
        "sec1_title": "1. Data Collection",
        "sec1_desc": "Through our contact form or direct communication by email, we collect only the strictly necessary personal data (name, email, telephone, and reason for inquiry) to manage your professional service request.",
        "sec2_title": "2. Purpose of Processing",
        "sec2_desc": "The data provided will be used exclusively to address your inquiry, preliminarily evaluate your case, and send you relevant information about the services of MAC CONSULTORES JURÍDICOS & ASOCIADOS. We do not share, sell, or transfer your data to third parties, except as required by law.",
        "sec3_title": "3. Confidentiality",
        "sec3_desc": "Our firm is governed by strict compliance with professional secrecy. All information provided, even before establishing an attorney-client relationship, will be treated with the utmost confidentiality and under appropriate security protocols to prevent unauthorized access.",
        "sec4_title": "4. User Rights",
        "sec4_desc": "You have the right to request at any time the access, rectification, update, or deletion of your personal data from our databases by sending a communication to the official email address: <a href=\"mailto:infomacconsul@gmail.com\">infomacconsul@gmail.com</a>."
      }
    },
    "nav": {
      "inicio": "Home",
      "firma": "The Firm",
      "quienes_somos": "Our Firm",
      "nuestro_ceo": "Our Managing Director",
      "blog": "Legal Blog",
      "noticias": "News",
      "servicios": "Services",
      "internacional": "International",
      "alianzas": "Alliances",
      "contacto": "Contact"
    },
    "footer": {
      "desc": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests.",
      "nav_title": "Navigation",
      "services_title": "Services",
      "offices_title": "Offices",
      "penal": "Criminal Law",
      "constitucional": "Constitutional Defense",
      "consular": "Consular Services",
      "colaboracion": "International Cooperation",
      "location": "Caracas, Venezuela",
      "cta": "SCHEDULE A MEETING →",
      "copyright": "© 2026 Mac Consultores Jurídicos & Asociados. All rights reserved.",
      "local_time": "Local time",
      "legal_notice": "Legal Notice",
      "privacy": "Privacy Policy"
    },
    "quienes_somos": {
      "title": "Who We Are | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Home / The Firm",
      "h1": "Who We Are",
      "history": {
        "tag": "Our History",
        "title": "A trajectory defined by rigor and integrity.",
        "desc_1": "Mac Consultores Jurídicos & Asociados is a boutique law firm based in Caracas, conceived to offer high-complexity legal solutions. Our structure is founded on technical excellence and ethical commitment, providing specialized defense and strategic advisory that transcends traditional legal practice.",
        "desc_2": "We understand that every case is unique and requires its own solution architecture. Therefore, we integrate forensic experience with the academic backing of over two decades of professional practice."
      },
      "architecture": {
        "tag": "LEGAL ARCHITECTURE FOR HIGH‑COMPLEXITY CHALLENGES",
        "title": "Discover our firm’s history and philosophy",
        "desc": "Explore in detail the trajectory of Mac Consultores Jurídicos & Associates, our integrated advisory model, and the principles that guide every strategic decision.",
        "link": "READ MORE →"
      },
      "values": {
        "tag": "Institutional Values",
        "title": "Our Pillars",
        "card_1": {
          "title": "Strategic Vision",
          "desc": "We do not merely react to conflict; we build preventive safeguards and anticipate risks to protect our clients' interests."
        },
        "card_2": {
          "title": "Technical Rigor",
          "desc": "Every action is backed by a deep dogmatic mastery and an exhaustive analysis of contemporary legal reality."
        },
        "card_3": {
          "title": "Professional Confidentiality",
          "desc": "Discretion and confidentiality are the foundation of our relationship with the client, ensuring an environment of maximum trust."
        }
      },
      "mission": {
        "quote": "\"Our mission is to transform legal challenges into scenarios of security and growth.\"",
        "desc": "We aim to be the benchmark of excellence in the Venezuelan legal market, distinguished by our capability to resolve highly sensitive technical matters with solid and transparent results.",
        "btn": "MEET OUR MANAGING DIRECTOR"
      }
    },
    "quienes_somos_detalle": {
      "title": "Legal Architecture | Mac Consultores Jurídicos & Associates",
      "breadcrumb": "Home / The Firm / Our History",
      "h1": "Legal architecture for high-complexity challenges",
      "history": {
        "tag": "Our History",
        "p1": "Mac Consultores Jurídicos & Associates is a boutique law firm specializing in high-complexity legal services, headquartered in Caracas, Venezuela, founded in 2015 by attorney and university professor Marco A. Colina G.",
        "p2": "From its inception, the firm was conceived as a meeting point between academic training and the professional practice of Law. Its founding partner possesses over twenty years of continuous professional practice, complemented by postgraduate studies in Constitutional Law and Criminal and Legal Sciences, alongside a consolidated trajectory in strategic litigation, specialized legal consulting, and university teaching.",
        "p3": "Under his general direction, Mac Consultores has built an integrated legal advisory model aimed at both individuals and corporate entities, with clients inside and outside Venezuela. This international projection allows clients located in any jurisdiction to entrust their representation to the firm through the granting of the corresponding powers of attorney and mandates, in accordance with applicable legal formalities.",
        "p4": "Currently, Dr. Marco A. Colina G. serves as the Managing Director (Chief Executive Officer - CEO) within Mac Consultores Jurídicos & Associates, being responsible for the strategic, administrative, and operational leadership of the firm."
      },
      "mission": {
        "title": "Mission and Values",
        "p1": "Our mission is to transform our clients' legal challenges into scenarios of legal certainty and growth, through strategic, technically sound solutions developed with absolute adherence to professional ethics.",
        "p2": "This mission is upheld by principles that guide each of our actions:",
        "list": [
          "<strong>Legality and professional diligence</strong> — as the unwavering foundation of all legal action.",
          "<strong>Technical independence</strong> — which guarantees objective criteria, free from interference external to the client's interests.",
          "<strong>Transparency and good faith</strong> — at every stage of the professional relationship with those who trust in us.",
          "<strong>Confidentiality and professional secrecy</strong> — as an absolute commitment in the treatment of the information entrusted to us."
        ]
      },
      "areas": {
        "title": "Practice Areas",
        "p1": "The firm's professional practice is concentrated in three major lines of specialization, handled with a rigorous technical approach and adapted to the particularities of each matter:",
        "list": [
          "<strong>Corporate Criminal Law:</strong> Specialized technical defense against criminal investigations and proceedings involving corporate entities, their directors, and representatives.",
          "<strong>Strategic Consulting in Legal Risks:</strong> Preventive diagnosis and design of mitigation mechanisms against high-impact legal exposures.",
          "<strong>Litigation and Specialized Defense:</strong> Technical representation before the competent jurisdictional authorities in criminal, constitutional, and high-complexity matters."
        ]
      },
      "distinction": {
        "title": "What Sets Us Apart",
        "p1": "Every matter submitted for our consideration is subject to a rigorous preliminary evaluation aimed at determining its technical and legal viability before defining any course of action. This comprehensive analysis—which examines backgrounds, evidentiary elements, and applicable regulations—allows us to build a solid, coherent, and verifiable case theory, tailored to the legitimate interests of each client.",
        "p2": "We complement this methodology with the incorporation of advanced technological tools, which allow us to optimize information processing and substantially expedite response times.",
        "p3": "This combination of legal tradition and technical modernity enables us to offer agile responses without compromising the rigor that each case demands.",
        "p4": "At Mac Consultores Jurídicos & Associates, we do not make promises of results, but rather a commitment to serious analysis, a well-founded strategy, and close accompaniment at every stage of the process. Therefore, we consolidate ourselves as the strategic ally that individuals and corporations need to protect their rights, their assets, and their reputation.",
        "quote": "\"Our mission is to transform legal challenges into scenarios of legal certainty and growth.\""
      }
    },
    "ceo": {
      "title": "Our CEO | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Institutional Leadership",
      "h1": "Atty. Marco A. Colina G.",
      "about": {
        "tag": "Managing Director",
        "title": "Technical vision and forensic leadership.",
        "desc_1": "Attorney Marco A. Colina G. is the founder and Managing Director of Mac Consultores Jurídicos & Asociados. With over 20 years of uninterrupted professional practice, his career has consolidated in high-complexity litigation in criminal and constitutional matters.",
        "desc_2": "His approach combines dogmatic rigor with a pragmatic view of justice, allowing him to lead defense strategies that have set precedents in the Venezuelan jurisdiction. He is a specialist in Criminal Law and has extensive training in the protection of fundamental rights."
      },
      "profile": {
        "tag": "Professional Profile",
        "title": "Leadership Specialties",
        "card_1": {
          "title": "Cassation Litigation",
          "desc": "Expert in filing and defending extraordinary appeals before the Supreme Tribunal of Justice."
        },
        "card_2": {
          "title": "Superior Criminal Law",
          "desc": "Handling white-collar crimes, organized crime, and advanced technical criminal defense."
        },
        "card_3": {
          "title": "Constitutional Protection",
          "desc": "Specialist in the activation of jurisdictional guarantees for the protection of liberty and due process."
        }
      }
    },
    "socios": {
      "title": "Partners & Collaborators | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Structure / Team",
      "h1": "Strategic Partners & Collaborators",
      "intro": {
        "tag": "Human Capital",
        "title": "Professional excellence in network.",
        "desc": "Our firm operates under a multidisciplinary collaboration model, integrating the best specialists in each area to guarantee a 360-degree technical defense."
      },
      "cards": {
        "card_1": {
          "title": "Principal Partners",
          "desc": "Strategic leadership and forensic supervision of all highly sensitive cases of the firm."
        },
        "card_2": {
          "title": "External Consultants",
          "desc": "Network of experts in finance, computer forensics, and legal medicine that support our litigation strategies."
        },
        "card_3": {
          "title": "International Allies",
          "desc": "Correspondents in key jurisdictions for handling cross-border matters and consular management."
        }
      }
    },
    "firma": {
      "strategies": {
        "tag": "Strategic case highlights",
        "title": "Strategies that reflect our litigation approach",
        "case_selection": {
          "tag": "Case selection",
          "title": "Prioritizing cases with real viability",
          "desc": "We prioritize cases with real legal viability, following a rigorous analysis of the facts and applicable regulations. This methodology avoids unnecessary litigation and aligns expectations with legally sound scenarios."
        },
        "case_theory": {
          "tag": "Case theory",
          "title": "Case theory as the core of defense",
          "desc": "Every matter is structured from the outset with a clear, coherent, and verifiable case theory. We integrate facts, evidence, and law into a solid legal narrative that guides all procedural actions, from the first step to case closure."
        },
        "representative_scenarios": {
          "tag": "Representative scenarios",
          "title": "Strategies applied in sensitive contexts",
          "desc": "From economic criminal investigations against companies to constitutional amparo actions, our approach focuses on anticipating risks, securing the evidentiary chain, and protecting the client's reputation in every strategic decision."
        }
      }
    },
    "title": "Mac Consultores Jurídicos & Asociados | Legal Excellence",
    "breadcrumb": "Areas of Excellence",
    "h1": "Legal Services",
    "intro": {
      "tag": "Areas of Excellence",
      "h2": "Comprehensive solutions tailored to the most demanding challenges."
    },
    "services": {
      "card_1": {
        "title": "Criminal and Procedural Criminal Law",
        "desc": "We assume comprehensive technical defense in high-complexity proceedings, economic criminality, and financial crimes. We focus on the control of procedural guarantees and the design of robust litigation strategies.",
        "list": [
          "Defense against criminal charges",
          "Cassation and Appeal Remedies",
          "Corporate Criminal Liability",
          "Money Laundering"
        ]
      },
      "card_2": {
        "title": "Constitutional Law",
        "desc": "Effective protection of fundamental rights through the activation of constitutional protection mechanisms. We safeguard the legal security of our clients against institutional violations.",
        "list": [
          "Constitutional Amparo Actions",
          "Habeas Corpus & Habeas Data",
          "Conventionality Control",
          "Normative Interpretation Consultancy"
        ]
      },
      "card_3": {
        "title": "Cybercrimes and Digital Evidence",
        "desc": "Specialization in the legal approach to technological contingencies. Incident management, electronic fraud, and legal analysis of digital evidence.",
        "list": [
          "Defense in Cybercrimes",
          "Fraud Management & Digital Sabotage",
          "Legal Audit of Evidence",
          "Data Privacy Protection"
        ]
      },
      "card_4": {
        "title": "Preventive Legal Consulting",
        "desc": "Design of legal structures for risk mitigation. We accompany corporations and individuals in strategic decision-making to avoid procedural contingencies.",
        "list": [
          "Compliance & Regulatory Compliance",
          "Legal Risk Management",
          "Complex Contractual Structuring",
          "Corporate Governance Advisory"
        ]
      }
    },
    "cta": {
      "title": "Do you require a strategic assessment of your legal situation?",
      "desc": "Our team of experts is prepared to analyze your case with the technical rigor it deserves.",
      "btn": "START PRIVATE CONSULTATION"
    },
    "tramites_consulares": {
      "title": "Venezuelans Abroad | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Services / Diaspora",
      "h1": "Legal Management for Venezuelans Abroad",
      "subtitle": "We protect your interests in Venezuela from anywhere in the world.",
      "intro_p": "Globalization and the Venezuelan diaspora have multiplied cases where individuals maintain asset, family, and procedural ties in the country, even while residing permanently abroad. Likewise, we assist citizens of other nationalities who require reliable local legal support in Venezuela. At Mac Consultores Jurídicos & Asociados, we provide effective judicial and extrajudicial protection, designed for those who need remote legal representation without traveling to the national territory.",
      "support": {
        "tag": "Areas of Support",
        "title": "Specialized Services for Abroad",
        "card_1": {
          "title": "Consular Practice",
          "desc": "Legal empowerment and strategic representation before consular missions and migration authorities to guarantee your mobility and fundamental rights."
        },
        "card_2": {
          "title": "Document Management",
          "desc": "International legalization, Hague Apostille, and validation of public documents with guaranteed efficacy and procedural technical rigor."
        },
        "card_3": {
          "title": "Family Law",
          "desc": "Specialized litigation in cases of international child abduction and execution of transnational child support obligations with a humane approach."
        },
        "card_4": {
          "title": "Inheritances & Estates",
          "desc": "Resolution of inheritance disputes and comprehensive estate planning with assets or heirs dispersed across different global jurisdictions."
        },
        "card_5": {
          "title": "Judicial Representation",
          "desc": "High-end technical defense in criminal, civil, or administrative proceedings in Venezuelan territory, without requiring physical presence."
        },
        "card_6": {
          "title": "Strategic Powers of Attorney",
          "desc": "Advisory and drafting of mandates and special powers of attorney to ensure your asset and legal interests in Venezuela are always shielded."
        }
      },
      "form": {
        "title": "Request Assistance from Abroad",
        "desc": "Tell us your situation and country of residence. An expert will contact you to coordinate representation in Venezuela.",
        "label_name": "First & Last Name",
        "placeholder_name": "e.g., John Doe",
        "label_country": "Country of Residence",
        "placeholder_country": "e.g., Spain, United States, Chile",
        "label_message": "Message / Request",
        "placeholder_message": "Briefly describe the transaction or legal case in Venezuela",
        "btn": "SUBMIT REQUEST FOR ASSESSMENT"
      }
    },
    "colaboracion_internacional": {
      "title": "International Collaboration | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Alliances / B2B",
      "h1": "International Collaboration",
      "intro": {
        "tag": "Partnership",
        "title": "Strategic allies for international law firms.",
        "p1": "In a globalized legal environment, collaboration between firms is essential. Mac Consultores Jurídicos & Asociados acts as the strategic local arm for international firms requiring specialized support in Venezuela.",
        "p2": "We offer a B2B services platform designed to integrate with the quality and response standards of the most demanding global firms."
      },
      "proposal": {
        "tag": "Our Proposal",
        "title": "Local Support for Global Firms",
        "card_1": {
          "title": "Legal Correspondency",
          "desc": "We act as your local correspondents in Venezuela, managing judicial actions and administrative procedures with complete transparency."
        },
        "card_2": {
          "title": "Legal Due Diligence",
          "desc": "Exhaustive risk analysis and legal audits in the Venezuelan jurisdiction for mergers, acquisitions, or investment projects."
        },
        "card_3": {
          "title": "Legal Opinions",
          "desc": "Issuance of technical reports and legal opinions on Venezuelan regulations to be used in foreign proceedings."
        }
      }
    },
    "seo": {
      "blog_criminalidad_economica": {
        "title": "Criminal Analysis: Evolution of Economic Crime | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Criminal Analysis: Evolution of Economic Crime | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "privacidad": {
        "title": "Privacy Policy | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Privacy Policy | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "blog": {
        "title": "Legal Blog | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Legal Blog | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "tramites_consulares": {
        "title": "Venezuelans Abroad | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Venezuelans Abroad | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "index": {
        "title": "Mac Legal Consultants & Associates | Legal Excellence",
        "description": "Boutique law firm in Caracas specialized in highly complex criminal litigation, constitutional law, and preventive corporate compliance at a national and international level.",
        "og_title": "Mac Legal Consultants & Associates | Legal Excellence",
        "og_description": "Boutique law firm in Caracas specialized in highly complex criminal litigation, constitutional law, and corporate compliance."
      },
      "quienes_somos": {
        "title": "The Firm | Mac Legal Consultants",
        "description": "Learn about the history, values, and the team of professionals behind Mac Legal Consultants & Associates. Dedicated to the impeccable practice of Law in Venezuela.",
        "og_title": "The Firm | Mac Legal Consultants",
        "og_description": "Learn about the history, values, and team behind Mac Legal Consultants & Associates."
      },
      "noticias": {
        "title": "News & Legal Updates | Mac Consultants",
        "description": "Stay informed with the latest legal bulletins, landmark rulings, criminal reforms, and expert opinions from our firm.",
        "og_title": "Legal Updates and News | Mac Consultants",
        "og_description": "Latest news, landmark rulings, and legal analysis from our experts in Venezuelan and international law."
      },
      "blog_regimen_poderes_cpc_copp": {
        "title": "Criminal Procedure: The Regime of Powers in the CPC and the COPP | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Criminal Procedure: The Regime of Powers in the CPC and the COPP | Mac Consultores Jurídicos & Asociados",
        "og_description": "Enabled procedural acts and private accusation: With a specially granted power of attorney, the victim's representative can access the investigation file, request procedures, attend hearings, and exercise the right to reply."
      },
      "socios_colaboradores": {
        "title": "Partners & Collaborators | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Partners & Collaborators | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "servicios": {
        "title": "Practice Areas and Services | Mac Consultants",
        "description": "Our legal services include: Criminal Law, Constitutional Law, Corporate Compliance, Extraditions, and consulting for individuals and corporations.",
        "og_title": "Specialized Legal Services | Mac Consultants",
        "og_description": "Criminal Law, Constitutional Law, Extraditions, and preventive Corporate Compliance."
      },
      "colaboracion_internacional": {
        "title": "International Collaboration | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "International Collaboration | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "nuestro_ceo": {
        "title": "Our CEO | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Our CEO | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "contacto": {
        "title": "Contact | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Contact | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      },
      "blog_amparo_garantia_vital": {
        "title": "Constitutional: Amparo as a Vital Guarantee | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Constitutional: Amparo as a Vital Guarantee | Mac Consultores Jurídicos & Asociados",
        "og_description": "In the context of corporate Criminal Law, constitutional amparo represents the final and most forceful line of defense against arbitrary or disproportionate State actions that threaten the operational continuity of a company or the freedom of its directors."
      },
      "aviso_legal": {
        "title": "Legal Notice | Mac Consultores Jurídicos & Asociados",
        "description": null,
        "og_title": "Legal Notice | Mac Consultores Jurídicos & Asociados",
        "og_description": "High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients' interests."
      }
    },
    "hero": {
      "tag": "Rigor & Strategy",
      "h1": "Legal architecture for high-complexity cases.",
      "desc": "Tailored criminal and constitutional defense, focusing on the effective protection of rights, assets, and reputation in sensitive environments.",
      "btn": "Request private consultation"
    },
    "about": {
      "tag": "Our Firm",
      "title": "Solid foundations for complex challenges.",
      "desc_1": "At Mac Consultores Jurídicos & Asociados, we view law as a discipline of high precision. Our practice is defined by integrity, technical rigor, and the capacity for strategic anticipation at every stage of the proceedings.",
      "desc_2": "Led by Atty. Marco A. Colina G., we combine over two decades of experience in criminal and constitutional litigation with a vanguard academic vision, ensuring solid and ethical results for a national and international clientele.",
      "btn": "Discover our history"
    },
    "specialties": {
      "tag": "Specialties",
      "title": "Strategic Practice Areas",
      "details_link": "VIEW DETAILS →",
      "card_1": {
        "title": "Technical Criminal Defense",
        "desc": "Comprehensive defense strategies in high-complexity criminal matters, white-collar crime, and cybercrimes with a cutting-edge technical approach."
      },
      "card_2": {
        "title": "Constitutional Protection",
        "desc": "Effective protection of fundamental rights through Constitutional Amparo, Habeas Corpus, and Habeas Data before competent judicial instances."
      },
      "card_3": {
        "title": "International Law",
        "desc": "Strategic representation before consular missions and multilateral organizations for the Venezuelan diaspora and complex cross-border matters."
      }
    },
    "news": {
      "tag": "Current Affairs",
      "title": "News & Publications",
      "read_more": "READ MORE →",
      "card_1": {
        "title": "Impact of the New Criminal Legislation",
        "desc": "Detailed analysis of recent procedural reforms and their implications for corporate defense."
      },
      "card_2": {
        "title": "Trends in Constitutional Amparo",
        "desc": "Review of recent case law and its fundamental impact on the protection of corporate and individual rights."
      },
      "card_3": {
        "title": "New International Agreements",
        "desc": "How new international collaboration frameworks directly affect consular management for the Venezuelan diaspora."
      }
    },
    "home": {
      "resources": {
        "tag": "Resources",
        "title": "Strategic resources for businesses",
        "guide": {
          "tag": "Economic criminal risk",
          "title": "5-step guide to protect your company in economic criminal investigations",
          "desc": "Practical document summarizing key prevention, documentation, and reaction measures in economic criminal risk scenarios.",
          "cta": "DOWNLOAD GUIDE →"
        },
        "checklist": {
          "tag": "Defense documentation",
          "title": "Checklist of documentation for corporate criminal defense",
          "desc": "Structured list of essential documents to organize criminal defense and respond quickly to requests from authorities.",
          "cta": "DOWNLOAD CHECKLIST →"
        },
        "template": {
          "tag": "International services",
          "title": "Template for international legal services agreements",
          "desc": "Model agreement for international clients, with clauses on jurisdiction, applicable law, fees, and confidentiality.",
          "cta": "DOWNLOAD TEMPLATE →"
        },
        "cta": "View strategic resources"
      },
      "strategies": {
        "tag": "Strategic case highlights",
        "title": "Strategies that reflect how we litigate",
        "case_selection": {
          "tag": "Case selection",
          "title": "Prioritizing cases with real viability",
          "desc": "We prioritize cases with genuine legal viability, after a rigorous analysis of facts and applicable law. This methodology avoids unnecessary litigation and aligns expectations with legally realistic scenarios."
        },
        "case_theory": {
          "tag": "Case theory",
          "title": "Case theory as the axis of defense",
          "desc": "Each matter is structured from the outset with a clear, coherent, and verifiable case theory. We integrate facts, evidence, and law into a solid legal narrative that guides the entire procedural strategy.",
          "long_title": "Case theory: from hypothesis to procedural strategy",
          "long_desc": "Case theory is not rhetorical decoration; it is the backbone of any serious defense. We start from a central hypothesis that explains what happened, why it happened, and how the evidence supports that version against the prosecution’s narrative.\n\nFrom the very first steps, we define the evidentiary story we want the court to hear and understand: which facts are admitted, which are disputed, where the accusation has gaps, and which indicators reveal that the charges are overstated or disproportionate. This theory guides the preparation of statements, the selection of experts, cross‑examination, and the use of documentary evidence.\n\nThe result is a coherent procedural strategy: every brief, every appearance, and every argument responds to a single guiding axis, avoiding defensive contradictions, improvisation, and shifts that undermine the client’s credibility before judges and the Public Prosecutor’s Office."
        },
        "representative_scenarios": {
          "tag": "Representative scenarios",
          "title": "Strategies applied in sensitive contexts",
          "desc": "From economic criminal investigations against companies to constitutional protection actions, our approach focuses on anticipating risks, securing the evidentiary chain, and protecting the client's reputation in each strategic decision.",
          "long_title": "Strategies in sensitive criminal and constitutional scenarios",
          "long_desc": "In the most sensitive matters —economic criminal investigations against companies, proceedings with media exposure, or constitutional protection actions— we design strategy across three levels: legal, evidentiary, and reputational.\n\nOn the legal level, we identify the applicable legal framework and the relevant case law, to know precisely what the real margins of maneuver are and which procedural avenues offer the strongest protection for the client. On the evidentiary level, we focus on preserving the chain of custody, refining the available evidence, and anticipating the attacks the opposing party will direct at documents and witnesses.\n\nFinally, we analyze the reputational impact of each decision: how we communicate developments to the client, the risk of leaks or public exposure, and which measures can be taken to minimize damage to personal or corporate image, without sacrificing the strength of the technical defense."
        }
      }
    },
    "strategy_case_theory": {
      "title": "Case Theory | Mac Consultores",
      "h1": "Case Theory: From Hypothesis to Procedural Strategy",
      "p1": "Case theory is not rhetorical discourse; it is the backbone of any serious defense. We start from a central hypothesis that explains what happened, why it happened, and how the evidentiary elements support it against the accusatory version.",
      "p2": "From the earliest proceedings, we define the evidentiary narrative we want the court to hear and understand: what facts are admitted, which are disputed, what gaps the accusation has, and what indicators reveal that the imputation is forced or disproportionate. This theory guides the preparation of statements, selection of experts, cross-examination, and the use of documentary evidence.",
      "p3": "The result is a coherent procedural strategy: every writ, every action, and every plea responds to the same argumentative axis, avoiding defensive contradictions, improvisations, and shifts that undermine the client's credibility before the judges and the Public Prosecutor."
    },
    "strategy_representative_scenarios": {
      "title": "Representative Scenarios | Mac Consultores",
      "h1": "Representative Acting Scenarios",
      "intro": "Below are generic examples of matters in which the firm assumes representation, always safeguarding the confidentiality inherent to our practice:",
      "li1": "Defense or complaint for complex financial fraud within corporate groups (misappropriation of funds, documentary falsification, concealment of assets).",
      "li2": "Technical defense against investigations for money laundering, organized crime, and administrative corruption.",
      "li3": "Preventive advice and defense in criminal-tax and criminal-banking matters.",
      "li4": "Criminal litigation associated with shareholder conflicts, misappropriation, and disloyal administration.",
      "li5": "Consulting for the prevention of corporate criminal risks and legal compliance protocols (Compliance)."
    },
    "blog": {
      "title": "Legal Blog | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Current Affairs / Analysis",
      "h1": "Strategic Legal Blog",
      "read_more": "READ MORE →",
      "article_1": {
        "tag": "Criminal Analysis",
        "title": "Evolution of Economic Crime",
        "desc": "A strategic analysis on how economic crimes have evolved and why they represent today one of the greatest criminal and reputational risks for companies."
      },
      "article_2": {
        "tag": "Constitutional",
        "title": "Amparo as a Vital Guarantee",
        "desc": "Reflections on the effectiveness of constitutional protection in the contemporary procedural environment and the protection of fundamental rights."
      },
      "article_3": {
        "tag": "Technology",
        "title": "Challenges of Digital Evidence",
        "desc": "How chain of custody and forensic computer analysis are transforming evidentiary assessment in oral trials."
      }
    },
    "noticias": {
      "title": "News & Current Affairs | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "Current Affairs / Information",
      "h1": "News & Legal Current Affairs",
      "read_more": "READ MORE →",
      "news_1": {
        "tag": "Legislation",
        "title": "New Reforms in Criminal Matters",
        "desc": "The National Executive announced substantial modifications to the Organic Criminal Procedural Code that directly impact investigative procedures and applicable precautionary measures."
      },
      "news_2": {
        "tag": "Institutional",
        "title": "New International Agreement",
        "desc": "Mac Consultores signs strategic collaboration agreement with associated firm in Madrid to handle highly complex cross-border cases."
      },
      "news_3": {
        "tag": "Jurisprudence",
        "title": "TSJ Binding Ruling",
        "desc": "The Constitutional Chamber establishes new criteria on the application of the presumption of innocence principle in proceedings for economic and financial crimes."
      }
    },
    "articulo_crimen": {
      "title": "Criminal Analysis: Evolution of Economic Crime | Mac Consultores Jurídicos & Asociados",
      "breadcrumb": "<a href=\"blog.html\">Blog</a> / Criminal Analysis",
      "h1": "Criminal Analysis: Evolution of Economic Crime",
      "meta": "Category: Criminal Analysis",
      "p1": "The contemporary business environment is a dynamic and sophisticated ecosystem. Today, the greatest risks to an organization's assets and reputation do not materialize through physical violence, but are hidden in altered financial statements, opaque cross-border transfers, and complex corporate structures. In this scenario, understanding how financial crime has mutated is not a mere academic exercise, but an imperative necessity for corporate survival.",
      "h2_1": "Introduction: Context and Current Relevance",
      "p2_1": "When we speak of “economic criminality,” we refer to an autonomous dogmatic and criminological category, deeply differentiated from classic property crime (such as theft, robbery, or simple fraud). While traditional property crime attacks individual legal assets (a person's property), Economic Criminal Law is responsible for protecting supra-individual or collective legal assets: the correct functioning of the market, the integrity of the financial system, free competition, and the socio-economic interests of the State.",
      "p2_2": "The expansion and autonomy of this branch of Criminal Law did not occur in a vacuum. It is intrinsically linked to major economic crises and structural market failures. The Great Depression of 1929 showed that stock market fraud and securities manipulation could bankrupt entire nations. More recently, the global financial crisis of 2008 and the economic disruptions derived from the pandemic demonstrated that executive irresponsibility and the lack of internal controls have massive destructive power. As commercial globalization advanced and business activity became transnational, so did the risks.",
      "p2_3": "For Venezuelan and Latin American companies, this evolution has a direct and daily impact. Our corporations operate in highly regulated and often volatile environments, which increases exposure to risks of corporate financial fraud, private and public corruption, money laundering, exchange rate violations, and crimes linked to the use of crypto assets. Ignoring this reality exposes organizations not only to bankruptcy, but also to the criminal prosecution of their boards of directors and management teams.",
      "h2_2": "Brief Historical Evolution of Economic Criminal Law",
      "intro_2": "The consolidation of economic criminality as an autonomous object of study and prosecution has been a gradual process. To understand its current state, we must review its main historical milestones, which have set the tone both in Europe and in its subsequent reception in Latin America:",
      "h3_2a": "a) Transition from the Middle Ages to the Modern Era",
      "p3_2a": "For centuries, commercial offenses (such as usury or fraud in weights and measures) were severely punished, but an organic system did not exist. With the consolidation of the Rule of Law and the liberal model (18th and 19th centuries), the principle of minimal state intervention (laissez-faire) prevailed. Criminal Law was reserved for the protection of life and physical property, leaving commercial disputes to the civil and mercantile spheres.",
      "h3_2b": "b) Interwar Period",
      "p3_2b": "Emergency and scarcity economies forced States to intervene heavily in price fixing, distribution of goods, and currency control. Here arises a more intense economic criminal policy, aimed at punishing hoarding, speculation, and the black market. The State assumes a leading role in the economy and uses Criminal Law as a control tool.",
      "h3_2c": "c) Post-war & Cold War",
      "p3_2c": "With the consolidation of the social and democratic Rule of Law, state interventionism is legitimized to guarantee collective welfare. The market is no longer seen as an untouchable entity. It is during this era that criminologist Edwin Sutherland coined the term “white-collar crime” (1939), making visible that crime is also perpetrated by individuals of high socio-economic status in the exercise of their profession.",
      "h3_2d": "d) Postmodernity and Globalization",
      "p3_2d": "At the end of the 20th century and during the 21st century, economic crimes systematically consolidated. Contemporary financial crises, deregulation of certain sectors, and the explosion of the digital economy forced legislators to create highly specialized criminal definitions, oriented to protect intangible assets such as data, algorithms, and inside information.",
      "p3_2e": "From these processes, it became clear that traditional Criminal Law tools (designed for street criminals) were useless against white-collar criminals. Thus was born a specific criminal policy for economic crimes, with its own rules of evidence and new forms of imputation.",
      "h2_3": "Distinctive Features of Contemporary Economic Crime",
      "p2_3a": "To defend a corporation, we must first understand the anatomy of the risk it faces. Current economic crime presents characteristics that set it apart from the traditional criminal paradigm:",
      "list_2_3": [
        "<strong>High technical complexity:</strong> Crimes are hidden behind financial engineering operations, multi-level corporate structures, tax havens, and opaque investment products, requiring advanced accounting and financial expertise.",
        "<strong>Use of the legal entity:</strong> The company ceases to be just the victim and becomes a criminal instrument or “screen” to blur the liability of its executives.",
        "<strong>Blurry border between administrative offense and crime:</strong> There is a thin line between administrative violations and criminal offenses, which generates tension over when the State should resort to criminal punishment.",
        "<strong>Macrosocial impact vs. visibility:</strong> A banking fraud can destroy the savings of thousands of families with damage superior to that of many violent crimes, but its media perception is usually lower.",
        "<strong>Transnational and technological dimension:</strong> Money flows at the speed of light and crimes are supported by the internet, electronic clearing systems, and decentralized networks."
      ],
      "p2_3b": "Among the most typical examples are tax and fiscal fraud, corporate crimes, money laundering, corruption, stock market offenses, and complex Ponzi schemes.",
      "h2_4": "Impact of the Digital Economy and Financial Tech Crimes",
      "p2_4": "The digitalization of the economy, the proliferation of electronic payment gateways, and the rise of crypto assets have generated unprecedented modalities of economic crime, which frequently overflow traditional legal and investigative frameworks. Among the main challenges are anonymity or pseudonymity, conflicts of jurisdiction, technical-computer difficulties, and information asymmetry between criminals and authorities.",
      "h2_5": "Approach from Venezuelan and Latin American Criminal Law",
      "p2_5": "Latin America, and Venezuela in particular, has had to adapt its legal framework so as not to become a refuge for global economic crime. In recent decades, there has been a shift from nineteenth-century criminal codes to hyper-regulation through special criminal laws, with an emphasis on organized crime, terrorism financing, the banking system, the stock market, exchange rate regimes, and customs.",
      "h2_6": "Economic Analysis Perspective of Criminal Law",
      "p2_6": "From the economic analysis of Criminal Law (Law & Economics), the white-collar criminal is conceived as a rational actor who weighs the costs and benefits of committing a crime, in a context where potential benefits are high, the probability of detection is low, and evidentiary complexity is elevated.",
      "h2_7": "Conclusions and Practical Recommendations",
      "p2_7a": "Economic criminality requires companies to adopt comprehensive criminal compliance programs, strict internal policies, continuous training, exhaustive due diligence, and early consultation with specialists in Economic Criminal Law.",
      "p2_7b": "At Mac Consultores Jurídicos & Asociados we have experience in risk assessment, design of prevention strategies, and litigation of complex cases of economic criminality, with an approach oriented to the comprehensive protection of corporate victims and the strategic management of criminal crises."
    }
  }
};

/**
 * Obtener un valor de un objeto usando una ruta separada por puntos (ej. 'home.hero.title')
 */
function getNestedValue(obj, path) {
  if (!obj || !path) return null;
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Obtiene el nombre del archivo HTML actual
 */
function getCurrentPageName() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);
  return page || 'index.html';
}

/**
 * Traduce todos los elementos con atributo 'data-i18n' en el DOM
 */
function translateDOM() {
  const lang = document.documentElement.lang || 'es';
  const currentTranslations = siteTranslations[lang] || {};

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedValue(currentTranslations, key);

    if (translation === null || translation === undefined) {
      return; // Clave no encontrada
    }

    // Si la traducción es un array, se trata de una lista estructurada (como ul/ol)
    if (Array.isArray(translation)) {
      // Reconstruir la lista (ej. para ul.service-list o listas en artículos)
      el.innerHTML = '';
      translation.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        el.appendChild(li);
      });
      return;
    }

    const tagName = el.tagName.toLowerCase();

    // Traducir inputs, textareas y selects
    if (tagName === 'input' || tagName === 'textarea') {
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', translation);
      } else if (el.type === 'button' || el.type === 'submit') {
        el.value = translation;
      }
    } else if (tagName === 'select') {
      el.textContent = translation;
    } else if (tagName === 'meta') {
      el.setAttribute('content', translation);
    } else {
      // Reemplazar texto conservando estructura interna si contiene tags HTML (como strong/em)
      el.innerHTML = translation;
    }
  });
}

/**
 * Sincroniza visualmente el estado del selector en el nav
 */
function syncLanguageSelector(lang) {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Función principal para cambiar de idioma
 */
function changeLanguage(lang) {
  // Sincronizar el atributo HTML lang
  document.documentElement.lang = lang;
  
  // Guardar en localStorage
  localStorage.setItem('preferred-lang', lang);

  // Manejar la URL usando history.pushState para reflejar el idioma
  const currentPath = window.location.pathname;
  if (lang === 'en') {
    if (!currentPath.startsWith('/en/')) {
      window.history.pushState({}, '', '/en' + (currentPath.startsWith('/') ? currentPath : '/' + currentPath));
    }
  } else {
    if (currentPath.startsWith('/en/')) {
      window.history.pushState({}, '', currentPath.replace('/en/', '/'));
    } else if (currentPath === '/en') {
      window.history.pushState({}, '', '/');
    }
  }

  // Cargar traducciones y aplicarlas
  translateDOM();

  // Refrescar el selector visual de idioma
  syncLanguageSelector(lang);

  // Desencadenar el refresco del Insight Jurídico del Día si la función global existe
  if (window.initDailyInsight) {
    window.initDailyInsight();
  }
}

/**
 * Inicialización inicial de traducción
 */
function initI18n() {
  // 1. Detectar idioma de la URL primero (SEO first)
  const currentPath = window.location.pathname;
  let lang = currentPath.startsWith('/en') ? 'en' : null;
  
  // 2. Fallback a LocalStorage o Navegador
  if (!lang) {
    lang = localStorage.getItem('preferred-lang');
    if (!lang) {
      lang = document.documentElement.lang || (navigator.language.startsWith('en') ? 'en' : 'es');
    }
  }

  // Asegurar formato de dos letras
  lang = lang.toLowerCase().startsWith('en') ? 'en' : 'es';

  // Sincronizar e iniciar traducción
  document.documentElement.lang = lang;
  translateDOM();
  syncLanguageSelector(lang);
}

// Escuchar eventos globales de click para el selector de idiomas en el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Registrar listeners de click para los botones de idioma
  document.body.addEventListener('click', event => {
    const langBtn = event.target.closest('.lang-btn');
    if (langBtn) {
      event.preventDefault(); // Evitar salto de página al presionar el botón de idioma
      const selectedLang = langBtn.getAttribute('data-lang');
      if (selectedLang) {
        changeLanguage(selectedLang);
      }
    }
  });

  // Ejecutar inicialización del i18n
  initI18n();
});

// Exportar funciones a nivel de window para ser invocadas por el enrutador o scripts locales
window.changeLanguage = changeLanguage;
window.translateDOM = translateDOM;
window.initI18n = initI18n;
