import { Vessel, CaseStudy, Route } from './types';

export const VESSELS: Vessel[] = [
  {
    id: 'v1',
    name: 'BulkLink Navigator',
    type: 'Pneumatic Self-Discharging',
    capacity: '45,000 DWT',
    buildYear: 2022,
    status: 'In Transit',
    currentPort: 'Singapore',
    nextPort: 'Dubai',
    eta: '2024-05-20',
    specs: {
      length: '190m',
      beam: '32m',
      draught: '11.5m',
      engine: 'Wärtsilä 6G50ME'
    }
  },
  {
    id: 'v2',
    name: 'Maritime Titan',
    type: 'Bulk Cement Carrier',
    capacity: '60,000 DWT',
    buildYear: 2020,
    status: 'At Port',
    currentPort: 'Rotterdam',
    specs: {
      length: '225m',
      beam: '32.2m',
      draught: '12.8m',
      engine: 'MAN B&W 6S60MC'
    }
  },
  {
    id: 'v3',
    name: 'Oceanic Express',
    type: 'Self-Loading Cement Carrier',
    capacity: '25,000 DWT',
    buildYear: 2023,
    status: 'In Transit',
    currentPort: 'Panama Canal',
    nextPort: 'Houston',
    eta: '2024-05-15',
    specs: {
      length: '160m',
      beam: '25m',
      draught: '9.5m',
      engine: 'Rolls-Royce Marine'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Neom City Infrastructure Phase 1',
    client: 'Saudi Construction Authority',
    volume: '2,500,000 Tons',
    outcome: '99.8% On-time Delivery',
    description: 'Managed the complex logistics of delivering high-grade cement from Greek manufacturing plants to the Neom construction site under strict deadlines.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    kpis: [
      { label: 'Volume Delivered', value: '2.5M Tons' },
      { label: 'Time Saved', value: '15%' },
      { label: 'Operational Efficiency', value: '+22%' }
    ]
  },
  {
    id: 'cs2',
    title: 'Pan-African Highway Initiative',
    client: 'Global Infra Partners',
    volume: '1,200,000 Tons',
    outcome: 'Optimized Supply Chain',
    description: 'Coordinated multi-port discharging and inland storage for a major highway project connecting four West African countries.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
    kpis: [
      { label: 'Ports Managed', value: '4' },
      { label: 'Fleet Utilization', value: '94%' },
      { label: 'Cost Reduction', value: '12%' }
    ]
  }
];

export const ROUTES: Route[] = [
  { id: 'r1', name: 'Mediterranean - Persian Gulf', origin: 'Piraeus, Greece', destination: 'Jebel Ali, UAE', transitTime: '14 Days', frequency: 'Weekly' },
  { id: 'r2', name: 'East Asia - SE Asia', origin: 'Shanghai, China', destination: 'Singapore', transitTime: '6 Days', frequency: 'Bi-weekly' },
  { id: 'r3', name: 'Trans-Atlantic', origin: 'Antwerp, Belgium', destination: 'Houston, USA', transitTime: '18 Days', frequency: 'Monthly' }
];
