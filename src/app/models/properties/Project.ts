import {Team} from "./Team";
import {parseMonthYearString} from "../../utils/DateFunctions";
import {Company} from "./Company";

export class Project {
  title: string;
  subTitle: string;
  startDate: Date;
  endDate: Date;
  description: string;
  company: Company;
  team: Team;

  constructor(data : {
    title: string,
    subTitle: string,
    startDate: string,
    endDate: string,
    description: string,

    companyName: string,
    companyPhoto: string,
    companyWebsite: string,
    teamObject: { role : string, teamSize: number }
  }) {
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.startDate = parseMonthYearString(data.startDate);
    this.endDate = parseMonthYearString(data.endDate);
    this.description = data.description;
    this.team = new Team(data.teamObject);
    this.company = new Company(data.companyName, data.companyPhoto, data.companyWebsite);
  }
}
