export enum MetricCategory {
  ALL = 'Todas',
  BUSINESS = 'Negocio',
  USABILITY = 'Usabilidad',
  ATTITUDINAL = 'Actitudinal',
  BEHAVIORAL = 'Comportamental'
}

export enum CardTheme {
  CREAM = 'cream',
  LAVENDER = 'lavender',
  MINT = 'mint',
  PEACH = 'peach',
  SKY = 'sky'
}

export interface MetricData {
  id: string;
  name: string;
  acronym?: string;
  shortDescription: string;
  definition: string;
  goalConnection: string;
  researchMethods: string;
  formula: string;
  example: string;
  categories: MetricCategory[];
  theme: CardTheme;
}