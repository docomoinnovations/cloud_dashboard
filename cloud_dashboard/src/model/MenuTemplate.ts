import CloudServiceProvider from "model/CloudServiceProvider";
import EntityColumn from "model/EntityColumn";

interface MenuTemplate {
  type: CloudServiceProvider;
  name: string;
  entityName: string;
  column: EntityColumn[];
}

export default MenuTemplate;
