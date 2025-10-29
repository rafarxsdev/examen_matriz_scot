// Base de datos de preguntas del examen - VERSIÓN 2
// Total: 10 preguntas

var examQuestions = [
  // Sección I: Falso o Verdadero
  {
    id: 1,
    type: 'boolean',
    section: "I. Preguntas de Falso o Verdadero",
    question:
      "Caso: El Principio de Simetría. Para analizar la derrota de la bicicleta de rueda alta (o penny-farthing), el analista argumenta que su caída se debió únicamente a su inestabilidad y dificultad inherente para los usuarios, concluyendo que fue una falla de diseño.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    points: 0.5,
    explanation:
      "La Matriz SCOT requiere aplicar el Principio de Simetría, el cual exige que la derrota de la bicicleta de rueda alta se explique a través de razones sociales y de mercado que impidieron a su GSR mantener su interpretación (Ej., el miedo a las caídas)."
  },
  {
    id: 2,
    type: 'boolean',
    section: "I. Preguntas de Falso o Verdadero",
    question:
      "Caso: Problema Interpretado (Columna II). Al analizar la competencia entre el Vehículo Eléctrico (EV) y el motor de Combustión Interna (ICE) en 1900, la Columna II para el GSR de 'Mujeres Urbanas Acomodadas' que apoyaban el EV debe indicar el problema como 'La dificultad física y el peligro de la manivela de arranque del motor de gasolina'.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    points: 0.5,
    explanation:
      "En SCOT, la Columna II debe expresar el problema como una insatisfacción subjetiva y social (peligro/dificultad), no como una simple deficiencia técnica (Ej., motor ruidoso)."
  },
  {
    id: 3,
    type: 'boolean',
    section: "I. Preguntas de Falso o Verdadero",
    question:
      "Caso: Mecanismos de Clausura (Columna IV). En la guerra de formatos VHS vs. Betamax, la Clausura se dio cuando una acción estratégica, como la decisión del VHS de licenciar su formato masivamente, forzó a los consumidores a converger en el formato más disponible, independientemente de la calidad de imagen.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    points: 0.5,
    explanation:
      "Un Mecanismo de Clausura ocurre cuando una acción socioeconómica o estratégica (como el licenciamiento) resuelve la controversia y elimina la flexibilidad de elección en el mercado."
  },

  // Sección II: Completar
  {
    id: 4,
    type: 'code',
    section: "II. Preguntas de Completar",
    question:
      "Caso: Variantes de Diseño. Al estudiar la estandarización de la corriente eléctrica (CA vs. CC), la solución materialmente defendida por los ingenieros de corriente continua (CC) se basó en estaciones eléctricas locales. Esta característica física y técnica que responde a un problema social se coloca en la Columna III y se conoce como Variante de _________.",
    correctAnswer: "Diseño"
    ,points: 0.5
  },
  {
    id: 5,
    type: 'code',
    section: "II. Preguntas de Completar",
    question:
      "Caso: Flexibilidad Interpretativa. Analizando los primeros ordenadores, el Ejército los interpretó como 'máquinas de criptografía', mientras que los científicos los vieron como 'calculadoras universales'. La existencia de interpretaciones opuestas sobre el significado y la función del mismo artefacto se llama ________ Interpretativa.",
    correctAnswer: "Flexibilidad"
    ,points: 0.5
  },
  {
    id: 6,
    type: 'code',
    section: "II. Preguntas de Completar",
    question:
      "Caso: Problemas de Segundo Orden. Tras la victoria definitiva del Motor de Combustión Interna (ICE) en los años 20, la contaminación atmosférica y la dependencia global del petróleo surgieron como consecuencias negativas a gran escala. Estos efectos no intencionados del Lock-in se denominan Problemas de ________ Orden.",
    correctAnswer: "Segundo"
    ,points: 0.5
  },

  // Sección III: Opción Múltiple
  {
    id: 7,
    type: 'multiple',
    section: "III. Preguntas de Opción Múltiple",
    question:
      "Caso: Rol del GSR (Columna I). Para la bicicleta de seguridad (rueda baja), el GSR de 'Jóvenes Urbanos' fue crucial porque fueron los primeros en comprarla. ¿Por qué este grupo se considera Relevante en la Matriz SCOT?",
    options: [
      "A) Porque fueron los ingenieros que patentaron el diseño.",
      "B) Porque poseían el poder económico y cultural para validar el artefacto y forzar la demanda del mercado.",
      "C) Porque eran los únicos que sabían montar el nuevo diseño de forma segura.",
      "D) Porque gestionaron la regulación gubernamental para estandarizar el vehículo."
    ],
    correctAnswer: "B"
    ,points: 0.5
  },
  {
    id: 8,
    type: 'multiple',
    section: "III. Preguntas de Opción Múltiple",
    question:
      "Caso: Principio de Simetría (Aplicación). En la década de 1840, los ingenieros de telégrafos debatieron entre el sistema de Código Morse (simple) y un sistema de Impresión (complejo, que imprimía el texto). ¿Cómo exige el Principio de Simetría analizar el fracaso del sistema de Impresión?",
    options: [
      "A) Debe clasificarse como un error de diseño y mala ingeniería.",
      "B) Debe explicarse únicamente por la superioridad técnica del Código Morse.",
      "C) Debe explicarse en términos de las razones sociales y de mercado por las que el GSR que apoyaba el sistema de Impresión no pudo imponer su visión.",
      "D) Debe ignorarse, enfocándose solo en las razones del éxito del Código Morse."
    ],
    correctAnswer: "C"
    ,points: 0.5
  },
  {
    id: 9,
    type: 'multiple',
    section: "III. Preguntas de Opción Múltiple",
    question:
      "Caso: Vínculo entre Columnas II y III. En la guerra de formatos (VHS vs. Betamax), el formato Betamax (capacidad inicial de 1 hora) perdió contra el VHS (capacidad de 3-4 horas). Si se analiza el GSR de Consumidores Masivos, ¿cuál es la relación correcta entre el Problema Interpretado (Col. II) y la Variante de Diseño (Col. III)?",
    options: [
      "A) Col. II: Baja Calidad de Imagen. Col. III: Casete más pequeño (Betamax).",
      "B) Col. II: Baja Capacidad de Grabación (Películas Incompletas). Col. III: Casete más grande con mayor duración (VHS).",
      "C) Col. II: Alto Costo Inicial. Col. III: Licenciamiento Abierto (Estrategia).",
      "D) Col. II: Falta de Contenido de Alquiler. Col. III: Adopción por Estudios de Cine."
    ],
    correctAnswer: "B"
    ,points: 0.5
  },
  {
    id: 10,
    type: 'multiple',
    section: "III. Preguntas de Opción Múltiple",
    question:
      "Caso: Definición de Clausura. La invención del arranque eléctrico (o encendido por botón) por Cadillac eliminó la necesidad de usar la peligrosa manivela en el motor de gasolina. ¿Por qué esta innovación se considera un Mecanismo de Clausura en el análisis SCOT?",
    options: [
      "A) Porque mejoró la eficiencia del motor de gasolina.",
      "B) Porque neutralizó la principal ventaja social y de seguridad que tenía el vehículo eléctrico (EV) sobre el ICE.",
      "C) Porque redujo el costo de fabricación del coche.",
      "D) Porque fue una mejora puramente técnica sin ningún efecto social."
    ],
    correctAnswer: "B"
    ,points: 0.5
  }
];
