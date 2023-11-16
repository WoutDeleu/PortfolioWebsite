import { Company } from "../properties/Company";
import { SingleEvent } from "./SingleEvent";

export class Certificate implements SingleEvent {
  date: Date;
  title: string;
  description: string;
  publisher: Company;

  constructor(data : {
    title: string,
    date: string,
    description: string,

    publisherName: string,
    publisherWebsite: string,
    publisherPhoto: string,
  }) {
    this.title = data.title;
    this.description = data.description;
    this.publisher = new Company(data.publisherName, data.publisherPhoto, data.publisherWebsite);
  }

  getStartDate() : Date {
    return this.date;
  }
}
