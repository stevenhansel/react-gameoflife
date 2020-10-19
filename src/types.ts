export enum Categories {
  StillLifes = "Still lifes",
  Oscillators = "Oscillators",
  Spaceships = "Spaceships",
}

export interface Pattern {
  title: string;
  category: Categories;
  structure: number[][];
}
