export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;

  independent?: boolean;
  status: string;
  unMember: boolean;

  currencies?: Record<string, Currency>;

  idd: {
    root?: string;
    suffixes?: string[];
  };

  capital?: string[];

  altSpellings: string[];

  region: string;
  subregion?: string;

  languages?: Record<string, string>;

  translations: Record<string, Translation>;

  latlng: [number, number];

  landlocked: boolean;

  borders?: string[];

  area: number;

  demonyms?: {
    eng: Demonym;
    fra?: Demonym;
  };

  flag: string;

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  population: number;

  fifa?: string;

  car: {
    signs?: string[];
    side: "left" | "right";
  };

  timezones: string[];

  continents: string[];

  flags: Flags;

  coatOfArms: CoatOfArms;

  startOfWeek: string;

  capitalInfo?: {
    latlng?: [number, number];
  };

  postalCode?: {
    format?: string;
    regex?: string;
  };
}

export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, NativeName>;
}

export interface NativeName {
  official: string;
  common: string;
}

export interface Currency {
  name: string;
  symbol?: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export type Region = 'Africa' |'America' | 'Asia' | 'Europe'| 'Oceania';