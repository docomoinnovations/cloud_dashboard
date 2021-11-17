import CloudServiceProvider from "model/CloudServiceProvider";
import EntityColumn from "model/EntityColumn";

interface MenuTemplate {
  cloudServiceProvider: CloudServiceProvider;
  labelName: string;
  entityName: string;
  entityColumn: EntityColumn[];
  detailInfoColumn?: string;
}

export default MenuTemplate;
