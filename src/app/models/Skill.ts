export class Skill {
  name: string;
  percentage: number;

  constructor(data : { name : string, percentage : number }) {
    this.name = data.name;
    this.percentage = data.percentage;
  }
}
