import CloudServiceProvider from "model/CloudServiceProvider";
import EntityColumn from "model/EntityColumn";

interface MenuTemplate {
  type: CloudServiceProvider;
  name: string;
  url: string;
  entityTypeId: string;
  column: EntityColumn[];
}

export default MenuTemplate;
