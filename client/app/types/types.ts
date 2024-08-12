export interface Team {
  id: number;
  name: string;
  formation: string;
  players: TeamPlayer[];
}

export type TeamPlayer = {
  name: string;
  position: string;
};
