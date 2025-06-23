interface PhilosophySection {
  title: string;
  content: string[];
}

import philosophyContent from "./philosophy-content.json";

export const PhilosophyContent: PhilosophySection[] =
  philosophyContent.sections;
