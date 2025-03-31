const examModels = {
  "1": {
    title: "Modelo 1 - Bioquímica y Experimentación",
    exercises: [
      {
        header: "Ejercicio 1: Técnicas Experimentales en Biología",
        content: "Las técnicas experimentales son fundamentales para el estudio de los seres vivos.",
        questions: [
          {
            text: "a) Describe las principales técnicas de microscopía y sus aplicaciones. (1 punto)",
            score: 1.0,
            solution: "Microscopía óptica: resolución 0.2μm, células vivas. Microscopía electrónica: TEM (ultraestructura, 0.2nm), SEM (superficie 3D, 4nm). Microscopía confocal: secciones ópticas, fluorescencia. Preparación de muestras: fijación, tinción, cortes."
          },
          {
            text: "b) Explica las técnicas de separación y análisis de biomoléculas. (0.5 puntos)",
            score: 0.5,
            solution: "Centrifugación: diferencial y gradiente. Cromatografía: gases, líquidos, afinidad. Electroforesis: proteínas, ácidos nucleicos. Espectrometría de masas: identificación molecular."
          },
          {
            text: "a) Analiza el siguiente caso práctico: En un laboratorio se estudia una nueva proteína fluorescente. ¿Qué técnicas microscópicas y de análisis molecular utilizarías para determinar su localización celular y características estructurales? Justifica tu respuesta. (1 punto)",
            score: 1.0,
            solution: "1) Microscopía confocal: localización in vivo, colocalización con marcadores. 2) Microscopía electrónica con inmunomarcaje: ubicación precisa. 3) Espectrometría de masas: estructura, modificaciones. 4) Western blot: expresión, tamaño. Justificación: combinación de técnicas para análisis completo."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué son las técnicas inmunológicas y sus aplicaciones? (0.5 puntos)",
            score: 0.5,
            solution: "ELISA: detección antígenos/anticuerpos. Inmunofluorescencia: localización proteínas. Western blot: identificación proteínas específicas. Aplicaciones diagnósticas y de investigación."
          },
          {
            text: "c.2) Describe las técnicas de cultivo celular. (0.5 puntos)",
            score: 0.5,
            solution: "Cultivo in vitro, medios definidos, condiciones estériles. Líneas celulares, cultivos primarios. Aplicaciones: investigación, producción vacunas, pruebas fármacos."
          }
        ]
      },
      {
        header: "Ejercicio 2: Bioelementos y Biomoléculas",
        content: "Los bioelementos y las biomoléculas son los componentes fundamentales de los seres vivos.",
        questions: [
          {
            text: "a) Clasifica los bioelementos y explica sus funciones. (1 punto)",
            score: 1.0,
            solution: "Primarios (C,H,O,N,P,S): estructurales, energéticos. Secundarios (Na,K,Ca,Mg,Cl): equilibrio iónico, señalización. Oligoelementos (Fe,Zn,Cu): cofactores enzimáticos. Propiedades químicas y funciones biológicas."
          },
          {
            text: "b) Describe las propiedades y funciones del agua. (0.5 puntos)",
            score: 0.5,
            solution: "Estructura molecular, puentes de hidrógeno. Propiedades: cohesión, adhesión, calor específico, disolvente universal. Importancia biológica: medio de reacciones, transporte, termorregulación."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Explica los procesos de difusión, ósmosis y diálisis. (0.5 puntos)",
            score: 0.5,
            solution: "Difusión: movimiento por gradiente concentración. Ósmosis: difusión agua, presión osmótica. Diálisis: separación moléculas por tamaño. Importancia en células y organismos."
          },
          {
            text: "c.2) ¿Qué son las sales minerales y sus funciones? (0.5 puntos)",
            score: 0.5,
            solution: "Precipitadas: estructural (huesos, conchas). Disueltas: pH, presión osmótica, conducción nerviosa. Funciones específicas: contracción muscular (Ca2+), potencial membrana (Na+/K+)."
          }
        ]
      },
      {
        header: "Ejercicio 3: Glúcidos y Lípidos",
        content: "Los glúcidos y lípidos son biomoléculas esenciales con funciones energéticas y estructurales.",
        questions: [
          {
            text: "a) Describe la estructura y clasificación de los glúcidos. (1 punto)",
            score: 1.0,
            solution: "Monosacáridos: pentosas, hexosas, carbono asimétrico. Disacáridos: enlace O-glucosídico, sacarosa, lactosa. Polisacáridos: almidón, glucógeno, celulosa. Funciones: energética, estructural, reconocimiento."
          },
          {
            text: "b) Explica la estructura y tipos de lípidos. (0.5 puntos)",
            score: 0.5,
            solution: "Ácidos grasos: saturados/insaturados. Triglicéridos: reserva energética. Fosfolípidos: membranas. Esteroides: hormonas. Funciones: energética, estructural, reguladora."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Describe las reacciones de saponificación y esterificación. (0.5 puntos)",
            score: 0.5,
            solution: "Saponificación: hidrólisis éster, formación jabones. Esterificación: formación éster entre alcohol y ácido. Importancia biológica y aplicaciones."
          },
          {
            text: "c.2) ¿Qué son los lípidos de membrana y su importancia? (0.5 puntos)",
            score: 0.5,
            solution: "Fosfolípidos: estructura anfipática. Colesterol: fluidez membrana. Glucolípidos: reconocimiento celular. Organización en bicapa lipídica."
          }
        ]
      },
      {
        header: "Ejercicio 4: Proteínas y Ácidos Nucleicos",
        content: "Las proteínas y ácidos nucleicos son biomoléculas fundamentales para la vida.",
        questions: [
          {
            text: "a) Explica la estructura y clasificación de las proteínas. (1 punto)",
            score: 1.0,
            solution: "Aminoácidos: estructura, enlace peptídico. Estructura primaria a cuaternaria. Clasificación: fibrosas/globulares, simples/conjugadas. Funciones: enzimática, estructural, transporte, defensa."
          },
          {
            text: "b) Describe la estructura de los ácidos nucleicos. (0.5 puntos)",
            score: 0.5,
            solution: "Nucleótidos: base, azúcar, fosfato. ADN: doble hélice, complementariedad. ARN: tipos (m,t,r), estructura secundaria. Funciones en expresión génica."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué es la desnaturalización proteica? (0.5 puntos)",
            score: 0.5,
            solution: "Pérdida estructura 3D. Factores: temperatura, pH, agentes químicos. Reversibilidad: renaturalización. Importancia biológica y aplicaciones."
          },
          {
            text: "c.2) Explica la replicación del ADN. (0.5 puntos)",
            score: 0.5,
            solution: "Semiconservativa, bidireccional. Enzimas: ADN polimerasa, helicasa, ligasa. Fragmentos de Okazaki. Corrección de errores."
          }
        ]
      },
      {
        header: "Ejercicio 5: Enzimas y Vitaminas",
        content: "Las enzimas son catalizadores biológicos esenciales para el metabolismo.",
        questions: [
          {
            text: "a) Un laboratorio farmacéutico está desarrollando un nuevo fármaco que actúa como inhibidor enzimático. Analiza cómo afectaría este inhibidor a la actividad enzimática y diseña un experimento para determinar el tipo de inhibición. (1 punto)",
            score: 1.0,
            solution: "1) Análisis cinético: velocidad inicial con diferentes concentraciones de sustrato e inhibidor. 2) Gráficas Lineweaver-Burk para determinar tipo inhibición (competitiva/no competitiva). 3) Cálculo Ki. 4) Ensayos reversibilidad. 5) Aplicaciones terapéuticas."
          },
          {
            text: "b) Explica los tipos de regulación enzimática. (0.5 puntos)",
            score: 0.5,
            solution: "Alostérica: efectores +/-. Modificación covalente. Zimógenos. Isoenzimas. Compartimentación. Importancia en metabolismo."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Clasifica las vitaminas y sus funciones. (0.5 puntos)",
            score: 0.5,
            solution: "Hidrosolubles: complejo B, C. Liposolubles: A,D,E,K. Funciones como coenzimas. Deficiencias vitamínicas. Fuentes alimentarias."
          },
          {
            text: "c.2) ¿Qué son los cofactores y coenzimas? (0.5 puntos)",
            score: 0.5,
            solution: "Cofactores: iones metálicos. Coenzimas: orgánicos, derivados vitamínicos. NAD, FAD, CoA. Papel en catálisis enzimática."
          }
        ]
      }
    ]
  },
  "2": {
    title: "Modelo 2 - Estructura y Fisiología Celular",
    exercises: [
      {
        header: "Ejercicio 1: Organización Celular",
        content: "La célula es la unidad básica de la vida, con diferentes niveles de organización.",
        questions: [
          {
            text: "a) Compara la organización de células procariotas y eucariotas. (1 punto)",
            score: 1.0,
            solution: "Procariotas: sin núcleo, nucleoide, pared celular. Eucariotas: compartimentación, orgánulos membranosos, citoesqueleto. Tamaño, complejidad, evolución."
          },
          {
            text: "b) Describe la estructura y función del núcleo. (0.5 puntos)",
            score: 0.5,
            solution: "Envoltura nuclear: doble membrana, poros. Nucleoplasma, nucleolo. Cromatina/cromosomas. Control expresión génica, replicación ADN."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Explica la teoría celular y su importancia. (0.5 puntos)",
            score: 0.5,
            solution: "Postulados principales. Desarrollo histórico. Microscopía. Implicaciones en biología moderna. Base de la continuidad de la vida."
          },
          {
            text: "c.2) ¿Qué es el citoesqueleto? (0.5 puntos)",
            score: 0.5,
            solution: "Microfilamentos, microtúbulos, filamentos intermedios. Funciones: forma celular, movimiento, transporte intracelular. Proteínas motoras."
          }
        ]
      },
      {
        header: "Ejercicio 2: Membranas y Transporte",
        content: "Las membranas biológicas son esenciales para la compartimentación y función celular.",
        questions: [
          {
            text: "a) Describe el modelo de mosaico fluido. (1 punto)",
            score: 1.0,
            solution: "Bicapa lipídica fluida. Proteínas integrales/periféricas. Asimetría. Colesterol: fluidez. Glucocálix. Funciones membrana: barrera selectiva, comunicación."
          },
          {
            text: "b) Explica los tipos de transporte membranal. (0.5 puntos)",
            score: 0.5,
            solution: "Pasivo: difusión simple/facilitada. Activo: primario (ATP), secundario. Endocitosis/exocitosis. Proteínas transportadoras específicas."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Describe las uniones celulares. (0.5 puntos)",
            score: 0.5,
            solution: "Uniones estrechas: impermeabilidad. Desmosomas: adhesión mecánica. Uniones gap: comunicación. Importancia en tejidos."
          },
          {
            text: "c.2) ¿Qué es la matriz extracelular? (0.5 puntos)",
            score: 0.5,
            solution: "Componentes: colágeno, proteoglicanos. Lámina basal. Funciones: soporte, adhesión, señalización. Importancia en desarrollo."
          }
        ]
      },
      {
        header: "Ejercicio 3: Metabolismo Celular",
        content: "El metabolismo comprende las transformaciones de materia y energía en la célula.",
        questions: [
          {
            text: "a) En un experimento se observa que una célula no puede realizar la fosforilación oxidativa pero mantiene niveles normales de ATP. Explica los posibles mecanismos metabólicos implicados y diseña un experimento para confirmar tu hipótesis. (1 punto)",
            score: 1.0,
            solution: "1) Posible adaptación a metabolismo fermentativo. 2) Aumento de glucólisis (efecto Warburg). Experimento: Medir consumo glucosa, producción lactato, niveles ATP con/sin inhibidores específicos. Análisis expresión enzimas glucolíticas. Justificación metabólica completa."
          },
          {
            text: "b) Explica la fotosíntesis y su importancia. (0.5 puntos)",
            score: 0.5,
            solution: "Fase lumínica: fotosistemas, ATP, NADPH. Fase oscura: ciclo Calvin, Rubisco. Factores limitantes. Importancia ecológica."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Cómo se regula el metabolismo? (0.5 puntos)",
            score: 0.5,
            solution: "Enzimas reguladoras. Control hormonal. Retroalimentación. Compartimentación. Coordinación rutas metabólicas."
          },
          {
            text: "c.2) Describe el papel del ATP. (0.5 puntos)",
            score: 0.5,
            solution: "Estructura ATP. Hidrólisis: energía libre. Acoplamiento energético. Ciclo ATP/ADP. Importancia en metabolismo."
          }
        ]
      },
      {
        header: "Ejercicio 4: División Celular",
        content: "La división celular es fundamental para el crecimiento y la reproducción.",
        questions: [
          {
            text: "a) Explica las fases del ciclo celular. (1 punto)",
            score: 1.0,
            solution: "Interfase: G1, S, G2. Mitosis: profase, metafase, anafase, telofase. Citocinesis. Control: ciclinas, CDKs. Puntos control."
          },
          {
            text: "b) Describe el proceso de meiosis. (0.5 puntos)",
            score: 0.5,
            solution: "Dos divisiones. Profase I: sinapsis, recombinación. Reducción cromosómica. Importancia: variabilidad genética, reproducción sexual."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué relación hay entre ciclo celular y cáncer? (0.5 puntos)",
            score: 0.5,
            solution: "Desregulación ciclo. Oncogenes, genes supresores. Mutaciones acumulativas. Metástasis. Tratamientos basados en ciclo."
          },
          {
            text: "c.2) Explica la apoptosis. (0.5 puntos)",
            score: 0.5,
            solution: "Muerte celular programada. Señales inductoras. Caspasas. Cambios morfológicos. Importancia: desarrollo, homeostasis."
          }
        ]
      },
      {
        header: "Ejercicio 5: Biotecnología Celular",
        content: "La biotecnología aplica el conocimiento celular en procesos prácticos.",
        questions: [
          {
            text: "a) Una empresa de biotecnología quiere desarrollar un sistema CRISPR para corregir una mutación causante de fibrosis quística. Diseña una estrategia experimental completa, incluyendo controles y consideraciones de seguridad. (1 punto)",
            score: 1.0,
            solution: "1) Diseño sgRNA específico para la mutación CFTR. 2) Selección vector viral AAV para delivery. 3) Validación in vitro: células epiteliales paciente. 4) Controles: off-target, eficiencia edición, viabilidad celular. 5) Consideraciones seguridad: respuesta inmune, especificidad tisular."
          },
          {
            text: "b) Explica las aplicaciones de cultivos celulares. (0.5 puntos)",
            score: 0.5,
            solution: "Producción proteínas recombinantes. Terapia celular. Células madre. Ingeniería tejidos. Pruebas farmacológicas."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué son los organismos transgénicos? (0.5 puntos)",
            score: 0.5,
            solution: "Modificación genética. Métodos obtención. Aplicaciones: resistencia plagas, producción fármacos. Consideraciones bioéticas."
          },
          {
            text: "c.2) Describe la terapia génica. (0.5 puntos)",
            score: 0.5,
            solution: "Corrección genes defectuosos. Vectores virales/no virales. Tipos: somática, germinal. Enfermedades tratables."
          }
        ]
      }
    ]
  },
  "3": {
    title: "Modelo 3 - Microbiología e Inmunología",
    exercises: [
      {
        header: "Ejercicio 1: Microorganismos",
        content: "Los microorganismos son fundamentales en los ciclos biogeoquímicos y biotecnología.",
        questions: [
          {
            text: "a) Clasifica los tipos de microorganismos. (1 punto)",
            score: 1.0,
            solution: "Bacterias: morfología, metabolismo. Virus: estructura, ciclos. Hongos: tipos, reproducción. Protozoos: características. Importancia ecológica y económica."
          },
          {
            text: "b) Describe las técnicas microbiológicas básicas. (0.5 puntos)",
            score: 0.5,
            solution: "Cultivo: medios, condiciones. Esterilización. Aislamiento. Identificación: tinciones, pruebas bioquímicas. Técnicas moleculares."
          },
          {
            text: "a) Una empresa biotecnológica busca microorganismos para biorremediación de contaminantes. Diseña una estrategia de screening y caracterización de candidatos potenciales. Incluye técnicas de identificación y análisis metabólico. (1 punto)",
            score: 1.0,
            solution: "1) Muestreo ambientes contaminados. 2) Cultivo selectivo con contaminante como única fuente carbono. 3) Identificación: secuenciación 16S rRNA, análisis metagenómico. 4) Caracterización: rutas degradación, enzimas clave. 5) Pruebas escalabilidad y eficiencia."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Explica los ciclos biogeoquímicos. (0.5 puntos)",
            score: 0.5,
            solution: "Ciclo carbono: fotosíntesis, descomposición. Ciclo nitrógeno: fijación, nitrificación. Ciclo azufre. Papel microorganismos."
          },
          {
            text: "c.2) ¿Qué son los virus emergentes? (0.5 puntos)",
            score: 0.5,
            solution: "Nuevos virus patógenos. Salto especie. Factores emergencia. Ejemplos: coronavirus, gripe aviar. Prevención pandemias."
          }
        ]
      },
      {
        header: "Ejercicio 2: Sistema Inmunitario",
        content: "El sistema inmunitario protege al organismo contra patógenos.",
        questions: [
          {
            text: "a) Describe los componentes del sistema inmune. (1 punto)",
            score: 1.0,
            solution: "Órganos linfoides. Células: linfocitos, fagocitos. Moléculas: anticuerpos, citoquinas. Barreras anatómicas y fisiológicas."
          },
          {
            text: "b) Compara inmunidad innata y adaptativa. (0.5 puntos)",
            score: 0.5,
            solution: "Innata: inespecífica, rápida. Adaptativa: específica, memoria. Células efectoras. Cooperación entre sistemas."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Explica la estructura de anticuerpos. (0.5 puntos)",
            score: 0.5,
            solution: "Estructura Y. Cadenas pesadas/ligeras. Regiones variables/constantes. Clases inmunoglobulinas. Funciones específicas."
          },
          {
            text: "c.2) Describe la respuesta inflamatoria. (0.5 puntos)",
            score: 0.5,
            solution: "Signos cardinales. Mediadores químicos. Células inflamatorias. Resolución. Importancia en defensa."
          }
        ]
      },
      {
        header: "Ejercicio 3: Respuesta Inmunitaria",
        content: "La respuesta inmunitaria es un proceso coordinado contra patógenos.",
        questions: [
          {
            text: "a) Explica la respuesta humoral. (1 punto)",
            score: 1.0,
            solution: "Células B: activación, diferenciación. Producción anticuerpos. Memoria inmunológica. Respuesta primaria/secundaria."
          },
          {
            text: "b) Describe la respuesta celular. (0.5 puntos)",
            score: 0.5,
            solution: "Células T: tipos, funciones. Presentación antígenos. MHC. Citotoxicidad. Cooperación celular."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué es la tolerancia inmunológica? (0.5 puntos)",
            score: 0.5,
            solution: "Mecanismos centrales/periféricos. Selección clonal. Importancia: autoinmunidad. Tolerancia materno-fetal."
          },
          {
            text: "c.2) Explica la memoria inmunológica. (0.5 puntos)",
            score: 0.5,
            solution: "Células memoria. Respuesta secundaria. Base vacunación. Inmunidad colectiva. Duración protección."
          }
        ]
      },
      {
        header: "Ejercicio 4: Alteraciones Sistema Inmune",
        content: "Las alteraciones del sistema inmune causan diversas patologías.",
        questions: [
          {
            text: "a) Describe las hipersensibilidades. (1 punto)",
            score: 1.0,
            solution: "Tipo I: IgE, alergias. Tipo II: citotóxica. Tipo III: inmunocomplejos. Tipo IV: retardada. Mecanismos, ejemplos."
          },
          {
            text: "b) Explica las enfermedades autoinmunes. (0.5 puntos)",
            score: 0.5,
            solution: "Pérdida tolerancia. Ejemplos: diabetes tipo 1, artritis. Mecanismos patogénicos. Tratamientos inmunosupresores."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué son las inmunodeficiencias? (0.5 puntos)",
            score: 0.5,
            solution: "Primarias: genéticas. Secundarias: VIH, malnutrición. Manifestaciones clínicas. Diagnóstico, tratamiento."
          },
          {
            text: "c.2) Describe el rechazo trasplantes. (0.5 puntos)",
            score: 0.5,
            solution: "Tipos rechazo. HLA, compatibilidad. Inmunosupresión. Xenotrasplantes. Avances medicina."
          }
        ]
      },
      {
        header: "Ejercicio 5: Inmunología Aplicada",
        content: "La inmunología tiene importantes aplicaciones prácticas.",
        questions: [
          {
            text: "a) Ante una nueva variante viral emergente, propón una estrategia de desarrollo de vacuna utilizando diferentes plataformas tecnológicas. Compara sus ventajas e inconvenientes y justifica tu elección final. (1 punto)",
            score: 1.0,
            solution: "1) Análisis plataformas: ARNm (rápida, adaptable), proteína recombinante (segura, estable), viral (probada, inmunidad robusta). 2) Criterios selección: velocidad desarrollo, estabilidad, producción escala. 3) Diseño ensayos preclínicos. 4) Estrategia ensayos clínicos. 5) Plan implementación."
          },
          {
            text: "b) Describe la inmunoterapia. (0.5 puntos)",
            score: 0.5,
            solution: "Anticuerpos monoclonales. CAR-T. Inmunoterapia cáncer. Checkpoint inhibitors. Terapias futuras."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué son las técnicas inmunológicas? (0.5 puntos)",
            score: 0.5,
            solution: "ELISA, Western blot. Citometría flujo. Inmunofluorescencia. Aplicaciones diagnósticas, investigación."
          },
          {
            text: "c.2) Explica la inmunidad COVID-19. (0.5 puntos)",
            score: 0.5,
            solution: "Respuesta inmune SARS-CoV-2. Vacunas: tipos, eficacia. Memoria inmunológica. Variantes. Lecciones pandemia."
          }
        ]
      }
    ]
  }
}; 