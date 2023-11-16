import {cities} from "country-cities";
import {Skill} from "./properties/Skill";
import {Education} from "./events/Education";
import {Certificate} from "./events/Certificate";
import {Experience} from "./events/Experience";
import {Project} from "./properties/Project";
import {Language} from "./properties/Language";
import {PersonJSON} from "./data/PersonJSON";
import {parseMonthYearDayString, parseMonthYearString} from "../utils/DateFunctions";
import {Event} from "./events/Event";

export class Person {
  firstName: string;
  lastName: string;
  function : string;
  aboutMe: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;

  linkedInUrl: URL;
  githubUrl: URL;

  skills: Skill[];
  educations: Education[];
  certificates: Certificate[];
  experiences: Experience[];
  languages: Language[];
  projects: Project[];
  interests: String[];

  constructor(data : PersonJSON) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.function = data.function;
    this.aboutMe = data.aboutMe;
    this.dateOfBirth = parseMonthYearDayString(data.dateOfBirth);
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
    this.city = data.city;
    this.country = data.country;

    this.linkedInUrl = new URL(data.linkedInUrl);
    this.githubUrl = new URL(data.githubUrl);

    this.interests = data.interests;

    this.skills = [];
    this.educations = [];
    this.certificates = [];
    this.experiences = [];
    this.languages = [];
    this.projects = [];

    for (let skill of data.skills) {
      this.skills.push(new Skill(skill));
    }
    for (let education of data.educations) {
      this.educations.push(new Education(education));
    }
    for (let certificate of data.certificates) {
      this.certificates.push(new Certificate(certificate));
    }
    for (let experience of data.experiences) {
      this.experiences.push(new Experience(experience));
    }
    for (let language of data.languages) {
      this.languages.push(new Language(language));
    }
    for (let project of data.projects) {
      this.projects.push(new Project(project));
    }
  }

  getCoordinates() : [number, number] {
    let city = cities.all().filter(city => city.name === this.city);
    let latitude = city.at(0)?.latitude;
    let longitude = city.at(0)?.longitude;
    if (latitude !== undefined && longitude !== undefined) {
      return [+latitude, +longitude];
    }
    else {
      return [0,0];
    }
  }

  getTimeline() : Event[] {
    let timeline = [];
    timeline.push(...this.educations);
    timeline.push(...this.certificates);
    timeline.push(...this.experiences);
    return timeline;
  }

  getAge(): number {
    const today = new Date();
    if (today.getMonth() < this.dateOfBirth.getMonth() || (today.getMonth() >= this.dateOfBirth.getMonth() && today.getDay() < this.dateOfBirth.getDay()-1)) {
      return new Date().getFullYear() - this.dateOfBirth.getFullYear() - 1;
    }
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
  }
}
