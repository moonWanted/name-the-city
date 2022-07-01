export interface IFeature {
  type: string,
  geometry: {
    type: string,
    coordinates: [number, number],
  },
  properties: {
    radius: number
  }
}