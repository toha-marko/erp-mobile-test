import { menuItem } from './item';

export type section = {
  items: Array<menuItem>;
  name: string,
  sections?: Array<section>;
  color?: string;
};
