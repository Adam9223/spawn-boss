export const SERVER_REGIONS = [
  { id: 'ASIA', label: 'ASIA', timeZone: 'Asia/Manila' },
  { id: 'INMENA', label: 'INMENA', timeZone: 'Asia/Dubai' },
  { id: 'NA', label: 'NA', timeZone: 'America/New_York' },
  { id: 'SA', label: 'SA', timeZone: 'America/Sao_Paulo' },
  { id: 'EUROPE', label: 'EUROPE', timeZone: 'Europe/Berlin' },
];

export const DEFAULT_SERVER_REGION = 'ASIA';

export function getServerRegion(regionId) {
  return SERVER_REGIONS.find((region) => region.id === regionId) || SERVER_REGIONS[0];
}
