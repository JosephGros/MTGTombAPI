import mongoose, { Document, Schema } from 'mongoose';

interface ICard extends Document {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: Record<string, string>;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  legalities: Record<string, string>;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  card_back_id: string;
  artist: string;
  artist_ids: string[];
  illustration_id: string;
  border_color: string;
  frame: string;
  frame_effects: string[];
  security_stamp: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  preview: Record<string, string>;
  prices: Record<string, string>;
  related_uris: Record<string, string>;
  purchase_uris: Record<string, string>;
}

const CardSchema: Schema = new Schema({
  object: { type: String, required: true },
  id: { type: String, required: true },
  oracle_id: { type: String, required: true },
  multiverse_ids: [{ type: Number }],
  mtgo_id: { type: Number },
  tcgplayer_id: { type: Number },
  cardmarket_id: { type: Number },
  name: { type: String, required: true },
  lang: { type: String, required: true },
  released_at: { type: String, required: true },
  uri: { type: String, required: true },
  scryfall_uri: { type: String, required: true },
  layout: { type: String, required: true },
  highres_image: { type: Boolean, required: true },
  image_status: { type: String, required: true },
  image_uris: { type: Map, of: String },
  mana_cost: { type: String, required: true },
  cmc: { type: Number, required: true },
  type_line: { type: String, required: true },
  oracle_text: { type: String, required: true },
  power: { type: String, required: true },
  toughness: { type: String, required: true },
  colors: [{ type: String }],
  color_identity: [{ type: String }],
  keywords: [{ type: String }],
  legalities: { type: Map, of: String },
  games: [{ type: String }],
  reserved: { type: Boolean, required: true },
  foil: { type: Boolean, required: true },
  nonfoil: { type: Boolean, required: true },
  finishes: [{ type: String }],
  oversized: { type: Boolean, required: true },
  promo: { type: Boolean, required: true },
  reprint: { type: Boolean, required: true },
  variation: { type: Boolean, required: true },
  set_id: { type: String, required: true },
  set: { type: String, required: true },
  set_name: { type: String, required: true },
  set_type: { type: String, required: true },
  set_uri: { type: String, required: true },
  set_search_uri: { type: String, required: true },
  scryfall_set_uri: { type: String, required: true },
  rulings_uri: { type: String, required: true },
  prints_search_uri: { type: String, required: true },
  collector_number: { type: String, required: true },
  digital: { type: Boolean, required: true },
  rarity: { type: String, required: true },
  card_back_id: { type: String, required: true },
  artist: { type: String, required: true },
  artist_ids: [{ type: String }],
  illustration_id: { type: String, required: true },
  border_color: { type: String, required: true },
  frame: { type: String, required: true },
  frame_effects: [{ type: String }],
  security_stamp: { type: String, required: true },
  full_art: { type: Boolean, required: true },
  textless: { type: Boolean, required: true },
  booster: { type: Boolean, required: true },
  story_spotlight: { type: Boolean, required: true },
  edhrec_rank: { type: Number, required: true },
  preview: { type: Map, of: String },
  prices: { type: Map, of: String },
  related_uris: { type: Map, of: String },
  purchase_uris: { type: Map, of: String },
});

const Card = mongoose.model<ICard>('Card', CardSchema ,'allcards');
export default Card;
