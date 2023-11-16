export class Company {
  name: string;
  logo: URL;
  website: URL;

  constructor(name: string, logo: string, website: string) {
    this.name = name;
    this.logo = new URL(logo);
    this.website = new URL(website);
  }

}
