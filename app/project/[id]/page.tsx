"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { projectsByLocale } from "@/lib/projects";
import { caseStudyTranslations } from "@/lib/case-study/translations";
import { CaseStudyRenderer } from "@/components/case-study";
import { NextProjectCard } from "../../../components/case-study/next-project-card";
import { SidebarNavigation } from "@/components/sidebar-navigation";
import { useLanguage } from "@/components/language-provider";

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
  const { language } = useLanguage();
  const t = caseStudyTranslations[language];

  const project = useMemo(() => {
    const projectId = params.id as string;
    return projectsByLocale[language].find((p) => p.id === projectId) ?? null;
  }, [params.id, language]);

  const nextProject = useMemo(() => {
    if (!project) return null;
    const list = projectsByLocale[language];
    const currentIndex = list.findIndex((p) => p.id === project.id);
    if (currentIndex === -1 || list.length < 2) return null;
    return list[(currentIndex + 1) % list.length];
  }, [project, language]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SidebarNavigation />
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
    <div className="min-h-screen bg-cs-surface text-foreground overflow-hidden lg:pb-16">
      <SidebarNavigation />

      <CaseStudyRenderer
        project={project}
        language={language}
        resolveImage={resolveImage}
      />

      {nextProject && (
        <NextProjectCard
          project={nextProject}
          language={language}
          resolveImage={resolveImage}
        />
      )}
    </div>
  );
}