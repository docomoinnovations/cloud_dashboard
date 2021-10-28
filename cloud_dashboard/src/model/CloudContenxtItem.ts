import { LatLngTuple } from "leaflet";

interface CloudContenxtItem {
  icon: L.Icon | undefined,
  cloudServiceProvider: string,
  position: LatLngTuple,
  item: {
    iconUrl: string,
    entityViewUrl: string,
    name: string,
    positionLabel: string,
  }[]
}

export default CloudContenxtItem;
