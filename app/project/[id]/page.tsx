"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { projectsByLocale, type Project } from "@/lib/projects";
import { caseStudyTranslations } from "@/lib/case-study/translations";
import { CaseStudyRenderer } from "@/components/case-study";

function resolveImage(img?: string) {
  if (!img) return "/placeholder.svg";

  let s = img.replace(/\\/g, "/");

  if (s.includes("/public/")) {
    s = s.substring(s.indexOf("/public/") + "/public/".length);
  }

  const imagesIdx = s.indexOf("images/");
  if (imagesIdx !== -1) {
    s = "/" + s.substring(imagesIdx);
    return s;
  }

  s = s.replace(/^(?:\.+\/)+/, "");
  if (!s.startsWith("/")) s = "/" + s;

  return s;
}

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [project, setProject] = useState<Project | null>(null);

  const t = caseStudyTranslations[language];

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem("language") as "es" | "en") || "es";
    setLanguage(savedLanguage);

    const projectId = params.id as string;
    const projects = projectsByLocale[savedLanguage];
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject || null);
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-superlobster text-primary mb-4">
            {t.projectNotFound}
          </h1>
          <Button onClick={() => router.push("/projects")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToProjects}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100c19] text-foreground overflow-hidden">
      <CaseStudyRenderer
        project={project}
        language={language}
        resolveImage={resolveImage}
      />
    </div>
  );
}
