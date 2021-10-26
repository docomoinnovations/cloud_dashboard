interface RawCloudContextItem {
  City: string;
  Country: string;
  Items: {
    Image: string;
    Name: string;
    Url: string;
  }[],
  Latitude: string;
  Longitude: string;
  Type: string;
}

export default RawCloudContextItem;
