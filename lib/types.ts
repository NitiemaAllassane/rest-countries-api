export interface Country {
  uuid: string;

  names: {
    common: string;
    official: string;
    native?: Record<string, {
      common: string;
      official: string;
    }>;
  };

  codes: {
    alpha_2: string;
    alpha_3: string;
  };

  flag: {
    url_svg?: string;
    url_png?: string;
    emoji?: string;
  };

  region: string;
  subregion?: string;

  population: number;

  capitals?: {
    name: string;
    primary: boolean;
  }[];

  borders?: string[];

  tlds?: string[];

  languages?: {
    name: string;
    bcp47?: string;
  }[];

  currencies?: {
    code: string;
    name: string;
    symbol?: string;
  }[];
}