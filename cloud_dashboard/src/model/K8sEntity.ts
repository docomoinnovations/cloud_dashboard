/**
 * K8s Entity.
 */
interface K8sEntity {
  attributes: {
    [key: string]: any;
  };
  id: string;
}

export default K8sEntity;
