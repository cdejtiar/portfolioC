"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
  docsUrl?: string;
  docsUrl2?: string;
  features: string[];
}

const translations = {
  es: {
    backToProjects: "Volver a Proyectos",
    viewLive: "Ver en Vivo",
    viewPresentation: "Ver Presentación",
    viewProjectCharter: "Ver Acta de Proyecto",
    viewResearch: "Ver Investigación",
    viewCode: "Ver Código",
    keyFeatures: "Características Clave",
    technologies: "Tecnologías Utilizadas",
    projectNotFound: "Proyecto no encontrado",
  },
  en: {
    backToProjects: "Back to Projects",
    viewLive: "View Live",
    viewPresentation: "View Presentation",
    viewProjectCharter: "View Project Charter",
    viewResearch: "View Research",
    viewCode: "View Code",
    keyFeatures: "Key Features",
    technologies: "Technologies Used",
    projectNotFound: "Project not found",
  },
}

// Projects data - Portfolio showcase
const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      id: "1",
      title: "eXerparK",
      description:
        "Plataforma digital para motivar la actividad física y conectar personas a través del movimiento",
      fullDescription:
        "eXerparK nació en 2021, en el contexto pospandemia, con el objetivo de recuperar la motivación por el ejercicio y fomentar el encuentro en espacios públicos como parques y plazas. \n El proyecto combina bienestar, comunidad y tecnología: propone un espacio donde las personas pueden descubrir actividades gratuitas al aire libre, agendarlas, conocer gente nueva y mantenerse activas. \n Durante la investigación inicial se realizó un Desk Research y un Social Listening sobre los hábitos de ejercicio en Argentina, lo que permitió detectar una pérdida generalizada de motivación. \n A partir de esa problemática, el proceso de Ideación se centró en la pregunta “¿Cómo podríamos crear un espacio donde las personas desmotivadas puedan motivarse?”, definiendo la motivación como el eje central del diseño. \n Con herramientas como Customer Journey, User Flow y Benchmark, se consolidó una propuesta con valor agregado y se desarrolló un prototipo funcional en Adobe XD.",
      image: "../../../public/images/eXerparK.png",
      technologies: ["Adobe XD", "Figma", "Desk Research", "Benchmarking"],
      liveUrl: "https://xd.adobe.com/view/93ef9a3a-35e9-4876-8b6c-b58ab1793bae-c6bc/", 
      slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSAsOmQqq3JRLnf2y3Df0dgmNNXX7xNOwpqxHDfXTIp7nhrzrz0y2a1RDBg1Xvbfp9n6FtYtkmzNCzG/pub?start=false&loop=false&delayms=3000",
      features: [
        "Agenda personal para planificar actividades",
        "Sistema de reservas gratuito en espacios públicos",
        "Enfoque en la motivación y la comunidad",
      ],
    },
    {
      id: "2",
      title: "Y Ahora Qué?",
      description:
        "Solución digital para descubrir qué ver después de terminar una serie o película",
      fullDescription: `Y Ahora Qué? nació en 2021 durante una Hackathon de la Universidad Maimónides, mi primera experiencia en el concurso. Durante dos semanas intensas de workshops y trabajo en equipo, desarrollamos un prototipo funcional que presentamos frente a un jurado.
El proyecto surge de una situación común: terminar una serie o película y no saber qué ver a continuación.
Durante la fase de Research, realizamos una lluvia de ideas sobre el mundo de las series y el entretenimiento, identificando una problemática clara: la saturación de opciones y el poco tiempo para decidir.
Luego de encuestas y entrevistas descubrimos que el verdadero problema no era la falta de contenido, sino la dificultad de encontrar algo que se ajuste realmente a los gustos del usuario.
A partir de esta redefinición, creamos una User Persona y su User Journey, y avanzamos hacia las etapas de Definición, User Flow y desarrollo del MVP.
La solución final fue una plataforma que permite:
- Conectar tus plataformas de streaming favoritas.
- Recibir recomendaciones personalizadas con filtros empáticos basados en emociones y gustos.
- Redirigirte directamente a la plataforma donde se reproduce el contenido elegido.

Después de un proceso de testeo, creamos un prototipo en alta fidelidad, y propusimos ideas para un futuro Y Ahora Qué? 2.0, que incluiría funciones como foros informales, chats, indicadores de contenido visto, y opciones colaborativas según con quién mires.`,
      image: "../../../public/images/yAhoraQue.png",
      technologies: [
        "Figma",
        "Adobe XD",
        "Miro",
        "User Research",
        "Design Thinking",
      ],
      liveUrl: "https://xd.adobe.com/view/cafee497-f1a3-4851-9c55-bde2c0c063b1-9fad/?fullscreen&hints=off", 
      slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSzVxM3nCiFcMTCbywJg1-1yquVbCe6fNhwe7vNlpj4JaZL8FekVVCVpEgs1FBkvDKpNS6WFyeB0AI3/pub?start=false&loop=false&delayms=3000",
      features: [
        "Filtros empáticos personalizados",
        "Vinculación directa con plataformas de streaming",
        "Sistema de recomendaciones basado en emociones y gustos",
        "Espacios de interacción futura entre usuarios",
      ],
    },
    {
      id: "3",
      title: "enHUELLA2",
      description:
        "Aplicación digital para centralizar y agilizar el proceso de adopción de animales",
      fullDescription: `enHUELLA2 fue creado en 2022 durante una Hackathon de la Universidad Maimónides, en mi segunda participación en el concurso. Durante dos semanas de workshops y trabajo en equipo, desarrollamos un prototipo funcional, con el que obtuvimos el premio a Mejor Scrum Master.
    El proyecto aborda la problemática de la adopción de animales y el desafío de encontrar información clara, accesible y centralizada sobre refugios, organizaciones y procesos de adopción.
    Nuestra propuesta fue una aplicación que permita a los refugios y organizaciones publicar animales en adopción o tránsito, y que los usuarios puedan encontrar a su compañero ideal mediante filtros personalizados.
    En la fase de Research, realizamos un Benchmark que evidenció la falta de soluciones adaptadas a iOS y la dispersión de la información entre múltiples sitios.
    También llevamos a cabo una encuesta con 84 participantes, donde descubrimos que más del 50 % adoptó a través de redes sociales o rescatando directamente, y que la mayoría prefería una app centralizada.
    Complementamos este análisis con entrevistas cualitativas que nos aportaron nuevas perspectivas sobre la experiencia del proceso de adopción.
    Durante la Definición, nos guiamos por la pregunta:
    ¿Cómo podríamos facilitar la búsqueda de un animal en adopción y su proceso para que la experiencia sea más agradable y centralizada?
    Con esta base, definimos un MVP centrado en una aplicación que:
    - Centraliza la información de animales disponibles.
    - Permite completar un único formulario inicial para simplificar el proceso.
    - Facilita la comunicación con refugios y organizaciones.

    Tras el testeo con 5 usuarios, iteramos el diseño desde baja hasta alta fidelidad, mejorando usabilidad y flujo.
    Finalmente, proyectamos ideas para una versión futura de enHUELLA2, con funciones como:
    - Flujo y diseño para cuidadores.
    - Información postadopción y cuidados básicos.
    - Seguimiento de documentación médica.
    - Búsqueda de veterinarias por zona.`,
      image: "../../../public/images/enHUELLA2.png",
      technologies: [
        "Figma",
        "Miro",
        "Design Thinking",
        "User Research",
        "Scrum",
      ],
      slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_RioD6I1C1CE0QrMd-RJ_LJt0lAbKRd3DuXfrBKk0tB763PsYt4DXREJxYbqH6qRdZyk5NikdjY3k/pub?start=false&loop=false&delayms=3000",
      features: [
        "Centralización de información sobre adopciones",
        "Filtros personalizados por tipo de mascota y necesidades",
        "Formulario único y simplificado",
        "Comunicación directa con refugios y organizaciones",
      ],
    },
    {
      id: "4",
      title: "NFTBunnies",
      description:
        "Colección digital de NFTs generativos creada con Procreate y Web3",
      fullDescription: `NFTBunnies fue desarrollado en 2022 en el marco de la materia Programación Multimedial III.
El desafío consistía en diseñar una colección de 50 NFTs con una temática libre, programar una web funcional para mintearlos y experimentar con Smart Contracts y Ethereum de prueba, explorando el potencial del ecosistema Web3.
Para la creación visual utilicé Procreate, organizando los elementos en carpetas por categorías: fondos, clima, color de cuerpo, manos, accesorios y decoraciones.
Cada combinación generaba variaciones únicas, y mediante un script automatizado logré producir múltiples versiones de forma dinámica.
Además de la programación del backend, me encargué del diseño del frontend y del logo, buscando transmitir una estética divertida, tierna y juguetona, alineada con el universo visual de los personajes.`,
      image: "../../../public/images/NFTBunnies.png",
      technologies: ["Procreate", "JavaScript", "Web3.js", "HTML", "CSS"],
      liveUrl: "https://nft-bunnies-pi.vercel.app/",
      githubUrl: "https://github.com/cdejtiar/NFTBunnies",
      features: [
        "Colección generativa de 50 NFTs",
        "Implementación de Smart Contracts en red de prueba Ethereum",
        "Web funcional para minteo de NFTs",
        "Diseño integral de identidad visual y frontend",
      ],
    },
    {
      id: "5",
      title: "Dino",
      description:
        "Videojuego inspirado en el clásico juego del dinosaurio de Chrome",
      fullDescription: `Dino fue creado en 2023 como proyecto final de la materia Programación Multimedial IV.
El objetivo era recrear el icónico juego del dinosaurio de Google Chrome, donde el personaje debe esquivar obstáculos mientras corre indefinidamente, combinando jugabilidad simple con un diseño visual atractivo.
El desarrollo se realizó utilizando C#, Unity y SQLite, comprendiendo los fundamentos del lenguaje, el motor de juego y la gestión de datos.
A través de scripts personalizados y las herramientas del editor, logré un resultado funcional, fluido y divertido, que destaca por su interfaz amigable y facilidad de uso.`,
      image: "../../../public/images/runnerDino.png",
      technologies: [
        "Unity",
        "C#",
        "SQLite",
        "LocalStorage",
        "Visual Studio Code",
      ],
      githubUrl: "https://github.com/cdejtiar/runnerDinoUnity",
      features: [
        "Jugabilidad infinita con detección de colisiones",
        "Interfaz visual dinámica y atractiva",
        "Scripts personalizados en C#",
        "Sistema de registro de puntajes con SQLite y LocalStorage",
      ],
    },

    {
      id: "7",
      title: "GameReads",
      description: "Aplicación gamificada para motivar la lectura",
      fullDescription: `GameReads fue desarrollado en 2023 dentro de la materia Sistemas Gamificados, con el objetivo de aplicar estrategias de gamificación a un entorno digital.
 La propuesta consiste en una app móvil que permite a los usuarios registrar sus lecturas, descubrir nuevos libros, compartir opiniones y conectarse con otros lectores, todo dentro de un sistema diseñado para motivar el hábito de leer más.
 El proyecto se enmarca en un sistema de cambio de comportamiento, cuyo propósito es generar un impacto positivo en los usuarios a través del juego y la interacción social.
 Las principales funcionalidades permiten:
  - Llevar un registro personal de lecturas.
  - Recibir recomendaciones basadas en gustos e intereses.
  - Calificar y compartir opiniones con otros usuarios.
  - Conectarse con personas afines y descubrir nuevas lecturas.

Durante el desarrollo realicé un análisis comparativo de plataformas existentes, diseñé un Gamification Canvas para estructurar la estrategia lúdica, y creé tanto el User Flow como el prototipo funcional del sistema.`,
      image: ".../../../public/images/GameReads.png",
      technologies: [
        "Figma",
        "Gamification Canvas",
        "User Flow",
        "UX Research",
      ],
      liveUrl: "https://www.figma.com/proto/yC0bmMEKCiMuoRuMe5b4OK/Prototipo?type=design&node-id=8-7655&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A7655",
      slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vScQV3JVsoK9Re7RwZahwAUW2Y2SbJBeBkS1VHh6FHW2701S_0itNbMs_ejNr0HVlNDrIWt6jskbsAg/pub?start=false&loop=false&delayms=3000",
      features: [
        "Sistema de reseñas y calificaciones",
        "Registro y seguimiento de lecturas",
        "Recomendaciones personalizadas según intereses",
        "Comunidad de lectores y sistema de puntuaciones",
      ],
    },
    {
      id: "8",
      title: "Webapp Universitaria",
      description:
        "Diseño de una aplicación para la organización académica de estudiantes universitarios",
      fullDescription: `Este proyecto grupal fue desarrollado en 2023 dentro de la materia Proyecto Senior, con el objetivo de crear una webapp que ayudara a los estudiantes de la Universidad Maimónides (UMAI) a organizar su vida universitaria de forma más efectiva.
El MVP del prototipo contempla funcionalidades clave como:
- Creación y visualización de un calendario personalizado.
- Recordatorios y alertas configurables.
- Gestión de tareas, notas y apuntes en un solo lugar.
- Los objetivos del proyecto fueron: diseñar una aplicación funcional y accesible, investigar las necesidades reales del público objetivo, y validar el diseño mediante pruebas de usabilidad para asegurar que la solución respondiera a sus demandas cotidianas.
Durante el proceso realizamos un Acta de Proyecto para definir el rumbo del trabajo, organizamos las tareas en Trello y establecimos sprints semanales para coordinar avances en equipo.
 Tras la fase de investigación, desarrollamos el informe de resultados y avanzamos hacia la etapa de prototipado en Adobe XD, consolidando la experiencia del usuario en un entorno claro, intuitivo y funcional.`,
      image: "../../../public/images/webapp.png",
      technologies: [
        "Adobe XD",
        "Trello",
        "Design Thinking",
        "UX Research",
        "Scrum",
      ],
      liveUrl: "https://xd.adobe.com/view/0b6853cd-d82f-41a7-a3c6-789d997dc0a8-5e3b/",
      docsUrl: "https://docs.google.com/document/d/e/2PACX-1vQ-2QqK2y7696S3_3iK5Hx37C0POcGiArDGYpxWFTksqzbdwPcrz3aCN85Tt8cBTpAAXCb_unXti0iF/pub",
      docsUrl2: "https://docs.google.com/document/d/e/2PACX-1vRZhIlOjWVD69SZ44z6BsqiMnzg6iVSg4SFaEfw2Pn8cN5q7dMb3Yw9u6rxETmO7k53cOkQQmGbuWQJ/pub",
      features: [
        "Calendario y recordatorios personalizables",
        "Sistema integral para tareas, notas y apuntes",
        "Diseño centrado en la experiencia universitaria",
        "Proceso guiado por metodologías ágiles",
      ],
    },
    {
      id: "9",
      title: "intoximate",
      description: "Aplicación móvil para descubrir y aprender sobre tragos",
      fullDescription: `intoximate fue un proyecto desarrollado en 2023 como trabajo final de la materia Proyecto Senior, en conjunto con un compañero de la facultad.
 El desafío era explorar una tecnología completamente nueva y llevar adelante el proyecto como si se tratara de un encargo freelance, registrando tiempos, planificando etapas y validando el producto con usuarios reales.
La aplicación propone un buscador de tragos alcohólicos con distintos filtros para encontrar el trago ideal, además de funcionalidades complementarias como juegos y un aleatorizador de tragos para descubrir nuevas combinaciones.
Durante el desarrollo aplicamos metodologías ágiles y realizamos dos checkpoints clave: uno de Diseño y otro de Desarrollo, que marcaron los avances principales del proyecto.`,
      image: "../../../public/images/intoximate.png",
      technologies: [
        "React Native",
        "Expo",
        "Jira",
        "Google Docs",
        "Google Sheets",
        "GitHub",
        "UX Research",
        "Scrum",
      ],
      githubUrl: "https://github.com/MaxiCo1/Intoximate",
      slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vS_bdTv9mO6uZ9tX0ZJhW33XYOaeK6trvX5CE8sq4yre7k1SbiPxmEnZHk7FMyAovB0fjMYWc7tAFCn/pub?start=false&loop=false&delayms=3000",
      docsUrl: "https://docs.google.com/document/d/e/2PACX-1vRsIONlDFzMJozvMiIGNMInYicakcIkmKghVAHzR6saeYvDeSE3vcj5qcwwmwvI-I96u7Is9dWK80So/pub",
      docsUrl2: "https://docs.google.com/document/d/e/2PACX-1vTGEo-XTqtnxQq7uvh_E4sHULWDFy1xJF657GzmYIPE69x1AenOs0K-H474a7Uu-ZVPfIhR_LYgueWj/pub",
      features: [
        "Buscador de tragos con filtros personalizados",
        "Juegos y aleatorizador para descubrir nuevas combinaciones",
        "Proceso guiado por Design Thinking",
        "Validación con usuarios y versión beta funcional",
      ],
    },
    {
      id: "10",
      title: "Bingo familiar de Dorja",
      description:
        "Juego web interactivo para sorteos de bingo comunitarios y familiares",
      fullDescription: `Bingo Familiar de Dorja fue un proyecto creado en el 2025 para traer un poco de magia, emoción y estética a las partidas de bingo con familia, amig@s o janijim. Diseñado con una interfaz cálida y simple, el objetivo fue hacer que cualquier persona pueda usarlo fácilmente en actividades recreativas o comunitarias.
El objetivo del proyecto fue crear una herramienta accesible, funcional y estéticamente cuidada que pueda usarse sin conexión a Internet, ideal para actividades comunitarias, reuniones familiares o peulot. Además, busca aportar una identidad visual propia de Dorja, combinando lo lúdico con lo institucional.`,
      image: "../../../public/images/bingo.png",
      technologies: ["Stitch de Google", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://bingo-dorja.vercel.app",
      githubUrl: "https://github.com/cdejtiar/bingoDorja/tree/main",
      features: [
        "Generador de números aleatorios del 1 al 90",
        "Resaltado visual en la grilla de los números sorteados",
        "Visualización grande de la bolilla actual",
        "Botón de reinicio para volver a empezar la partida",
        "Interfaz colorida, cálida y con estética Dorja",
      ],
    },
    {
      id: "12",
      title: "Sala de escape IVO 2025",
      description:
        "Aplicación web interactiva para jornadas de orientación escolar",
      fullDescription: `Sala de Escape IVO fue un proyecto desarrollado en 2025 en la Escuela ORT, con el objetivo de mostrar de forma divertida e interactiva las orientaciones de estudio a estudiantes de 2do año. La experiencia fue diseñada para que los participantes aprendieran mientras jugaban, recorriendo cinco subsalas, cada una representando un pilar de la orientación de Informática.
El proyecto buscó combinar diversión, aprendizaje y estética, creando un hilo conductor que uniera todas las salas y guiara a los estudiantes a través de desafíos interactivos y puzzles educativos.`,
      image: "../../../public/images/IVO.png",
      technologies: ["Stitch de Google", "v0", "TypeScript", "Next.js", "Tailwind CSS", "GitHub Projects"],
      liveUrl: "https://ivo-sala-de-escape.vercel.app",
      githubUrl: "https://https://github.com/informaticaort/IVO-2025",
      features: [
        "Consola interactiva en la sala de Diseño: arrastrar campos y resolver puzzles sobre conceptos de diseño",
        "Hilo conductor que conecta todas las subsalas y mantiene la narrativa coherente",
        "Pruebas de usabilidad con estudiantes de distintos años para validar tiempos, comprensión y atractividad",
        "Iteración de errores y mejoras para garantizar que los estudiantes puedan completar la sala sin inconvenientes",
      ],
    },
    {
      id: "13",
      title: "inFlow",
      description:
        "Proyecto de tesis: Aplicación móvil para optimizar UX/UI y reducir la procrastinación académica en universitarios",
      fullDescription:
      `Durante los últimos años vengo desarrollando mi proyecto de tesis para recibirme de Licenciatura en Tecnología Multimedial. Si bien es un trabajo en progreso, la idea principal es proponer una solución tecnológica que contribuya a reducir la procrastinación académica en estudiantes universitarios argentinos de 18 a 23 años.
      El proyecto se enfoca en dos patrones de procrastinación clave: la Ansiedad de Evaluación (ligada a emociones negativas) y el Optimista Socialmente Enfocado (asociado a emociones positivas).
      La solución se basa en la implementación de estrategias de Diseño Centrado en el Usuario y sistemas gamificados para abordar la motivación.
      El proceso de desarrollo siguió las etapas de Design Thinking: Empatizar, Definir, Idear, Prototipar y Testear.
      El MVP (Mínimo Producto Viable) definido incluye un cuestionario inicial de personalización, un plan de acción diario/semanal, un sistema de XP y Badges, un diario emocional y feedback visual del progreso.
      El estudio de Investigación incluyó benchmarking de herramientas (como Focusmate, Forest y Structured) y encuestas a 157 personas, con un 82,8% que admitió procrastinar.
      `,
      image: "../../../public/images/comingsoon.png",
      technologies: ["Design Thinking", "UX Research", "Benchmarking", "MoSCoW (Matriz de Priorización)"],
      features: [
        "Personalización según el tipo de procrastinador (cuestionario inicial)",
        "Gamificación con sistema de XP y Badges para fomentar la motivación",
        "Diario emocional para la autocomprensión y gestión de sentimientos",
        "Plan de acción que desglosa tareas en pasos pequeños y alcanzables",
      ],
    },
    {
      id: "14",
      title: "Portfolio",
      description:
        "Portfolio personal",
      fullDescription:
      `Portfolio personal desarrollado con Next.js 14, con decisiones propias de navegación móvil innovadora, efectos de vidrio líquido, sistema de temas, y optimizaciones para dispositivos táctiles.
       La idea principal fue mía, pasando luego por un proceso de diseño en Stitch de Google para perfeccionarlo con elementos modernos e ideas más genéricas que un portfolio tiene que tener, para más tarde lanzarme a realizarlo mediante las implementaciones de v0.
       Realicé un proceso de internalización en cuánto a qué elementos suelen definirme como persona y cómo poder mostrarlo de forma `,
      image: "../../../public/images/portfolio.png",
      technologies: ["Figma", "Stitch de Google", "Next.js 14", "TypeScript", "Tailwind CSS"],
      features: [
        "Navegación móvil flotante",
        "Efectos de vidrio líquido (glassmorphism)",
        "Forma simplificada de demostración de proyectos"
      ],
    },
  ],
  en: [
    {
      id: "1",
      title: "eXerparK",
      description:
        "Digital platform to motivate physical activity and connect people through movement",
      fullDescription:
        "eXerparK was founded in 2021, in the post-pandemic context, with the goal of rekindling motivation for exercise and promoting meetings in public spaces like parks and plazas. \n The project combines well-being, community, and technology: it offers a space where people can discover free outdoor activities, schedule them, meet new people, and stay active. \n During the initial research, we conducted Desk Research and Social Listening on exercise habits in Argentina, which revealed a widespread loss of motivation. \n Based on this problem, the Ideation process focused on the question “How could we create a space where demotivated people could get motivated?”, defining motivation as the central axis of the design. \n Using tools like Customer Journey, User Flow, and Benchmark, we consolidated a value-added proposal and developed a functional prototype in Adobe XD.",
  image: "/images/eXerparK.png",
      technologies: ["Adobe XD", "Figma", "Desk Research", "Benchmarking"],
  liveUrl: "https://xd.adobe.com/view/93ef9a3a-35e9-4876-8b6c-b58ab1793bae-c6bc/",
  slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSAsOmQqq3JRLnf2y3Df0dgmNNXX7xNOwpqxHDfXTIp7nhrzrz0y2a1RDBg1Xvbfp9n6FtYtkmzNCzG/pub?start=false&loop=false&delayms=3000",
  githubUrl: "https://github.com",
      features: [
        "Personal agenda to plan activities",
        "Free booking system for public spaces",
        "Focus on motivation and community",
      ],
    },
    {
      id: "2",
      title: "Y Ahora Qué?",
      description:
        "Digital solution to discover what to watch after finishing a series or movie",
      fullDescription: `Y Ahora Qué? was created in 2021 during a Hackathon at Maimónides University, my first experience in the competition. During two intense weeks of workshops and teamwork, we developed a functional prototype that we presented to a jury.  
The project arises from a common situation: finishing a series or movie and not knowing what to watch next.  
During the Research phase, we brainstormed about the world of series and entertainment, identifying a clear problem: saturation of options and limited time to decide.  
After surveys and interviews, we discovered that the real problem wasn't the lack of content, but rather the difficulty of finding something that truly matches the user's preferences.  
From this new understanding, we created a User Persona and their User Journey, then moved on to the Definition, User Flow, and MVP development stages.  
The final solution was a platform that allows:
- Connecting your favorite streaming platforms.
- Receiving personalized recommendations with empathy-based filters on emotions and tastes.
- Redirecting directly to the platform where the chosen content is available.

After testing, we created a high-fidelity prototype and proposed ideas for a future Y Ahora Qué? 2.0, which would include features such as informal forums, chats, seen-content indicators, and collaborative options based on who you’re watching with.`,
  image: "/images/yAhoraQue.png",
      technologies: [
        "Figma",
        "Adobe XD",
        "Miro",
        "User Research",
        "Design Thinking",
      ],
  liveUrl: "https://xd.adobe.com/view/cafee497-f1a3-4851-9c55-bde2c0c063b1-9fad/?fullscreen&hints=off",
  slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSzVxM3nCiFcMTCbywJg1-1yquVbCe6fNhwe7vNlpj4JaZL8FekVVCVpEgs1FBkvDKpNS6WFyeB0AI3/pub?start=false&loop=false&delayms=3000",
  githubUrl: "https://github.com",
      features: [
        "Personalized empathy-based filters",
        "Direct connection to streaming platforms",
        "Emotion- and taste-based recommendation system",
        "Future user interaction spaces",
      ],
    },
    {
      id: "3",
      title: "enHUELLA2",
      description:
        "Digital app to centralize and streamline the animal adoption process",
      fullDescription: `enHUELLA2 was created in 2022 during a Hackathon at Maimónides University, in my second participation in the competition. During two weeks of workshops and teamwork, we developed a functional prototype, which earned us the Best Scrum Master award.  
The project addresses the issue of animal adoption and the challenge of finding clear, accessible, and centralized information about shelters, organizations, and adoption processes.  
Our proposal was an app that allows shelters and organizations to post animals for adoption or foster care, and lets users find their ideal companion through personalized filters.  
In the Research phase, we conducted a Benchmark that showed a lack of solutions adapted to iOS and the dispersal of information across multiple websites.  
We also conducted a survey with 84 participants, where we discovered that more than 50% of people adopted via social media or direct rescue, and most preferred a centralized app.  
We supplemented this analysis with qualitative interviews, which provided new insights into the adoption process experience.  
During Definition, we guided ourselves with the question:  
How could we make the process of finding and adopting an animal easier, more enjoyable, and centralized?  
Based on this, we defined an MVP centered on an app that:
- Centralizes information about available animals.
- Allows a single initial form to streamline the process.
- Facilitates communication with shelters and organizations.

After testing with 5 users, we iterated the design from low to high fidelity, improving usability and flow.  
Finally, we projected ideas for a future version of enHUELLA2, including features like:
- Flow and design for pet caregivers.
- Post-adoption information and basic care tips.
- Medical document tracking.
- Vet search by location.`,
  image: "/images/enHUELLA2.png",
      technologies: [
        "Figma",
        "Miro",
        "Design Thinking",
        "User Research",
        "Scrum",
      ],
  slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_RioD6I1C1CE0QrMd-RJ_LJt0lAbKRd3DuXfrBKk0tB763PsYt4DXREJxYbqH6qRdZyk5NikdjY3k/pub?start=false&loop=false&delayms=3000",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com",
      features: [
        "Centralized adoption information",
        "Personalized filters by pet type and needs",
        "Simplified single-form process",
        "Direct communication with shelters and organizations",
      ],
    },
    {
      id: "4",
      title: "NFTBunnies",
      description:
        "Generative NFT digital collection created with Procreate and Web3",
      fullDescription: `NFTBunnies was developed in 2022 as part of the Multimedia Programming III course.  
The challenge was to design a collection of 50 NFTs with a free theme, create a functional website to mint them, and experiment with Smart Contracts and test Ethereum, exploring the potential of the Web3 ecosystem.  
For the visual creation, I used Procreate, organizing elements into folders by categories: backgrounds, weather, body color, hands, accessories, and decorations.  
Each combination generated unique variations, and through an automated script, I produced multiple versions dynamically.  
In addition to backend programming, I designed the frontend and the logo, aiming to convey a fun, cute, and playful aesthetic aligned with the characters' visual universe.`,
  image: "/images/NFTBunnies.png",
      technologies: ["Procreate", "JavaScript", "Web3.js", "HTML", "CSS"],
  liveUrl: "https://nft-bunnies-pi.vercel.app/",
  githubUrl: "https://github.com/cdejtiar/NFTBunnies",
      features: [
        "Generative collection of 50 NFTs",
        "Implementation of Smart Contracts on Ethereum test network",
        "Functional website for NFT minting",
        "Complete visual identity and frontend design",
      ],
    },
    {
      id: "5",
      title: "Dino",
      description:
        "Video game inspired by the classic Chrome Dinosaur game",
      fullDescription: `Dino was created in 2023 as a final project for the Multimedia Programming IV course.  
The goal was to recreate the iconic Google Chrome Dinosaur game, where the character must dodge obstacles while running indefinitely, combining simple gameplay with an attractive visual design.  
The development was carried out using C#, Unity, and SQLite, covering the fundamentals of the language, game engine, and data management.  
Using custom scripts and editor tools, I achieved a functional, smooth, and fun result, which stands out for its user-friendly interface and ease of use.`,
  image: "/images/runnerDino.jpg",
      technologies: [
        "Unity",
        "C#",
        "SQLite",
        "LocalStorage",
        "Visual Studio Code",
      ],
  //link to GitHub (copied from ES)
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/cdejtiar/runnerDinoUnity",
      features: [
        "Endless gameplay with collision detection",
        "Dynamic and attractive visual interface",
        "Custom C# scripts",
        "Score tracking system with SQLite and LocalStorage",
      ],
    },
    {
      id: "7",
      title: "GameReads",
      description: "Gamified app designed to motivate reading habits",
      fullDescription: `GameReads was developed in 2023 for the Gamified Systems course, with the objective of applying gamification strategies to a digital environment.  
The proposal is a mobile app that allows users to log their readings, discover new books, share opinions, and connect with other readers — all within a system built to encourage the habit of reading more.  
The project is part of a behavioral change framework, aiming to create a positive impact on users through play and social interaction.  
Main features include:
- Keeping a personal record of readings.
- Receiving recommendations based on interests and preferences.
- Rating and sharing opinions with other users.
- Connecting with like-minded people and discovering new readings.

During development, I carried out a comparative analysis of existing platforms, designed a Gamification Canvas to structure the playful strategy, and created both the User Flow and a functional system prototype.`,
  image: "/images/GameReads.png",
      technologies: [
        "Figma",
        "Gamification Canvas",
        "User Flow",
        "UX Research",
      ],
  liveUrl: "https://www.figma.com/proto/yC0bmMEKCiMuoRuMe5b4OK/Prototipo?type=design&node-id=8-7655&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A7655",
  slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vScQV3JVsoK9Re7RwZahwAUW2Y2SbJBeBkS1VHh6FHW2701S_0itNbMs_ejNr0HVlNDrIWt6jskbsAg/pub?start=false&loop=false&delayms=3000",
  githubUrl: "https://github.com",
      features: [
        "Review and rating system",
        "Reading tracking and progress logs",
        "Personalized book recommendations",
        "Reader community and scoring system",
      ],
    },
    {
      id: "8",
      title: "University Webapp",
      description:
        "Web application design for university students’ academic organization",
      fullDescription: `This group project was developed in 2023 for the Senior Project course, with the goal of creating a web app to help Universidad Maimónides (UMAI) students organize their academic life more effectively.  
The MVP prototype includes key features such as:
- Creation and visualization of a personalized calendar.
- Configurable reminders and alerts.
- Task, notes, and documents management in one place.  

The project’s objectives were: to design a functional and accessible application, to research the real needs of the target audience, and to validate the design through usability testing to ensure the solution met students’ daily demands.  
Throughout the process, we created a Project Charter to define our direction, organized tasks on Trello, and set weekly sprints to coordinate team progress.  
After the research phase, we developed a results report and moved on to the prototyping stage in Adobe XD, consolidating a clear, intuitive, and functional user experience.`,
  image: "/images/webapp.png",
      technologies: [
        "Adobe XD",
        "Trello",
        "Design Thinking",
        "UX Research",
        "Scrum",
      ],
  liveUrl: "https://xd.adobe.com/view/0b6853cd-d82f-41a7-a3c6-789d997dc0a8-5e3b/",
  docsUrl: "https://docs.google.com/document/d/e/2PACX-1vQ-2QqK2y7696S3_3iK5Hx37C0POcGiArDGYpxWFTksqzbdwPcrz3aCN85Tt8cBTpAAXCb_unXti0iF/pub",
  docsUrl2: "https://docs.google.com/document/d/e/2PACX-1vRZhIlOjWVD69SZ44z6BsqiMnzg6iVSg4SFaEfw2Pn8cN5q7dMb3Yw9u6rxETmO7k53cOkQQmGbuWQJ/pub",
  githubUrl: "https://github.com",
      features: [
        "Customizable calendar and reminders",
        "Integrated task, notes, and document system",
        "User experience focused on university life",
        "Development guided by agile methodologies",
      ],
    },
    {
      id: "9",
      title: "intoximate",
      description: "Mobile app to discover and learn about cocktails",
      fullDescription: `intoximate was a 2023 final project for the Senior Project course, developed together with a classmate.  
The challenge was to explore a completely new technology and carry out the project as if it were a freelance assignment — tracking time, planning stages, and validating the product with real users.  
The app offers a cocktail search engine with multiple filters to find the ideal drink, along with complementary features such as mini-games and a randomizer to discover new combinations.  
During development, we applied agile methodologies and conducted two main checkpoints: one for Design and one for Development, which marked the project’s key milestones.`,
  image: "/images/intoximate.png",
      technologies: [
        "React Native",
        "Expo",
        "Jira",
        "Google Docs",
        "Google Sheets",
        "GitHub",
        "UX Research",
        "Scrum",
      ],
  slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vS_bdTv9mO6uZ9tX0ZJhW33XYOaeK6trvX5CE8sq4yre7k1SbiPxmEnZHk7FMyAovB0fjMYWc7tAFCn/pub?start=false&loop=false&delayms=3000",
  docsUrl: "https://docs.google.com/document/d/e/2PACX-1vRsIONlDFzMJozvMiIGNMInYicakcIkmKghVAHzR6saeYvDeSE3vcj5qcwwmwvI-I96u7Is9dWK80So/pub",
  docsUrl2: "https://docs.google.com/document/d/e/2PACX-1vTGEo-XTqtnxQq7uvh_E4sHULWDFy1xJF657GzmYIPE69x1AenOs0K-H474a7Uu-ZVPfIhR_LYgueWj/pub",
  githubUrl: "https://github.com/MaxiCo1/Intoximate",
      features: [
        "Cocktail search with personalized filters",
        "Games and randomizer for discovering new drinks",
        "Design Thinking-driven process",
        "User validation and functional beta version",
      ],
    },
    {
      id: "10",
      title: "Dorja Family Bingo",
      description:
        "Interactive web game for community and family bingo sessions",
      fullDescription: `Dorja Family Bingo was a 2025 project created to bring magic, excitement, and aesthetics to bingo games with family, friends, or youth groups.  
Designed with a warm and simple interface, the goal was to make it accessible for anyone to use during recreational or community activities.  
The project aimed to create an accessible, functional, and visually appealing tool that could even be used offline — ideal for community events, family gatherings, or peulot.  
It also sought to reflect Dorja’s unique visual identity, blending playfulness with institutional style.`,
  image: "/images/bingo.png",
      technologies: ["Google Stitch", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://bingo-dorja.vercel.app",
      githubUrl: "https://github.com/cdejtiar/bingoDorja/tree/main",
      features: [
        "Random number generator from 1 to 90",
        "Visual highlight on the grid for drawn numbers",
        "Large display of the current ball",
        "Reset button to start a new game",
        "Colorful, warm, and Dorja-themed interface",
      ],
    },
    {
      id: "12",
      title: "IVO 2025 Escape Room",
      description:
        "Interactive web app for school orientation events",
      fullDescription: `IVO Escape Room was a 2025 project developed at ORT School to showcase study orientations to 2nd-year students in a fun and interactive way.  
The experience was designed so participants could learn through play, exploring five subrooms, each representing one of the pillars of the Informatics orientation.  
The project aimed to combine fun, learning, and design aesthetics, creating a narrative thread that connected all rooms and guided students through interactive challenges and educational puzzles.`,
  image: "/images/IVO.png",
      technologies: [
        "Google Stitch",
        "v0",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GitHub Projects",
      ],
      liveUrl: "https://ivo-sala-de-escape.vercel.app",
      githubUrl: "https://github.com/informaticaort/IVO-2025",
      features: [
        "Interactive console in the Design room: drag-and-drop fields and solve design puzzles",
        "Narrative thread connecting all subrooms for cohesive storytelling",
        "Usability tests with students from different grades to validate timing, understanding, and engagement",
        "Error iteration and improvements to ensure all students can complete the experience smoothly",
      ],
    },
    {
      id: "13",
      title: "inFlow",
      description:
        "Thesis project: mobile app to optimize UX/UI and reduce academic procrastination in university students",
      fullDescription:
        `Over the past few years, I’ve been developing my thesis project to earn my degree in Multimedia Technology.  
Although still in progress, the main idea is to propose a technological solution that helps reduce academic procrastination among Argentine university students aged 18–23.  
The project focuses on two key procrastination patterns: Evaluation Anxiety (linked to negative emotions) and Socially Optimistic (linked to positive emotions).  
The solution is based on implementing User-Centered Design strategies and gamified systems to address motivation.  
The development process followed the Design Thinking stages: Empathize, Define, Ideate, Prototype, and Test.  
The defined MVP includes an initial personalization questionnaire, a daily/weekly action plan, an XP and Badges system, an emotional journal, and visual progress feedback.  
The research phase included benchmarking tools such as Focusmate, Forest, and Structured, as well as surveys of 157 people — 82.8% of whom admitted to procrastinating.`,
  image: "/images/comingsoon.png",
      technologies: [
        "Design Thinking",
        "UX Research",
        "Benchmarking",
        "MoSCoW Prioritization Matrix",
      ],
      //work in progress
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Personalization based on procrastination type (initial questionnaire)",
        "Gamification with XP and Badges to foster motivation",
        "Emotional journal for self-awareness and emotional management",
        "Action plan that breaks tasks into smaller, achievable steps",
      ],
    },
    {
      id: "14",
      title: "Portfolio",
      description: "Personal portfolio website",
      fullDescription:
        `Personal portfolio developed with Next.js 14, featuring custom mobile navigation, glassmorphism effects, theme system, and touch-device optimizations.  
The main concept was mine, later refined through a design process in Google Stitch to include modern UI elements and general features expected in a portfolio.  
Finally, I implemented it using v0 components.  
The project also included a personal reflection on which design elements best represent me and how to express them visually.`,
  image: "/images/portfolio.png",
      technologies: [
        "Figma",
        "Google Stitch",
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Floating mobile navigation",
        "Glassmorphism visual effects",
        "Simplified project showcase layout",
      ],
    },
  ],
};

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [project, setProject] = useState<Project | null>(null)

  const t = translations[language]

  useEffect(() => {
    // Get language from localStorage or default to 'es'
    const savedLanguage = (localStorage.getItem("language") as "es" | "en") || "es"
    setLanguage(savedLanguage)

    // Find the project
    const projectId = params.id as string
    const projects = projectsData[savedLanguage]
    const foundProject = projects.find((p) => p.id === projectId)
    setProject(foundProject || null)
  }, [params.id])

  // Normalize image paths coming from project data.
  // Some entries reference files with a relative path into the `public` folder
  // (for example: "../../../public/images/..."), so map those to the
  // correct absolute public path ("/images/...") before rendering.
  const resolveImage = (img?: string) => {
    if (!img) return "/placeholder.svg"
    // If it contains '/public/' (common when saved as relative), strip up to public
    if (img.includes('/public/')) return img.substring(img.indexOf('/public/') + 7)
    // If it starts with ../ or similar, remove leading ../ segments and try to find 'public'
    if (img.startsWith('..')) {
      const stripped = img.replace(/^(?:\.\.\/)+/, '/')
      // if leftover contains 'public', remove it
      return stripped.replace('/public', '')
    }
    return img
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-superlobster text-primary mb-4">{t.projectNotFound}</h1>
          <Button onClick={() => router.push("/#projects")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToProjects}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Button onClick={() => router.push("/#projects")} variant="ghost" className="mb-8 hover:bg-secondary/20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToProjects}
        </Button>

        {/* Project Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h1 className="font-superlobster text-4xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground font-barlow mb-6">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewLive}
              </Button>
            )}
            {project.slidesUrl && (
              <Button
                onClick={() => window.open(project.slidesUrl, "_blank")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewPresentation}
              </Button>
            )}
            {project.githubUrl && (
              <Button
                onClick={() => window.open(project.githubUrl, "_blank")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                {t.viewCode}
              </Button>
            )}
            {project.docsUrl && (
              <Button
                onClick={() => window.open(project.docsUrl, "_blank")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewProjectCharter}
              </Button>
            )}
            {project.docsUrl2 && (
              <Button
                onClick={() => window.open(project.docsUrl2, "_blank")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewResearch}
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="glass-card rounded-2xl p-4 mb-8">
          <img
            src={resolveImage(project.image)}
            alt={project.title}
            className={
              ["NFTBunnies", "GameReads", "intoximate"].includes(project.title)
                ? "w-full h-96 object-contain rounded-lg"
                : "w-full h-96 object-cover rounded-lg"
            }
          />
        </div>

        {/* Project Description */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <p className="text-muted-foreground font-barlow leading-relaxed text-lg">{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h2 className="font-superlobster text-2xl text-primary mb-6">{t.keyFeatures}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="font-barlow">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="glass-card rounded-2xl p-8">
          <h2 className="font-superlobster text-2xl text-primary mb-6">{t.technologies}</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-barlow border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
