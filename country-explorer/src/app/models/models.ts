export interface Pais {
  country: string;
  continent: string;
  population: number;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    flag: string;
  };
}