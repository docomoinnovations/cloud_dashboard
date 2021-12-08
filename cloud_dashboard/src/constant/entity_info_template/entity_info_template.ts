import AWS_ENTITY_INFO_LIST from 'constant/entity_info_template/aws_cloud';
import K8S_ENTITY_INFO_LIST from 'constant/entity_info_template/k8s';

const ENTITY_INFO_LIST = [...AWS_ENTITY_INFO_LIST, ...K8S_ENTITY_INFO_LIST];

export default ENTITY_INFO_LIST;
