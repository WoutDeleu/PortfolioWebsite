export enum SkillLevel {
  BASIC, INTERMEDIATE, FLUENT, NATIVE
}
export class Language {
  name: string;
  level: SkillLevel;

  constructor(data: { name: string, skill: string }) {
    this.name = data.name;
    this.level = getSkillLevel(data.skill);
  }
}
function getSkillLevel(value : string) : SkillLevel {
  switch (value) {
    case "Basic":
      return SkillLevel.BASIC;
    case "Intermediate":
      return SkillLevel.INTERMEDIATE;
    case "Fluent":
      return SkillLevel.FLUENT;
    case "Native":
      return SkillLevel.NATIVE;
    default:
      throw new Error("Unknown skill level: " + value);
  }
}
