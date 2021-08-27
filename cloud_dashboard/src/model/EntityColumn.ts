import EntityColumnType from "./EntityColumnType";

/**
 * Label name and data attribute's key of entity.
 */
interface EntityColumn {
  labelName: string;
  name: string;
  type: EntityColumnType;
}

export default EntityColumn;
