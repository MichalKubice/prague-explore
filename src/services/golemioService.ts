
export interface DistrictFeature {
  type: 'Feature';
  properties: {
    district_group_id: string;
    id: number;
    name: string;
  };
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: any[];
  };
}

export interface GolemioResponse {
  type: 'FeatureCollection';
  features: DistrictFeature[];
}

const API_ENDPOINT = 'https://api.golemio.cz/v2/citydistricts';
// Token is retrieved from environment variables (Vite prefix VITE_ is required)
const API_TOKEN = import.meta.env.VITE_GOLEMIO_API_TOKEN;

export const golemioService = {
  async fetchDistricts(): Promise<DistrictFeature[]> {
    try {
      const response = await fetch(API_ENDPOINT, {
        headers: {
          'X-Access-Token': API_TOKEN,
          'accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Golemio API error: ${response.status} ${response.statusText}`);
      }

      const data: GolemioResponse = await response.json();
      
      // Filter for all Prague districts
      return data.features.filter(feature => {
        const name = feature.properties.name;
        // Match "Praha X" or "Praha-X"
        return name.startsWith('Praha');
      });
    } catch (error) {
      console.error('Failed to fetch districts from Golemio:', error);
      return [];
    }
  }
};
