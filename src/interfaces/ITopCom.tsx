export interface ICommander {
    name: string;
    num_decks: number;
    rank: number;
    themes: string[];
}

export interface ICommanderBatch {
    batchName: string;
    commanders: ICommander[];
}
  