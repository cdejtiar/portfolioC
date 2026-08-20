import { defineCaseStudy } from "./define";

export default defineCaseStudy({
  es: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Contexto",
          description:
            "Jornadas IVO en la Escuela ORT: estudiantes de segundo año recorren las orientaciones para conocerlas.",
        },
        {
          title: "Mi participación",
          description:
            "Diseño y desarrollo de la sala de Diseño, narrativa general y pruebas de usabilidad.",
        },
        {
          title: "Resultado",
          description:
            "Sala de escape digital de cinco subsalas usada en las jornadas, iterada hasta completarse sin inconvenientes.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Tipo de proyecto",
          description: "Proyecto colaborativo · UX/UI + Desarrollo",
        },
        { title: "Año", description: "2025" },
        {
          title: "Tecnologías",
          description:
            "Stitch · v0 · TypeScript · Next.js · Tailwind CSS · GitHub Projects",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Sala de Escape IVO fue desarrollada en 2025 junto a mi equipo de trabajo en la Escuela ORT para las jornadas IVO.\nDurante estas jornadas, estudiantes de segundo año recorren las distintas orientaciones que les interesan para conocer mejor sus propuestas.\nNuestro desafío fue mostrar el potencial de la **orientación de Informática** de una manera que no fuera únicamente expositiva.",
    },
    {
      type: "challenge",
      title: "¿Cómo podemos enseñar mientras los estudiantes juegan?",
      body: "A partir del feedback de ediciones anteriores decidimos transformar la experiencia en algo **interactivo**.",
      description:
        "La respuesta fue una **sala de escape digital** dividida en cinco subsalas, cada una asociada a uno de los pilares de la orientación.",
    },
    {
      type: "concept",
      title: "Cinco subsalas, una historia",
      body: "La experiencia utiliza una **historia como hilo conductor** que conecta todas las salas.\nCada subsala propone desafíos y puzzles relacionados con diferentes áreas de la orientación.\nTrabajé sobre esa narrativa, que permitió convertir los desafíos individuales en una **experiencia coherente**.",
    },
    {
      type: "interaction-design",
      title: "La sala de Diseño",
      body: "Para esta sala diseñé una especie de **consola interactiva**.\nLos estudiantes deben **arrastrar diferentes campos** hasta conseguir que los diseños coincidan y luego resolver un puzzle relacionado con conceptos de diseño que se trabajan durante la orientación.\nEl objetivo era que el contenido no apareciera como una explicación aislada, sino como **parte del desafío**.",
    },
    {
      type: "testing",
      title: "Testing con estudiantes",
      body: "Conduje pruebas de usabilidad con estudiantes de **tercero, cuarto y quinto año**.",
      items: [
        "Tiempo necesario para completar las salas.",
        "Comprensión de los desafíos.",
        "Atractividad de la experiencia.",
        "Relación entre los contenidos y la orientación.",
      ],
    },
    {
      type: "iterations",
      title: "Iteración previa a las jornadas",
      body: "Las pruebas permitieron detectar **errores y problemas de comprensión** que fueron iterados durante las semanas previas a las jornadas.\nLas últimas pruebas lograron que los estudiantes pudieran **completar las salas sin inconvenientes**.",
    },
    {
      type: "final-solution",
      title: "La sala en funcionamiento",
      description:
        "La experiencia completa tal como la recorrieron los estudiantes durante las jornadas de orientación.",
        image: "../../../public/images/ivo-screens.png"
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "La Sala de Escape IVO combinó **aprendizaje, narrativa e interacción** para presentar una orientación académica desde una experiencia práctica y entretenida.",
    },
    {
      type: "learnings",
      title: "Aprendizajes",
      items: [
        "Trabajar en un contexto real con **usuarios jóvenes** cambia la forma de validar: lo que no se entiende, se ve en la primera prueba.",
        "La **narrativa y la interacción** pueden transformar contenido educativo en una experiencia que invita a participar.",
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
            "IVO days at ORT School: second-year students visit the specializations they're interested in.",
        },
        {
          title: "My role",
          description:
            "Design and development of the Design room, overall narrative, and usability testing.",
        },
        {
          title: "Outcome",
          description:
            "A five-room digital escape room used during the event, iterated until students completed it smoothly.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Project type",
          description: "Collaborative project · UX/UI + Development",
        },
        { title: "Year", description: "2025" },
        {
          title: "Technologies",
          description:
            "Stitch · v0 · TypeScript · Next.js · Tailwind CSS · GitHub Projects",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Sala de Escape IVO was built in 2025 with my team at ORT School for the IVO days.\nDuring those days, second-year students explore the specializations they're interested in to understand them better.\nOur challenge was to show the potential of the **Computer Science track** in a way that wasn't purely expository.",
    },
    {
      type: "challenge",
      title: "How can we teach while students play?",
      body: "Based on feedback from previous editions we decided to turn the experience into something **interactive**.",
      description:
        "The answer was a **digital escape room** split into five sub-rooms, each tied to one of the pillars of the specialization.",
    },
    {
      type: "concept",
      title: "Five rooms, one story",
      body: "The experience uses a **story as the thread** that connects every room.\nEach sub-room poses challenges and puzzles related to different areas of the track.\nI worked on that narrative, which turned individual challenges into a **coherent experience**.",
    },
    {
      type: "interaction-design",
      title: "The Design room",
      body: "For this room I designed a kind of **interactive console**.\nStudents **drag different fields** until the designs match, then solve a puzzle about design concepts covered during the specialization.\nThe goal was for the content to appear as **part of the challenge**, not as an isolated explanation.",
    },
    {
      type: "testing",
      title: "Testing with students",
      body: "I ran usability tests with **third-, fourth-, and fifth-year students**.",
      items: [
        "Time needed to complete the rooms.",
        "Understanding of the challenges.",
        "Appeal of the experience.",
        "Connection between content and the specialization.",
      ],
    },
    {
      type: "iterations",
      title: "Iteration before the event",
      body: "The tests surfaced **bugs and comprehension issues** that we iterated on during the weeks before the event.\nIn the final tests students **completed the rooms without trouble**.",
    },
    {
      type: "final-solution",
      title: "The room in action",
      description:
        "The full experience as students went through it during the academic orientation days.",
        image: "../../../public/images/ivo-screens.png"
    },
    {
      type: "result",
      title: "Result",
      description:
        "Sala de Escape IVO combined **learning, narrative, and interaction** to present an academic track through a hands-on, entertaining experience.",
    },
    {
      type: "learnings",
      title: "Learnings",
      items: [
        "Working in a real context with **young users** changes how you validate: whatever isn't clear shows up in the first test.",
        "**Narrative and interaction** can turn educational content into an experience that invites participation.",
      ],
    },
  ],
});
