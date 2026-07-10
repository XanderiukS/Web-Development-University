export interface Pais {
  names: {
    common: string;
    official: string;
  };
  flag?: { 
    url_svg: string;
  };
  capitals?: any[];
  population: number;
  languages?: { [key: string]: any };
  currencies?: { [key: string]: { name: string; symbol: string } };
  region: string; 
  maps: {
    googleMaps: string;
  };
}