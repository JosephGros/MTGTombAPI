import { ICard } from "./ICard";

export interface IThemeBatch {
    id: string;
    themeName: string;
    cards: ICard[];
    v: number;
}
  