const examModels = {
  "1": {
    title: "Modelo 1 - Bioquímica y Citología",
    exercises: [
      // ... mantener los ejercicios existentes del modelo 1 ...
    ]
  },
  "2": {
    title: "Modelo 2 - Genética y Evolución",
    exercises: [
      {
        header: "Ejercicio 1 - Genética Mendeliana (2 puntos)",
        content: "La genética mendeliana establece las bases de la herencia.",
        questions: [
          {
            text: "a) Explica las leyes de Mendel y pon un ejemplo de cada una. (1 punto)",
            score: 1,
            solution: "1ª Ley (Uniformidad): al cruzar líneas puras para un carácter, la F1 es uniforme. Ejemplo: cruce de guisantes amarillos puros (AA) x verdes puros (aa), toda la F1 será amarilla (Aa). 2ª Ley (Segregación): los alelos se separan en la formación de gametos. Ejemplo: en la F2 del cruce anterior aparecen amarillos y verdes en proporción 3:1. 3ª Ley (Independencia): los alelos de diferentes genes se heredan independientemente. Ejemplo: al cruzar guisantes amarillos lisos (AABB) x verdes rugosos (aabb), en F2 aparecen todas las combinaciones posibles."
          },
          {
            text: "b) Resuelve el siguiente problema: En Drosophila, el color gris del cuerpo (G) domina sobre el negro (g) y las alas normales (L) sobre las vestigiales (l). Se cruza una mosca gris de alas normales dihíbrida con una negra vestigial. Determina los genotipos parentales, gametos y proporciones genotípicas y fenotípicas de la F1. (0,5 puntos)",
            score: 0.5,
            solution: "Parentales: GgLl x ggll. Gametos: GL, Gl, gL, gl x gl. F1 genotípica: GgLl, Ggll, ggLl, ggll en proporción 1:1:1:1. F1 fenotípica: gris-normal, gris-vestigial, negro-normal, negro-vestigial en proporción 1:1:1:1."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) ¿Qué es la herencia intermedia? Pon un ejemplo. (0,5 puntos)",
            score: 0.5,
            solution: "La herencia intermedia ocurre cuando ningún alelo es dominante y el fenotipo heterocigoto es intermedio entre los homocigotos. Ejemplo: en las flores del dondiego de noche, el cruce de flores rojas (RR) x blancas (rr) produce una F1 de flores rosas (Rr)."
          },
          {
            text: "c.2) Explica qué son los alelos múltiples. Pon un ejemplo. (0,5 puntos)",
            score: 0.5,
            solution: "Los alelos múltiples son diferentes versiones de un gen que ocupan el mismo locus. Ejemplo: el sistema ABO de grupos sanguíneos tiene tres alelos (IA, IB, i) que determinan cuatro fenotipos (A, B, AB y O)."
          }
        ]
      },
      // ... continuar con los ejercicios 2-5 del modelo 2 ...
    ]
  },
  "3": {
    title: "Modelo 3 - Microbiología e Inmunología",
    exercises: [
      {
        header: "Ejercicio 1 - Microorganismos (2 puntos)",
        content: "Los microorganismos son fundamentales en los ecosistemas y tienen gran importancia biotecnológica.",
        questions: [
          {
            text: "a) Clasifica los diferentes tipos de microorganismos y describe sus características principales. (1 punto)",
            score: 1,
            solution: "Tipos de microorganismos: 1) Bacterias: procariotas, pared celular con peptidoglicano, reproducción binaria. 2) Virus: parásitos obligados, cápside proteica, material genético (ADN o ARN). 3) Hongos microscópicos: eucariotas, pared celular de quitina, reproducción sexual y asexual. 4) Protozoos: eucariotas unicelulares, movilidad, heterótrofos. 5) Algas microscópicas: eucariotas, fotosintéticas, pared celular de celulosa."
          },
          {
            text: "b) Explica el papel de los microorganismos en los ciclos biogeoquímicos. (0,5 puntos)",
            score: 0.5,
            solution: "Los microorganismos participan en: 1) Ciclo del carbono: descomposición de materia orgánica, fotosíntesis. 2) Ciclo del nitrógeno: fijación, nitrificación, desnitrificación. 3) Ciclo del azufre: oxidación y reducción de compuestos azufrados. 4) Ciclo del fósforo: solubilización de fosfatos. Son esenciales para el reciclaje de nutrientes en los ecosistemas."
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Describe la estructura de un virus y sus ciclos de reproducción. (0,5 puntos)",
            score: 0.5,
            solution: "Estructura viral: cápside proteica, material genético (ADN o ARN), algunos con envoltura lipídica. Ciclos: 1) Lítico: infección, replicación y lisis celular. 2) Lisogénico: integración del genoma viral en el cromosoma bacteriano como profago. En virus animales: ciclos líticos o persistentes."
          },
          {
            text: "c.2) Explica las aplicaciones biotecnológicas de los microorganismos. (0,5 puntos)",
            score: 0.5,
            solution: "Aplicaciones: 1) Industria alimentaria: fermentaciones, probióticos. 2) Farmacéutica: producción de antibióticos, vitaminas. 3) Agricultura: fijación de nitrógeno, control biológico. 4) Medio ambiente: biorremediación, tratamiento de aguas. 5) Industria química: producción de enzimas, biocombustibles."
          }
        ]
      },
      // ... continuar con los ejercicios 2-5 del modelo 3 ...
    ]
  }
}; 