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
            "Proyecto de tesis de la Licenciatura en Tecnología Multimedial: procrastinación académica en estudiantes universitarios.",
        },
        {
          title: "Equipo",
          description:
            "Proyecto individual, desarrollado de principio a fin: investigación, diseño, desarrollo y validación.",
        },
        {
          title: "Resultado",
          description:
            "App móvil funcional que integra organización, regulación emocional e IA, validada en uso real.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Rol",
          description:
            "UX/UI Design · UX Research · Product Design · Prototipado · Diseño de interacción · Desarrollo",
        },
        { title: "Año", description: "2026" },
        {
          title: "Herramientas",
          description:
            "React · Vite · TypeScript · Tailwind · Supabase · PostgreSQL · Groq · LLaMA 3 · Gemini · Figma",
        },
      ],
    },
    {
      type: "context",
      title: "¿Qué sucede entre querer empezar una tarea y realmente empezar?",
      body: "inFLOW es una aplicación móvil diseñada para acompañar a estudiantes universitarios durante el proceso de estudio y reducir la fricción emocional que aparece al momento de comenzar una tarea.\nLa investigación permitió entender que la procrastinación académica no se relaciona únicamente con la organización o la gestión del tiempo. En muchos casos, postergar una tarea funciona como una forma de evitar emociones incómodas como la ansiedad, la frustración o la sensación de estar abrumado.\nA partir de este descubrimiento, inFLOW propone una experiencia que combina organización académica, acompañamiento emocional e inteligencia artificial, buscando ayudar al estudiante a pasar de la intención a la acción.",
    },
    {
      type: "challenge",
      title: "El problema no era saber qué hacer.",
      body: "La mayoría de las herramientas de productividad parten de una premisa similar: si una persona tiene una tarea pendiente, necesita organizar mejor su tiempo.\nA través de encuestas a 157 personas, benchmarking y distintas instancias de investigación cualitativa, se identificaron situaciones en las que el problema no era saber qué había que hacer, sino encontrar la energía y claridad necesarias para empezar.",
      description:
        "¿Cómo podemos diseñar una experiencia que acompañe al estudiante en los momentos de bloqueo, en lugar de simplemente indicarle qué tiene que hacer?",
      sideHighlight: {
        title: "Acompañar, no indicar",
        description:
          "El replanteo del problema definió toda la estrategia de diseño posterior.",
      },
    },
    {
      type: "research",
      title: "Investigación",
      description:
        "El proceso comenzó con una etapa de UX Research que combinó investigación bibliográfica, encuestas y benchmarking de productos existentes.",
      highlights: [
        {
          title: "157 respuestas",
          detail:
            "Las encuestas mostraron que la dificultad aparecía al momento de empezar, no al momento de planificar.",
        },
        {
          title: "Benchmark",
          detail:
            "Focusmate, Forest, Habitica, Structured, Google Calendar y Cold Turkey comparados por funcionalidades, experiencia, interfaz, accesibilidad y estrategias frente a la procrastinación.",
        },
        {
          title: "Estructura vs. acompañamiento",
          detail:
            "Algunas herramientas ofrecen estructura pero poco acompañamiento; otras acompañan con estrategias demasiado rígidas o invasivas.",
        },
        {
          title: "Marco teórico",
          detail:
            "Patrones de procrastinación, computación afectiva y la Ley de Yerkes-Dodson se usaron para tomar decisiones concretas de diseño.",
        },
      ],
    },
    {
      type: "concept",
      title: "Organizar → Acompañar → Facilitar la acción",
      body: "El marco teórico permitió comprender la procrastinación como un fenómeno estrechamente relacionado con la regulación emocional.\nLa aplicación no busca reemplazar las herramientas de organización que el estudiante ya utiliza, sino funcionar como un soporte en aquellos momentos donde comenzar resulta especialmente difícil.",
    },
    {
      type: "user-flow",
      title: "La experiencia",
      body: "El flujo principal comienza con un cuestionario de personalización, que permite conocer los hábitos y patrones de procrastinación del estudiante.\nA partir de allí, inFLOW incorpora un check-in diario en el que el usuario puede expresar cómo se siente y cuánta energía tiene disponible.\nLa inteligencia artificial utiliza esta información para adaptar el acompañamiento y ayudar a definir qué tipo de estrategia puede resultar más adecuada en ese momento.",
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
            "Usar IA para transformar objetivos complejos en microtareas concretas: abrir el documento → buscar referencias → seleccionar una → escribir el primer párrafo.",
          impact:
            "Fue el componente más valorado durante los testeos porque responde a la pregunta “¿por dónde empiezo?”.",
        },
        {
          title: "Tareas de proceso y entregas",
          problem:
            "No todas las actividades académicas son entregas: leer, investigar o practicar pueden no tener fecha límite.",
          decision:
            "Diferenciar tareas de proceso (verde) de entregas formales (azul), cada una con su recorrido en el chatbot y su descripción.",
          impact:
            "La planificación se adaptó a distintas formas de estudiar y se eliminó la presión de una fecha obligatoria.",
        },
        {
          title: "Focus Mode",
          problem:
            "Los momentos de concentración se veían interrumpidos por estímulos innecesarios de la interfaz.",
          decision:
            "Diseñar un espacio visualmente reducido basado en la Ley de Yerkes-Dodson, presentado como la “casita de Flowie”, con sesiones asociadas a una tarea o libres.",
          impact:
            "El usuario cuenta con un espacio propio para sostener la atención sin sobrecarga ni falta de estímulo.",
        },
        {
          title: "Flowie como acompañamiento",
          problem:
            "La experiencia necesitaba una dimensión afectiva que la organización por sí sola no aportaba.",
          decision:
            "Convertir la mascota en representación visual del progreso y de los estados emocionales del usuario.",
          impact:
            "Durante los testeos, algunos usuarios manifestaron que el deseo de cuidar a Flowie aumentaba su compromiso con las actividades.",
        },
        {
          title: "Gamificación secundaria",
          problem:
            "Premiar el rendimiento académico podía convertir el estudio en una competencia.",
          decision:
            "Usar monedas y recompensas para reforzar iniciar y sostener una actividad, no los resultados.",
          impact:
            "La gamificación funciona como refuerzo inmediato del proceso sin desplazar el objetivo principal.",
        },
      ],
    },
    {
      type: "testing",
      title: "Testeo e iteración",
      body: "Se realizaron pruebas de usabilidad con 11 estudiantes y posteriormente un testeo contextual con 5 estudiantes durante 5 días consecutivos, utilizando la aplicación en situaciones reales de estudio.\nLa segunda instancia permitió observar comportamientos que no habían aparecido en escenarios controlados. Cada hallazgo se transformó en una decisión de diseño.",
      items: [
        "Las categorías emocionales iniciales no representaban correctamente estados como cansancio o saturación.",
        "Asociar obligatoriamente una tarea con una fecha de entrega generaba presión innecesaria.",
        "El Focus Mode necesitaba una transición más clara.",
        "Los usuarios necesitaban mayor control sobre las microtareas generadas por la IA.",
        "El tono del chatbot debía sentirse más cercano y menos repetitivo.",
      ],
    },
    {
      type: "iterations",
      title: "De emociones a estados académicos",
      body: "El modelo inicial utilizaba categorías emocionales tradicionales. Sin embargo, los usuarios describían con frecuencia estados como cansancio, agotamiento mental, saturación o falta de energía, que no encajaban dentro de esas categorías.\nEl sistema evolucionó hacia seis estados más representativos de la experiencia académica: Alegría · Tranquilidad · Neutralidad · Ansiedad · Tristeza · Saturación.\nEste cambio también implicó adaptar la interpretación realizada por la inteligencia artificial y las recomendaciones ofrecidas al usuario.",
    },
    {
      type: "development",
      title: "Arquitectura y desarrollo",
      description:
        "El proyecto fue desarrollado de principio a fin, desde la investigación y definición del problema hasta el diseño, prototipado, desarrollo y validación con usuarios.",
      items: [
        "Frontend: React · Vite · TypeScript · Tailwind CSS.",
        "Backend y base de datos: Supabase · PostgreSQL · Edge Functions.",
        "IA: Groq · LLaMA 3 · Gemini.",
        "Diseño: Figma.",
        "Metodologías: Design Thinking · User Centered Design · UX Research · Benchmarking · Testing.",
      ],
    },
    {
      type: "final-solution",
      title: "No qué tenés que hacer, sino qué necesitás para empezar",
      description:
        "inFLOW evolucionó desde una primera hipótesis centrada en la gestión de tareas hacia una experiencia que integra organización, regulación emocional, inteligencia artificial y acompañamiento.",
      body: "Check-in diario, microtareas generadas con IA, tareas de proceso y entregas diferenciadas, Focus Mode y Flowie trabajan alrededor de un mismo objetivo: hacer posible el primer paso.",
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "La investigación y los testeos permitieron validar el potencial de la propuesta y demostrar la importancia de diseñar de forma iterativa a partir de situaciones reales de uso.",
      items: [
        "Acompañar puede ser tan importante como organizar.",
        "Reducir la procrastinación no significa únicamente administrar mejor el tiempo.",
        "También significa reducir el agobio, hacer que el primer paso sea posible y acompañar al usuario mientras avanza.",
        "El testeo contextual reveló problemas que ningún escenario controlado había mostrado.",
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
            "Thesis project for the Multimedia Technology degree: academic procrastination among university students.",
        },
        {
          title: "Team",
          description:
            "Solo project, built end to end: research, design, development, and validation.",
        },
        {
          title: "Outcome",
          description:
            "A working mobile app blending organization, emotional regulation, and AI, validated in real use.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Role",
          description:
            "UX/UI Design · UX Research · Product Design · Prototyping · Interaction design · Development",
        },
        { title: "Year", description: "2026" },
        {
          title: "Tools",
          description:
            "React · Vite · TypeScript · Tailwind · Supabase · PostgreSQL · Groq · LLaMA 3 · Gemini · Figma",
        },
      ],
    },
    {
      type: "context",
      title: "What happens between wanting to start a task and actually starting?",
      body: "inFLOW is a mobile app designed to support university students while they study and to reduce the emotional friction that shows up when it's time to begin a task.\nResearch showed that academic procrastination isn't only about organization or time management. In many cases, putting off a task is a way to avoid uncomfortable emotions like anxiety, frustration, or feeling overwhelmed.\nFrom that finding, inFLOW proposes an experience that combines academic organization, emotional support, and artificial intelligence to help students move from intention to action.",
    },
    {
      type: "challenge",
      title: "The problem wasn't knowing what to do.",
      body: "Most productivity tools start from a similar premise: if someone has a pending task, they need to manage their time better.\nThrough a survey with 157 responses, benchmarking, and several qualitative research stages, I identified situations where the problem wasn't knowing what had to be done, but finding the energy and clarity to start.",
      description:
        "How can we design an experience that supports students in moments of blockage instead of simply telling them what to do?",
      sideHighlight: {
        title: "Support, not instructions",
        description:
          "Reframing the problem shaped every design decision that followed.",
      },
    },
    {
      type: "research",
      title: "Research",
      description:
        "The process started with a UX Research stage combining literature review, surveys, and benchmarking of existing products.",
      highlights: [
        {
          title: "157 responses",
          detail:
            "Surveys showed the difficulty appeared at the moment of starting, not when planning.",
        },
        {
          title: "Benchmark",
          detail:
            "Focusmate, Forest, Habitica, Structured, Google Calendar, and Cold Turkey compared on features, experience, interface, accessibility, and procrastination strategies.",
        },
        {
          title: "Structure vs. support",
          detail:
            "Some tools offer structure but little support; others support users through overly rigid or invasive strategies.",
        },
        {
          title: "Theoretical framework",
          detail:
            "Procrastination patterns, affective computing, and the Yerkes-Dodson Law informed concrete design decisions.",
        },
      ],
    },
    {
      type: "concept",
      title: "Organize → Support → Enable action",
      body: "The theoretical framework helped understand procrastination as a phenomenon closely tied to emotional regulation.\nThe app doesn't try to replace the organization tools students already use; it acts as support in the moments when starting is especially hard.",
    },
    {
      type: "user-flow",
      title: "The experience",
      body: "The main flow starts with a personalization questionnaire that captures the student's habits and procrastination patterns.\nFrom there, inFLOW adds a daily check-in where users express how they feel and how much energy they have.\nAI uses that information to adapt the support and help define which strategy fits best at that moment.",
    },
    {
      type: "design-decisions",
      title: "Design decisions",
      decisions: [
        {
          title: "AI-generated micro-tasks",
          problem:
            "Large tasks created a feeling of blockage even before starting.",
          decision:
            "Use AI to turn complex goals into concrete micro-tasks: open the document → find references → pick one → write the first paragraph.",
          impact:
            "It was the most valued component in testing because it answers “where do I start?”.",
        },
        {
          title: "Process tasks vs. deliverables",
          problem:
            "Not every academic activity is a deliverable: reading, researching, or practicing may have no deadline.",
          decision:
            "Separate process tasks (green) from formal deliverables (blue), each with its own chatbot path and description.",
          impact:
            "Planning adapted to different ways of studying and the pressure of a mandatory due date disappeared.",
        },
        {
          title: "Focus Mode",
          problem:
            "Moments of concentration were interrupted by unnecessary interface stimuli.",
          decision:
            "Design a visually reduced space based on the Yerkes-Dodson Law, presented as “Flowie's little house”, with task-linked or free sessions.",
          impact:
            "Users get a space of their own to sustain attention without overload or under-stimulation.",
        },
        {
          title: "Flowie as companion",
          problem:
            "The experience needed an affective dimension that organization alone couldn't provide.",
          decision:
            "Turn the mascot into a visual representation of progress and of the user's emotional states.",
          impact:
            "In testing, some users said wanting to take care of Flowie increased their commitment to their activities.",
        },
        {
          title: "Secondary gamification",
          problem:
            "Rewarding academic performance risked turning studying into a competition.",
          decision:
            "Use coins and rewards to reinforce starting and sustaining an activity rather than outcomes.",
          impact:
            "Gamification acts as immediate reinforcement of the process without displacing the main goal.",
        },
      ],
    },
    {
      type: "testing",
      title: "Testing and iteration",
      body: "I ran usability tests with 11 students and then a contextual test with 5 students over 5 consecutive days, using the app in real study situations.\nThe second round surfaced behaviors that hadn't appeared in controlled scenarios. Every finding became a design decision.",
      items: [
        "The initial emotional categories didn't properly represent states like tiredness or saturation.",
        "Forcing every task to have a due date created unnecessary pressure.",
        "Focus Mode needed a clearer transition.",
        "Users needed more control over AI-generated micro-tasks.",
        "The chatbot's tone had to feel warmer and less repetitive.",
      ],
    },
    {
      type: "iterations",
      title: "From emotions to academic states",
      body: "The initial model used traditional emotional categories. But users frequently described states like tiredness, mental exhaustion, saturation, or lack of energy that didn't fit those categories.\nThe system evolved toward six states more representative of academic life: Joy · Calm · Neutral · Anxiety · Sadness · Saturation.\nThis change also meant adapting the AI's interpretation and the recommendations offered to users.",
    },
    {
      type: "development",
      title: "Architecture and development",
      description:
        "The project was built end to end, from research and problem definition through design, prototyping, development, and validation with users.",
      items: [
        "Frontend: React · Vite · TypeScript · Tailwind CSS.",
        "Backend and database: Supabase · PostgreSQL · Edge Functions.",
        "AI: Groq · LLaMA 3 · Gemini.",
        "Design: Figma.",
        "Methods: Design Thinking · User Centered Design · UX Research · Benchmarking · Testing.",
      ],
    },
    {
      type: "final-solution",
      title: "Not what you have to do, but what you need to start",
      description:
        "inFLOW evolved from an initial hypothesis about task management into an experience that integrates organization, emotional regulation, AI, and support.",
      body: "Daily check-in, AI-generated micro-tasks, separate process tasks and deliverables, Focus Mode, and Flowie all work toward the same goal: making the first step possible.",
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "Research and testing validated the potential of the proposal and showed how important it is to design iteratively from real usage situations.",
      items: [
        "Supporting can matter as much as organizing.",
        "Reducing procrastination isn't only about managing time better.",
        "It also means reducing overwhelm, making the first step possible, and supporting users as they move forward.",
        "Contextual testing revealed problems no controlled scenario had shown.",
      ],
    },
  ],
})
