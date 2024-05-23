import { ICard } from "./ICard";

export interface ITheme {
    themeName: string;
    cards: ICard[];
  }
  
  export interface IThemeBatch {
    themeName: string;
    themes: ITheme[];
  }
  