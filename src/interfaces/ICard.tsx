export interface ICard {
  name: string;
  type_line: string;
  cmc: number;
  oracle_text: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  rarity: string;
  color_identity: string[];
  keywords: string[];
  flavor_text?: string;
  id: string;
}
