export interface Vessel {
  id: string;
  name: string;
  type: string;
  capacity: string;
  buildYear: number;
  status: 'In Transit' | 'At Port' | 'Maintenance';
  currentPort?: string;
  nextPort?: string;
  eta?: string;
  specs: {
    length: string;
    beam: string;
    draught: string;
    engine: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  volume: string;
  outcome: string;
  description: string;
  image: string;
  kpis: { label: string; value: string }[];
}

export interface Route {
  id: string;
  name: string;
  origin: string;
  destination: string;
  transitTime: string;
  frequency: string;
}
