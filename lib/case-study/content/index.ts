import type { CaseStudySectionConfig } from "@/lib/case-study/types"
import type { CaseStudyLocale } from "@/lib/case-study/types"
import type { CaseStudyContent } from "./define"

import yAhoraQue from "./y-ahora-que"
import enhuella2 from "./enhuella2"
import gamereads from "./gamereads"
import intoximate from "./intoximate"
import nftbunnies from "./nftbunnies"
import runnerDino from "./runner-dino"
import bingoDorja from "./bingo-dorja"
import ivoEscapeRoom from "./ivo-escape-room"
import inflow from "./inflow"
import sipSketchStories from "./sip-sketch-stories"

/**
 * Registro de contenido de casos de estudio, indexado por id de proyecto.
 * Cada archivo define la misma secuencia de bloques en ES y EN.
 */
export const caseStudyContentByProjectId: Record<string, CaseStudyContent> = {
  "2": yAhoraQue,
  "3": enhuella2,
  "4": nftbunnies,
  "5": runnerDino,
  "7": gamereads,
  "9": intoximate,
  "10": bingoDorja,
  "12": ivoEscapeRoom,
  "13": inflow,
  "15": sipSketchStories,
}

/** Devuelve los bloques del caso de estudio para un proyecto y un idioma. */
export function getCaseStudyContent(
  projectId: string,
  language: CaseStudyLocale,
): CaseStudySectionConfig[] | undefined {
  return caseStudyContentByProjectId[projectId]?.[language]
}

export type { CaseStudyContent }
