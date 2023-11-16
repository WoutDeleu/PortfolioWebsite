import {Company} from "../properties/Company";
import {parseMonthYearString} from "../../utils/DateFunctions";
import {PeriodEvent} from "./PeriodEvent";

export class Experience implements PeriodEvent {
  title: string;
  role: string;
  startDate: Date;
  endDate: Date;
  description: string;
  technologies: string[];
  company: Company;

  constructor(data : { title: string, role: string, companyName: string, companyPhoto: string, companyWebsite: string, startDate: string, endDate: string, description: string, technologies: string[] }) {
    this.title = data.title;
    this.role = data.role;
    this.startDate = parseMonthYearString(data.startDate);
    this.endDate = parseMonthYearString(data.endDate);
    this.description = data.description;
    this.technologies = data.technologies;
    this.company = new Company(data.companyName, data.companyPhoto, data.companyWebsite);
  }

  getStartDate(): Date {
    return this.startDate;
  }
  getEndDate(): Date {
    return this.endDate;
  }

  getDuration(): number {
    return this.endDate.getTime() - this.startDate.getTime();
  }
}
