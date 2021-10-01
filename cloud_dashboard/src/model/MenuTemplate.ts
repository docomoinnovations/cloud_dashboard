import CloudServiceProvider from "model/CloudServiceProvider";
import EntityColumn from "model/EntityColumn";

interface MenuTemplate {
  cloudServiceProvider: CloudServiceProvider;
  labelName: string;
  entityName: string;
  column: EntityColumn[];
}

export default MenuTemplate;
