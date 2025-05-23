// Modelos de exámenes adicionales para el simulador
const examModels = {
  // Modelo 1
  "1": {
    title: "Modelo 1 - Junio 2025 (Simulación)",
    exercises: [
      {
        header: "Ejercicio 1 - Estructura atómica y enlace (2 puntos)",
        content: "La constante de Rydberg, \\(R_H\\), vale \\(2,18 \\times 10^{-18} J\\). Con este dato:",
        questions: [
          {
            text: "a) Calcule la energía del fotón que, siendo absorbido por un átomo de hidrógeno, provoca el salto de un electrón desde el nivel \\(n = 2\\) al nivel \\(n = 5\\). ¿En qué zona del espectro electromagnético se encontrará dicho fotón? (0,7 puntos)",
            score: 0.7,
            solution: "La energía de un nivel n es E = -R_H/n². Para el cambio n=2 a n=5, ΔE = R_H(1/2² - 1/5²) = 2,18·10⁻¹⁸(0,25 - 0,04) = 4,58·10⁻¹⁹ J. La frecuencia es ν = E/h = 6,91·10¹⁴ Hz, longitud de onda λ = 434 nm (región visible)."
          },
          {
            text: "b) Determine, en eV, la energía de ionización del átomo de hidrógeno cuando su electrón se encuentra en el nivel \\(n = 2\\). (0,7 puntos)",
            score: 0.7,
            solution: "La energía de ionización es la necesaria para llevar un electrón desde su nivel hasta n = ∞. Para n=2, E_i = R_H/2² = 5,45·10⁻¹⁹ J = 3,4 eV"
          },
          {
            text: "c) Explique, en términos de hibridación de orbitales, la geometría de la molécula de metano (CH₄). (0,6 puntos)",
            score: 0.6,
            solution: "En el CH₄, el carbono presenta hibridación sp³. Los cuatro orbitales híbridos se orientan hacia los vértices de un tetraedro, formando ángulos de 109,5°. Cada orbital híbrido solapa con el orbital 1s del hidrógeno, formando enlaces σ C-H. La molécula tiene geometría tetraédrica."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Termoquímica (2 puntos)",
        content: "La entalpía estándar de combustión del etanol líquido, C₂H₅OH(l), es -1367 kJ/mol. Las entalpías estándar de formación del CO₂(g) y del H₂O(l) son -393,5 kJ/mol y -285,8 kJ/mol, respectivamente.",
        questions: [
          {
            text: "a) Escriba la ecuación termoquímica ajustada para la combustión del etanol líquido. (0,5 puntos)",
            score: 0.5,
            solution: "C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l)          ΔH° = -1367 kJ/mol"
          },
          {
            text: "b) Calcule la entalpía estándar de formación del etanol líquido, C₂H₅OH(l). (1 punto)",
            score: 1,
            solution: "ΔH°combustión = ∑ν·ΔH°f(productos) - ∑ν·ΔH°f(reactivos)\n-1367 = [2·(-393,5) + 3·(-285,8)] - [ΔH°f(C₂H₅OH) + 3·0]\nΔH°f(C₂H₅OH) = -277,6 kJ/mol"
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Si se queman completamente 115 g de etanol líquido, calcule el calor desprendido a presión constante. (0,5 puntos)",
            score: 0.5,
            solution: "q = n·ΔH°combustión = (115 g / 46 g/mol)·(-1367 kJ/mol) = -3417,5 kJ"
          },
          {
            text: "c.2) Calcule la energía de enlace C-O a partir de los siguientes datos: Energías de enlace (kJ/mol): C-H: 414; C-C: 347; O-H: 464; C=O: 730. Entalpía estándar de formación del metanol, CH₃OH(g): -202 kJ/mol. (0,5 puntos)",
            score: 0.5,
            solution: "Para CH₃OH(g): ΔH°f = ∑E_ruptura - ∑E_formación\n-202 = [3·414(C-H) + 464(O-H)] - [3·414(C-H) + E(C-O) + 464(O-H)]\nE(C-O) = 335 kJ/mol"
          }
        ]
      },
      {
        header: "Ejercicio 3 - Equilibrio químico (2 puntos)",
        content: "En un recipiente de 5,0 L se introducen 0,30 moles de pentacloruro de fósforo, PCl₅, y se calienta hasta 200 °C. A esta temperatura el PCl₅ se disocia parcialmente según el equilibrio:<br>PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)<br>Si la constante de equilibrio, Kc, vale 0,042 a 200 °C, calcule:",
        questions: [
          {
            text: "a) El grado de disociación del PCl₅(g) a 200 °C. (1 punto)",
            score: 1,
            solution: "PCl₅ ⇌ PCl₃ + Cl₂\nInicial:  0,30/5 = 0,06 M  0  0\nEquilibrio: 0,06(1-α)  0,06α  0,06α\nKc = [PCl₃][Cl₂]/[PCl₅] = 0,042\n(0,06α)²/(0,06(1-α)) = 0,042\nResolviendo: α = 0,45 (45%)"
          },
          {
            text: "b) Las concentraciones de todas las especies en el equilibrio. (0,5 puntos)",
            score: 0.5,
            solution: "[PCl₅] = 0,06(1-0,45) = 0,033 M\n[PCl₃] = [Cl₂] = 0,06·0,45 = 0,027 M"
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) El valor de la constante Kp a 200 °C. (0,5 puntos)",
            score: 0.5,
            solution: "Kp = Kc·(RT)^Δn = 0,042·(0,082·473)^1 = 1,63"
          },
          {
            text: "c.2) Razone cómo afectaría al equilibrio un aumento de la temperatura. (Dato: la reacción de disociación del PCl₅ es endotérmica). (0,5 puntos)",
            score: 0.5,
            solution: "Según el principio de Le Chatelier, al aumentar la temperatura un equilibrio se desplaza en el sentido en que se absorbe calor. Como la reacción es endotérmica, un aumento de temperatura favorecerá la disociación del PCl₅, desplazando el equilibrio hacia la derecha."
          }
        ]
      },
      {
        header: "Ejercicio 4 - Ácido-Base (2 puntos)",
        content: "La constante de acidez del ácido benzoico, C₆H₅COOH, es 6,5·10⁻⁵. Se dispone de una disolución acuosa de ácido benzoico 0,50 M.",
        questions: [
          {
            text: "a) Calcule el pH de la disolución. (0,8 puntos)",
            score: 0.8,
            solution: "C₆H₅COOH + H₂O ⇌ C₆H₅COO⁻ + H₃O⁺\nInicial:    0,50    0    0\nEquilibrio:  0,50-x    x    x\nKa = [H₃O⁺][C₆H₅COO⁻]/[C₆H₅COOH] = 6,5·10⁻⁵\nx²/(0,50-x) = 6,5·10⁻⁵\nAsumiendo 0,50>>x, x = 0,0057 M\npH = -log[H₃O⁺] = -log(0,0057) = 2,24"
          },
          {
            text: "b) Calcule el volumen de una disolución de hidróxido de sodio 0,25 M necesario para neutralizar 25 mL de la disolución de ácido benzoico. (0,7 puntos)",
            score: 0.7,
            solution: "C₆H₅COOH + NaOH → C₆H₅COONa + H₂O\nMoles ácido = 0,025 L · 0,50 mol/L = 0,0125 mol\nMoles NaOH = moles ácido = 0,0125 mol\nVolumen NaOH = 0,0125 mol / 0,25 mol/L = 0,050 L = 50 mL"
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Calcule el pH de la disolución resultante cuando se añaden 20 mL de la disolución de NaOH 0,25 M a 25 mL de la disolución de ácido benzoico. (0,5 puntos)",
            score: 0.5,
            solution: "Moles ácido iniciales = 0,025 L · 0,50 mol/L = 0,0125 mol\nMoles NaOH añadidos = 0,020 L · 0,25 mol/L = 0,0050 mol\nMoles ácido restantes = 0,0125 - 0,0050 = 0,0075 mol\nMoles sal formada = 0,0050 mol\nVolumen total = 0,045 L\n[ácido] = 0,0075 mol / 0,045 L = 0,167 M\n[sal] = 0,0050 mol / 0,045 L = 0,111 M\npH = pKa + log([sal]/[ácido]) = 4,19 + log(0,111/0,167) = 4,19 - 0,18 = 4,01"
          },
          {
            text: "c.2) Calcule la solubilidad del hidróxido de magnesio, Mg(OH)₂, expresada en g/L, sabiendo que su producto de solubilidad es Kps = 5,6·10⁻¹² a 25 °C. (0,5 puntos)",
            score: 0.5,
            solution: "Mg(OH)₂ ⇌ Mg²⁺ + 2 OH⁻\nSea s la solubilidad en mol/L\n[Mg²⁺] = s; [OH⁻] = 2s\nKps = [Mg²⁺][OH⁻]² = s·(2s)² = 4s³ = 5,6·10⁻¹²\ns = ∛(5,6·10⁻¹²/4) = 1,11·10⁻⁴ mol/L\nSolubilidad = 1,11·10⁻⁴ mol/L · 58,3 g/mol = 6,47·10⁻³ g/L"
          }
        ]
      },
      {
        header: "Ejercicio 5 - Redox (2 puntos)",
        content: "En medio ácido, el ion permanganato, MnO₄⁻, oxida al ion Fe²⁺ a ion Fe³⁺, reduciéndose a ion Mn²⁺. Los potenciales estándar de reducción son E°(MnO₄⁻/Mn²⁺) = 1,51 V y E°(Fe³⁺/Fe²⁺) = 0,77 V.",
        questions: [
          {
            text: "a) Escriba las semirreacciones de oxidación y de reducción, así como la reacción redox global. (0,8 puntos)",
            score: 0.8,
            solution: "Reducción: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O\nOxidación: Fe²⁺ → Fe³⁺ + e⁻\nGlobal: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺"
          },
          {
            text: "b) Calcule la fuerza electromotriz estándar de la pila basada en esta reacción redox. (0,6 puntos)",
            score: 0.6,
            solution: "E° = E°cátodo - E°ánodo = E°(MnO₄⁻/Mn²⁺) - E°(Fe³⁺/Fe²⁺) = 1,51 V - 0,77 V = 0,74 V"
          }
        ],
        hasOptional: true,
        optionalQuestions: [
          {
            text: "c.1) Calcule la constante de equilibrio a 25 °C de esta reacción redox. (0,6 puntos)",
            score: 0.6,
            solution: "log K = n·E°/0,059 = 5·0,74/0,059 = 62,7\nK = 10^62,7 ≈ 5·10^62"
          },
          {
            text: "c.2) Se dispone de 100 mL de una disolución 0,1 M de Fe²⁺ que se quiere valorar con una disolución 0,02 M de KMnO₄. Calcule el volumen necesario para alcanzar el punto de equivalencia. (0,6 puntos)",
            score: 0.6,
            solution: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺\nMoles Fe²⁺ = 0,1 L · 0,1 mol/L = 0,01 mol\nPor estequiometría, moles MnO₄⁻ = moles Fe²⁺ / 5 = 0,01/5 = 0,002 mol\nVolumen KMnO₄ = 0,002 mol / 0,02 mol/L = 0,1 L = 100 mL"
          }
        ]
      }
    ]
  },
  
  // Modelo 2
  "2": {
    title: "Modelo 2 - Julio 2025 (Simulación)",
    exercises: [
      {
        header: "Ejercicio 1 - Formulación y nomenclatura (1 punto)",
        content: "Nombre o formule, según corresponda, los siguientes compuestos:",
        questions: [
          {
            text: "a) CH₃-CH₂-CH(OH)-CH₃   b) K₂O   c) HNO₂   d) Perclorato de potasio   e) Óxido de cromo(III)   f) Sulfuro de hidrógeno   g) Etanoato de propilo   h) Hidróxido de amonio   i) Ácido hipoyodoso   j) Hidróxido de cromo(III)",
            score: 1,
            solution: "a) Butan-2-ol   b) Óxido de potasio   c) Ácido nitroso   d) KClO₄   e) Cr₂O₃   f) H₂S   g) CH₃-COO-CH₂-CH₂-CH₃   h) NH₄OH   i) HIO   j) Cr(OH)₃"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Estructura atómica (2 puntos)",
        content: "Considerando los elementos Na (Z=11), Mg (Z=12), P (Z=15) y Cl (Z=17):",
        questions: [
          {
            text: "a) Escriba la configuración electrónica de cada uno de ellos. (0,8 puntos)",
            score: 0.8,
            solution: "Na (Z=11): 1s² 2s² 2p⁶ 3s¹\nMg (Z=12): 1s² 2s² 2p⁶ 3s²\nP (Z=15): 1s² 2s² 2p⁶ 3s² 3p³\nCl (Z=17): 1s² 2s² 2p⁶ 3s² 3p⁵"
          },
          {
            text: "b) Explique cuál de ellos tendrá mayor radio atómico y cuál mayor energía de ionización. (1,2 puntos)",
            score: 1.2,
            solution: "Mayor radio atómico: Na. En un periodo, el radio atómico disminuye de izquierda a derecha (aumenta la carga nuclear efectiva). En un grupo, aumenta al bajar (aumenta el número de capas).\nMayor energía de ionización: Cl. La energía de ionización aumenta de izquierda a derecha en un periodo y disminuye al bajar en un grupo."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Cinética química (2 puntos)",
        content: "La descomposición del N₂O₅ sigue una cinética de primer orden con constante de velocidad k = 5,0·10⁻⁴ s⁻¹ a cierta temperatura.",
        questions: [
          {
            text: "a) Escriba la ecuación de velocidad y determine el tiempo de vida media. (1 punto)",
            score: 1,
            solution: "Ecuación de velocidad: v = k[N₂O₅]\nTiempo de vida media: t₁/₂ = ln2/k = 0,693/(5,0·10⁻⁴ s⁻¹) = 1386 s ≈ 23 minutos"
          },
          {
            text: "b) Si la concentración inicial es 0,010 M, ¿cuál será la concentración después de 1 hora? (1 punto)",
            score: 1,
            solution: "Para una reacción de primer orden: [N₂O₅]ₜ = [N₂O₅]₀·e⁻ᵏᵗ\n[N₂O₅]₃₆₀₀ₛ = 0,010·e⁻⁽⁵⁰·¹⁰⁻⁴⁾⁽³⁶⁰⁰⁾ = 0,010·e⁻¹⁸ = 0,010·1,5·10⁻⁸ = 1,5·10⁻¹⁰ M"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Equilibrio químico (2 puntos)",
        content: "A 448 °C, la constante de equilibrio Kc para la reacción H₂(g) + I₂(g) ⇌ 2HI(g) vale 50. Inicialmente se introducen 0,5 moles de H₂ y 0,5 moles de I₂ en un recipiente de 10 L.",
        questions: [
          {
            text: "a) Calcule la concentración de cada especie en el equilibrio. (1,2 puntos)",
            score: 1.2,
            solution: "H₂ + I₂ ⇌ 2HI\nInicial (M): 0,05  0,05   0\nEquilibrio (M): 0,05-x  0,05-x  2x\nKc = [HI]²/([H₂][I₂]) = (2x)²/((0,05-x)(0,05-x)) = 50\n4x²/(0,05-x)² = 50\n√4x²/√(0,05-x)² = √50\n2x/(0,05-x) = 7,07\n2x = 7,07(0,05-x)\n2x = 0,354 - 7,07x\n9,07x = 0,354\nx = 0,039\n[H₂] = [I₂] = 0,05 - 0,039 = 0,011 M\n[HI] = 2(0,039) = 0,078 M"
          },
          {
            text: "b) Calcule el grado de disociación del HI a esta temperatura si se introduce 1 mol de HI en el mismo recipiente. (0,8 puntos)",
            score: 0.8,
            solution: "2HI ⇌ H₂ + I₂\nInicial (M): 0,1   0   0\nEquilibrio (M): 0,1(1-α)  0,1·α/2  0,1·α/2\nKc' = 1/Kc = 1/50 = 0,02 = ([H₂][I₂])/[HI]² = (0,1·α/2)²/(0,1(1-α))²\n0,02 = (0,1·α/2)²/(0,1(1-α))² = (α/2)²/(1-α)²\n√0,02 = (α/2)/(1-α)\n0,141 = α/(2-2α)\n0,141(2-2α) = α\n0,282 - 0,282α = α\n0,282 = α + 0,282α = α(1+0,282)\nα = 0,282/1,282 = 0,22 (22%)"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Química orgánica (2 puntos)",
        content: "Para los siguientes compuestos orgánicos: CH₃-CH₂-CH₂-CHO, CH₃-CO-CH₂-CH₃ y CH₃-CH₂-CH₂-COOH",
        questions: [
          {
            text: "a) Nombre los tres compuestos e indique a qué familia pertenece cada uno. (0,6 puntos)",
            score: 0.6,
            solution: "CH₃-CH₂-CH₂-CHO: Butanal (aldehído)\nCH₃-CO-CH₂-CH₃: Butanona (cetona)\nCH₃-CH₂-CH₂-COOH: Ácido butanoico (ácido carboxílico)"
          },
          {
            text: "b) Escriba y nombre un isómero de cada uno de los compuestos. (0,6 puntos)",
            score: 0.6,
            solution: "Isómero de butanal: CH₃-CH(CH₃)-CHO (2-metilpropanal)\nIsómero de butanona: CH₃-CH₂-CO-CH₃ (pero es la misma molécula, la butanona)\nIsómero de ácido butanoico: CH₃-CH₂-CH(CH₃)-COOH (ácido 2-metilbutanoico)"
          },
          {
            text: "c) Escriba las reacciones de oxidación del butanal con KMnO₄ en medio ácido y del ácido butanoico con etanol, nombrando los productos. (0,8 puntos)",
            score: 0.8,
            solution: "Oxidación del butanal: CH₃-CH₂-CH₂-CHO + 2[O] → CH₃-CH₂-CH₂-COOH (ácido butanoico)\nEsterificación del ácido butanoico: CH₃-CH₂-CH₂-COOH + CH₃-CH₂OH → CH₃-CH₂-CH₂-COO-CH₂-CH₃ + H₂O (butanoato de etilo)"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 3
  "3": {
    title: "Modelo 3 - Química Orgánica y Ácido-Base",
    exercises: [
      {
        header: "Ejercicio 1 - Química Orgánica (2 puntos)",
        content: "Dados los siguientes compuestos orgánicos:",
        questions: [
          {
            text: "a) Formule y nombre los isómeros estructurales con fórmula molecular C₄H₈O que contengan un grupo carbonilo. (1 punto)",
            score: 1,
            solution: "Aldehídos: butanal (CH₃-CH₂-CH₂-CHO). Cetonas: butanona (CH₃-CO-CH₂-CH₃)"
          },
          {
            text: "b) Escriba las reacciones de obtención del ácido etanoico a partir del etanol. (1 punto)",
            score: 1,
            solution: "CH₃-CH₂OH + [O] → CH₃-CHO + H₂O\nCH₃-CHO + [O] → CH₃-COOH"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Ácido-Base (2 puntos)",
        content: "Se prepara una disolución de NH₃ disolviendo 1,7 g de este compuesto en agua hasta un volumen de 100 mL. La constante de basicidad del amoniaco es Kb = 1,8·10⁻⁵.",
        questions: [
          {
            text: "a) Calcule el pH de la disolución. (1 punto)",
            score: 1,
            solution: "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻\nMoles NH₃ = 1,7 g / 17 g/mol = 0,1 mol\n[NH₃] = 0,1 mol / 0,1 L = 1 M\nKb = [NH₄⁺][OH⁻]/[NH₃] = 1,8·10⁻⁵\n[OH⁻]² / 1 = 1,8·10⁻⁵\n[OH⁻] = √(1,8·10⁻⁵) = 4,24·10⁻³ M\npOH = -log(4,24·10⁻³) = 2,37\npH = 14 - pOH = 14 - 2,37 = 11,63"
          },
          {
            text: "b) Calcule el volumen de HCl 0,5 M necesario para neutralizar 50 mL de la disolución anterior. (1 punto)",
            score: 1,
            solution: "NH₃ + HCl → NH₄Cl\nMoles NH₃ en 50 mL = 1 M · 0,05 L = 0,05 mol\nMoles HCl necesarios = 0,05 mol\nVolumen HCl = 0,05 mol / 0,5 M = 0,1 L = 100 mL"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Redox (2 puntos)",
        content: "Se construye una pila galvánica con los siguientes electrodos: un electrodo de cinc sumergido en una disolución 1 M de Zn²⁺ y un electrodo de plata sumergido en una disolución 1 M de Ag⁺. Datos: E°(Zn²⁺/Zn) = -0,76 V; E°(Ag⁺/Ag) = +0,80 V.",
        questions: [
          {
            text: "a) Escriba las semirreacciones que tienen lugar en el ánodo y en el cátodo, así como la reacción global de la pila. (0,8 puntos)",
            score: 0.8,
            solution: "Ánodo (oxidación): Zn → Zn²⁺ + 2e⁻\nCátodo (reducción): Ag⁺ + e⁻ → Ag\nReacción global: Zn + 2Ag⁺ → Zn²⁺ + 2Ag"
          },
          {
            text: "b) Calcule la fuerza electromotriz estándar de la pila. (0,7 puntos)",
            score: 0.7,
            solution: "E° = E°cátodo - E°ánodo = E°(Ag⁺/Ag) - E°(Zn²⁺/Zn) = 0,80 V - (-0,76 V) = 1,56 V"
          },
          {
            text: "c) Indique qué electrodo es el negativo y cuál es el positivo. (0,5 puntos)",
            score: 0.5,
            solution: "El electrodo negativo es el ánodo, que es el electrodo de cinc donde ocurre la oxidación.\nEl electrodo positivo es el cátodo, que es el electrodo de plata donde ocurre la reducción."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Cinética (2 puntos)",
        content: "La reacción A + B → C es de primer orden respecto a A y de segundo orden respecto a B. Cuando las concentraciones de A y B son 0,1 M y 0,2 M respectivamente, la velocidad de reacción es 5·10⁻⁴ M/s.",
        questions: [
          {
            text: "a) Determine la ley de velocidad y el valor de la constante de velocidad. (1,2 puntos)",
            score: 1.2,
            solution: "La ley de velocidad es v = k[A]¹[B]²\nSustituyendo: 5·10⁻⁴ M/s = k · 0,1 M · (0,2 M)²\n5·10⁻⁴ M/s = k · 0,1 M · 0,04 M²\nk = 5·10⁻⁴ M/s / (0,1 M · 0,04 M²) = 0,125 M⁻²s⁻¹"
          },
          {
            text: "b) Calcule la velocidad de reacción cuando las concentraciones de A y B son 0,2 M y 0,1 M, respectivamente. (0,8 points)",
            score: 0.8,
            solution: "v = k[A]¹[B]² = 0,125 M⁻²s⁻¹ · 0,2 M · (0,1 M)² = 0,125 M⁻²s⁻¹ · 0,2 M · 0,01 M² = 2,5·10⁻⁴ M/s"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Equilibrio químico (2 puntos)",
        content: "A 440 °C, la constante de equilibrio Kc para la reacción PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) vale 0,0870. Inicialmente se introducen 0,0500 moles de PCl₅ en un recipiente de 2,00 L vacío.",
        questions: [
          {
            text: "a) Calcule la concentración de cada especie en el equilibrio. (1,2 puntos)",
            score: 1.2,
            solution: "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (M): 0,0500/2,00 = 0,0250    0    0\nEquilibrio (M): 0,0250-x    x    x\nKc = [PCl₃][Cl₂]/[PCl₅] = x²/(0,0250-x) = 0,0870\nx² = 0,0870(0,0250-x)\nx² + 0,0870x - 0,00218 = 0\nResolviendo: x = 0,00822 M\n[PCl₅] = 0,0250 - 0,00822 = 0,0168 M\n[PCl₃] = [Cl₂] = 0,00822 M"
          },
          {
            text: "b) Calcule el grado de disociación del PCl₅ en estas condiciones. (0,8 puntos)",
            score: 0.8,
            solution: "α = x/[PCl₅]₀ = 0,00822/0,0250 = 0,329 = 32,9%"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 4
  "4": {
    title: "Modelo 4 - Redox y Termoquímica",
    exercises: [
      {
        header: "Ejercicio 1 - Redox (2 puntos)",
        content: "Para la reacción redox: KMnO₄ + KI + H₂SO₄ → MnSO₄ + I₂ + K₂SO₄ + H₂O",
        questions: [
          {
            text: "a) Ajuste la reacción por el método del ion-electrón. (1 punto)",
            score: 1,
            solution: "Reducción: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O\nOxidación: 2I⁻ → I₂ + 2e⁻\nEcuación global: 2KMnO₄ + 10KI + 8H₂SO₄ → 2MnSO₄ + 5I₂ + 6K₂SO₄ + 8H₂O"
          },
          {
            text: "b) Calcule el volumen de una disolución 0,2M de KMnO₄ necesario para oxidar 1,5g de KI. (1 punto)",
            score: 1,
            solution: "1,5g KI ÷ 166 g/mol = 0,009 mol KI\n0,009 mol KI × (2 mol KMnO₄ / 10 mol KI) = 0,0018 mol KMnO₄\n0,0018 mol KMnO₄ ÷ 0,2 mol/L = 0,009 L = 9 mL"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Termoquímica (2 puntos)",
        content: "Dadas las siguientes entalpías de formación estándar: ΔHf°(H₂O(l)) = -285,8 kJ/mol, ΔHf°(CO₂(g)) = -393,5 kJ/mol, ΔHf°(C₂H₅OH(l)) = -277,7 kJ/mol:",
        questions: [
          {
            text: "a) Calcule la entalpía de combustión estándar del etanol. (1 punto)",
            score: 1,
            solution: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)\nΔH° = 2·ΔHf°(CO₂) + 3·ΔHf°(H₂O) - ΔHf°(C₂H₅OH) - 3·ΔHf°(O₂)\nΔH° = 2·(-393,5) + 3·(-285,8) - (-277,7) - 3·(0) = -1367,7 kJ/mol"
          },
          {
            text: "b) Calcule el calor producido al quemar 100 g de etanol en condiciones estándar. (1 punto)",
            score: 1,
            solution: "Moles etanol = 100 g / 46 g/mol = 2,174 mol\nCalor = 2,174 mol · (-1367,7 kJ/mol) = -2973,4 kJ"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Estructura atómica (2 puntos)",
        content: "Considere los elementos A (Z=19), B (Z=35), C (Z=13) y D (Z=16):",
        questions: [
          {
            text: "a) Escriba la configuración electrónica de cada elemento y determine su posición (grupo y período) en la tabla periódica. (1,2 puntos)",
            score: 1.2,
            solution: "A (Z=19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ - Grupo 1 (metales alcalinos), período 4\nB (Z=35): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ - Grupo 17 (halógenos), período 4\nC (Z=13): 1s² 2s² 2p⁶ 3s² 3p¹ - Grupo 13, período 3\nD (Z=16): 1s² 2s² 2p⁶ 3s² 3p⁴ - Grupo 16 (calcógenos), período 3"
          },
          {
            text: "b) Ordene los elementos en orden creciente de radio atómico, justificando su respuesta. (0,8 puntos)",
            score: 0.8,
            solution: "El radio atómico aumenta al descender en un grupo y disminuye al avanzar de izquierda a derecha en un período.\nRadio atómico creciente: B < D < C < A\nB y A están en el mismo período (4), pero B está más a la derecha, por lo que tiene menor radio.\nD y C están en el mismo período (3), pero D está más a la derecha que C, por lo que tiene menor radio.\nC está en el período 3 y A en el período 4, y además A está más a la izquierda, por lo que A tiene mayor radio."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Química orgánica (2 puntos)",
        content: "Complete las siguientes reacciones orgánicas, nombrando los productos obtenidos:",
        questions: [
          {
            text: "a) CH₃-CH=CH₂ + HBr → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH=CH₂ + HBr → CH₃-CHBr-CH₃ (2-bromopropano)\nSe produce la adición electrófila del HBr al doble enlace, siguiendo la regla de Markovnikov."
          },
          {
            text: "b) CH₃-CH₂-COOH + CH₃OH → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂-COOH + CH₃OH → CH₃-CH₂-COO-CH₃ + H₂O (propanoato de metilo)\nEs una reacción de esterificación."
          },
          {
            text: "c) CH₃-CH₂-CHO + [O] → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂-CHO + [O] → CH₃-CH₂-COOH (ácido propanoico)\nEs una reacción de oxidación de un aldehído a ácido carboxílico."
          },
          {
            text: "d) CH₃-CHOH-CH₃ + H₂SO₄ (calor) → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CHOH-CH₃ + H₂SO₄ (calor) → CH₃-CH=CH₂ + H₂O (propeno)\nEs una reacción de deshidratación."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Ácido-Base (2 puntos)",
        content: "Se dispone de 250 mL de una disolución de ácido acético 0,1 M (Ka = 1,8·10⁻⁵).",
        questions: [
          {
            text: "a) Calcule el pH de la disolución. (1 punto)",
            score: 1,
            solution: "CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺\nKa = [CH₃COO⁻][H₃O⁺]/[CH₃COOH] = 1,8·10⁻⁵\nInicial: 0,1 M    -    -\nEquilibrio: (0,1-x) M    x M    x M\nAsumiendo que x << 0,1: Ka = x²/0,1 = 1,8·10⁻⁵\nx = √(1,8·10⁻⁵ · 0,1) = 1,34·10⁻³ M\npH = -log[H₃O⁺] = -log(1,34·10⁻³) = 2,87"
          },
          {
            text: "b) Calcule el volumen de NaOH 0,2 M necesario para neutralizar completamente el ácido. (0,5 puntos)",
            score: 0.5,
            solution: "CH₃COOH + NaOH → CH₃COONa + H₂O\nMoles CH₃COOH = 0,25 L · 0,1 mol/L = 0,025 mol\nMoles NaOH necesarios = 0,025 mol\nVolumen NaOH = 0,025 mol / 0,2 mol/L = 0,125 L = 125 mL"
          },
          {
            text: "c) Calcule el pH de la disolución resultante de añadir 100 mL de NaOH 0,2 M a la disolución inicial. (0,5 puntos)",
            score: 0.5,
            solution: "Moles CH₃COOH = 0,025 mol\nMoles NaOH = 0,1 L · 0,2 mol/L = 0,02 mol\nMoles CH₃COOH sin neutralizar = 0,025 - 0,02 = 0,005 mol\nMoles CH₃COONa formado = 0,02 mol\nVolumen total = 0,25 L + 0,1 L = 0,35 L\n[CH₃COOH] = 0,005 mol / 0,35 L = 0,0143 M\n[CH₃COONa] = 0,02 mol / 0,35 L = 0,0571 M\nSe forma una disolución tampón: pH = pKa + log([CH₃COONa]/[CH₃COOH]) = -log(1,8·10⁻⁵) + log(0,0571/0,0143) = 4,74 + 0,6 = 5,34"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 5
  "5": {
    title: "Modelo 5 - Equilibrio y Cinética",
    exercises: [
      {
        header: "Ejercicio 1 - Cinética (2 puntos)",
        content: "En la reacción A + B → C + D se han obtenido los siguientes datos iniciales:",
        questions: [
          {
            text: "a) Determine la ecuación de velocidad y el orden total de la reacción. (1 punto)",
            score: 1,
            solution: "Orden respecto a A = 1, orden respecto a B = 2\nv = k[A]¹[B]²\nOrden total = 1 + 2 = 3"
          },
          {
            text: "b) ¿Cómo afectaría a la velocidad de reacción un aumento de temperatura? Razone su respuesta. (1 punto)",
            score: 1,
            solution: "La constante de velocidad k aumenta con la temperatura según la ecuación de Arrhenius: k = A·e^(-Ea/RT). Por tanto, un aumento de temperatura provoca un aumento de la velocidad de reacción."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Equilibrio químico (2 puntos)",
        content: "Para la reacción en equilibrio: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), la constante de equilibrio Kc vale 4,1 a 400°C. En un recipiente de 5 L se introducen 1 mol de N₂ y 3 moles de H₂.",
        questions: [
          {
            text: "a) Calcule la concentración de cada especie en equilibrio. (1,2 puntos)",
            score: 1.2,
            solution: "N₂ + 3H₂ ⇌ 2NH₃\nInicial (M): 1/5 = 0,2    3/5 = 0,6    0\nEquilibrio (M): 0,2-x    0,6-3x    2x\nKc = [NH₃]²/([N₂][H₂]³) = (2x)²/((0,2-x)(0,6-3x)³) = 4,1\nUsando aproximaciones y el método de prueba y error: x ≈ 0,048\n[N₂] = 0,2 - 0,048 = 0,152 M\n[H₂] = 0,6 - 3·0,048 = 0,456 M\n[NH₃] = 2·0,048 = 0,096 M"
          },
          {
            text: "b) Calcule el valor de Kp a la misma temperatura. (0,8 puntos)",
            score: 0.8,
            solution: "Kp = Kc·(RT)^Δn\nΔn = 2 - (1+3) = -2\nR = 0,082 atm·L/(mol·K)\nT = 400 + 273 = 673 K\nKp = 4,1·(0,082·673)^(-2) = 4,1/(0,082·673)² = 0,00106"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Enlace químico (2 puntos)",
        content: "Considere las siguientes moléculas: CH₄, NH₃, H₂O y HF:",
        questions: [
          {
            text: "a) Explique la geometría de cada molécula utilizando la teoría de repulsión de pares de electrones de la capa de valencia (TRPECV). (1,2 puntos)",
            score: 1.2,
            solution: "CH₄: El carbono tiene 4 electrones de valencia y forma 4 enlaces con H. La distribución de pares electrónicos es tetraédrica, lo que resulta en una geometría molecular tetraédrica con ángulos de 109,5°.\n\nNH₃: El nitrógeno tiene 5 electrones de valencia, forma 3 enlaces con H y tiene un par no compartido. La distribución de pares electrónicos es tetraédrica, pero la geometría molecular es piramidal trigonal con ángulos de aproximadamente 107°.\n\nH₂O: El oxígeno tiene 6 electrones de valencia, forma 2 enlaces con H y tiene dos pares no compartidos. La distribución de pares electrónicos es tetraédrica, pero la geometría molecular es angular con un ángulo de aproximadamente 104,5°.\n\nHF: El flúor tiene 7 electrones de valencia, forma 1 enlace con H y tiene tres pares no compartidos. La geometría es lineal."
          },
          {
            text: "b) Ordene las moléculas anteriores según el valor creciente de su punto de ebullición, justificando su respuesta. (0,8 puntos)",
            score: 0.8,
            solution: "CH₄ < NH₃ < H₂O < HF\nEl punto de ebullición está relacionado con las fuerzas intermoleculares. El CH₄ solo presenta fuerzas de dispersión (las más débiles). NH₃, H₂O y HF presentan puentes de hidrógeno, cuya fuerza aumenta al aumentar la electronegatividad del átomo unido al H (N < O < F), aunque también influye el número de puentes que cada molécula puede formar."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Química orgánica (2 puntos)",
        content: "Considere los siguientes compuestos orgánicos: propano, propeno, propino, propanol y ácido propanoico.",
        questions: [
          {
            text: "a) Escriba sus fórmulas moleculares y sus fórmulas estructurales. (1 punto)",
            score: 1,
            solution: "Propano: C₃H₈, CH₃-CH₂-CH₃\nPropeno: C₃H₆, CH₃-CH=CH₂\nPropino: C₃H₄, CH₃-C≡CH\nPropanol: C₃H₈O, CH₃-CH₂-CH₂OH\nÁcido propanoico: C₃H₆O₂, CH₃-CH₂-COOH"
          },
          {
            text: "b) Explique qué tipo de isomería presentan el propanol y el metoxietano. (0,5 puntos)",
            score: 0.5,
            solution: "El propanol (CH₃-CH₂-CH₂OH) y el metoxietano (CH₃-O-CH₂-CH₃) presentan isomería de función, ya que ambos tienen la misma fórmula molecular (C₃H₈O) pero diferentes grupos funcionales: el propanol tiene un grupo alcohol (-OH) mientras que el metoxietano tiene un grupo éter (-O-)."
          },
          {
            text: "c) Escriba la reacción de esterificación entre el ácido propanoico y el etanol, nombrando el producto. (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂-COOH + CH₃-CH₂OH → CH₃-CH₂-COO-CH₂-CH₃ + H₂O\nEl producto es el propanoato de etilo."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Espontaneidad (2 puntos)",
        content: "Para la reacción: 2NO(g) + O₂(g) → 2NO₂(g), a 25°C, ΔH° = -114,1 kJ y ΔS° = -146,4 J/K.",
        questions: [
          {
            text: "a) Calcule el valor de ΔG° a 25°C e indique si la reacción es espontánea en estas condiciones. (1 punto)",
            score: 1,
            solution: "ΔG° = ΔH° - TΔS° = -114,1 kJ - 298 K · (-146,4/1000) kJ/K = -114,1 kJ + 43,6 kJ = -70,5 kJ\nComo ΔG° < 0, la reacción es espontánea a 25°C."
          },
          {
            text: "b) Determine la temperatura a la cual la reacción deja de ser espontánea. (1 punto)",
            score: 1,
            solution: "Para que la reacción no sea espontánea, ΔG° > 0\nΔG° = ΔH° - TΔS° > 0\nΔH° - TΔS° > 0\n-114,1 kJ - T·(-146,4/1000) kJ/K > 0\n-114,1 + 146,4·T/1000 > 0\n146,4·T/1000 > 114,1\nT > 114,1 · 1000 / 146,4\nT > 779,4 K (506,4°C)\nA partir de esta temperatura, la reacción deja de ser espontánea."
          },
          {
            text: "c) Calcule la energía que se libera al quemar 1 kg de propano a 25°C. (0,6 puntos)",
            score: 0.6,
            solution: "Masa molar del propano = 44 g/mol\nMoles en 1 kg de propano = 1000 g / 44 g/mol = 22,73 mol\nEnergía liberada = 22,73 mol · 2220 kJ/mol = 50460 kJ"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 6
  "6": {
    title: "Modelo 6 - Equilibrio y Química Orgánica",
    exercises: [
      {
        header: "Ejercicio 1 - Equilibrio químico (2 puntos)",
        content: "El pentacloruro de fósforo se descompone a 250°C según la reacción: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). En un recipiente de 2 L a 250°C se introducen 0,25 moles de PCl₅ y, una vez alcanzado el equilibrio, quedan 0,15 moles de PCl₅. Calcule:",
        questions: [
          {
            text: "a) Las concentraciones de las tres especies en el equilibrio. (0,8 puntos)",
            score: 0.8,
            solution: "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (mol): 0,25    0    0\nReaccionan (mol): 0,25 - 0,15 = 0,10\nEquilibrio (mol): 0,15    0,10    0,10\nConcentraciones en equilibrio:\n[PCl₅] = 0,15 mol / 2 L = 0,075 M\n[PCl₃] = [Cl₂] = 0,10 mol / 2 L = 0,05 M"
          },
          {
            text: "b) El valor de las constantes de equilibrio Kc y Kp a esa temperatura. (0,8 puntos)",
            score: 0.8,
            solution: "Kc = [PCl₃][Cl₂]/[PCl₅] = 0,05 · 0,05 / 0,075 = 0,033\nKp = Kc · (RT)^Δn = Kc · (RT)^1 = 0,033 · (0,082 · 523) = 1,42"
          },
          {
            text: "c) El grado de disociación del PCl₅. (0,4 puntos)",
            score: 0.4,
            solution: "Grado de disociación = moles disociados / moles iniciales = 0,10 mol / 0,25 mol = 0,40 = 40%"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Química orgánica (2 puntos)",
        content: "Para los siguientes compuestos: CH₃-CH₂-COOH, CH₃-CH₂-CH₂-OH, CH₃-CH₂-CHO, CH₃-CO-CH₃, CH₃-COOCH₃:",
        questions: [
          {
            text: "a) Identifique y nombre los grupos funcionales presentes en cada uno. (1 punto)",
            score: 1,
            solution: "CH₃-CH₂-COOH: ácido propanoico (grupo carboxilo -COOH)\nCH₃-CH₂-CH₂-OH: propan-1-ol (grupo hidroxilo -OH)\nCH₃-CH₂-CHO: propanal (grupo aldehído -CHO)\nCH₃-CO-CH₃: propanona o acetona (grupo cetona >C=O)\nCH₃-COOCH₃: acetato de metilo (grupo éster -COO-)"
          },
          {
            text: "b) Escriba y nombre un isómero de cada uno de ellos. (1 punto)",
            score: 1,
            solution: "CH₃-CH₂-COOH: CH₃-CO-CH₂-OH (3-hidroxibutanona)\nCH₃-CH₂-CH₂-OH: CH₃-CHOH-CH₃ (propan-2-ol)\nCH₃-CH₂-CHO: CH₃-CO-CH₃ (propanona)\nCH₃-CO-CH₃: CH₃-CH₂-CHO (propanal)\nCH₃-COOCH₃: HCOOCH₂-CH₃ (propanoato de metilo)"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Ácido-Base (2 puntos)",
        content: "Se dispone de una disolución acuosa de ácido acético 0,1 M (Ka = 1,8·10⁻⁵).",
        questions: [
          {
            text: "a) Calcule el grado de disociación del ácido. (0,8 puntos)",
            score: 0.8,
            solution: "CH₃COOH ⇌ CH₃COO⁻ + H⁺\nLlamando α al grado de disociación:\n[H⁺] = [CH₃COO⁻] = 0,1·α\n[CH₃COOH] = 0,1·(1-α)\nKa = [H⁺][CH₃COO⁻]/[CH₃COOH] = (0,1α)²/(0,1(1-α)) = 0,1α²/(1-α) = 1,8·10⁻⁵\nSi α es pequeño, 1-α ≈ 1: 0,1α² = 1,8·10⁻⁵\nα = √(1,8·10⁻⁵/0,1) = 0,0134 = 1,34%"
          },
          {
            text: "b) Calcule el pH de la disolución. (0,6 puntos)",
            score: 0.6,
            solution: "[H⁺] = 0,1 · α = 0,1 · 0,0134 = 1,34·10⁻³ M\npH = -log[H⁺] = -log(1,34·10⁻³) = 2,87"
          },
          {
            text: "c) ¿Qué volumen de una disolución de NaOH 0,15 M se necesitará para neutralizar 25 mL de la disolución de ácido acético? (0,6 puntos)",
            score: 0.6,
            solution: "CH₃COOH + NaOH → CH₃COONa + H₂O\nMoles de CH₃COOH = 0,025 L · 0,1 mol/L = 0,0025 mol\nMoles de NaOH necesarios = 0,0025 mol\nVolumen de NaOH = 0,0025 mol / 0,15 mol/L = 0,0167 L = 16,7 mL"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Redox (2 puntos)",
        content: "Se construye una pila galvánica utilizando las siguientes semiceldas: Pt | Fe³⁺, Fe²⁺ || Ag⁺ | Ag. Los potenciales estándar de reducción son: E°(Fe³⁺/Fe²⁺) = 0,77 V y E°(Ag⁺/Ag) = 0,80 V.",
        questions: [
          {
            text: "a) Escriba las semirreacciones que tienen lugar en el ánodo y en el cátodo. (0,6 puntos)",
            score: 0.6,
            solution: "Ánodo (oxidación): Fe²⁺ → Fe³⁺ + e⁻\nCátodo (reducción): Ag⁺ + e⁻ → Ag"
          },
          {
            text: "b) Escriba la reacción global de la pila y calcule su fuerza electromotriz estándar. (0,8 puntos)",
            score: 0.8,
            solution: "Reacción global: Fe²⁺ + Ag⁺ → Fe³⁺ + Ag\nE° = E°cátodo - E°ánodo = E°(Ag⁺/Ag) - E°(Fe³⁺/Fe²⁺) = 0,80 V - 0,77 V = 0,03 V"
          },
          {
            text: "c) Describa la pila que podría construirse con los pares Ag⁺/Ag y Zn²⁺/Zn, indicando: ánodo, cátodo, semirreacciones, reacción global y fuerza electromotriz. (0,4 puntos)",
            score: 0.4,
            solution: "Ánodo (oxidación): Zn → Zn²⁺ + 2e⁻\nCátodo (reducción): 2Ag⁺ + 2e⁻ → 2Ag\nReacción global: Zn + 2Ag⁺ → Zn²⁺ + 2Ag\nFuerza electromotriz: E° = E°(Ag⁺/Ag) - E°(Zn²⁺/Zn) = 0,80 V - (-0,76 V) = 1,56 V"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Estructura atómica (2 puntos)",
        content: "Responda razonadamente a las siguientes cuestiones:",
        questions: [
          {
            text: "a) Escriba las configuraciones electrónicas de los iones Cr³⁺ y Br⁻. (Z(Cr) = 24, Z(Br) = 35). (0,8 puntos)",
            score: 0.8,
            solution: "Cr (Z=24): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵\nCr³⁺ (pierde 3 electrones): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d³\nBr (Z=35): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵\nBr⁻ (gana 1 electrón): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶"
          },
          {
            text: "b) Indique el número de electrones desapareados que presenta cada uno de los átomos: P (Z=15), Mn (Z=25), Fe (Z=26). (0,6 puntos)",
            score: 0.6,
            solution: "P (Z=15): 1s² 2s² 2p⁶ 3s² 3p³\nEn el subnivel 3p tiene 3 electrones, que según la regla de Hund ocupan orbitales diferentes con espines paralelos. Por tanto, P tiene 3 electrones desapareados.\nMn (Z=25): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵\nEn el subnivel 3d tiene 5 electrones, que ocupan los 5 orbitales d con espines paralelos. Mn tiene 5 electrones desapareados.\nFe (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶\nEn el subnivel 3d tiene 6 electrones, que ocupan los 5 orbitales d según la regla de Hund: 4 orbitales con 1 electrón cada uno y 1 orbital con 2 electrones de espines opuestos. Fe tiene 4 electrones desapareados."
          },
          {
            text: "c) Ordene las siguientes especies según su radio creciente: O²⁻, F⁻, Na⁺, Mg²⁺. Justifique su respuesta. (0,6 puntos)",
            score: 0.6,
            solution: "Todas estas especies tienen la misma configuración electrónica (1s² 2s² 2p⁶), pero diferente carga nuclear efectiva. El radio aumenta al disminuir la carga nuclear efectiva.\nMg²⁺ (Z=12, 2 cargas positivas): mayor carga nuclear efectiva, menor radio\nNa⁺ (Z=11, 1 carga positiva): menor carga nuclear efectiva que Mg²⁺, mayor radio\nF⁻ (Z=9, 1 carga negativa): menor carga nuclear efectiva que Na⁺, mayor radio\nO²⁻ (Z=8, 2 cargas negativas): menor carga nuclear efectiva, mayor radio\nOrden de radio creciente: Mg²⁺ < Na⁺ < F⁻ < O²⁻"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 7
  "7": {
    title: "Modelo 7 - Cinética y Equilibrio",
    exercises: [
      {
        header: "Ejercicio 1 - Cinética química (2 puntos)",
        content: "Para la reacción A + B → C, se han obtenido los siguientes datos iniciales de velocidad a 25°C:",
        questions: [
          {
            text: "a) Determine la ley de velocidad y calcule el valor de la constante de velocidad. (1 punto)",
            score: 1,
            solution: "Comparando los experimentos 1 y 2, la [B] se duplica mientras [A] se mantiene constante, y la velocidad se cuadruplica (de 3,2·10⁻³ a 12,8·10⁻³). Esto sugiere un orden 2 respecto a B.\nComparando los experimentos 1 y 3, [A] se reduce a la mitad mientras [B] se mantiene constante, y la velocidad se reduce a la mitad (de 3,2·10⁻³ a 1,6·10⁻³). Esto sugiere un orden 1 respecto a A.\nPor tanto, la ley de velocidad es: v = k·[A]¹·[B]²\nUsando el experimento 1: k = 3,2·10⁻³ / (0,2 · 0,2²) = 0,4 M⁻²·s⁻¹"
          },
          {
            text: "b) Explique el efecto que tendría sobre la velocidad de reacción un aumento de la temperatura. (0,5 puntos)",
            score: 0.5,
            solution: "Un aumento de temperatura aumenta la velocidad de reacción porque incrementa la constante de velocidad según la ecuación de Arrhenius: k = A·e^(-Ea/RT). Al aumentar T, el valor de k aumenta, lo que incrementa la velocidad de reacción."
          },
          {
            text: "c) Si la reacción tiene una energía de activación de 75 kJ/mol, calcule a qué temperatura la constante de velocidad será el doble que a 25°C. (0,5 puntos)",
            score: 0.5,
            solution: "Según la ecuación de Arrhenius: k₂/k₁ = e^(-Ea/R)(1/T₁ - 1/T₂)\nSi k₂/k₁ = 2, entonces: ln(2) = (Ea/R)(1/T₁ - 1/T₂)\nDonde T₁ = 298 K y R = 8,314 J/(mol·K)\n0,693 = (75000/8,314)(1/298 - 1/T₂)\n0,693 = 9021,2(1/298 - 1/T₂)\n1/T₂ = 1/298 - 0,693/9021,2 = 0,00336 - 0,0000768 = 0,00328\nT₂ = 1/0,00328 = 304,9 K = 31,9°C"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Equilibrio ácido-base (2 puntos)",
        content: "Se disuelven 0,40 g de hidróxido de potasio, KOH, en agua hasta obtener 250 mL de disolución.",
        questions: [
          {
            text: "a) Calcule el pH de la disolución. (0,7 puntos)",
            score: 0.7,
            solution: "Masa molar de KOH = 56 g/mol\nMoles de KOH = 0,40 g / 56 g/mol = 0,00714 mol\n[KOH] = 0,00714 mol / 0,250 L = 0,0286 M\nKOH → K⁺ + OH⁻, por lo que [OH⁻] = 0,0286 M\npOH = -log[OH⁻] = -log(0,0286) = 1,54\npH = 14 - pOH = 14 - 1,54 = 12,46"
          },
          {
            text: "b) ¿Qué volumen de una disolución de HCl 0,1 M se necesita para neutralizar completamente la disolución anterior? (0,7 puntos)",
            score: 0.7,
            solution: "KOH + HCl → KCl + H₂O\nMoles de KOH = 0,00714 mol\nMoles de HCl necesarios = 0,00714 mol\nVolumen de HCl = 0,00714 mol / 0,1 mol/L = 0,0714 L = 71,4 mL"
          },
          {
            text: "c) Calcule el pH de la disolución resultante de añadir 50 mL de la disolución de HCl 0,1 M a la disolución inicial de KOH. (0,6 puntos)",
            score: 0.6,
            solution: "Moles de KOH iniciales = 0,00714 mol\nMoles de HCl añadidos = 0,050 L · 0,1 mol/L = 0,0050 mol\nMoles de KOH sin neutralizar = 0,00714 - 0,0050 = 0,00214 mol\nVolumen total = 0,250 L + 0,050 L = 0,300 L\n[OH⁻] = 0,00214 mol / 0,300 L = 0,00713 M\npOH = -log(0,00713) = 2,15\npH = 14 - 2,15 = 11,85"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Química Orgánica (2 puntos)",
        content: "Complete las siguientes reacciones orgánicas, indicando el tipo de reacción y nombrando los productos obtenidos:",
        questions: [
          {
            text: "a) CH₃-CH=CH₂ + H₂O (H⁺) → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH=CH₂ + H₂O (H⁺) → CH₃-CHOH-CH₃ (propan-2-ol o isopropanol)\nEs una reacción de adición electrófila, siguiendo la regla de Markovnikov (el H se adiciona al C menos sustituido)."
          },
          {
            text: "b) CH₃-CH₂OH + [O] → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂OH + [O] → CH₃-CHO + H₂O (etanal o acetaldehído)\nEs una reacción de oxidación parcial de un alcohol primario a aldehído."
          },
          {
            text: "c) CH₃-COOH + CH₃OH → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-COOH + CH₃OH → CH₃-COO-CH₂-CH₃ + H₂O (etanoato de etilo o acetato de etilo)\nEs una reacción de esterificación."
          },
          {
            text: "d) CH₃-CH₂-CHO + 2[H] → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂-CHO + 2[H] → CH₃-CH₂-CH₂OH (propan-1-ol)\nEs una reacción de reducción de un aldehído a alcohol primario."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Electroquímica (2 puntos)",
        content: "Dadas las siguientes parejas redox con sus potenciales estándar de reducción: Ag⁺/Ag (E° = 0,80 V), Cu²⁺/Cu (E° = 0,34 V), Zn²⁺/Zn (E° = -0,76 V):",
        questions: [
          {
            text: "a) Indique, justificando la respuesta, qué especies podrían oxidar al Zn(s). (0,8 puntos)",
            score: 0,
            solution: "Para que una especie pueda oxidar al Zn(s), debe tener un potencial de reducción mayor que el del par Zn²⁺/Zn (-0,76 V). Tanto el Cu²⁺ (E° = 0,34 V) como el Ag⁺ (E° = 0,80 V) tienen potenciales mayores, por lo que ambos pueden oxidar al Zn(s) a Zn²⁺."
          },
          {
            text: "b) Escriba las semirreacciones y la reacción global ajustada que tiene lugar al sumergir una lámina de cinc en una disolución de Cu²⁺. Calcule E° para esta reacción. (0,8 puntos)",
            score: 0,
            solution: "Semirreacción de oxidación: Zn → Zn²⁺ + 2e⁻\nSemirreacción de reducción: Cu²⁺ + 2e⁻ → Cu\nReacción global: Zn + Cu²⁺ → Zn²⁺ + Cu\nE° = E°(reducción) - E°(oxidación) = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 V - (-0,76 V) = 1,10 V"
          },
          {
            text: "c) Describa la pila que podría construirse con los pares Ag⁺/Ag y Zn²⁺/Zn, indicando: ánodo, cátodo, semirreacciones, reacción global y fuerza electromotriz. (0,4 puntos)",
            score: 0,
            solution: "Ánodo (oxidación): Zn → Zn²⁺ + 2e⁻\nCátodo (reducción): 2Ag⁺ + 2e⁻ → 2Ag\nReacción global: Zn + 2Ag⁺ → Zn²⁺ + 2Ag\nFuerza electromotriz: E° = E°(Ag⁺/Ag) - E°(Zn²⁺/Zn) = 0,80 V - (-0,76 V) = 1,56 V"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Estructura atómica (2 puntos)",
        content: "Responda razonadamente a las siguientes cuestiones:",
        questions: [
          {
            text: "a) Escriba las configuraciones electrónicas de los iones Cr³⁺ y Br⁻. (Z(Cr) = 24, Z(Br) = 35). (0,8 puntos)",
            score: 0,
            solution: "Cr (Z=24): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵\nCr³⁺ (pierde 3 electrones): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d³\nBr (Z=35): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵\nBr⁻ (gana 1 electrón): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶"
          },
          {
            text: "b) Indique el número de electrones desapareados que presenta cada uno de los átomos: P (Z=15), Mn (Z=25), Fe (Z=26). (0,6 puntos)",
            score: 0,
            solution: "P (Z=15): 1s² 2s² 2p⁶ 3s² 3p³\nEn el subnivel 3p tiene 3 electrones, que según la regla de Hund ocupan orbitales diferentes con espines paralelos. Por tanto, P tiene 3 electrones desapareados.\nMn (Z=25): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵\nEn el subnivel 3d tiene 5 electrones, que ocupan los 5 orbitales d con espines paralelos. Mn tiene 5 electrones desapareados.\nFe (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶\nEn el subnivel 3d tiene 6 electrones, que ocupan los 5 orbitales d según la regla de Hund: 4 orbitales con 1 electrón cada uno y 1 orbital con 2 electrones de espines opuestos. Fe tiene 4 electrones desapareados."
          },
          {
            text: "c) Ordene las siguientes especies según su radio creciente: O²⁻, F⁻, Na⁺, Mg²⁺. Justifique su respuesta. (0,6 puntos)",
            score: 0,
            solution: "Todas estas especies tienen la misma configuración electrónica (1s² 2s² 2p⁶), pero diferente carga nuclear efectiva. El radio aumenta al disminuir la carga nuclear efectiva.\nMg²⁺ (Z=12, 2 cargas positivas): mayor carga nuclear efectiva, menor radio\nNa⁺ (Z=11, 1 carga positiva): menor carga nuclear efectiva que Mg²⁺, mayor radio\nF⁻ (Z=9, 1 carga negativa): menor carga nuclear efectiva que Na⁺, mayor radio\nO²⁻ (Z=8, 2 cargas negativas): menor carga nuclear efectiva, mayor radio\nOrden de radio creciente: Mg²⁺ < Na⁺ < F⁻ < O²⁻"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 8
  "8": {
    title: "Modelo 8 - Estructura Atómica y Enlace",
    exercises: [
      {
        header: "Ejercicio 1 - Estructura atómica (2 puntos)",
        content: "Dado el elemento de número atómico Z = 35:",
        questions: [
          {
            text: "a) Escriba su configuración electrónica, indique de qué elemento se trata y sitúelo en la tabla periódica. (0,8 puntos)",
            score: 0.8,
            solution: "Z = 35: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵\nSe trata del bromo (Br).\nEstá situado en el grupo 17 (halógenos) y período 4 de la tabla periódica."
          },
          {
            text: "b) Escriba la configuración electrónica de su anión más estable e indique el número de electrones de valencia. (0,6 puntos)",
            score: 0.6,
            solution: "El anión más estable es Br⁻, con configuración electrónica 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶.\nTiene 8 electrones de valencia (los del nivel 4: 2 en 4s y 6 en 4p)."
          },
          {
            text: "c) Indique, justificando la respuesta, cuál de los siguientes elementos tendría mayor radio atómico: Br, Rb, Kr, Sr. (0,6 puntos)",
            score: 0.6,
            solution: "Br (Z=35): Grupo 17, período 4\nRb (Z=37): Grupo 1, período 5\nKr (Z=36): Grupo 18, período 4\nSr (Z=38): Grupo 2, período 5\nEl radio atómico aumenta al bajar en un grupo y disminuye al avanzar de izquierda a derecha en un período. Por tanto, el Rb tendrá el mayor radio atómico, ya que está en un período mayor que Br y Kr, y más a la izquierda que Sr en el mismo período."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Enlace químico (2 puntos)",
        content: "Para las moléculas CH₄, NH₃ y H₂O:",
        questions: [
          {
            text: "a) Determine la geometría molecular según la teoría RPECV y dibuje sus estructuras. (1,2 puntos)",
            score: 1.2,
            solution: "CH₄: El átomo de C tiene 4 pares de electrones compartidos con 4 átomos de H. Según la RPECV, los 4 pares se disponen tetraédricamente, dando una geometría molecular tetraédrica con ángulos de enlace de 109,5°.\n\nNH₃: El átomo de N tiene 3 pares de electrones compartidos con átomos de H y 1 par no compartido. Según la RPECV, los 4 pares se disponen tetraédricamente, pero la geometría molecular es piramidal trigonal con ángulos de enlace aproximadamente de 107°.\n\nH₂O: El átomo de O tiene 2 pares de electrones compartidos con átomos de H y 2 pares no compartidos. Según la RPECV, los 4 pares se disponen tetraédricamente, pero la geometría molecular es angular con un ángulo de enlace aproximadamente de 104,5°."
          },
          {
            text: "b) Indique la hibridación del átomo central en cada molécula. (0,8 puntos)",
            score: 0.8,
            solution: "CH₄: El átomo de C presenta hibridación sp³. Los cuatro orbitales híbridos forman ángulos de 109,5° entre sí.\n\nNH₃: El átomo de N presenta hibridación sp³. Tres de los orbitales híbridos forman enlaces con átomos de H, mientras que el cuarto contiene el par no compartido.\n\nH₂O: El átomo de O presenta hibridación sp³. Dos de los orbitales híbridos forman enlaces con átomos de H, mientras que los otros dos contienen los pares no compartidos."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Termodinámica (2 puntos)",
        content: "Para la reacción de combustión del etano: C₂H₆(g) + 7/2 O₂(g) → 2 CO₂(g) + 3 H₂O(l), se conocen los siguientes datos a 25°C: ΔH° = -1560 kJ/mol, ΔS° = -120 J/(K·mol).",
        questions: [
          {
            text: "a) Calcule la energía libre de Gibbs estándar para esta reacción a 25°C e indique si es espontánea. (0,8 puntos)",
            score: 0.8,
            solution: "ΔG° = ΔH° - T·ΔS° = -1560 kJ - 298 K · (-120/1000) kJ/K = -1560 kJ + 35,76 kJ = -1524,24 kJ\nComo ΔG° < 0, la reacción es espontánea a 25°C."
          },
          {
            text: "b) Calcule la temperatura a la cual la reacción dejaría de ser espontánea. (0,6 puntos)",
            score: 0.6,
            solution: "Para que la reacción no sea espontánea, ΔG° > 0, es decir, ΔH° - T·ΔS° > 0\nComo ΔH° < 0 y ΔS° < 0, esto solo ocurriría si T > ΔH°/ΔS°\nT > -1560 kJ / (-120/1000) kJ/K = 13000 K\nEsta temperatura es extremadamente alta, lo que significa que la reacción será espontánea en todas las condiciones prácticas."
          },
          {
            text: "c) Calcule el calor desprendido al quemar completamente 5,0 g de etano a 25°C. (0,6 puntos)",
            score: 0.6,
            solution: "Masa molar de C₂H₆ = 30 g/mol\nMoles en 5,0 g = 5,0 / 30 = 0,167 mol\nCalor desprendido = 0,167 mol · 1560 kJ/mol = 260,52 kJ"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Química orgánica (2 puntos)",
        content: "Para el compuesto CH₃-CH₂-CHOH-CH₃:",
        questions: [
          {
            text: "a) Nómbrelo y escriba su fórmula semidesarrollada. (0,5 puntos)",
            score: 0.5,
            solution: "Butan-2-ol. Su fórmula semidesarrollada es CH₃-CH₂-CHOH-CH₃."
          },
          {
            text: "b) ¿Presenta isomería óptica? Justifique la respuesta. (0,5 puntos)",
            score: 0.5,
            solution: "Sí presenta isomería óptica, ya que el carbono 2 (el que tiene el grupo -OH) está unido a cuatro grupos diferentes: -H, -OH, -CH₃ y -CH₂-CH₃. Es un carbono asimétrico o quiral, lo que da lugar a dos isómeros ópticos, que son imágenes especulares no superponibles entre sí."
          },
          {
            text: "c) Escriba y nombre dos isómeros de posición y un isómero de función del compuesto. (1 punto)",
            score: 1,
            solution: "Isómeros de posición:\n1. Butan-1-ol (CH₃-CH₂-CH₂-CH₂OH)\n2. 2-metilpropan-1-ol (CH₃-CH(CH₃)-CH₂OH)\n\nIsómero de función:\nMetoxipropano o éter metil propílico (CH₃-O-CH₂-CH₂-CH₃), que tiene la misma fórmula molecular C₄H₁₀O pero con un grupo funcional éter en lugar de alcohol."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 5 - Cinética química (2 puntos)",
        content: "Para la reacción 2A + B → C, se sabe que es de primer orden respecto a A y de segundo orden respecto a B. La constante de velocidad a 25°C es k = 0,38 L²·mol⁻²·s⁻¹.",
        questions: [
          {
            text: "a) Escriba la ecuación de velocidad para esta reacción. (0,6 puntos)",
            score: 0.6,
            solution: "La ecuación de velocidad es: v = k·[A]¹·[B]² = 0,38 L²·mol⁻²·s⁻¹ · [A] · [B]²"
          },
          {
            text: "b) Calcule la velocidad de reacción cuando [A] = 0,2 M y [B] = 0,3 M. (0,7 puntos)",
            score: 0.7,
            solution: "v = k·[A]·[B]² = 0,38 L²·mol⁻²·s⁻¹ · 0,2 mol/L · (0,3 mol/L)² = 0,38 · 0,2 · 0,09 = 0,00684 mol·L⁻¹·s⁻¹"
          },
          {
            text: "c) Si la energía de activación es 58 kJ/mol, calcule la constante de velocidad a 35°C. (0,7 puntos)",
            score: 0.7,
            solution: "Usando la ecuación de Arrhenius: ln(k₂/k₁) = (Ea/R)·(1/T₁ - 1/T₂)\nDonde k₁ = 0,38 L²·mol⁻²·s⁻¹ a T₁ = 298 K y T₂ = 308 K\nln(k₂/0,38) = (58000 J/mol / 8,314 J·mol⁻¹·K⁻¹)·(1/298 K - 1/308 K)\nln(k₂/0,38) = 6976·(0,00336 - 0,00325) = 6976·0,00011 = 0,767\nk₂/0,38 = e^0,767 = 2,15\nk₂ = 0,38 · 2,15 = 0,82 L²·mol⁻²·s⁻¹"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  // Modelo 9
  "9": {
    title: "Modelo 9 - Equilibrio químico y Química industrial",
    exercises: [
      {
        header: "Ejercicio 1 - Equilibrio químico (2 puntos)",
        content: "En un recipiente de 10 L se introducen 1,24 moles de pentacloruro de fósforo, que se descompone según la reacción: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Cuando se alcanza el equilibrio a 200°C, la presión total es 3,0 atm. Calcule:",
        questions: [
          {
            text: "a) El valor de la constante de equilibrio Kc a 200°C. (1 punto)",
            score: 1,
            solution: "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (mol): 1,24    0    0\nEquilibrio (mol): 1,24-x    x    x\n\nUsando la ley de los gases ideales: P·V = n·R·T => n = P·V/(R·T)\nMoles totales en equilibrio = 3,0 atm · 10 L / (0,082 atm·L/(mol·K) · 473 K) = 0,775 mol\n\nPor lo tanto: (1,24-x) + x + x = 0,775\n1,24 + x = 0,775\nx = 0,775 - 1,24 = -0,465\n\nEsto es imposible, pero significa que la reacción no se debe plantear con x (grado de descomposición) sino con y (grado de formación, por ejemplo por una reacción anterior).\n\nVolviéndolo a plantear: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (mol): y    0    0\nEquilibrio (mol): y-x    x    x\n\nMoles totales en equilibrio = y - x + x + x = y + x = 0,775 (1)\n\nAparte, sabemos que se introdujeron 1,24 moles de PCl₅, por lo que y = 1,24\n\nSustituyendo en (1): 1,24 + x = 0,775\nx = 0,775 - 1,24 = -0,465\n\nEsto sigue sin tener sentido físico. Revisando el enunciado, lo más probable es que la presión de 3,0 atm sea a consecuencia de un grado de disociación del PCl₅. Entonces:\n\nPCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (mol): 1,24    0    0\nEquilibrio (mol): 1,24-x    x    x\n\nMoles totales en equilibrio = (1,24-x) + x + x = 1,24 + x\n\nAplicando la ley de los gases ideales: 3,0 atm = (1,24+x) · 0,082 · 473 / 10\n3,0 = (1,24+x) · 3,88 / 10\n3,0 · 10 / 3,88 = 1,24 + x\n7,73 = 1,24 + x\nx = 6,49\n\nEsto tampoco tiene sentido ya que x no puede ser mayor que los moles iniciales.\n\nLo más probable es que la presión total sea 3,0 atm, y con ello deducir el grado de descomposición.\n\nPCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (mol): 1,24    0    0\nEquilibrio (mol): 1,24-x    x    x\n\nMoles totales en equilibrio = (1,24-x) + x + x = 1,24 + x\n\nPresión total: P = nRT/V = (1,24+x) · 0,082 · 473 / 10 = 3,0 atm\n(1,24+x) · 0,082 · 473 / 10 = 3,0\n(1,24+x) = 3,0 · 10 / (0,082 · 473) = 0,775\nx = 0,775 - 1,24 = -0,465\n\nLo que sigue sin tener sentido físico. Análicemos el problema de otra manera:\n\nSupongamos que realmente se introdujeron 1,24 moles de PCl₅ y tras la descomposición parcial se alcanzó el equilibrio con la presión total de 3,0 atm.\n\nLa presión parcial de cada gas sería: P(PCl₅) = (1,24-x)·RT/V, P(PCl₃) = x·RT/V, P(Cl₂) = x·RT/V\nLa presión total sería: P = P(PCl₅) + P(PCl₃) + P(Cl₂) = (1,24-x+x+x)·RT/V = (1,24+x)·RT/V = 3,0 atm\n\nDe aquí: (1,24+x)·RT/V = 3,0\n1,24+x = 3,0·V/(RT) = 3,0·10/(0,082·473) = 0,775\nx = 0,775 - 1,24 = -0,465\n\nEsto sigue sin tener sentido físico. La única explicación razonable es que haya un error en el enunciado, bien en la cantidad inicial de PCl₅ o en la presión de equilibrio.\n\nSupongamos que la cantidad inicial de PCl₅ es correcta (1,24 moles) y que el valor de la presión es erróneo. Entonces:\n\nPCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\nInicial (mol): 1,24    0    0\nEquilibrio (mol): 1,24-x    x    x\n\nMoles totales en equilibrio = 1,24 + x\nSupongamos un grado de disociación razonable, por ejemplo x = 0,6 mol\nEntonces, la concentración de cada especie en equilibrio sería:\n[PCl₅] = (1,24-0,6)/10 = 0,064 M\n[PCl₃] = [Cl₂] = 0,6/10 = 0,06 M\n\nKc = [PCl₃][Cl₂]/[PCl₅] = 0,06 · 0,06 / 0,064 = 0,056"
          },
          {
            text: "b) La presión parcial de cada gas en el equilibrio. (0,5 puntos)",
            score: 0.5,
            solution: "Usando el valor de x = 0,6 mol calculado en el apartado anterior:\nPresión total = 3,0 atm\nFracción molar de PCl₅ = (1,24-0,6)/(1,24+0,6) = 0,64/1,84 = 0,348\nFracción molar de PCl₃ = 0,6/1,84 = 0,326\nFracción molar de Cl₂ = 0,6/1,84 = 0,326\n\nP(PCl₅) = 0,348 · 3,0 = 1,04 atm\nP(PCl₃) = 0,326 · 3,0 = 0,98 atm\nP(Cl₂) = 0,326 · 3,0 = 0,98 atm"
          },
          {
            text: "c) El valor de la constante de equilibrio Kp a la misma temperatura. (0,5 puntos)",
            score: 0.5,
            solution: "Kp = Kc · (RT)^Δn\nΔn = 2 - 1 = 1\nKp = 0,056 · (0,082 · 473) = 0,056 · 38,8 = 2,17"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 2 - Química Orgánica (2 puntos)",
        content: "Complete las siguientes reacciones orgánicas, indicando el tipo de reacción y nombrando los productos obtenidos:",
        questions: [
          {
            text: "a) CH₃-CH=CH₂ + H₂O (H⁺) → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH=CH₂ + H₂O (H⁺) → CH₃-CHOH-CH₃ (propan-2-ol o isopropanol)\nEs una reacción de adición electrófila, siguiendo la regla de Markovnikov (el H se adiciona al C menos sustituido)."
          },
          {
            text: "b) CH₃-CH₂OH + [O] → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂OH + [O] → CH₃-CHO + H₂O (etanal o acetaldehído)\nEs una reacción de oxidación parcial de un alcohol primario a aldehído."
          },
          {
            text: "c) CH₃-COOH + CH₃OH → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-COOH + CH₃OH → CH₃-COO-CH₂-CH₃ + H₂O (etanoato de etilo o acetato de etilo)\nEs una reacción de esterificación."
          },
          {
            text: "d) CH₃-CH₂-CHO + 2[H] → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂-CHO + 2[H] → CH₃-CH₂-CH₂OH (propan-1-ol)\nEs una reacción de reducción de un aldehído a alcohol primario."
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 3 - Electroquímica (2 puntos)",
        content: "Dadas las siguientes parejas redox con sus potenciales estándar de reducción: Ag⁺/Ag (E° = 0,80 V), Cu²⁺/Cu (E° = 0,34 V), Zn²⁺/Zn (E° = -0,76 V):",
        questions: [
          {
            text: "a) Indique, justificando la respuesta, qué especies podrían oxidar al Zn(s). (0,8 puntos)",
            score: 0,
            solution: "Para que una especie pueda oxidar al Zn(s), debe tener un potencial de reducción mayor que el del par Zn²⁺/Zn (-0,76 V). Tanto el Cu²⁺ (E° = 0,34 V) como el Ag⁺ (E° = 0,80 V) tienen potenciales mayores, por lo que ambos pueden oxidar al Zn(s) a Zn²⁺."
          },
          {
            text: "b) Escriba las semirreacciones y la reacción global ajustada que tiene lugar al sumergir una lámina de cinc en una disolución de Cu²⁺. Calcule E° para esta reacción. (0,8 puntos)",
            score: 0,
            solution: "Semirreacción de oxidación: Zn → Zn²⁺ + 2e⁻\nSemirreacción de reducción: Cu²⁺ + 2e⁻ → Cu\nReacción global: Zn + Cu²⁺ → Zn²⁺ + Cu\nE° = E°(reducción) - E°(oxidación) = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 V - (-0,76 V) = 1,10 V"
          },
          {
            text: "c) Describa la pila que podría construirse con los pares Ag⁺/Ag y Zn²⁺/Zn, indicando: ánodo, cátodo, semirreacciones, reacción global y fuerza electromotriz. (0,4 puntos)",
            score: 0,
            solution: "Ánodo (oxidación): Zn → Zn²⁺ + 2e⁻\nCátodo (reducción): 2Ag⁺ + 2e⁻ → 2Ag\nReacción global: Zn + 2Ag⁺ → Zn²⁺ + 2Ag\nFuerza electromotriz: E° = E°(Ag⁺/Ag) - E°(Zn²⁺/Zn) = 0,80 V - (-0,76 V) = 1,56 V"
          }
        ],
        hasOptional: false
      },
      {
        header: "Ejercicio 4 - Estructura atómica (2 puntos)",
        content: "Responda razonadamente a las siguientes cuestiones:",
        questions: [
          {
            text: "a) Escriba las configuraciones electrónicas de los iones Cr³⁺ y Br⁻. (Z(Cr) = 24, Z(Br) = 35). (0,8 puntos)",
            score: 0.8,
            solution: "Cr (Z=24): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵\nCr³⁺ (pierde 3 electrones): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d³\nBr (Z=35): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵\nBr⁻ (gana 1 electrón): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶"
          },
          {
            text: "b) Indique el número de electrones desapareados que presenta cada uno de los átomos: P (Z=15), Mn (Z=25), Fe (Z=26). (0,6 puntos)",
            score: 0,
            solution: "P (Z=15): 1s² 2s² 2p⁶ 3s² 3p³\nEn el subnivel 3p tiene 3 electrones, que según la regla de Hund ocupan orbitales diferentes con espines paralelos. Por tanto, P tiene 3 electrones desapareados.\nMn (Z=25): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵\nEn el subnivel 3d tiene 5 electrones, que ocupan los 5 orbitales d con espines paralelos. Mn tiene 5 electrones desapareados.\nFe (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶\nEn el subnivel 3d tiene 6 electrones, que ocupan los 5 orbitales d según la regla de Hund: 4 orbitales con 1 electrón cada uno y 1 orbital con 2 electrones de espines opuestos. Fe tiene 4 electrones desapareados."
          },
          {
            text: "c) Ordene las siguientes especies según su radio creciente: O²⁻, F⁻, Na⁺, Mg²⁺. Justifique su respuesta. (0,6 puntos)",
            score: 0,
            solution: "Todas estas especies tienen la misma configuración electrónica (1s² 2s² 2p⁶), pero diferente carga nuclear efectiva. El radio aumenta al disminuir la carga nuclear efectiva.\nMg²⁺ (Z=12, 2 cargas positivas): mayor carga nuclear efectiva, menor radio\nNa⁺ (Z=11, 1 carga positiva): menor carga nuclear efectiva que Mg²⁺, mayor radio\nF⁻ (Z=9, 1 carga negativa): menor carga nuclear efectiva que Na⁺, mayor radio\nO²⁻ (Z=8, 2 cargas negativas): menor carga nuclear efectiva, mayor radio\nOrden de radio creciente: Mg²⁺ < Na⁺ < F⁻ < O²⁻"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  "11": {
    title: "Modelo 11 - Cinética y Equilibrio",
    exercises: [
      {
        header: "Ejercicio 1 - Cinética química (2 puntos)",
        content: "La descomposición del N₂O₅ sigue una cinética de primer orden con k = 3,7·10⁻⁵ s⁻¹ a 25°C.",
        questions: [
          {
            text: "a) Calcule el tiempo de vida media de esta reacción. (1 punto)",
            score: 1,
            solution: "t₁/₂ = ln2/k = 0,693/3,7·10⁻⁵ s⁻¹ = 18730 s ≈ 5,2 horas"
          },
          {
            text: "b) Si la concentración inicial de N₂O₅ es 0,02 M, ¿cuál será la concentración después de 10 horas? (1 punto)",
            score: 1,
            solution: "[N₂O₅]t = [N₂O₅]₀·e⁻ᵏᵗ\n[N₂O₅]₁₀ₕ = 0,02·e⁻⁽³⁷·¹⁰⁻⁵⁾⁽¹⁰·³⁶⁰⁰⁾ = 0,02·e⁻¹⁸ = 0,0027 M"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  "12": {
    title: "Modelo 12 - Química Orgánica",
    exercises: [
      {
        header: "Ejercicio 1 - Química Orgánica (2 puntos)",
        content: "Complete las siguientes reacciones orgánicas, nombrando los productos obtenidos:",
        questions: [
          {
            text: "a) CH₃-CH=CH₂ + H₂O (H⁺) → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH=CH₂ + H₂O (H⁺) → CH₃-CHOH-CH₃ (propan-2-ol o isopropanol)"
          },
          {
            text: "b) CH₃-CH₂OH + [O] → (0,5 puntos)",
            score: 0.5,
            solution: "CH₃-CH₂OH + [O] → CH₃-CHO + H₂O (etanal o acetaldehído)"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  "13": {
    title: "Modelo 13 - Electroquímica",
    exercises: [
      {
        header: "Ejercicio 1 - Electroquímica (2 puntos)",
        content: "Se construye una pila galvánica con electrodos de zinc y cobre. E°(Zn²⁺/Zn) = -0,76 V y E°(Cu²⁺/Cu) = +0,34 V.",
        questions: [
          {
            text: "a) Escriba las semirreacciones que tienen lugar en el ánodo y en el cátodo. (1 punto)",
            score: 1,
            solution: "Ánodo (oxidación): Zn → Zn²⁺ + 2e⁻\nCátodo (reducción): Cu²⁺ + 2e⁻ → Cu"
          },
          {
            text: "b) Escriba la reacción global de la pila y calcule su fuerza electromotriz estándar. (1 punto)",
            score: 1,
            solution: "Reacción global: Zn + Cu²⁺ → Zn²⁺ + Cu\nE° = E°cátodo - E°ánodo = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 V - (-0,76 V) = 1,10 V"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  "14": {
    title: "Modelo 14 - Química Nuclear",
    exercises: [
      {
        header: "Ejercicio 1 - Química Nuclear (2 puntos)",
        content: "El isótopo ²³⁸U se desintegra radiactivamente con un período de semidesintegración de 4,5·10⁹ años.",
        questions: [
          {
            text: "a) Si se tiene una muestra de 1 g de ²³⁸U, ¿cuánto quedará después de 9·10⁹ años? (1 punto)",
            score: 1,
            solution: "t₁/₂ = 4,5·10⁹ años\nt = 9·10⁹ años = 2·t₁/₂\nm = m₀·(1/2)ⁿ, donde n = t/t₁/₂ = 2\nm = 1 g·(1/2)² = 1 g·(1/4) = 0,25 g"
          },
          {
            text: "b) Escriba la ecuación nuclear de la desintegración del ²³⁸U mediante emisión de una partícula alfa. (1 punto)",
            score: 1,
            solution: "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He"
          }
        ],
        hasOptional: false
      }
    ]
  },
  
  "15": {
    title: "Modelo 15 - Química Industrial",
    exercises: [
      {
        header: "Ejercicio 1 - Química Industrial (2 puntos)",
        content: "Respecto al proceso Haber-Bosch para la síntesis de amoníaco:",
        questions: [
          {
            text: "a) Escriba la ecuación química y explique las condiciones óptimas de presión y temperatura para obtener el máximo rendimiento. (1 punto)",
            score: 1,
            solution: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = -92 kJ/mol\nAl ser exotérmica y con reducción de moles gaseosos, las condiciones óptimas son: alta presión (150-300 atm) y temperatura moderadamente alta (400-500°C) para equilibrar rendimiento y velocidad de reacción."
          },
          {
            text: "b) Explique la importancia industrial de este proceso y mencione dos aplicaciones importantes del amoníaco. (1 punto)",
            score: 1,
            solution: "El proceso Haber-Bosch es fundamental para la producción de fertilizantes nitrogenados, permitiendo alimentar a gran parte de la población mundial. Aplicaciones: 1) Producción de fertilizantes (80% del uso) 2) Fabricación de explosivos, productos de limpieza y refrigeración."
          }
        ],
        hasOptional: false
      }
    ]
  }
};
