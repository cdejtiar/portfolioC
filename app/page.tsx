"use client";

import { useState, useEffect } from "react";
import { SidebarNavigation } from "@/components/sidebar-navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProjectSection } from "@/components/featured-project-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { CustomCursor } from "@/components/custom-cursor";
import { motion, type Variants } from "framer-motion";

const content = {
  es: {
    title: "Sobre mí",
    aboutTitle: "Quién soy",
    aboutDescription:
      "Creo que los mejores productos digitales nacen de comprender a las personas antes de diseñar una solución. Por eso disfruto participar en todo el proceso de diseño, desde la investigación y la definición del problema hasta el prototipado, la validación y la implementación. Con una formación en UX/UI y conocimientos de desarrollo frontend, busco crear experiencias intuitivas, accesibles y con un propósito claro, transformando problemas complejos en productos simples, útiles y pensados para las personas.",
    aboutDetails:
      "Trabajo con equipos multidisciplinarios para crear experiencias digitales que acompañen a las personas desde la investigación hasta la implementación. Diseño productos que se sienten premium, pero que siempre tienen sentido práctico.",
    skillsTitle: "Habilidades",
    experienceTitle: "Experiencia",
    experienceDescription:
      "Más que una lista de trabajos: un recorrido por mis capacidades clave como diseñadora de producto y desarrolladora frontend.",
    experienceHighlights: [
      {
        title: "Estrategia de Producto",
        points: [
          "Definición de objetivos claros y entregables alineados con el negocio.",
          "Mapeo de usuarios, jornadas y prioridades de experiencia.",
          "Decisiones guiadas por evidencia y contexto real.",
        ],
      },
      {
        title: "UX Research y Diseño",
        points: [
          "Investigación cualitativa y cuantitativa para descubrir oportunidades.",
          "Sistemas de diseño coherentes y flujos centrados en la persona.",
          "Iteración rápida con prototipos y validación continua.",
        ],
      },
      {
        title: "Frontend y Lanzamiento",
        points: [
          "Entregas con React, TypeScript y Next.js.",
          "Colaboración con desarrollo para una implementación ajustada.",
          "Pruebas, refinamiento y seguimiento post-lanzamiento.",
        ],
      },
    ],
  },
  en: {
    title: "About Me",
    aboutTitle: "Who I Am",
    aboutDescription:
     "I believe great digital products start with understanding people before designing solutions. That's why I enjoy being involved throughout the entire product journey—from research and problem definition to prototyping, validation, and implementation. With a background in UX/UI Design and front-end development, I focus on creating intuitive, accessible, and meaningful experiences that solve real problems. I'm driven by curiosity, continuous learning, and the opportunity to turn complex challenges into simple, thoughtful products.",
    aboutDetails:
      "I work with cross-functional teams to create digital experiences that move people from research to implementation. I design products that feel premium while keeping a practical focus.",
    skillsTitle: "Skills",
    experienceTitle: "Experience",
    experienceDescription:
      "More than a job list: a snapshot of the key capabilities I bring as a product designer and frontend collaborator.",
    experienceHighlights: [
      {
        title: "Product Strategy",
        points: [
          "Define clear goals and outcomes aligned with business needs.",
          "Map user journeys and prioritize experience opportunities.",
          "Make decisions guided by evidence and real context.",
        ],
      },
      {
        title: "UX Research and Design",
        points: [
          "Qualitative and quantitative research to reveal meaningful insights.",
          "Build coherent design systems and user-centered flows.",
          "Iterate quickly with prototypes and continuous validation.",
        ],
      },
      {
        title: "Frontend and Launch",
        points: [
          "Deliver with React, TypeScript and Next.js.",
          "Collaborate with development for aligned implementation.",
          "Test, refine and follow up after launch.",
        ],
      },
    ],
  },
};

const processStages = [
  {
    key: "research",
    title: "Research",
    description:
      "Entender a las personas, el contexto y los datos que guían las decisiones de diseño.",
    titleEn: "Research",
    descriptionEn:
      "Understand people, context and the data that guide design decisions.",
  },
  {
    key: "define",
    title: "Define",
    description:
      "Convertir hallazgos en un problema claro, alineado con objetivos y criterios de éxito.",
    titleEn: "Define",
    descriptionEn:
      "Turn insights into a clear problem statement aligned with goals and success criteria.",
  },
  {
    key: "ideate",
    title: "Ideate",
    description:
      "Explorar ideas diversas y seleccionar las mejores soluciones para construir prototipos.",
    titleEn: "Ideate",
    descriptionEn:
      "Explore diverse ideas and select the best solutions to build prototypes.",
  },
  {
    key: "prototype",
    title: "Prototype",
    description:
      "Diseñar flujos funcionales y interfaces que se puedan probar desde temprano.",
    titleEn: "Prototype",
    descriptionEn:
      "Design functional flows and interfaces that can be tested early.",
  },
  {
    key: "test",
    title: "Test",
    description:
      "Validar con usuarios reales, recoger feedback y mejorar con iteraciones rápidas.",
    titleEn: "Test",
    descriptionEn:
      "Validate with real users, collect feedback and improve with rapid iterations.",
  },
  {
    key: "build",
    title: "Build",
    description:
      "Llevar el diseño al código, colaborar en el desarrollo y entregar un producto sólido.",
    titleEn: "Build",
    descriptionEn:
      "Take the design to code, collaborate on development and deliver a solid product.",
  },
];

const skillGroups = [
  {
    title: "Design",
    skills: [
      "UX Research",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
      "Interaction Design",
      "UX Writing",
    ],
  },
  {
    title: "Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "AI",
    skills: ["Prompt Engineering", "AI Integration", "Conversational UX"],
  },
  {
    title: "Software & Tools",
    skills: [
      "Figma",
      "Miro",
      "Notion",
      "Jira",
      "Adobe Creative Cloud",
      "Google Workspace",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState<"es" | "en">("es");
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          if (scrollPosition >= elementTop) {
            currentSection = section;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <main className="relative z-10 lg:pb-16">
      <CustomCursor />

      <SidebarNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
      />

      <HeroSection language={language} />
      <AboutSection language={language} t={t} />
      <ProcessSection language={language} />
      <FeaturedProjectSection language={language} />
      <ProjectsSection language={language} />
      <SkillsSection language={language} />
      <ExperienceSection t={t} />
      <ContactSection language={language} />
    </main>
  );
}

function AboutSection({
  language,
  t,
}: {
  language: "es" | "en";
  t: (typeof content)["es"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">
              {t.title}
            </p>
            <h2 className="font-superlobster text-5xl md:text-6xl font-bold mb-4 gradient-text animate-fade-in-up">
              {t.aboutTitle}
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              {t.aboutDescription}
            </p>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {t.aboutDetails}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ProcessSection({ language }: { language: "es" | "en" }) {
  return (
    <section id="process" className="py-24 bg-slate-950/5 dark:bg-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4"
          >
            {language === "es" ? "Mi proceso de diseño" : "My design process"}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-superlobster text-5xl md:text-6xl font-bold mb-4 gradient-text"
          >
            {language === "es" ? "Un flujo claro para cada etapa" : "A clear flow for every stage"}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-8 text-muted-foreground"
          >
            {language === "es"
              ? "Cada etapa se sostiene en investigación y decisiones conscientes para llegar a experiencias más efectivas y con impacto."
              : "Each stage is grounded in research and intentional decisions to deliver more effective, impactful experiences."}
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[processStages.slice(0, 3), processStages.slice(3)].map((column, colIndex) => (
            <div key={colIndex} className="relative">
              {/* Línea de fondo */}
              <div className="hidden lg:block absolute left-5 top-8 bottom-0 w-px bg-border/50" />
              {/* Línea animada que "crece" */}
              <motion.div
                className="hidden lg:block absolute left-5 top-8 w-px bg-gradient-to-b from-primary to-primary/20 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ height: "calc(100% - 2rem)" }}
              />

              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
              >
                {column.map((stage, index) => (
                  <motion.div
                    key={stage.key}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative pl-14 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/30"
                    >
                      {colIndex === 0 ? index + 1 : index + 4}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {language === "es" ? stage.title : stage.titleEn}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {language === "es" ? stage.description : stage.descriptionEn}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection({ language }: { language: "es" | "en" }) {
  const title = language === "es" ? "Habilidades" : "Skills";
  const description =
    language === "es"
      ? "Un conjunto de capacidades organizadas en categorías limpias para mostrar un perfil híbrido sin métricas visuales innecesarias."
      : "A clean set of skill categories that highlights a hybrid profile without unnecessary visual metrics.";

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">
            {title}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-base leading-8 text-muted-foreground">
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 xl:grid-cols-4 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 400 }}
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.12)" }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection({ t }: { t: (typeof content)["es"] }) {
  return (
    <section id="experience" className="py-24 bg-slate-950/5 dark:bg-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">
            {t.experienceTitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            {t.experienceTitle}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            {t.experienceDescription}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.experienceHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/5"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
