import { Request, Response } from 'express';
import CommanderBatch from '../models/topComModel';
import ThemeBatch from '../models/themeModel';
import Deck from '../models/deckModel';
import { ICommander } from '../interfaces/ITopCom';
import { IThemeBatch } from '../interfaces/ITheme';
import { ICard } from '../interfaces/ICard';

export const getCommanderCards = async (req: Request, res: Response) => {
  const { commanderName } = req.body;

  console.log('Received request with commanderName:', commanderName);

  try {
    let commander: ICommander | null = null;
    const batchNames = [
      'Top 0-2000 Commanders',
      'Top 2000-4000 Commanders',
      'Top 4000-4894 Commanders'
    ];

    for (const batchName of batchNames) {
      console.log(`Querying for batch: ${batchName}`);
      const batch = await CommanderBatch.findOne({ batchName }, 'commanders');
      console.log(`Checking batch: ${batchName}, Found batch: ${!!batch}`);
      if (batch) {
        commander = batch.commanders.find((c: any) => c.name === commanderName) || null;
        if (commander) break;
      }
    }

    if (!commander) {
      console.log('Commander not found');
      return res.status(404).send('Commander not found');
    }

    console.log('Commander found:', commander);

    const themeName = commander.themes[0];
    console.log('First theme:', themeName);

    let themeBatch: IThemeBatch | null = null;
    for (let i = 1; i <= 50; i++) {
      const themeBatchName = `${themeName}_${i}`;
      console.log(`Checking theme batch: ${themeBatchName}`);
      const batch = await ThemeBatch.findOne({ themeName: themeBatchName }, 'cards');
      console.log(`Found theme batch: ${!!batch}`);
      if (batch) {
        themeBatch = batch;
      }
    }

    if (!themeBatch) {
      console.log('Theme batch not found');
      return res.status(404).send('Theme batch not found');
    }

    console.log('Theme batch found:', themeBatch);

    const cardCountsMap = new Map<string, { count: number, cardInfo: ICard }>();

    await Promise.all(themeBatch.cards.map(async (card: ICard) => {
      const cardName = card.name.trim().toLowerCase();
      const count = await Deck.countDocuments({ 'cards.name': card.name });
      if (cardCountsMap.has(cardName)) {
        cardCountsMap.get(cardName)!.count += count;
      } else {
        cardCountsMap.set(cardName, { count, cardInfo: card });
      }
    }));

    const cardDeckCounts = Array.from(cardCountsMap, ([name, { count, cardInfo }]) => ({ name, count, cardInfo }));
    cardDeckCounts.sort((a, b) => b.count - a.count);

    console.log('Sorted card deck counts:', cardDeckCounts);

    res.json(cardDeckCounts);
  } catch (error: any) {
    console.error('Error processing request:', error.message);
    res.status(500).send(error.message);
  }
};
