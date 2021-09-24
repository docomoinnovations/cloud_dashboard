/**
 * Entity data of JSON:API.
 */
interface EntityData {
  attributes: {
    [key: string]: any;
  };
  id: string;
}

export default EntityData;
