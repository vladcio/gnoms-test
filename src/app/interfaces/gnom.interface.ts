export interface Gnoms {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: string[];
  friends: string[];
}

export interface GnomsTown {
  Brastlewark: Gnoms[];
}
