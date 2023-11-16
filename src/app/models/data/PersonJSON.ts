export interface PersonJSON {
  firstName: string;
  lastName: string;
  function : string;
  aboutMe: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;

  linkedInUrl: string;
  githubUrl: string;

  interests: string[];

  skills: {
    name : string,
    percentage : number
  } [];

  educations: {
    title: string,
    subTitle: string,
    startDate: string,
    endDate: string,
    description: string,
    specialization: string,
    relevantCourses: string[],

    companyName: string,
    companyPhoto: string,
    companyWebsite:string
  } [];

  certificates: {
    title: string,
    date: string,
    description: string,

    publisherName: string,
    publisherPhoto: string,
    publisherWebsite: string,
  } [];

  projects: {
    title: string,
    photo: string,
    subTitle: string,
    startDate: string,
    endDate: string,
    description: string,

    teamObject: {
      role : string,
      teamSize: number
    },

    companyName: string,
    companyWebsite: string,
    companyPhoto: string
  } [];

  experiences: {
    title: string,
    role: string,
    startDate: string,
    endDate: string,
    description: string,
    technologies: string[]

    companyName: string
    companyPhoto: string,
    companyWebsite: string,
  } [];

  languages: {
    name: string,
    skill: string
  } [];

}
