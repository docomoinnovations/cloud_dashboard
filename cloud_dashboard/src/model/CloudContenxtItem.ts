import { LatLngTuple } from "leaflet";
import CloudContenxtItemlabel from "model/CloudContenxtItemLabel";

interface CloudContenxtItem {
  icon: L.Icon | undefined,
  cloudServiceProvider: string,
  position: LatLngTuple,
  item: CloudContenxtItemlabel[]
}

export default CloudContenxtItem;
