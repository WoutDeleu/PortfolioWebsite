export class Team {
  role: string;
  numberOfTeam: number;
  constructor(team: { role: string; teamSize: number }) {
    this.role = team.role;
    this.numberOfTeam = team.teamSize;
  }
}
