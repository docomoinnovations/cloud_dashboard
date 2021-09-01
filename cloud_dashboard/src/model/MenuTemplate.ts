import EntityColumn from "./EntityColumn";

interface MenuTemplate {
  type: string;
  name: string;
  url: string;
  entityTypeId: string;
  column: EntityColumn[];
}

export default MenuTemplate;
