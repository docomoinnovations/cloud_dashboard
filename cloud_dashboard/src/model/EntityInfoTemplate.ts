import EntityInfoRecord from 'model/EntityInfoRecord';

type EntityInfoTemplate = {
  cloudServiceProvider: string,
  entityName: string,
  entityRecords: EntityInfoRecord[]
}

export default EntityInfoTemplate;
