import { defineCaseStudy } from "./define"
export default defineCaseStudy({
  es: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Contexto",
          description:
            "Proyecto de tesis de la Licenciatura en Tecnología Multimedial: procrastinación académica.",
        },
        {
          title: "Mi participación",
          description:
            "Proyecto individual de principio a fin: investigación, definición, diseño, prototipado, desarrollo y validación.",
        },
        {
          title: "Resultado",
          description:
            "App móvil que integra organización, regulación emocional e IA, validada con estudiantes.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Rol",
          description:
            "UX/UI Design · UX Research · Product Design · Diseño de interacción · Desarrollo",
        },
        {
          title: "Tipo de proyecto",
          description:
            "Proyecto de tesis · UX Research · UX/UI · Product Design · Desarrollo",
        },
        { title: "Año", description: "2026" },
        {
          title: "Tecnologías",
          description:
            "React · Vite · TypeScript · Tailwind · Supabase · PostgreSQL · Groq · LLaMA 3 · Gemini · Figma",
        },
      ],
    },
    {
      type: "context",
      title: "¿Qué sucede entre querer empezar una tarea y realmente empezar?",
      body: "inFLOW es una aplicación móvil diseñada para acompañar a estudiantes universitarios durante el proceso de estudio y reducir la **fricción emocional** que aparece al momento de comenzar una tarea.\nLa investigación permitió entender que la procrastinación académica **no se relaciona únicamente con la organización o la gestión del tiempo**: en muchos casos, postergar una tarea funciona como una forma de evitar emociones incómodas como la ansiedad, la frustración o la sensación de estar abrumado.\nA partir de ese descubrimiento, inFLOW combina **organización académica, acompañamiento emocional e inteligencia artificial** para ayudar al estudiante a pasar de la intención a la acción.",
    },
    {
      type: "challenge",
      title: "Organizar mejor el tiempo no era la respuesta.",
      body: "La mayoría de las herramientas de productividad parten de una premisa similar: si una persona tiene una tarea pendiente, necesita organizar mejor su tiempo.\nA través de **encuestas a 157 personas**, benchmarking y distintas instancias de investigación cualitativa, se identificaron situaciones en las que el problema no era saber qué había que hacer, sino **encontrar la energía y la claridad** necesarias para empezar.",
      description:
        "¿Cómo podemos diseñar una experiencia que **acompañe al estudiante en los momentos de bloqueo**, en lugar de simplemente indicarle qué tiene que hacer?",
    },
    {
      type: "research",
      title: "Investigación",
      description:
        "El proceso comenzó con una etapa de UX Research que combinó investigación bibliográfica, encuestas y benchmarking de productos existentes.",
      highlights: [
        {
          title: "Encuesta · 157 personas",
          detail:
            "Base cuantitativa sobre **hábitos de estudio, postergación y momentos de bloqueo**.",
        },
        {
          title: "Benchmarking",
          detail:
            "Análisis de Focusmate, Forest, Habitica, Structured, Google Calendar y Cold Turkey según **funcionalidades, experiencia, interfaz, accesibilidad y estrategias frente a la procrastinación**.",
        },
        {
          title: "Marco teórico",
          detail:
            "**Patrones de procrastinación, computación afectiva y Ley de Yerkes-Dodson** como base de decisiones de diseño.",
        },
      ],
    },
    {
      type: "research-findings",
      title: "La tensión que encontramos",
      description:
        "El análisis identificó un **vacío recurrente** que se convirtió en la principal oportunidad de diseño.",
      highlights: [
        {
          title: "Estructura sin acompañamiento",
          detail:
            "Algunas herramientas ofrecen organización, pero **no acompañan el momento en que cuesta empezar**.",
        },
        {
          title: "Acompañamiento rígido",
          detail:
            "Otras incorporan acompañamiento a través de estrategias **demasiado rígidas o invasivas**.",
        },
        {
          title: "Procrastinación como regulación emocional",
          detail:
            "El marco teórico permitió comprender la procrastinación como un fenómeno **estrechamente relacionado con la regulación emocional**.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "Organizar → Acompañar → Facilitar la acción",
      body: "A partir de los hallazgos se definió una experiencia basada en **tres pilares**.\ninFLOW no busca reemplazar las herramientas de organización que el estudiante ya utiliza, sino funcionar como un **soporte en aquellos momentos donde comenzar resulta especialmente difícil**.",
      items: [
        "**Organizar**: dar claridad sobre qué hay para hacer.",
        "**Acompañar**: reconocer cómo está el estudiante antes de exigirle avanzar.",
        "**Facilitar la acción**: reducir el tamaño del primer paso.",
      ],
    },
    {
      type: "interaction-design",
      title: "La experiencia",
      body: "El flujo principal comienza con un **cuestionario de personalización**, que permite conocer los hábitos y patrones de procrastinación del estudiante.\nA partir de allí, inFLOW incorpora un **check-in diario** en el que el usuario expresa cómo se siente y cuánta energía tiene disponible.\nLa inteligencia artificial utiliza esa información para **adaptar el acompañamiento** y ayudar a definir qué estrategia puede resultar más adecuada en ese momento.",
    },
    {
      type: "design-decisions",
      title: "Decisiones de diseño",
      decisions: [
        {
          title: "Microtareas generadas con IA",
          problem:
            "Las tareas grandes generaban una sensación de bloqueo incluso antes de comenzar.",
          decision:
            "Usar IA para transformar objetivos complejos en **microtareas concretas**: abrir el documento → buscar referencias → seleccionar una → escribir el primer párrafo.",
          impact:
            "Fue el componente más valorado durante los testeos porque responde a una pregunta recurrente: **¿por dónde empiezo?**",
        },
        {
          title: "Tareas de proceso y entregas formales",
          problem:
            "Durante el testeo contextual apareció que no todas las actividades académicas son entregas: leer, investigar o practicar pueden no tener fecha límite.",
          decision:
            "Diferenciar **tareas de proceso** (verde) de **entregas formales** (azul, con fecha límite), cada una con su recorrido en el chatbot y campo de descripción.",
          impact:
            "La planificación se adapta a distintas formas de estudiar **sin generar presión artificial**.",
        },
        {
          title: "Focus Mode como espacio propio",
          problem:
            "Los momentos de concentración necesitaban un entorno sin estímulos innecesarios y con una transición clara.",
          decision:
            "Diseñar Focus Mode como la **“casita de Flowie”**, visualmente reducido y basado en la Ley de Yerkes-Dodson, con sesión asociada a una tarea o sesión libre.",
          impact:
            "Evita tanto la **falta de estimulación** como la **sobrecarga** y permite concentrarse sin tener que planificar antes.",
        },
        {
          title: "Gamificación como componente secundario",
          problem:
            "La gamificación podía desplazar el foco y convertir el estudio en una competencia.",
          decision:
            "Usar monedas y recompensas para reforzar **iniciar y sostener una actividad**, no el rendimiento académico.",
          impact:
            "Funciona como refuerzo inmediato que acompaña el proceso **sin volverse el centro de la experiencia**.",
        },
        {
          title: "Flowie como acompañamiento afectivo",
          problem:
            "La mascota había nacido como recurso de identidad visual, sin rol en la experiencia.",
          decision:
            "Convertir a Flowie en **acompañante de los estados emocionales** del usuario y representación visual del progreso.",
          impact:
            "Durante los testeos algunos usuarios manifestaron que **el deseo de cuidar a Flowie** aumentaba su compromiso con las actividades.",
        },
      ],
    },
    {
      type: "testing",
      title: "Testeo",
      body: "El diseño fue validado a través de distintas instancias: **pruebas de usabilidad con 11 estudiantes** y luego un **testeo contextual con 5 estudiantes durante 5 días consecutivos**, usando la aplicación en situaciones reales de estudio.\nLa segunda instancia permitió observar **comportamientos que no habían aparecido en escenarios controlados**.",
    },
    {
      type: "testing-results",
      title: "Problemas detectados",
      items: [
        "Las categorías emocionales iniciales **no representaban correctamente** estados como cansancio o saturación.",
        "Asociar obligatoriamente una tarea con una fecha de entrega **generaba presión innecesaria**.",
        "El Focus Mode necesitaba **una transición más clara**.",
        "Los usuarios necesitaban **mayor control** sobre las microtareas generadas por la IA.",
        "El tono del chatbot debía sentirse **más cercano y menos repetitivo**.",
      ],
    },
    {
      type: "iterations",
      title: "De emociones a estados académicos",
      body: "El modelo inicial utilizaba categorías emocionales tradicionales, pero los usuarios describían con frecuencia **cansancio, agotamiento mental, saturación o falta de energía**, que no encajaban en esas categorías.\nEl sistema evolucionó hacia **seis estados más representativos** de la experiencia académica: Alegría · Tranquilidad · Neutralidad · Ansiedad · Tristeza · Saturación.\nEl cambio también implicó adaptar la interpretación que realiza la inteligencia artificial y las recomendaciones ofrecidas al usuario.",
    },
    {
      type: "final-solution",
      title: "La app en funcionamiento",
      description:
        "inFLOW integra **organización académica, acompañamiento emocional e inteligencia artificial** en una misma experiencia móvil.",
        image: "../../../public/images/inflow-screens.png"
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "inFLOW evolucionó desde una primera hipótesis centrada en la gestión de tareas hacia una experiencia que integra **organización, regulación emocional, inteligencia artificial y acompañamiento**.",
      body: "El resultado es una aplicación que no intenta decirle al estudiante simplemente qué tiene que hacer, sino **ayudarlo a entender qué necesita para poder empezar**.",
      items: [
        "**Encuesta a 157 personas** como base de la definición del problema.",
        "**Pruebas de usabilidad con 11 estudiantes** y testeo contextual con 5 estudiantes durante 5 días.",
        "**Producto diseñado y desarrollado de principio a fin**.",
      ],
    },
    {
      type: "learnings",
      title: "El principal aprendizaje",
      description: "**Acompañar puede ser tan importante como organizar.**",
      items: [
        "Reducir la procrastinación no significa únicamente administrar mejor el tiempo: también significa **reducir el agobio** y hacer que el primer paso sea posible.",
        "**Diseñar de forma iterativa** a partir de situaciones reales de uso reveló problemas que no aparecían en escenarios controlados.",
        "Los hallazgos del testeo contextual **cambiaron el modelo emocional del producto**, no solo su interfaz.",
      ],
    },
  ],
  en: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Context",
          description:
            "Thesis project for the Multimedia Technology degree: academic procrastination.",
        },
        {
          title: "My role",
          description:
            "Solo project end to end: research, definition, design, prototyping, development, and validation.",
        },
        {
          title: "Outcome",
          description:
            "A mobile app combining organization, emotional support, and AI, validated with students.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Role",
          description:
            "UX/UI Design · UX Research · Product Design · Interaction Design · Development",
        },
        {
          title: "Project type",
          description:
            "Thesis project · UX Research · UX/UI · Product Design · Development",
        },
        { title: "Year", description: "2026" },
        {
          title: "Technologies",
          description:
            "React · Vite · TypeScript · Tailwind · Supabase · PostgreSQL · Groq · LLaMA 3 · Gemini · Figma",
        },
      ],
    },
    {
      type: "context",
      title: "What happens between wanting to start a task and actually starting?",
      body: "inFLOW is a mobile app designed to support university students while they study and to reduce the **emotional friction** that shows up when starting a task.\nResearch showed that academic procrastination **isn't only about organization or time management**: in many cases, postponing a task works as a way to avoid uncomfortable emotions such as anxiety, frustration, or feeling overwhelmed.\nFrom that finding, inFLOW combines **academic organization, emotional support, and artificial intelligence** to help students move from intention to action.",
    },
    {
      type: "challenge",
      title: "Better time management wasn't the answer.",
      body: "Most productivity tools share a premise: if someone has a pending task, they need to manage their time better.\nThrough a **survey of 157 people**, benchmarking, and several qualitative research rounds, we found situations where the problem wasn't knowing what to do, but **finding the energy and clarity** to begin.",
      description:
        "How can we design an experience that **supports students in moments of blockage**, instead of just telling them what to do?",
    },
    {
      type: "research",
      title: "Research",
      description:
        "The process started with a UX research phase combining literature review, surveys, and benchmarking of existing products.",
      highlights: [
        {
          title: "Survey · 157 people",
          detail:
            "Quantitative base on **study habits, postponement, and moments of blockage**.",
        },
        {
          title: "Benchmarking",
          detail:
            "Analysis of Focusmate, Forest, Habitica, Structured, Google Calendar, and Cold Turkey across **features, experience, interface, accessibility, and strategies against procrastination**.",
        },
        {
          title: "Theoretical framework",
          detail:
            "**Procrastination patterns, affective computing, and the Yerkes-Dodson law** as the basis for design decisions.",
        },
      ],
    },
    {
      type: "research-findings",
      title: "The tension we found",
      description:
        "The analysis surfaced a **recurring gap** that became the main design opportunity.",
      highlights: [
        {
          title: "Structure without support",
          detail:
            "Some tools offer organization but **don't support the moment when starting is hard**.",
        },
        {
          title: "Rigid support",
          detail:
            "Others add support through strategies that feel **too rigid or invasive**.",
        },
        {
          title: "Procrastination as emotional regulation",
          detail:
            "The framework made it possible to understand procrastination as **closely tied to emotional regulation**.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "Organize → Support → Enable action",
      body: "The findings defined an experience built on **three pillars**.\ninFLOW doesn't try to replace the organization tools students already use, but to **support the moments where starting is especially hard**.",
      items: [
        "**Organize**: give clarity about what there is to do.",
        "**Support**: acknowledge how the student feels before demanding progress.",
        "**Enable action**: shrink the size of the first step.",
      ],
    },
    {
      type: "interaction-design",
      title: "The experience",
      body: "The main flow starts with a **personalization questionnaire** that captures the student's habits and procrastination patterns.\nFrom there, inFLOW adds a **daily check-in** where the user expresses how they feel and how much energy they have.\nThe AI uses that input to **adapt the support** and help decide which strategy fits that moment.",
    },
    {
      type: "design-decisions",
      title: "Design decisions",
      decisions: [
        {
          title: "AI-generated microtasks",
          problem:
            "Large tasks created a sense of blockage even before starting.",
          decision:
            "Use AI to turn complex goals into **concrete microtasks**: open the document → look for references → pick one → write the first paragraph.",
          impact:
            "It was the most valued component in testing because it answers a recurring question: **where do I start?**",
        },
        {
          title: "Process tasks vs. formal deliverables",
          problem:
            "Contextual testing revealed that not every academic activity is a deliverable: reading, researching, or practising may have no deadline.",
          decision:
            "Separate **process tasks** (green) from **formal deliverables** (blue, with a deadline), each with its own chatbot flow and description field.",
          impact:
            "Planning adapts to different ways of studying **without creating artificial pressure**.",
        },
        {
          title: "Focus Mode as its own space",
          problem:
            "Focus moments needed an environment free of unnecessary stimuli and a clearer transition.",
          decision:
            "Design Focus Mode as **“Flowie's house”**: visually reduced, based on the Yerkes-Dodson law, with either a task-linked or a free session.",
          impact:
            "It avoids both **understimulation** and **overload**, and lets users focus without planning first.",
        },
        {
          title: "Gamification as a secondary layer",
          problem:
            "Gamification could shift the focus and turn studying into a competition.",
          decision:
            "Use coins and rewards to reinforce **starting and sustaining an activity**, not academic performance.",
          impact:
            "It works as immediate reinforcement alongside the process **without becoming the centre of the experience**.",
        },
        {
          title: "Flowie as emotional companion",
          problem:
            "The mascot began as a visual identity asset with no role in the experience.",
          decision:
            "Turn Flowie into a **companion across the user's emotional states** and a visual representation of progress.",
          impact:
            "During testing some users said **the desire to take care of Flowie** increased their commitment to their activities.",
        },
      ],
    },
    {
      type: "testing",
      title: "Testing",
      body: "The design was validated through several rounds: **usability tests with 11 students** and then a **contextual test with 5 students over 5 consecutive days**, using the app in real study situations.\nThe second round surfaced **behaviours that hadn't appeared in controlled scenarios**.",
    },
    {
      type: "testing-results",
      title: "Problems detected",
      items: [
        "The initial emotional categories **didn't properly represent** states like tiredness or saturation.",
        "Forcing every task to have a deadline **created unnecessary pressure**.",
        "Focus Mode needed **a clearer transition**.",
        "Users needed **more control** over AI-generated microtasks.",
        "The chatbot's tone had to feel **closer and less repetitive**.",
      ],
    },
    {
      type: "iterations",
      title: "From emotions to academic states",
      body: "The initial model used traditional emotional categories, but users frequently described **tiredness, mental exhaustion, saturation, or lack of energy**, which didn't fit those categories.\nThe system evolved into **six states closer to the academic experience**: Joy · Calm · Neutral · Anxiety · Sadness · Saturation.\nThe change also meant adapting how the AI interprets state and the recommendations it offers.",
    },
    {
      type: "final-solution",
      title: "The app in action",
      description:
        "inFLOW brings **academic organization, emotional support, and artificial intelligence** together into a single mobile experience.",
        image: "../../../public/images/inflow-screens.png"
    },
    {
      type: "result",
      title: "Result",
      description:
        "inFLOW evolved from an initial hypothesis about task management into an experience that integrates **organization, emotional regulation, artificial intelligence, and support**.",
      body: "The result is an app that doesn't simply tell students what to do, but **helps them understand what they need in order to start**.",
      items: [
        "**A 157-person survey** as the base of the problem definition.",
        "**Usability tests with 11 students** and a 5-day contextual test with 5 students.",
        "**Product designed and developed end to end**.",
      ],
    },
    {
      type: "learnings",
      title: "The main learning",
      description: "**Supporting can matter as much as organizing.**",
      items: [
        "Reducing procrastination isn't only about managing time better: it's also about **reducing overwhelm** and making the first step possible.",
        "**Iterating from real usage situations** revealed problems that never showed up in controlled scenarios.",
        "The contextual testing findings **changed the product's emotional model**, not just its interface.",
      ],
    },
  ],
})