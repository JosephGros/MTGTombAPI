import { Request, Response } from 'express';
import CommanderBatch from '../models/topComModel';
import ThemeBatch from '../models/themeModel';
import Card from '../models/cardModel';
import Deck from '../models/deckModel';
import { ICommander } from '../interfaces/ITopCom';
import { ITheme } from '../interfaces/ITheme';
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
      const batch = await CommanderBatch.findOne({ batchName });
      console.log(`Checking batch: ${batchName}, Found batch: ${!!batch}`);
      if (batch) {
        console.log(`Batch content: ${JSON.stringify(batch.commanders.slice(0, 5))}`);
        commander = batch.commanders.find((c:any) => c.name === commanderName) || null;
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

    let theme: ITheme | null = null;
    for (let i = 1; i <= 20; i++) {
      const batch = await ThemeBatch.findOne({ themeName: `${themeName}_${i}` }) as ITheme | null;
      console.log(`Checking theme batch: ${themeName}_${i}, Found batch: ${!!batch}`);
      if (batch) {
        console.log(`Theme batch content: ${JSON.stringify(batch)}`);
        console.log(batch);
        theme = {
          themeName: batch.themeName,
          cards: [batch] as unknown as ICard[]
        };
        break;
      }
    }

    if (!theme) {
      console.log('Theme not found');
      return res.status(404).send('Theme not found');
    }

    console.log('Theme found:', theme);

    const cards = theme.cards;

    const cardDeckCounts = await Promise.all(cards.map(async (card: ICard) => {
      const count = await Deck.countDocuments({ cards: card.name });
      return { cardName: card.name, count };
    }));


    cardDeckCounts.sort((a, b) => b.count - a.count);

    const sortedCardsByType: { [key: string]: ICard[] } = {};
    for (const { cardName } of cardDeckCounts) {
      const card = await Card.findOne({ name: cardName });
      if (card) {
        if (!sortedCardsByType[card.type_line]) sortedCardsByType[card.type_line] = [];
        sortedCardsByType[card.type_line].push(card);
      }
    }

    console.log('Sorted cards by type:', sortedCardsByType);

    res.json(sortedCardsByType);
  } catch (error:any) {
    console.error('Error processing request:', error.message);
    res.status(500).send(error.message);
  }
};