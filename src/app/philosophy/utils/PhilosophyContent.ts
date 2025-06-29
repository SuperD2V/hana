interface PhilosophySection {
  title: string;
  content: string[];
}

import content from "./philosophy-content.json";

// JSON 파일의 내용을 가져와서 줄바꿈과 구분선이 올바르게 표시되도록 처리
export const PhilosophyContent: PhilosophySection[] = content.sections.map(
  section => ({
    ...section,
    content: section.content.map(text => text.replace(/\\n/g, "\n"))
  })
);
