import {parseMonthYearString} from "../../utils/DateFunctions";
import {Company} from "../properties/Company";
import {Event} from "./Event";

export class Education implements Event {
  title: string;
  subTitle: string;
  startDate: Date;
  endDate: Date;
  description: string;
  specialization: string;
  relevantCourses: string[];
  company: Company;

  constructor(data : {
    title: string,
    subTitle: string,
    startDate: string,
    endDate: string,
    description: string,
    specialization: string,
    relevantCourses: string[],

    companyPhoto: string,
    companyName: string,
    companyWebsite: string,
  }) {

    this.title = data.title;
    this.subTitle = data.subTitle;
    this.startDate = parseMonthYearString(data.startDate);
    this.endDate = parseMonthYearString(data.endDate);
    this.description = data.description;
    this.specialization = data.specialization;
    this.relevantCourses = data.relevantCourses;
    this.company = new Company(data.companyName, data.companyPhoto, data.companyWebsite);
  }

  getStartDate(): Date {
    return this.startDate;
  }
}
