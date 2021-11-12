import CloudServiceProvider from "model/CloudServiceProvider";
import EntityColumn from "model/EntityColumn";

interface MenuTemplate {
  cloudServiceProvider: CloudServiceProvider;
  labelName: string;
  entityName: string;
  detailInfoColumn?: string;
  entityColumn: EntityColumn[];
}

export default MenuTemplate;
