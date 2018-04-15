export namespace admissionregistration {
  export namespace v1alpha1 {
    // Initializer describes the name and the failure policy of an initializer, and what resources it applies to.
    export interface Initializer {
      // Name is the identifier of the initializer. It will be added to the object that needs to be initialized. Name should be fully qualified, e.g., alwayspullimages.kubernetes.io, where "alwayspullimages" is the name of the webhook, and kubernetes.io is the name of the organization. Required
      readonly name: string

      // Rules describes what resources/subresources the initializer cares about. The initializer cares about an operation if it matches _any_ Rule. Rule.Resources must not include subresources.
      readonly rules: admissionregistration.v1alpha1.Rule[]

    }

    // InitializerConfiguration describes the configuration of initializers.
    export interface InitializerConfiguration {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Initializers is a list of resources and their default initializers Order-sensitive. When merging multiple InitializerConfigurations, we sort the initializers from different InitializerConfigurations by the name of the InitializerConfigurations; the order of the initializers from the same InitializerConfiguration is preserved.
      readonly initializers: admissionregistration.v1alpha1.Initializer[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

    }

    // InitializerConfigurationList is a list of InitializerConfiguration.
    export interface InitializerConfigurationList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of InitializerConfiguration.
      readonly items: admissionregistration.v1alpha1.InitializerConfiguration[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // Rule is a tuple of APIGroups, APIVersion, and Resources.It is recommended to make sure that all the tuple expansions are valid.
    export interface Rule {
      // APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
      readonly apiGroups: string[]

      // APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
      readonly apiVersions: string[]

      // Resources is a list of resources this rule applies to.
      //
      // For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.
      //
      // If wildcard is present, the validation rule will ensure resources do not overlap with each other.
      //
      // Depending on the enclosing object, subresources might not be allowed. Required.
      readonly resources: string[]

    }

  }

  export namespace v1beta1 {
    // MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
    export interface MutatingWebhookConfiguration {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Webhooks is a list of webhooks and the affected resources and operations.
      readonly webhooks: admissionregistration.v1beta1.Webhook[]

    }

    // MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
    export interface MutatingWebhookConfigurationList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of MutatingWebhookConfiguration.
      readonly items: admissionregistration.v1beta1.MutatingWebhookConfiguration[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
    export interface RuleWithOperations {
      // APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
      readonly apiGroups: string[]

      // APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
      readonly apiVersions: string[]

      // Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If '*' is present, the length of the slice must be one. Required.
      readonly operations: string[]

      // Resources is a list of resources this rule applies to.
      //
      // For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.
      //
      // If wildcard is present, the validation rule will ensure resources do not overlap with each other.
      //
      // Depending on the enclosing object, subresources might not be allowed. Required.
      readonly resources: string[]

    }

    // ServiceReference holds a reference to Service.legacy.k8s.io
    export interface ServiceReference {
      // `name` is the name of the service. Required
      readonly name: string

      // `namespace` is the namespace of the service. Required
      readonly namespace: string

      // `path` is an optional URL path which will be sent in any request to this service.
      readonly path: string

    }

    // ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
    export interface ValidatingWebhookConfiguration {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Webhooks is a list of webhooks and the affected resources and operations.
      readonly webhooks: admissionregistration.v1beta1.Webhook[]

    }

    // ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
    export interface ValidatingWebhookConfigurationList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of ValidatingWebhookConfiguration.
      readonly items: admissionregistration.v1beta1.ValidatingWebhookConfiguration[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // Webhook describes an admission webhook and the resources and operations it applies to.
    export interface Webhook {
      // ClientConfig defines how to communicate with the hook. Required
      readonly clientConfig: admissionregistration.v1beta1.WebhookClientConfig

      // FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore.
      readonly failurePolicy: string

      // The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
      readonly name: string

      // NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.
      //
      // For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
      //   "matchExpressions": [
      //     {
      //       "key": "runlevel",
      //       "operator": "NotIn",
      //       "values": [
      //         "0",
      //         "1"
      //       ]
      //     }
      //   ]
      // }
      //
      // If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
      //   "matchExpressions": [
      //     {
      //       "key": "environment",
      //       "operator": "In",
      //       "values": [
      //         "prod",
      //         "staging"
      //       ]
      //     }
      //   ]
      // }
      //
      // See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.
      //
      // Default to the empty LabelSelector, which matches everything.
      readonly namespaceSelector: meta.v1.LabelSelector

      // Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule.
      readonly rules: admissionregistration.v1beta1.RuleWithOperations[]

    }

    // WebhookClientConfig contains the information to make a TLS connection with the webhook
    export interface WebhookClientConfig {
      // `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. Required.
      readonly caBundle: string

      // `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.
      //
      // If the webhook is running within the cluster, then you should use `service`.
      //
      // If there is only one port open for the service, that port will be used. If there are multiple ports open, port 443 will be used if it is open, otherwise it is an error.
      readonly service: admissionregistration.v1beta1.ServiceReference

      // `url` gives the location of the webhook, in standard URL form (`[scheme://]host:port/path`). Exactly one of `url` or `service` must be specified.
      //
      // The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
      //
      // Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
      //
      // The scheme must be "https"; the URL must begin with "https://".
      //
      // A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
      //
      // Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
      readonly url: string

    }

  }


}
export namespace apps {
  export namespace v1 {
    // ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
    export interface ControllerRevision {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Data is the serialized representation of the state.
      readonly data: pkg.runtime.RawExtension

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Revision indicates the revision of the state represented by Data.
      readonly revision: number

    }

    // ControllerRevisionList is a resource containing a list of ControllerRevision objects.
    export interface ControllerRevisionList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of ControllerRevisions
      readonly items: apps.v1.ControllerRevision[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DaemonSet represents the configuration of a daemon set.
    export interface DaemonSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: apps.v1.DaemonSetSpec

      // The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: apps.v1.DaemonSetStatus

    }

    // DaemonSetCondition describes the state of a DaemonSet at a certain point.
    export interface DaemonSetCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of DaemonSet condition.
      readonly type: string

    }

    // DaemonSetList is a collection of daemon sets.
    export interface DaemonSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // A list of daemon sets.
      readonly items: apps.v1.DaemonSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DaemonSetSpec is the specification of a daemon set.
    export interface DaemonSetSpec {
      // The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
      readonly minReadySeconds: number

      // The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
      readonly revisionHistoryLimit: number

      // A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

      // An update strategy to replace existing DaemonSet pods with new pods.
      readonly updateStrategy: apps.v1.DaemonSetUpdateStrategy

    }

    // DaemonSetStatus represents the current status of a daemon set.
    export interface DaemonSetStatus {
      // Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
      readonly collisionCount: number

      // Represents the latest available observations of a DaemonSet's current state.
      readonly conditions: apps.v1.DaemonSetCondition[]

      // The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly currentNumberScheduled: number

      // The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly desiredNumberScheduled: number

      // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
      readonly numberAvailable: number

      // The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly numberMisscheduled: number

      // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
      readonly numberReady: number

      // The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
      readonly numberUnavailable: number

      // The most recent generation observed by the daemon set controller.
      readonly observedGeneration: number

      // The total number of nodes that are running updated daemon pod
      readonly updatedNumberScheduled: number

    }

    // DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
    export interface DaemonSetUpdateStrategy {
      // Rolling update config params. Present only if type = "RollingUpdate".
      readonly rollingUpdate: apps.v1.RollingUpdateDaemonSet

      // Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
      readonly type: string

    }

    // Deployment enables declarative updates for Pods and ReplicaSets.
    export interface Deployment {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the Deployment.
      readonly spec: apps.v1.DeploymentSpec

      // Most recently observed status of the Deployment.
      readonly status: apps.v1.DeploymentStatus

    }

    // DeploymentCondition describes the state of a deployment at a certain point.
    export interface DeploymentCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // The last time this condition was updated.
      readonly lastUpdateTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of deployment condition.
      readonly type: string

    }

    // DeploymentList is a list of Deployments.
    export interface DeploymentList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of Deployments.
      readonly items: apps.v1.Deployment[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // DeploymentSpec is the specification of the desired behavior of the Deployment.
    export interface DeploymentSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Indicates that the deployment is paused.
      readonly paused: boolean

      // The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
      readonly progressDeadlineSeconds: number

      // Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
      readonly replicas: number

      // The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
      readonly revisionHistoryLimit: number

      // Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
      readonly selector: meta.v1.LabelSelector

      // The deployment strategy to use to replace existing pods with new ones.
      readonly strategy: apps.v1.DeploymentStrategy

      // Template describes the pods that will be created.
      readonly template: core.v1.PodTemplateSpec

    }

    // DeploymentStatus is the most recently observed status of the Deployment.
    export interface DeploymentStatus {
      // Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
      readonly availableReplicas: number

      // Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
      readonly collisionCount: number

      // Represents the latest available observations of a deployment's current state.
      readonly conditions: apps.v1.DeploymentCondition[]

      // The generation observed by the deployment controller.
      readonly observedGeneration: number

      // Total number of ready pods targeted by this deployment.
      readonly readyReplicas: number

      // Total number of non-terminated pods targeted by this deployment (their labels match the selector).
      readonly replicas: number

      // Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
      readonly unavailableReplicas: number

      // Total number of non-terminated pods targeted by this deployment that have the desired template spec.
      readonly updatedReplicas: number

    }

    // DeploymentStrategy describes how to replace existing pods with new ones.
    export interface DeploymentStrategy {
      // Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
      readonly rollingUpdate: apps.v1.RollingUpdateDeployment

      // Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
      readonly type: string

    }

    // ReplicaSet ensures that a specified number of pod replicas are running at any given time.
    export interface ReplicaSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: apps.v1.ReplicaSetSpec

      // Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: apps.v1.ReplicaSetStatus

    }

    // ReplicaSetCondition describes the state of a replica set at a certain point.
    export interface ReplicaSetCondition {
      // The last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of replica set condition.
      readonly type: string

    }

    // ReplicaSetList is a collection of ReplicaSets.
    export interface ReplicaSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
      readonly items: apps.v1.ReplicaSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ReplicaSetSpec is the specification of a ReplicaSet.
    export interface ReplicaSetSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
      readonly replicas: number

      // Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

    }

    // ReplicaSetStatus represents the current status of a ReplicaSet.
    export interface ReplicaSetStatus {
      // The number of available replicas (ready for at least minReadySeconds) for this replica set.
      readonly availableReplicas: number

      // Represents the latest available observations of a replica set's current state.
      readonly conditions: apps.v1.ReplicaSetCondition[]

      // The number of pods that have labels matching the labels of the pod template of the replicaset.
      readonly fullyLabeledReplicas: number

      // ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
      readonly observedGeneration: number

      // The number of ready replicas for this replica set.
      readonly readyReplicas: number

      // Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
      readonly replicas: number

    }

    // Spec to control the desired behavior of daemon set rolling update.
    export interface RollingUpdateDaemonSet {
      // The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
      readonly maxUnavailable: number | string

    }

    // Spec to control the desired behavior of rolling update.
    export interface RollingUpdateDeployment {
      // The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
      readonly maxSurge: number | string

      // The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
      readonly maxUnavailable: number | string

    }

    // RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
    export interface RollingUpdateStatefulSetStrategy {
      // Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
      readonly partition: number

    }

    // StatefulSet represents a set of pods with consistent identities. Identities are defined as:
    //  - Network: A single stable DNS and hostname.
    //  - Storage: As many VolumeClaims as requested.
    // The StatefulSet guarantees that a given network identity will always map to the same storage identity.
    export interface StatefulSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the desired identities of pods in this set.
      readonly spec: apps.v1.StatefulSetSpec

      // Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
      readonly status: apps.v1.StatefulSetStatus

    }

    // StatefulSetCondition describes the state of a statefulset at a certain point.
    export interface StatefulSetCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of statefulset condition.
      readonly type: string

    }

    // StatefulSetList is a collection of StatefulSets.
    export interface StatefulSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly items: apps.v1.StatefulSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // A StatefulSetSpec is the specification of a StatefulSet.
    export interface StatefulSetSpec {
      // podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
      readonly podManagementPolicy: string

      // replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
      readonly replicas: number

      // revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
      readonly revisionHistoryLimit: number

      // selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
      readonly serviceName: string

      // template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
      readonly template: core.v1.PodTemplateSpec

      // updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
      readonly updateStrategy: apps.v1.StatefulSetUpdateStrategy

      // volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
      readonly volumeClaimTemplates: core.v1.PersistentVolumeClaim[]

    }

    // StatefulSetStatus represents the current state of a StatefulSet.
    export interface StatefulSetStatus {
      // collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
      readonly collisionCount: number

      // Represents the latest available observations of a statefulset's current state.
      readonly conditions: apps.v1.StatefulSetCondition[]

      // currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
      readonly currentReplicas: number

      // currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
      readonly currentRevision: string

      // observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
      readonly observedGeneration: number

      // readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
      readonly readyReplicas: number

      // replicas is the number of Pods created by the StatefulSet controller.
      readonly replicas: number

      // updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
      readonly updateRevision: string

      // updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
      readonly updatedReplicas: number

    }

    // StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
    export interface StatefulSetUpdateStrategy {
      // RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
      readonly rollingUpdate: apps.v1.RollingUpdateStatefulSetStrategy

      // Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
      readonly type: string

    }

  }

  export namespace v1beta1 {
    // DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
    export interface ControllerRevision {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Data is the serialized representation of the state.
      readonly data: pkg.runtime.RawExtension

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Revision indicates the revision of the state represented by Data.
      readonly revision: number

    }

    // ControllerRevisionList is a resource containing a list of ControllerRevision objects.
    export interface ControllerRevisionList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of ControllerRevisions
      readonly items: apps.v1beta1.ControllerRevision[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
    export interface Deployment {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the Deployment.
      readonly spec: apps.v1beta1.DeploymentSpec

      // Most recently observed status of the Deployment.
      readonly status: apps.v1beta1.DeploymentStatus

    }

    // DeploymentCondition describes the state of a deployment at a certain point.
    export interface DeploymentCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // The last time this condition was updated.
      readonly lastUpdateTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of deployment condition.
      readonly type: string

    }

    // DeploymentList is a list of Deployments.
    export interface DeploymentList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of Deployments.
      readonly items: apps.v1beta1.Deployment[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
    export interface DeploymentRollback {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Required: This must match the Name of a deployment.
      readonly name: string

      // The config of this deployment rollback.
      readonly rollbackTo: apps.v1beta1.RollbackConfig

      // The annotations to be updated to a deployment
      readonly updatedAnnotations: object

    }

    // DeploymentSpec is the specification of the desired behavior of the Deployment.
    export interface DeploymentSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Indicates that the deployment is paused.
      readonly paused: boolean

      // The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
      readonly progressDeadlineSeconds: number

      // Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
      readonly replicas: number

      // The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 2.
      readonly revisionHistoryLimit: number

      // DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done.
      readonly rollbackTo: apps.v1beta1.RollbackConfig

      // Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
      readonly selector: meta.v1.LabelSelector

      // The deployment strategy to use to replace existing pods with new ones.
      readonly strategy: apps.v1beta1.DeploymentStrategy

      // Template describes the pods that will be created.
      readonly template: core.v1.PodTemplateSpec

    }

    // DeploymentStatus is the most recently observed status of the Deployment.
    export interface DeploymentStatus {
      // Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
      readonly availableReplicas: number

      // Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
      readonly collisionCount: number

      // Represents the latest available observations of a deployment's current state.
      readonly conditions: apps.v1beta1.DeploymentCondition[]

      // The generation observed by the deployment controller.
      readonly observedGeneration: number

      // Total number of ready pods targeted by this deployment.
      readonly readyReplicas: number

      // Total number of non-terminated pods targeted by this deployment (their labels match the selector).
      readonly replicas: number

      // Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
      readonly unavailableReplicas: number

      // Total number of non-terminated pods targeted by this deployment that have the desired template spec.
      readonly updatedReplicas: number

    }

    // DeploymentStrategy describes how to replace existing pods with new ones.
    export interface DeploymentStrategy {
      // Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
      readonly rollingUpdate: apps.v1beta1.RollingUpdateDeployment

      // Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
      readonly type: string

    }

    // DEPRECATED.
    export interface RollbackConfig {
      // The revision to rollback to. If set to 0, rollback to the last revision.
      readonly revision: number

    }

    // Spec to control the desired behavior of rolling update.
    export interface RollingUpdateDeployment {
      // The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
      readonly maxSurge: number | string

      // The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
      readonly maxUnavailable: number | string

    }

    // RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
    export interface RollingUpdateStatefulSetStrategy {
      // Partition indicates the ordinal at which the StatefulSet should be partitioned.
      readonly partition: number

    }

    // Scale represents a scaling request for a resource.
    export interface Scale {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

      // defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
      readonly spec: apps.v1beta1.ScaleSpec

      // current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
      readonly status: apps.v1beta1.ScaleStatus

    }

    // ScaleSpec describes the attributes of a scale subresource
    export interface ScaleSpec {
      // desired number of instances for the scaled object.
      readonly replicas: number

    }

    // ScaleStatus represents the current status of a scale subresource.
    export interface ScaleStatus {
      // actual number of observed instances of the scaled object.
      readonly replicas: number

      // label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
      readonly selector: object

      // label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly targetSelector: string

    }

    // DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
    //  - Network: A single stable DNS and hostname.
    //  - Storage: As many VolumeClaims as requested.
    // The StatefulSet guarantees that a given network identity will always map to the same storage identity.
    export interface StatefulSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the desired identities of pods in this set.
      readonly spec: apps.v1beta1.StatefulSetSpec

      // Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
      readonly status: apps.v1beta1.StatefulSetStatus

    }

    // StatefulSetCondition describes the state of a statefulset at a certain point.
    export interface StatefulSetCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of statefulset condition.
      readonly type: string

    }

    // StatefulSetList is a collection of StatefulSets.
    export interface StatefulSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly items: apps.v1beta1.StatefulSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // A StatefulSetSpec is the specification of a StatefulSet.
    export interface StatefulSetSpec {
      // podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
      readonly podManagementPolicy: string

      // replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
      readonly replicas: number

      // revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
      readonly revisionHistoryLimit: number

      // selector is a label query over pods that should match the replica count. If empty, defaulted to labels on the pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
      readonly serviceName: string

      // template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
      readonly template: core.v1.PodTemplateSpec

      // updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
      readonly updateStrategy: apps.v1beta1.StatefulSetUpdateStrategy

      // volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
      readonly volumeClaimTemplates: core.v1.PersistentVolumeClaim[]

    }

    // StatefulSetStatus represents the current state of a StatefulSet.
    export interface StatefulSetStatus {
      // collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
      readonly collisionCount: number

      // Represents the latest available observations of a statefulset's current state.
      readonly conditions: apps.v1beta1.StatefulSetCondition[]

      // currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
      readonly currentReplicas: number

      // currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
      readonly currentRevision: string

      // observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
      readonly observedGeneration: number

      // readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
      readonly readyReplicas: number

      // replicas is the number of Pods created by the StatefulSet controller.
      readonly replicas: number

      // updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
      readonly updateRevision: string

      // updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
      readonly updatedReplicas: number

    }

    // StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
    export interface StatefulSetUpdateStrategy {
      // RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
      readonly rollingUpdate: apps.v1beta1.RollingUpdateStatefulSetStrategy

      // Type indicates the type of the StatefulSetUpdateStrategy.
      readonly type: string

    }

  }

  export namespace v1beta2 {
    // DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
    export interface ControllerRevision {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Data is the serialized representation of the state.
      readonly data: pkg.runtime.RawExtension

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Revision indicates the revision of the state represented by Data.
      readonly revision: number

    }

    // ControllerRevisionList is a resource containing a list of ControllerRevision objects.
    export interface ControllerRevisionList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of ControllerRevisions
      readonly items: apps.v1beta2.ControllerRevision[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
    export interface DaemonSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: apps.v1beta2.DaemonSetSpec

      // The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: apps.v1beta2.DaemonSetStatus

    }

    // DaemonSetCondition describes the state of a DaemonSet at a certain point.
    export interface DaemonSetCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of DaemonSet condition.
      readonly type: string

    }

    // DaemonSetList is a collection of daemon sets.
    export interface DaemonSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // A list of daemon sets.
      readonly items: apps.v1beta2.DaemonSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DaemonSetSpec is the specification of a daemon set.
    export interface DaemonSetSpec {
      // The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
      readonly minReadySeconds: number

      // The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
      readonly revisionHistoryLimit: number

      // A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

      // An update strategy to replace existing DaemonSet pods with new pods.
      readonly updateStrategy: apps.v1beta2.DaemonSetUpdateStrategy

    }

    // DaemonSetStatus represents the current status of a daemon set.
    export interface DaemonSetStatus {
      // Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
      readonly collisionCount: number

      // Represents the latest available observations of a DaemonSet's current state.
      readonly conditions: apps.v1beta2.DaemonSetCondition[]

      // The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly currentNumberScheduled: number

      // The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly desiredNumberScheduled: number

      // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
      readonly numberAvailable: number

      // The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly numberMisscheduled: number

      // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
      readonly numberReady: number

      // The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
      readonly numberUnavailable: number

      // The most recent generation observed by the daemon set controller.
      readonly observedGeneration: number

      // The total number of nodes that are running updated daemon pod
      readonly updatedNumberScheduled: number

    }

    // DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
    export interface DaemonSetUpdateStrategy {
      // Rolling update config params. Present only if type = "RollingUpdate".
      readonly rollingUpdate: apps.v1beta2.RollingUpdateDaemonSet

      // Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
      readonly type: string

    }

    // DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
    export interface Deployment {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the Deployment.
      readonly spec: apps.v1beta2.DeploymentSpec

      // Most recently observed status of the Deployment.
      readonly status: apps.v1beta2.DeploymentStatus

    }

    // DeploymentCondition describes the state of a deployment at a certain point.
    export interface DeploymentCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // The last time this condition was updated.
      readonly lastUpdateTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of deployment condition.
      readonly type: string

    }

    // DeploymentList is a list of Deployments.
    export interface DeploymentList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of Deployments.
      readonly items: apps.v1beta2.Deployment[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // DeploymentSpec is the specification of the desired behavior of the Deployment.
    export interface DeploymentSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Indicates that the deployment is paused.
      readonly paused: boolean

      // The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
      readonly progressDeadlineSeconds: number

      // Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
      readonly replicas: number

      // The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
      readonly revisionHistoryLimit: number

      // Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
      readonly selector: meta.v1.LabelSelector

      // The deployment strategy to use to replace existing pods with new ones.
      readonly strategy: apps.v1beta2.DeploymentStrategy

      // Template describes the pods that will be created.
      readonly template: core.v1.PodTemplateSpec

    }

    // DeploymentStatus is the most recently observed status of the Deployment.
    export interface DeploymentStatus {
      // Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
      readonly availableReplicas: number

      // Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
      readonly collisionCount: number

      // Represents the latest available observations of a deployment's current state.
      readonly conditions: apps.v1beta2.DeploymentCondition[]

      // The generation observed by the deployment controller.
      readonly observedGeneration: number

      // Total number of ready pods targeted by this deployment.
      readonly readyReplicas: number

      // Total number of non-terminated pods targeted by this deployment (their labels match the selector).
      readonly replicas: number

      // Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
      readonly unavailableReplicas: number

      // Total number of non-terminated pods targeted by this deployment that have the desired template spec.
      readonly updatedReplicas: number

    }

    // DeploymentStrategy describes how to replace existing pods with new ones.
    export interface DeploymentStrategy {
      // Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
      readonly rollingUpdate: apps.v1beta2.RollingUpdateDeployment

      // Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
      readonly type: string

    }

    // DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
    export interface ReplicaSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: apps.v1beta2.ReplicaSetSpec

      // Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: apps.v1beta2.ReplicaSetStatus

    }

    // ReplicaSetCondition describes the state of a replica set at a certain point.
    export interface ReplicaSetCondition {
      // The last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of replica set condition.
      readonly type: string

    }

    // ReplicaSetList is a collection of ReplicaSets.
    export interface ReplicaSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
      readonly items: apps.v1beta2.ReplicaSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ReplicaSetSpec is the specification of a ReplicaSet.
    export interface ReplicaSetSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
      readonly replicas: number

      // Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

    }

    // ReplicaSetStatus represents the current status of a ReplicaSet.
    export interface ReplicaSetStatus {
      // The number of available replicas (ready for at least minReadySeconds) for this replica set.
      readonly availableReplicas: number

      // Represents the latest available observations of a replica set's current state.
      readonly conditions: apps.v1beta2.ReplicaSetCondition[]

      // The number of pods that have labels matching the labels of the pod template of the replicaset.
      readonly fullyLabeledReplicas: number

      // ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
      readonly observedGeneration: number

      // The number of ready replicas for this replica set.
      readonly readyReplicas: number

      // Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
      readonly replicas: number

    }

    // Spec to control the desired behavior of daemon set rolling update.
    export interface RollingUpdateDaemonSet {
      // The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
      readonly maxUnavailable: number | string

    }

    // Spec to control the desired behavior of rolling update.
    export interface RollingUpdateDeployment {
      // The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
      readonly maxSurge: number | string

      // The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
      readonly maxUnavailable: number | string

    }

    // RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
    export interface RollingUpdateStatefulSetStrategy {
      // Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
      readonly partition: number

    }

    // Scale represents a scaling request for a resource.
    export interface Scale {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

      // defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
      readonly spec: apps.v1beta2.ScaleSpec

      // current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
      readonly status: apps.v1beta2.ScaleStatus

    }

    // ScaleSpec describes the attributes of a scale subresource
    export interface ScaleSpec {
      // desired number of instances for the scaled object.
      readonly replicas: number

    }

    // ScaleStatus represents the current status of a scale subresource.
    export interface ScaleStatus {
      // actual number of observed instances of the scaled object.
      readonly replicas: number

      // label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
      readonly selector: object

      // label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly targetSelector: string

    }

    // DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
    //  - Network: A single stable DNS and hostname.
    //  - Storage: As many VolumeClaims as requested.
    // The StatefulSet guarantees that a given network identity will always map to the same storage identity.
    export interface StatefulSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the desired identities of pods in this set.
      readonly spec: apps.v1beta2.StatefulSetSpec

      // Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
      readonly status: apps.v1beta2.StatefulSetStatus

    }

    // StatefulSetCondition describes the state of a statefulset at a certain point.
    export interface StatefulSetCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of statefulset condition.
      readonly type: string

    }

    // StatefulSetList is a collection of StatefulSets.
    export interface StatefulSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly items: apps.v1beta2.StatefulSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // A StatefulSetSpec is the specification of a StatefulSet.
    export interface StatefulSetSpec {
      // podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
      readonly podManagementPolicy: string

      // replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
      readonly replicas: number

      // revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
      readonly revisionHistoryLimit: number

      // selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
      readonly serviceName: string

      // template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
      readonly template: core.v1.PodTemplateSpec

      // updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
      readonly updateStrategy: apps.v1beta2.StatefulSetUpdateStrategy

      // volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
      readonly volumeClaimTemplates: core.v1.PersistentVolumeClaim[]

    }

    // StatefulSetStatus represents the current state of a StatefulSet.
    export interface StatefulSetStatus {
      // collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
      readonly collisionCount: number

      // Represents the latest available observations of a statefulset's current state.
      readonly conditions: apps.v1beta2.StatefulSetCondition[]

      // currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
      readonly currentReplicas: number

      // currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
      readonly currentRevision: string

      // observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
      readonly observedGeneration: number

      // readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
      readonly readyReplicas: number

      // replicas is the number of Pods created by the StatefulSet controller.
      readonly replicas: number

      // updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
      readonly updateRevision: string

      // updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
      readonly updatedReplicas: number

    }

    // StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
    export interface StatefulSetUpdateStrategy {
      // RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
      readonly rollingUpdate: apps.v1beta2.RollingUpdateStatefulSetStrategy

      // Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
      readonly type: string

    }

  }


}
export namespace authentication {
  export namespace v1 {
    // TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
    export interface TokenReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated
      readonly spec: authentication.v1.TokenReviewSpec

      // Status is filled in by the server and indicates whether the request can be authenticated.
      readonly status: authentication.v1.TokenReviewStatus

    }

    // TokenReviewSpec is a description of the token authentication request.
    export interface TokenReviewSpec {
      // Token is the opaque bearer token.
      readonly token: string

    }

    // TokenReviewStatus is the result of the token authentication request.
    export interface TokenReviewStatus {
      // Authenticated indicates that the token was associated with a known user.
      readonly authenticated: boolean

      // Error indicates that the token couldn't be checked
      readonly error: string

      // User is the UserInfo associated with the provided token.
      readonly user: authentication.v1.UserInfo

    }

    // UserInfo holds the information about the user needed to implement the user.Info interface.
    export interface UserInfo {
      // Any additional information provided by the authenticator.
      readonly extra: object

      // The names of groups this user is a part of.
      readonly groups: string[]

      // A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
      readonly uid: string

      // The name that uniquely identifies this user among all active users.
      readonly username: string

    }

  }

  export namespace v1beta1 {
    // TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
    export interface TokenReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated
      readonly spec: authentication.v1beta1.TokenReviewSpec

      // Status is filled in by the server and indicates whether the request can be authenticated.
      readonly status: authentication.v1beta1.TokenReviewStatus

    }

    // TokenReviewSpec is a description of the token authentication request.
    export interface TokenReviewSpec {
      // Token is the opaque bearer token.
      readonly token: string

    }

    // TokenReviewStatus is the result of the token authentication request.
    export interface TokenReviewStatus {
      // Authenticated indicates that the token was associated with a known user.
      readonly authenticated: boolean

      // Error indicates that the token couldn't be checked
      readonly error: string

      // User is the UserInfo associated with the provided token.
      readonly user: authentication.v1beta1.UserInfo

    }

    // UserInfo holds the information about the user needed to implement the user.Info interface.
    export interface UserInfo {
      // Any additional information provided by the authenticator.
      readonly extra: object

      // The names of groups this user is a part of.
      readonly groups: string[]

      // A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
      readonly uid: string

      // The name that uniquely identifies this user among all active users.
      readonly username: string

    }

  }


}
export namespace authorization {
  export namespace v1 {
    // LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
    export interface LocalSubjectAccessReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
      readonly spec: authorization.v1.SubjectAccessReviewSpec

      // Status is filled in by the server and indicates whether the request is allowed or not
      readonly status: authorization.v1.SubjectAccessReviewStatus

    }

    // NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
    export interface NonResourceAttributes {
      // Path is the URL path of the request
      readonly path: string

      // Verb is the standard HTTP verb
      readonly verb: string

    }

    // NonResourceRule holds information that describes a rule for the non-resource
    export interface NonResourceRule {
      // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
      readonly nonResourceURLs: string[]

      // Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
      readonly verbs: string[]

    }

    // ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
    export interface ResourceAttributes {
      // Group is the API Group of the Resource.  "*" means all.
      readonly group: string

      // Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
      readonly name: string

      // Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
      readonly namespace: string

      // Resource is one of the existing resource types.  "*" means all.
      readonly resource: string

      // Subresource is one of the existing resource types.  "" means none.
      readonly subresource: string

      // Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
      readonly verb: string

      // Version is the API Version of the Resource.  "*" means all.
      readonly version: string

    }

    // ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
    export interface ResourceRule {
      // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.
      readonly apiGroups: string[]

      // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.
      readonly resourceNames: string[]

      // Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
      //  "*/foo" represents the subresource 'foo' for all resources in the specified apiGroups.
      readonly resources: string[]

      // Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.
      readonly verbs: string[]

    }

    // SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
    export interface SelfSubjectAccessReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated.  user and groups must be empty
      readonly spec: authorization.v1.SelfSubjectAccessReviewSpec

      // Status is filled in by the server and indicates whether the request is allowed or not
      readonly status: authorization.v1.SubjectAccessReviewStatus

    }

    // SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
    export interface SelfSubjectAccessReviewSpec {
      // NonResourceAttributes describes information for a non-resource access request
      readonly nonResourceAttributes: authorization.v1.NonResourceAttributes

      // ResourceAuthorizationAttributes describes information for a resource access request
      readonly resourceAttributes: authorization.v1.ResourceAttributes

    }

    // SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
    export interface SelfSubjectRulesReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated.
      readonly spec: authorization.v1.SelfSubjectRulesReviewSpec

      // Status is filled in by the server and indicates the set of actions a user can perform.
      readonly status: authorization.v1.SubjectRulesReviewStatus

    }


    export interface SelfSubjectRulesReviewSpec {
      // Namespace to evaluate rules for. Required.
      readonly namespace: string

    }

    // SubjectAccessReview checks whether or not a user or group can perform an action.
    export interface SubjectAccessReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated
      readonly spec: authorization.v1.SubjectAccessReviewSpec

      // Status is filled in by the server and indicates whether the request is allowed or not
      readonly status: authorization.v1.SubjectAccessReviewStatus

    }

    // SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
    export interface SubjectAccessReviewSpec {
      // Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
      readonly extra: object

      // Groups is the groups you're testing for.
      readonly groups: string[]

      // NonResourceAttributes describes information for a non-resource access request
      readonly nonResourceAttributes: authorization.v1.NonResourceAttributes

      // ResourceAuthorizationAttributes describes information for a resource access request
      readonly resourceAttributes: authorization.v1.ResourceAttributes

      // UID information about the requesting user.
      readonly uid: string

      // User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
      readonly user: string

    }

    // SubjectAccessReviewStatus
    export interface SubjectAccessReviewStatus {
      // Allowed is required. True if the action would be allowed, false otherwise.
      readonly allowed: boolean

      // Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
      readonly denied: boolean

      // EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
      readonly evaluationError: string

      // Reason is optional.  It indicates why a request was allowed or denied.
      readonly reason: string

    }

    // SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
    export interface SubjectRulesReviewStatus {
      // EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
      readonly evaluationError: string

      // Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
      readonly incomplete: boolean

      // NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
      readonly nonResourceRules: authorization.v1.NonResourceRule[]

      // ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
      readonly resourceRules: authorization.v1.ResourceRule[]

    }

  }

  export namespace v1beta1 {
    // LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
    export interface LocalSubjectAccessReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
      readonly spec: authorization.v1beta1.SubjectAccessReviewSpec

      // Status is filled in by the server and indicates whether the request is allowed or not
      readonly status: authorization.v1beta1.SubjectAccessReviewStatus

    }

    // NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
    export interface NonResourceAttributes {
      // Path is the URL path of the request
      readonly path: string

      // Verb is the standard HTTP verb
      readonly verb: string

    }

    // NonResourceRule holds information that describes a rule for the non-resource
    export interface NonResourceRule {
      // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
      readonly nonResourceURLs: string[]

      // Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
      readonly verbs: string[]

    }

    // ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
    export interface ResourceAttributes {
      // Group is the API Group of the Resource.  "*" means all.
      readonly group: string

      // Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
      readonly name: string

      // Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
      readonly namespace: string

      // Resource is one of the existing resource types.  "*" means all.
      readonly resource: string

      // Subresource is one of the existing resource types.  "" means none.
      readonly subresource: string

      // Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
      readonly verb: string

      // Version is the API Version of the Resource.  "*" means all.
      readonly version: string

    }

    // ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
    export interface ResourceRule {
      // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.
      readonly apiGroups: string[]

      // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.
      readonly resourceNames: string[]

      // Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
      //  "*/foo" represents the subresource 'foo' for all resources in the specified apiGroups.
      readonly resources: string[]

      // Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.
      readonly verbs: string[]

    }

    // SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
    export interface SelfSubjectAccessReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated.  user and groups must be empty
      readonly spec: authorization.v1beta1.SelfSubjectAccessReviewSpec

      // Status is filled in by the server and indicates whether the request is allowed or not
      readonly status: authorization.v1beta1.SubjectAccessReviewStatus

    }

    // SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
    export interface SelfSubjectAccessReviewSpec {
      // NonResourceAttributes describes information for a non-resource access request
      readonly nonResourceAttributes: authorization.v1beta1.NonResourceAttributes

      // ResourceAuthorizationAttributes describes information for a resource access request
      readonly resourceAttributes: authorization.v1beta1.ResourceAttributes

    }

    // SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
    export interface SelfSubjectRulesReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated.
      readonly spec: authorization.v1beta1.SelfSubjectRulesReviewSpec

      // Status is filled in by the server and indicates the set of actions a user can perform.
      readonly status: authorization.v1beta1.SubjectRulesReviewStatus

    }


    export interface SelfSubjectRulesReviewSpec {
      // Namespace to evaluate rules for. Required.
      readonly namespace: string

    }

    // SubjectAccessReview checks whether or not a user or group can perform an action.
    export interface SubjectAccessReview {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec holds information about the request being evaluated
      readonly spec: authorization.v1beta1.SubjectAccessReviewSpec

      // Status is filled in by the server and indicates whether the request is allowed or not
      readonly status: authorization.v1beta1.SubjectAccessReviewStatus

    }

    // SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
    export interface SubjectAccessReviewSpec {
      // Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
      readonly extra: object

      // Groups is the groups you're testing for.
      readonly group: string[]

      // NonResourceAttributes describes information for a non-resource access request
      readonly nonResourceAttributes: authorization.v1beta1.NonResourceAttributes

      // ResourceAuthorizationAttributes describes information for a resource access request
      readonly resourceAttributes: authorization.v1beta1.ResourceAttributes

      // UID information about the requesting user.
      readonly uid: string

      // User is the user you're testing for. If you specify "User" but not "Group", then is it interpreted as "What if User were not a member of any groups
      readonly user: string

    }

    // SubjectAccessReviewStatus
    export interface SubjectAccessReviewStatus {
      // Allowed is required. True if the action would be allowed, false otherwise.
      readonly allowed: boolean

      // Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
      readonly denied: boolean

      // EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
      readonly evaluationError: string

      // Reason is optional.  It indicates why a request was allowed or denied.
      readonly reason: string

    }

    // SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
    export interface SubjectRulesReviewStatus {
      // EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
      readonly evaluationError: string

      // Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
      readonly incomplete: boolean

      // NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
      readonly nonResourceRules: authorization.v1beta1.NonResourceRule[]

      // ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
      readonly resourceRules: authorization.v1beta1.ResourceRule[]

    }

  }


}
export namespace autoscaling {
  export namespace v1 {
    // CrossVersionObjectReference contains enough information to let you identify the referred resource.
    export interface CrossVersionObjectReference {
      // API version of the referent
      readonly apiVersion: string

      // Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds"
      readonly kind: string

      // Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
      readonly name: string

    }

    // configuration of a horizontal pod autoscaler.
    export interface HorizontalPodAutoscaler {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
      readonly spec: autoscaling.v1.HorizontalPodAutoscalerSpec

      // current information about the autoscaler.
      readonly status: autoscaling.v1.HorizontalPodAutoscalerStatus

    }

    // list of horizontal pod autoscaler objects.
    export interface HorizontalPodAutoscalerList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // list of horizontal pod autoscaler objects.
      readonly items: autoscaling.v1.HorizontalPodAutoscaler[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // specification of a horizontal pod autoscaler.
    export interface HorizontalPodAutoscalerSpec {
      // upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
      readonly maxReplicas: number

      // lower limit for the number of pods that can be set by the autoscaler, default 1.
      readonly minReplicas: number

      // reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
      readonly scaleTargetRef: autoscaling.v1.CrossVersionObjectReference

      // target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
      readonly targetCPUUtilizationPercentage: number

    }

    // current status of a horizontal pod autoscaler
    export interface HorizontalPodAutoscalerStatus {
      // current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
      readonly currentCPUUtilizationPercentage: number

      // current number of replicas of pods managed by this autoscaler.
      readonly currentReplicas: number

      // desired number of replicas of pods managed by this autoscaler.
      readonly desiredReplicas: number

      // last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
      readonly lastScaleTime: string

      // most recent generation observed by this autoscaler.
      readonly observedGeneration: number

    }

    // Scale represents a scaling request for a resource.
    export interface Scale {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

      // defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
      readonly spec: autoscaling.v1.ScaleSpec

      // current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
      readonly status: autoscaling.v1.ScaleStatus

    }

    // ScaleSpec describes the attributes of a scale subresource.
    export interface ScaleSpec {
      // desired number of instances for the scaled object.
      readonly replicas: number

    }

    // ScaleStatus represents the current status of a scale subresource.
    export interface ScaleStatus {
      // actual number of observed instances of the scaled object.
      readonly replicas: number

      // label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
      readonly selector: string

    }

  }

  export namespace v2beta1 {
    // CrossVersionObjectReference contains enough information to let you identify the referred resource.
    export interface CrossVersionObjectReference {
      // API version of the referent
      readonly apiVersion: string

      // Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds"
      readonly kind: string

      // Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
      readonly name: string

    }

    // HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
    export interface HorizontalPodAutoscaler {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
      readonly spec: autoscaling.v2beta1.HorizontalPodAutoscalerSpec

      // status is the current information about the autoscaler.
      readonly status: autoscaling.v2beta1.HorizontalPodAutoscalerStatus

    }

    // HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
    export interface HorizontalPodAutoscalerCondition {
      // lastTransitionTime is the last time the condition transitioned from one status to another
      readonly lastTransitionTime: string

      // message is a human-readable explanation containing details about the transition
      readonly message: string

      // reason is the reason for the condition's last transition.
      readonly reason: string

      // status is the status of the condition (True, False, Unknown)
      readonly status: string

      // type describes the current condition
      readonly type: string

    }

    // HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
    export interface HorizontalPodAutoscalerList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // items is the list of horizontal pod autoscaler objects.
      readonly items: autoscaling.v2beta1.HorizontalPodAutoscaler[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // metadata is the standard list metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
    export interface HorizontalPodAutoscalerSpec {
      // maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
      readonly maxReplicas: number

      // metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond.
      readonly metrics: autoscaling.v2beta1.MetricSpec[]

      // minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
      readonly minReplicas: number

      // scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
      readonly scaleTargetRef: autoscaling.v2beta1.CrossVersionObjectReference

    }

    // HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
    export interface HorizontalPodAutoscalerStatus {
      // conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
      readonly conditions: autoscaling.v2beta1.HorizontalPodAutoscalerCondition[]

      // currentMetrics is the last read state of the metrics used by this autoscaler.
      readonly currentMetrics: autoscaling.v2beta1.MetricStatus[]

      // currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
      readonly currentReplicas: number

      // desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
      readonly desiredReplicas: number

      // lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
      readonly lastScaleTime: string

      // observedGeneration is the most recent generation observed by this autoscaler.
      readonly observedGeneration: number

    }

    // MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
    export interface MetricSpec {
      // object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
      readonly object: autoscaling.v2beta1.ObjectMetricSource

      // pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
      readonly pods: autoscaling.v2beta1.PodsMetricSource

      // resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
      readonly resource: autoscaling.v2beta1.ResourceMetricSource

      // type is the type of metric source.  It should match one of the fields below.
      readonly type: string

    }

    // MetricStatus describes the last-read state of a single metric.
    export interface MetricStatus {
      // object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
      readonly object: autoscaling.v2beta1.ObjectMetricStatus

      // pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
      readonly pods: autoscaling.v2beta1.PodsMetricStatus

      // resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
      readonly resource: autoscaling.v2beta1.ResourceMetricStatus

      // type is the type of metric source.  It will match one of the fields below.
      readonly type: string

    }

    // ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
    export interface ObjectMetricSource {
      // metricName is the name of the metric in question.
      readonly metricName: string

      // target is the described Kubernetes object.
      readonly target: autoscaling.v2beta1.CrossVersionObjectReference

      // targetValue is the target value of the metric (as a quantity).
      readonly targetValue: string

    }

    // ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
    export interface ObjectMetricStatus {
      // currentValue is the current value of the metric (as a quantity).
      readonly currentValue: string

      // metricName is the name of the metric in question.
      readonly metricName: string

      // target is the described Kubernetes object.
      readonly target: autoscaling.v2beta1.CrossVersionObjectReference

    }

    // PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
    export interface PodsMetricSource {
      // metricName is the name of the metric in question
      readonly metricName: string

      // targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity)
      readonly targetAverageValue: string

    }

    // PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
    export interface PodsMetricStatus {
      // currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
      readonly currentAverageValue: string

      // metricName is the name of the metric in question
      readonly metricName: string

    }

    // ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
    export interface ResourceMetricSource {
      // name is the name of the resource in question.
      readonly name: string

      // targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
      readonly targetAverageUtilization: number

      // targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type.
      readonly targetAverageValue: string

    }

    // ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
    export interface ResourceMetricStatus {
      // currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification.
      readonly currentAverageUtilization: number

      // currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification.
      readonly currentAverageValue: string

      // name is the name of the resource in question.
      readonly name: string

    }

  }


}
export namespace batch {
  export namespace v1 {
    // Job represents the configuration of a single job.
    export interface Job {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: batch.v1.JobSpec

      // Current status of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: batch.v1.JobStatus

    }

    // JobCondition describes current state of a job.
    export interface JobCondition {
      // Last time the condition was checked.
      readonly lastProbeTime: string

      // Last time the condition transit from one status to another.
      readonly lastTransitionTime: string

      // Human readable message indicating details about last transition.
      readonly message: string

      // (brief) reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of job condition, Complete or Failed.
      readonly type: string

    }

    // JobList is a collection of jobs.
    export interface JobList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // items is the list of Jobs.
      readonly items: batch.v1.Job[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // JobSpec describes how the job execution will look like.
    export interface JobSpec {
      // Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
      readonly activeDeadlineSeconds: number

      // Specifies the number of retries before marking this job failed. Defaults to 6
      readonly backoffLimit: number

      // Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
      readonly completions: number

      // manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
      readonly manualSelector: boolean

      // Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
      readonly parallelism: number

      // A label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // Describes the pod that will be created when executing a job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
      readonly template: core.v1.PodTemplateSpec

    }

    // JobStatus represents the current state of a Job.
    export interface JobStatus {
      // The number of actively running pods.
      readonly active: number

      // Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
      readonly completionTime: string

      // The latest available observations of an object's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
      readonly conditions: batch.v1.JobCondition[]

      // The number of pods which reached phase Failed.
      readonly failed: number

      // Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
      readonly startTime: string

      // The number of pods which reached phase Succeeded.
      readonly succeeded: number

    }

  }

  export namespace v1beta1 {
    // CronJob represents the configuration of a single cron job.
    export interface CronJob {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: batch.v1beta1.CronJobSpec

      // Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: batch.v1beta1.CronJobStatus

    }

    // CronJobList is a collection of cron jobs.
    export interface CronJobList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // items is the list of CronJobs.
      readonly items: batch.v1beta1.CronJob[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // CronJobSpec describes how the job execution will look like and when it will actually run.
    export interface CronJobSpec {
      // Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one
      readonly concurrencyPolicy: string

      // The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
      readonly failedJobsHistoryLimit: number

      // Specifies the job that will be created when executing a CronJob.
      readonly jobTemplate: batch.v1beta1.JobTemplateSpec

      // The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
      readonly schedule: string

      // Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
      readonly startingDeadlineSeconds: number

      // The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3.
      readonly successfulJobsHistoryLimit: number

      // This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
      readonly suspend: boolean

    }

    // CronJobStatus represents the current state of a cron job.
    export interface CronJobStatus {
      // A list of pointers to currently running jobs.
      readonly active: core.v1.ObjectReference[]

      // Information when was the last time the job was successfully scheduled.
      readonly lastScheduleTime: string

    }

    // JobTemplateSpec describes the data a Job should have when created from a template
    export interface JobTemplateSpec {
      // Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: batch.v1.JobSpec

    }

  }

  export namespace v2alpha1 {
    // CronJob represents the configuration of a single cron job.
    export interface CronJob {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: batch.v2alpha1.CronJobSpec

      // Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: batch.v2alpha1.CronJobStatus

    }

    // CronJobList is a collection of cron jobs.
    export interface CronJobList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // items is the list of CronJobs.
      readonly items: batch.v2alpha1.CronJob[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // CronJobSpec describes how the job execution will look like and when it will actually run.
    export interface CronJobSpec {
      // Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one
      readonly concurrencyPolicy: string

      // The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified.
      readonly failedJobsHistoryLimit: number

      // Specifies the job that will be created when executing a CronJob.
      readonly jobTemplate: batch.v2alpha1.JobTemplateSpec

      // The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
      readonly schedule: string

      // Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
      readonly startingDeadlineSeconds: number

      // The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified.
      readonly successfulJobsHistoryLimit: number

      // This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
      readonly suspend: boolean

    }

    // CronJobStatus represents the current state of a cron job.
    export interface CronJobStatus {
      // A list of pointers to currently running jobs.
      readonly active: core.v1.ObjectReference[]

      // Information when was the last time the job was successfully scheduled.
      readonly lastScheduleTime: string

    }

    // JobTemplateSpec describes the data a Job should have when created from a template
    export interface JobTemplateSpec {
      // Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: batch.v1.JobSpec

    }

  }


}
export namespace certificates {
  export namespace v1beta1 {
    // Describes a certificate signing request
    export interface CertificateSigningRequest {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // The certificate request itself and any additional information.
      readonly spec: certificates.v1beta1.CertificateSigningRequestSpec

      // Derived information about the request.
      readonly status: certificates.v1beta1.CertificateSigningRequestStatus

    }


    export interface CertificateSigningRequestCondition {
      // timestamp for the last update to this condition
      readonly lastUpdateTime: string

      // human readable message with details about the request state
      readonly message: string

      // brief reason for the request state
      readonly reason: string

      // request approval state, currently Approved or Denied.
      readonly type: string

    }


    export interface CertificateSigningRequestList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly items: certificates.v1beta1.CertificateSigningRequest[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
    export interface CertificateSigningRequestSpec {
      // Extra information about the requesting user. See user.Info interface for details.
      readonly extra: object

      // Group information about the requesting user. See user.Info interface for details.
      readonly groups: string[]

      // Base64-encoded PKCS#10 CSR data
      readonly request: string

      // UID information about the requesting user. See user.Info interface for details.
      readonly uid: string

      // allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
      //      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
      readonly usages: string[]

      // Information about the requesting user. See user.Info interface for details.
      readonly username: string

    }


    export interface CertificateSigningRequestStatus {
      // If request was approved, the controller will place the issued certificate here.
      readonly certificate: string

      // Conditions applied to the request, such as approval or denial.
      readonly conditions: certificates.v1beta1.CertificateSigningRequestCondition[]

    }

  }


}
export namespace core {
  export namespace v1 {
    // Represents a Persistent Disk resource in AWS.
    //
    // An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
    export interface AWSElasticBlockStoreVolumeSource {
      // Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
      readonly fsType: string

      // The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
      readonly partition: number

      // Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
      readonly readOnly: boolean

      // Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
      readonly volumeID: string

    }

    // Affinity is a group of affinity scheduling rules.
    export interface Affinity {
      // Describes node affinity scheduling rules for the pod.
      readonly nodeAffinity: core.v1.NodeAffinity

      // Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
      readonly podAffinity: core.v1.PodAffinity

      // Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
      readonly podAntiAffinity: core.v1.PodAntiAffinity

    }

    // AttachedVolume describes a volume attached to a node
    export interface AttachedVolume {
      // DevicePath represents the device path where the volume should be available
      readonly devicePath: string

      // Name of the attached volume
      readonly name: string

    }

    // AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
    export interface AzureDiskVolumeSource {
      // Host Caching mode: None, Read Only, Read Write.
      readonly cachingMode: string

      // The Name of the data disk in the blob storage
      readonly diskName: string

      // The URI the data disk in the blob storage
      readonly diskURI: string

      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
      readonly kind: string

      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

    }

    // AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
    export interface AzureFilePersistentVolumeSource {
      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // the name of secret that contains Azure Storage Account Name and Key
      readonly secretName: string

      // the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
      readonly secretNamespace: string

      // Share Name
      readonly shareName: string

    }

    // AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
    export interface AzureFileVolumeSource {
      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // the name of secret that contains Azure Storage Account Name and Key
      readonly secretName: string

      // Share Name
      readonly shareName: string

    }

    // Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
    export interface Binding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // The target object that you want to bind to the standard object.
      readonly target: core.v1.ObjectReference

    }

    // Represents storage that is managed by an external CSI volume driver
    export interface CSIPersistentVolumeSource {
      // Driver is the name of the driver to use for this volume. Required.
      readonly driver: string

      // Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
      readonly readOnly: boolean

      // VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
      readonly volumeHandle: string

    }

    // Adds and removes POSIX capabilities from running containers.
    export interface Capabilities {
      // Added capabilities
      readonly add: string[]

      // Removed capabilities
      readonly drop: string[]

    }

    // Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
    export interface CephFSPersistentVolumeSource {
      // Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly monitors: string[]

      // Optional: Used as the mounted root, rather than the full Ceph tree, default is /
      readonly path: string

      // Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly readOnly: boolean

      // Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly secretFile: string

      // Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly secretRef: core.v1.SecretReference

      // Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly user: string

    }

    // Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
    export interface CephFSVolumeSource {
      // Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly monitors: string[]

      // Optional: Used as the mounted root, rather than the full Ceph tree, default is /
      readonly path: string

      // Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly readOnly: boolean

      // Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly secretFile: string

      // Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly secretRef: core.v1.LocalObjectReference

      // Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
      readonly user: string

    }

    // Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
    export interface CinderVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
      readonly fsType: string

      // Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
      readonly readOnly: boolean

      // volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
      readonly volumeID: string

    }

    // ClientIPConfig represents the configurations of Client IP based session affinity.
    export interface ClientIPConfig {
      // timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
      readonly timeoutSeconds: number

    }

    // Information about the condition of a component.
    export interface ComponentCondition {
      // Condition error code for a component. For example, a health check error code.
      readonly error: string

      // Message about the condition for a component. For example, information about a health check.
      readonly message: string

      // Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
      readonly status: string

      // Type of condition for a component. Valid value: "Healthy"
      readonly type: string

    }

    // ComponentStatus (and ComponentStatusList) holds the cluster validation info.
    export interface ComponentStatus {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of component conditions observed
      readonly conditions: core.v1.ComponentCondition[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

    }

    // Status of all the conditions for the component as a list of ComponentStatus objects.
    export interface ComponentStatusList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of ComponentStatus objects.
      readonly items: core.v1.ComponentStatus[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ConfigMap holds configuration data for pods to consume.
    export interface ConfigMap {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'.
      readonly data: object

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

    }

    // ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
    //
    // The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
    export interface ConfigMapEnvSource {
      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the ConfigMap must be defined
      readonly optional: boolean

    }

    // Selects a key from a ConfigMap.
    export interface ConfigMapKeySelector {
      // The key to select.
      readonly key: string

      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the ConfigMap or it's key must be defined
      readonly optional: boolean

    }

    // ConfigMapList is a resource containing a list of ConfigMap objects.
    export interface ConfigMapList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of ConfigMaps.
      readonly items: core.v1.ConfigMap[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // Adapts a ConfigMap into a projected volume.
    //
    // The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
    export interface ConfigMapProjection {
      // If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
      readonly items: core.v1.KeyToPath[]

      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the ConfigMap or it's keys must be defined
      readonly optional: boolean

    }

    // Adapts a ConfigMap into a volume.
    //
    // The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
    export interface ConfigMapVolumeSource {
      // Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
      readonly defaultMode: number

      // If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
      readonly items: core.v1.KeyToPath[]

      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the ConfigMap or it's keys must be defined
      readonly optional: boolean

    }

    // A single application container that you want to run within a pod.
    export interface Container {
      // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
      readonly args: string[]

      // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
      readonly command: string[]

      // List of environment variables to set in the container. Cannot be updated.
      readonly env: core.v1.EnvVar[]

      // List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
      readonly envFrom: core.v1.EnvFromSource[]

      // Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
      readonly image: string

      // Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
      readonly imagePullPolicy: string

      // Actions that the management system should take in response to container lifecycle events. Cannot be updated.
      readonly lifecycle: core.v1.Lifecycle

      // Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
      readonly livenessProbe: core.v1.Probe

      // Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
      readonly name: string

      // List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
      readonly ports: core.v1.ContainerPort[]

      // Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
      readonly readinessProbe: core.v1.Probe

      // Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
      readonly resources: core.v1.ResourceRequirements

      // Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
      readonly securityContext: core.v1.SecurityContext

      // Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
      readonly stdin: boolean

      // Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
      readonly stdinOnce: boolean

      // Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
      readonly terminationMessagePath: string

      // Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
      readonly terminationMessagePolicy: string

      // Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
      readonly tty: boolean

      // volumeDevices is the list of block devices to be used by the container. This is an alpha feature and may change in the future.
      readonly volumeDevices: core.v1.VolumeDevice[]

      // Pod volumes to mount into the container's filesystem. Cannot be updated.
      readonly volumeMounts: core.v1.VolumeMount[]

      // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
      readonly workingDir: string

    }

    // Describe a container image
    export interface ContainerImage {
      // Names by which this image is known. e.g. ["gcr.io/google_containers/hyperkube:v1.0.7", "dockerhub.io/google_containers/hyperkube:v1.0.7"]
      readonly names: string[]

      // The size of the image in bytes.
      readonly sizeBytes: number

    }

    // ContainerPort represents a network port in a single container.
    export interface ContainerPort {
      // Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
      readonly containerPort: number

      // What host IP to bind the external port to.
      readonly hostIP: string

      // Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
      readonly hostPort: number

      // If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
      readonly name: string

      // Protocol for port. Must be UDP or TCP. Defaults to "TCP".
      readonly protocol: string

    }

    // ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
    export interface ContainerState {
      // Details about a running container
      readonly running: core.v1.ContainerStateRunning

      // Details about a terminated container
      readonly terminated: core.v1.ContainerStateTerminated

      // Details about a waiting container
      readonly waiting: core.v1.ContainerStateWaiting

    }

    // ContainerStateRunning is a running state of a container.
    export interface ContainerStateRunning {
      // Time at which the container was last (re-)started
      readonly startedAt: string

    }

    // ContainerStateTerminated is a terminated state of a container.
    export interface ContainerStateTerminated {
      // Container's ID in the format 'docker://<container_id>'
      readonly containerID: string

      // Exit status from the last termination of the container
      readonly exitCode: number

      // Time at which the container last terminated
      readonly finishedAt: string

      // Message regarding the last termination of the container
      readonly message: string

      // (brief) reason from the last termination of the container
      readonly reason: string

      // Signal from the last termination of the container
      readonly signal: number

      // Time at which previous execution of the container started
      readonly startedAt: string

    }

    // ContainerStateWaiting is a waiting state of a container.
    export interface ContainerStateWaiting {
      // Message regarding why the container is not yet running.
      readonly message: string

      // (brief) reason the container is not yet running.
      readonly reason: string

    }

    // ContainerStatus contains details for the current status of this container.
    export interface ContainerStatus {
      // Container's ID in the format 'docker://<container_id>'.
      readonly containerID: string

      // The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
      readonly image: string

      // ImageID of the container's image.
      readonly imageID: string

      // Details about the container's last termination condition.
      readonly lastState: core.v1.ContainerState

      // This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
      readonly name: string

      // Specifies whether the container has passed its readiness probe.
      readonly ready: boolean

      // The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
      readonly restartCount: number

      // Details about the container's current condition.
      readonly state: core.v1.ContainerState

    }

    // DaemonEndpoint contains information about a single Daemon endpoint.
    export interface DaemonEndpoint {
      // Port number of the given endpoint.
      readonly Port: number

    }

    // Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
    export interface DownwardAPIProjection {
      // Items is a list of DownwardAPIVolume file
      readonly items: core.v1.DownwardAPIVolumeFile[]

    }

    // DownwardAPIVolumeFile represents information to create the file containing the pod field
    export interface DownwardAPIVolumeFile {
      // Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
      readonly fieldRef: core.v1.ObjectFieldSelector

      // Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
      readonly mode: number

      // Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
      readonly path: string

      // Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
      readonly resourceFieldRef: core.v1.ResourceFieldSelector

    }

    // DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
    export interface DownwardAPIVolumeSource {
      // Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
      readonly defaultMode: number

      // Items is a list of downward API volume file
      readonly items: core.v1.DownwardAPIVolumeFile[]

    }

    // Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
    export interface EmptyDirVolumeSource {
      // What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
      readonly medium: string

      // Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
      readonly sizeLimit: string

    }

    // EndpointAddress is a tuple that describes single IP address.
    export interface EndpointAddress {
      // The Hostname of this endpoint
      readonly hostname: string

      // The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
      readonly ip: string

      // Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
      readonly nodeName: string

      // Reference to object providing the endpoint.
      readonly targetRef: core.v1.ObjectReference

    }

    // EndpointPort is a tuple that describes a single port.
    export interface EndpointPort {
      // The name of this port (corresponds to ServicePort.Name). Must be a DNS_LABEL. Optional only if one port is defined.
      readonly name: string

      // The port number of the endpoint.
      readonly port: number

      // The IP protocol for this port. Must be UDP or TCP. Default is TCP.
      readonly protocol: string

    }

    // EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
    //   {
    //     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
    //     Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    //   }
    // The resulting set of endpoints can be viewed as:
    //     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
    //     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
    export interface EndpointSubset {
      // IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
      readonly addresses: core.v1.EndpointAddress[]

      // IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
      readonly notReadyAddresses: core.v1.EndpointAddress[]

      // Port numbers available on the related IP addresses.
      readonly ports: core.v1.EndpointPort[]

    }

    // Endpoints is a collection of endpoints that implement the actual service. Example:
    //   Name: "mysvc",
    //   Subsets: [
    //     {
    //       Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
    //       Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    //     },
    //     {
    //       Addresses: [{"ip": "10.10.3.3"}],
    //       Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    //     },
    //  ]
    export interface Endpoints {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
      readonly subsets: core.v1.EndpointSubset[]

    }

    // EndpointsList is a list of endpoints.
    export interface EndpointsList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of endpoints.
      readonly items: core.v1.Endpoints[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // EnvFromSource represents the source of a set of ConfigMaps
    export interface EnvFromSource {
      // The ConfigMap to select from
      readonly configMapRef: core.v1.ConfigMapEnvSource

      // An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
      readonly prefix: string

      // The Secret to select from
      readonly secretRef: core.v1.SecretEnvSource

    }

    // EnvVar represents an environment variable present in a Container.
    export interface EnvVar {
      // Name of the environment variable. Must be a C_IDENTIFIER.
      readonly name: string

      // Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
      readonly value: string

      // Source for the environment variable's value. Cannot be used if value is not empty.
      readonly valueFrom: core.v1.EnvVarSource

    }

    // EnvVarSource represents a source for the value of an EnvVar.
    export interface EnvVarSource {
      // Selects a key of a ConfigMap.
      readonly configMapKeyRef: core.v1.ConfigMapKeySelector

      // Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP.
      readonly fieldRef: core.v1.ObjectFieldSelector

      // Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
      readonly resourceFieldRef: core.v1.ResourceFieldSelector

      // Selects a key of a secret in the pod's namespace
      readonly secretKeyRef: core.v1.SecretKeySelector

    }

    // Event is a report of an event somewhere in the cluster.
    export interface Event {
      // What action was taken/failed regarding to the Regarding object.
      readonly action: string

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // The number of times this event has occurred.
      readonly count: number

      // Time when this Event was first observed.
      readonly eventTime: string

      // The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
      readonly firstTimestamp: string

      // The object that this event is about.
      readonly involvedObject: core.v1.ObjectReference

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // The time at which the most recent occurrence of this event was recorded.
      readonly lastTimestamp: string

      // A human-readable description of the status of this operation.
      readonly message: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
      readonly reason: string

      // Optional secondary object for more complex actions.
      readonly related: core.v1.ObjectReference

      // Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
      readonly reportingComponent: string

      // ID of the controller instance, e.g. `kubelet-xyzf`.
      readonly reportingInstance: string

      // Data about the Event series this event represents or nil if it's a singleton Event.
      readonly series: core.v1.EventSeries

      // The component reporting this event. Should be a short machine understandable string.
      readonly source: core.v1.EventSource

      // Type of this event (Normal, Warning), new types could be added in the future
      readonly type: string

    }

    // EventList is a list of events.
    export interface EventList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of events
      readonly items: core.v1.Event[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // EventSeries contain information on series of events, i.e. thing that was/is happening continously for some time.
    export interface EventSeries {
      // Number of occurrences in this series up to the last heartbeat time
      readonly count: number

      // Time of the last occurence observed
      readonly lastObservedTime: string

      // State of this Series: Ongoing or Finished
      readonly state: string

    }

    // EventSource contains information for an event.
    export interface EventSource {
      // Component from which the event is generated.
      readonly component: string

      // Node name on which the event is generated.
      readonly host: string

    }

    // ExecAction describes a "run in container" action.
    export interface ExecAction {
      // Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
      readonly command: string[]

    }

    // Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
    export interface FCVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // Optional: FC target lun number
      readonly lun: number

      // Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // Optional: FC target worldwide names (WWNs)
      readonly targetWWNs: string[]

      // Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
      readonly wwids: string[]

    }

    // FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
    export interface FlexVolumeSource {
      // Driver is the name of the driver to use for this volume.
      readonly driver: string

      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
      readonly fsType: string

      // Optional: Extra command options if any.
      readonly options: object

      // Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
      readonly secretRef: core.v1.LocalObjectReference

    }

    // Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
    export interface FlockerVolumeSource {
      // Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
      readonly datasetName: string

      // UUID of the dataset. This is unique identifier of a Flocker dataset
      readonly datasetUUID: string

    }

    // Represents a Persistent Disk resource in Google Compute Engine.
    //
    // A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
    export interface GCEPersistentDiskVolumeSource {
      // Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
      readonly fsType: string

      // The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
      readonly partition: number

      // Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
      readonly pdName: string

      // ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
      readonly readOnly: boolean

    }

    // Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
    export interface GitRepoVolumeSource {
      // Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
      readonly directory: string

      // Repository URL
      readonly repository: string

      // Commit hash for the specified revision.
      readonly revision: string

    }

    // Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
    export interface GlusterfsVolumeSource {
      // EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
      readonly endpoints: string

      // Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
      readonly path: string

      // ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
      readonly readOnly: boolean

    }

    // HTTPGetAction describes an action based on HTTP Get requests.
    export interface HTTPGetAction {
      // Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
      readonly host: string

      // Custom headers to set in the request. HTTP allows repeated headers.
      readonly httpHeaders: core.v1.HTTPHeader[]

      // Path to access on the HTTP server.
      readonly path: string

      // Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
      readonly port: number | string

      // Scheme to use for connecting to the host. Defaults to HTTP.
      readonly scheme: string

    }

    // HTTPHeader describes a custom header to be used in HTTP probes
    export interface HTTPHeader {
      // The header field name
      readonly name: string

      // The header field value
      readonly value: string

    }

    // Handler defines a specific action that should be taken
    export interface Handler {
      // One and only one of the following should be specified. Exec specifies the action to take.
      readonly exec: core.v1.ExecAction

      // HTTPGet specifies the http request to perform.
      readonly httpGet: core.v1.HTTPGetAction

      // TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
      readonly tcpSocket: core.v1.TCPSocketAction

    }

    // HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
    export interface HostAlias {
      // Hostnames for the above IP address.
      readonly hostnames: string[]

      // IP address of the host file entry.
      readonly ip: string

    }

    // Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
    export interface HostPathVolumeSource {
      // Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
      readonly path: string

      // Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
      readonly type: string

    }

    // ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
    export interface ISCSIPersistentVolumeSource {
      // whether support iSCSI Discovery CHAP authentication
      readonly chapAuthDiscovery: boolean

      // whether support iSCSI Session CHAP authentication
      readonly chapAuthSession: boolean

      // Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
      readonly fsType: string

      // Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
      readonly initiatorName: string

      // Target iSCSI Qualified Name.
      readonly iqn: string

      // iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
      readonly iscsiInterface: string

      // iSCSI Target Lun number.
      readonly lun: number

      // iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
      readonly portals: string[]

      // ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
      readonly readOnly: boolean

      // CHAP Secret for iSCSI target and initiator authentication
      readonly secretRef: core.v1.SecretReference

      // iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
      readonly targetPortal: string

    }

    // Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
    export interface ISCSIVolumeSource {
      // whether support iSCSI Discovery CHAP authentication
      readonly chapAuthDiscovery: boolean

      // whether support iSCSI Session CHAP authentication
      readonly chapAuthSession: boolean

      // Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
      readonly fsType: string

      // Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
      readonly initiatorName: string

      // Target iSCSI Qualified Name.
      readonly iqn: string

      // iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
      readonly iscsiInterface: string

      // iSCSI Target Lun number.
      readonly lun: number

      // iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
      readonly portals: string[]

      // ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
      readonly readOnly: boolean

      // CHAP Secret for iSCSI target and initiator authentication
      readonly secretRef: core.v1.LocalObjectReference

      // iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
      readonly targetPortal: string

    }

    // Maps a string key to a path within a volume.
    export interface KeyToPath {
      // The key to project.
      readonly key: string

      // Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
      readonly mode: number

      // The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
      readonly path: string

    }

    // Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
    export interface Lifecycle {
      // PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
      readonly postStart: core.v1.Handler

      // PreStop is called immediately before a container is terminated. The container is terminated after the handler completes. The reason for termination is passed to the handler. Regardless of the outcome of the handler, the container is eventually terminated. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
      readonly preStop: core.v1.Handler

    }

    // LimitRange sets resource usage limits for each kind of resource in a Namespace.
    export interface LimitRange {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.LimitRangeSpec

    }

    // LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
    export interface LimitRangeItem {
      // Default resource requirement limit value by resource name if resource limit is omitted.
      readonly default: object

      // DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
      readonly defaultRequest: object

      // Max usage constraints on this kind by resource name.
      readonly max: object

      // MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
      readonly maxLimitRequestRatio: object

      // Min usage constraints on this kind by resource name.
      readonly min: object

      // Type of resource that this limit applies to.
      readonly type: string

    }

    // LimitRangeList is a list of LimitRange items.
    export interface LimitRangeList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
      readonly items: core.v1.LimitRange[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // LimitRangeSpec defines a min/max usage limit for resources that match on kind.
    export interface LimitRangeSpec {
      // Limits is the list of LimitRangeItem objects that are enforced.
      readonly limits: core.v1.LimitRangeItem[]

    }

    // LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
    export interface LoadBalancerIngress {
      // Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
      readonly hostname: string

      // IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
      readonly ip: string

    }

    // LoadBalancerStatus represents the status of a load-balancer.
    export interface LoadBalancerStatus {
      // Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
      readonly ingress: core.v1.LoadBalancerIngress[]

    }

    // LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
    export interface LocalObjectReference {
      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

    }

    // Local represents directly-attached storage with node affinity
    export interface LocalVolumeSource {
      // The full path to the volume on the node For alpha, this path must be a directory Once block as a source is supported, then this path can point to a block device
      readonly path: string

    }

    // Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
    export interface NFSVolumeSource {
      // Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
      readonly path: string

      // ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
      readonly readOnly: boolean

      // Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
      readonly server: string

    }

    // Namespace provides a scope for Names. Use of multiple namespaces is optional.
    export interface Namespace {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.NamespaceSpec

      // Status describes the current status of a Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: core.v1.NamespaceStatus

    }

    // NamespaceList is a list of Namespaces.
    export interface NamespaceList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
      readonly items: core.v1.Namespace[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // NamespaceSpec describes the attributes on a Namespace.
    export interface NamespaceSpec {
      // Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
      readonly finalizers: string[]

    }

    // NamespaceStatus is information about the current status of a Namespace.
    export interface NamespaceStatus {
      // Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
      readonly phase: string

    }

    // Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
    export interface Node {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.NodeSpec

      // Most recently observed status of the node. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: core.v1.NodeStatus

    }

    // NodeAddress contains information for the node's address.
    export interface NodeAddress {
      // The node address.
      readonly address: string

      // Node address type, one of Hostname, ExternalIP or InternalIP.
      readonly type: string

    }

    // Node affinity is a group of node affinity scheduling rules.
    export interface NodeAffinity {
      // The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
      readonly preferredDuringSchedulingIgnoredDuringExecution: core.v1.PreferredSchedulingTerm[]

      // If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
      readonly requiredDuringSchedulingIgnoredDuringExecution: core.v1.NodeSelector

    }

    // NodeCondition contains condition information for a node.
    export interface NodeCondition {
      // Last time we got an update on a given condition.
      readonly lastHeartbeatTime: string

      // Last time the condition transit from one status to another.
      readonly lastTransitionTime: string

      // Human readable message indicating details about last transition.
      readonly message: string

      // (brief) reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of node condition.
      readonly type: string

    }

    // NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
    export interface NodeConfigSource {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly configMapRef: core.v1.ObjectReference

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

    }

    // NodeDaemonEndpoints lists ports opened by daemons running on the Node.
    export interface NodeDaemonEndpoints {
      // Endpoint on which Kubelet is listening.
      readonly kubeletEndpoint: core.v1.DaemonEndpoint

    }

    // NodeList is the whole list of all Nodes which have been registered with master.
    export interface NodeList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of nodes
      readonly items: core.v1.Node[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
    export interface NodeSelector {
      // Required. A list of node selector terms. The terms are ORed.
      readonly nodeSelectorTerms: core.v1.NodeSelectorTerm[]

    }

    // A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
    export interface NodeSelectorRequirement {
      // The label key that the selector applies to.
      readonly key: string

      // Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
      readonly operator: string

      // An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
      readonly values: string[]

    }

    // A null or empty node selector term matches no objects.
    export interface NodeSelectorTerm {
      // Required. A list of node selector requirements. The requirements are ANDed.
      readonly matchExpressions: core.v1.NodeSelectorRequirement[]

    }

    // NodeSpec describes the attributes that a node is created with.
    export interface NodeSpec {
      // If specified, the source to get node configuration from The DynamicKubeletConfig feature gate must be enabled for the Kubelet to use this field
      readonly configSource: core.v1.NodeConfigSource

      // External ID of the node assigned by some machine database (e.g. a cloud provider). Deprecated.
      readonly externalID: string

      // PodCIDR represents the pod IP range assigned to the node.
      readonly podCIDR: string

      // ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
      readonly providerID: string

      // If specified, the node's taints.
      readonly taints: core.v1.Taint[]

      // Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
      readonly unschedulable: boolean

    }

    // NodeStatus is information about the current status of a node.
    export interface NodeStatus {
      // List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses
      readonly addresses: core.v1.NodeAddress[]

      // Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
      readonly allocatable: object

      // Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
      readonly capacity: object

      // Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
      readonly conditions: core.v1.NodeCondition[]

      // Endpoints of daemons running on the Node.
      readonly daemonEndpoints: core.v1.NodeDaemonEndpoints

      // List of container images on this node
      readonly images: core.v1.ContainerImage[]

      // Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info
      readonly nodeInfo: core.v1.NodeSystemInfo

      // NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
      readonly phase: string

      // List of volumes that are attached to the node.
      readonly volumesAttached: core.v1.AttachedVolume[]

      // List of attachable volumes in use (mounted) by the node.
      readonly volumesInUse: string[]

    }

    // NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
    export interface NodeSystemInfo {
      // The Architecture reported by the node
      readonly architecture: string

      // Boot ID reported by the node.
      readonly bootID: string

      // ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0).
      readonly containerRuntimeVersion: string

      // Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
      readonly kernelVersion: string

      // KubeProxy Version reported by the node.
      readonly kubeProxyVersion: string

      // Kubelet Version reported by the node.
      readonly kubeletVersion: string

      // MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
      readonly machineID: string

      // The Operating System reported by the node
      readonly operatingSystem: string

      // OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
      readonly osImage: string

      // SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-US/Red_Hat_Subscription_Management/1/html/RHSM/getting-system-uuid.html
      readonly systemUUID: string

    }

    // ObjectFieldSelector selects an APIVersioned field of an object.
    export interface ObjectFieldSelector {
      // Version of the schema the FieldPath is written in terms of, defaults to "v1".
      readonly apiVersion: string

      // Path of the field to select in the specified API version.
      readonly fieldPath: string

    }

    // ObjectReference contains enough information to let you inspect or modify the referred object.
    export interface ObjectReference {
      // API version of the referent.
      readonly apiVersion: string

      // If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
      readonly fieldPath: string

      // Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
      readonly namespace: string

      // Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
      readonly resourceVersion: string

      // UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
      readonly uid: string

    }

    // PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
    export interface PersistentVolume {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
      readonly spec: core.v1.PersistentVolumeSpec

      // Status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
      readonly status: core.v1.PersistentVolumeStatus

    }

    // PersistentVolumeClaim is a user's request for and claim to a persistent volume
    export interface PersistentVolumeClaim {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
      readonly spec: core.v1.PersistentVolumeClaimSpec

      // Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
      readonly status: core.v1.PersistentVolumeClaimStatus

    }

    // PersistentVolumeClaimCondition contails details about state of pvc
    export interface PersistentVolumeClaimCondition {
      // Last time we probed the condition.
      readonly lastProbeTime: string

      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // Human-readable message indicating details about last transition.
      readonly message: string

      // Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
      readonly reason: string


      readonly status: string


      readonly type: string

    }

    // PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
    export interface PersistentVolumeClaimList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
      readonly items: core.v1.PersistentVolumeClaim[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
    export interface PersistentVolumeClaimSpec {
      // AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
      readonly accessModes: string[]

      // Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
      readonly resources: core.v1.ResourceRequirements

      // A label query over volumes to consider for binding.
      readonly selector: meta.v1.LabelSelector

      // Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
      readonly storageClassName: string

      // volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is an alpha feature and may change in the future.
      readonly volumeMode: string

      // VolumeName is the binding reference to the PersistentVolume backing this claim.
      readonly volumeName: string

    }

    // PersistentVolumeClaimStatus is the current status of a persistent volume claim.
    export interface PersistentVolumeClaimStatus {
      // AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
      readonly accessModes: string[]

      // Represents the actual resources of the underlying volume.
      readonly capacity: object

      // Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
      readonly conditions: core.v1.PersistentVolumeClaimCondition[]

      // Phase represents the current phase of PersistentVolumeClaim.
      readonly phase: string

    }

    // PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
    export interface PersistentVolumeClaimVolumeSource {
      // ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
      readonly claimName: string

      // Will force the ReadOnly setting in VolumeMounts. Default false.
      readonly readOnly: boolean

    }

    // PersistentVolumeList is a list of PersistentVolume items.
    export interface PersistentVolumeList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
      readonly items: core.v1.PersistentVolume[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // PersistentVolumeSpec is the specification of a persistent volume.
    export interface PersistentVolumeSpec {
      // AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
      readonly accessModes: string[]

      // AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
      readonly awsElasticBlockStore: core.v1.AWSElasticBlockStoreVolumeSource

      // AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
      readonly azureDisk: core.v1.AzureDiskVolumeSource

      // AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
      readonly azureFile: core.v1.AzureFilePersistentVolumeSource

      // A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
      readonly capacity: object

      // CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
      readonly cephfs: core.v1.CephFSPersistentVolumeSource

      // Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
      readonly cinder: core.v1.CinderVolumeSource

      // ClaimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
      readonly claimRef: core.v1.ObjectReference

      // CSI represents storage that handled by an external CSI driver
      readonly csi: core.v1.CSIPersistentVolumeSource

      // FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
      readonly fc: core.v1.FCVolumeSource

      // FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
      readonly flexVolume: core.v1.FlexVolumeSource

      // Flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
      readonly flocker: core.v1.FlockerVolumeSource

      // GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
      readonly gcePersistentDisk: core.v1.GCEPersistentDiskVolumeSource

      // Glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
      readonly glusterfs: core.v1.GlusterfsVolumeSource

      // HostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
      readonly hostPath: core.v1.HostPathVolumeSource

      // ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
      readonly iscsi: core.v1.ISCSIPersistentVolumeSource

      // Local represents directly-attached storage with node affinity
      readonly local: core.v1.LocalVolumeSource

      // A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
      readonly mountOptions: string[]

      // NFS represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
      readonly nfs: core.v1.NFSVolumeSource

      // What happens to a persistent volume when released from its claim. Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
      readonly persistentVolumeReclaimPolicy: string

      // PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
      readonly photonPersistentDisk: core.v1.PhotonPersistentDiskVolumeSource

      // PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
      readonly portworxVolume: core.v1.PortworxVolumeSource

      // Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
      readonly quobyte: core.v1.QuobyteVolumeSource

      // RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
      readonly rbd: core.v1.RBDPersistentVolumeSource

      // ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
      readonly scaleIO: core.v1.ScaleIOPersistentVolumeSource

      // Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
      readonly storageClassName: string

      // StorageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://releases.k8s.io/HEAD/examples/volumes/storageos/README.md
      readonly storageos: core.v1.StorageOSPersistentVolumeSource

      // volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. This is an alpha feature and may change in the future.
      readonly volumeMode: string

      // VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
      readonly vsphereVolume: core.v1.VsphereVirtualDiskVolumeSource

    }

    // PersistentVolumeStatus is the current status of a persistent volume.
    export interface PersistentVolumeStatus {
      // A human-readable message indicating details about why the volume is in this state.
      readonly message: string

      // Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
      readonly phase: string

      // Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
      readonly reason: string

    }

    // Represents a Photon Controller persistent disk resource.
    export interface PhotonPersistentDiskVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // ID that identifies Photon Controller persistent disk
      readonly pdID: string

    }

    // Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
    export interface Pod {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.PodSpec

      // Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: core.v1.PodStatus

    }

    // Pod affinity is a group of inter pod affinity scheduling rules.
    export interface PodAffinity {
      // The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
      readonly preferredDuringSchedulingIgnoredDuringExecution: core.v1.WeightedPodAffinityTerm[]

      // If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
      readonly requiredDuringSchedulingIgnoredDuringExecution: core.v1.PodAffinityTerm[]

    }

    // Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
    export interface PodAffinityTerm {
      // A label query over a set of resources, in this case pods.
      readonly labelSelector: meta.v1.LabelSelector

      // namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
      readonly namespaces: string[]

      // This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
      readonly topologyKey: string

    }

    // Pod anti affinity is a group of inter pod anti affinity scheduling rules.
    export interface PodAntiAffinity {
      // The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
      readonly preferredDuringSchedulingIgnoredDuringExecution: core.v1.WeightedPodAffinityTerm[]

      // If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
      readonly requiredDuringSchedulingIgnoredDuringExecution: core.v1.PodAffinityTerm[]

    }

    // PodCondition contains details for the current condition of this pod.
    export interface PodCondition {
      // Last time we probed the condition.
      readonly lastProbeTime: string

      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // Human-readable message indicating details about last transition.
      readonly message: string

      // Unique, one-word, CamelCase reason for the condition's last transition.
      readonly reason: string

      // Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
      readonly status: string

      // Type is the type of the condition. Currently only Ready. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
      readonly type: string

    }

    // PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
    export interface PodDNSConfig {
      // A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
      readonly nameservers: string[]

      // A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
      readonly options: core.v1.PodDNSConfigOption[]

      // A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
      readonly searches: string[]

    }

    // PodDNSConfigOption defines DNS resolver options of a pod.
    export interface PodDNSConfigOption {
      // Required.
      readonly name: string


      readonly value: string

    }

    // PodList is a list of Pods.
    export interface PodList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of pods. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
      readonly items: core.v1.Pod[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
    export interface PodSecurityContext {
      // A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
      //
      // 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
      //
      // If unset, the Kubelet will not modify the ownership and permissions of any volume.
      readonly fsGroup: number

      // Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
      readonly runAsNonRoot: boolean

      // The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
      readonly runAsUser: number

      // The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
      readonly seLinuxOptions: core.v1.SELinuxOptions

      // A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.
      readonly supplementalGroups: number[]

    }

    // PodSpec is a description of a pod.
    export interface PodSpec {
      // Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
      readonly activeDeadlineSeconds: number

      // If specified, the pod's scheduling constraints
      readonly affinity: core.v1.Affinity

      // AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
      readonly automountServiceAccountToken: boolean

      // List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
      readonly containers: core.v1.Container[]

      // Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy. This is an alpha feature introduced in v1.9 and CustomPodDNS feature gate must be enabled to use it.
      readonly dnsConfig: core.v1.PodDNSConfig

      // Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Note that 'None' policy is an alpha feature introduced in v1.9 and CustomPodDNS feature gate must be enabled to use it.
      readonly dnsPolicy: string

      // HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
      readonly hostAliases: core.v1.HostAlias[]

      // Use the host's ipc namespace. Optional: Default to false.
      readonly hostIPC: boolean

      // Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
      readonly hostNetwork: boolean

      // Use the host's pid namespace. Optional: Default to false.
      readonly hostPID: boolean

      // Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
      readonly hostname: string

      // ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
      readonly imagePullSecrets: core.v1.LocalObjectReference[]

      // List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
      readonly initContainers: core.v1.Container[]

      // NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
      readonly nodeName: string

      // NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
      readonly nodeSelector: object

      // The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
      readonly priority: number

      // If specified, indicates the pod's priority. "SYSTEM" is a special keyword which indicates the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
      readonly priorityClassName: string

      // Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
      readonly restartPolicy: string

      // If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
      readonly schedulerName: string

      // SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
      readonly securityContext: core.v1.PodSecurityContext

      // DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
      readonly serviceAccount: string

      // ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
      readonly serviceAccountName: string

      // If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
      readonly subdomain: string

      // Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
      readonly terminationGracePeriodSeconds: number

      // If specified, the pod's tolerations.
      readonly tolerations: core.v1.Toleration[]

      // List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
      readonly volumes: core.v1.Volume[]

    }

    // PodStatus represents information about the status of a pod. Status may trail the actual state of a system.
    export interface PodStatus {
      // Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
      readonly conditions: core.v1.PodCondition[]

      // The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
      readonly containerStatuses: core.v1.ContainerStatus[]

      // IP address of the host to which the pod is assigned. Empty if not yet scheduled.
      readonly hostIP: string

      // The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
      readonly initContainerStatuses: core.v1.ContainerStatus[]

      // A human readable message indicating details about why the pod is in this condition.
      readonly message: string

      // Current condition of the pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
      readonly phase: string

      // IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
      readonly podIP: string

      // The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://github.com/kubernetes/kubernetes/blob/master/docs/design/resource-qos.md
      readonly qosClass: string

      // A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
      readonly reason: string

      // RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
      readonly startTime: string

    }

    // PodTemplate describes a template for creating copies of a predefined pod.
    export interface PodTemplate {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly template: core.v1.PodTemplateSpec

    }

    // PodTemplateList is a list of PodTemplates.
    export interface PodTemplateList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of pod templates
      readonly items: core.v1.PodTemplate[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // PodTemplateSpec describes the data a pod should have when created from a template
    export interface PodTemplateSpec {
      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.PodSpec

    }

    // PortworxVolumeSource represents a Portworx volume resource.
    export interface PortworxVolumeSource {
      // FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // VolumeID uniquely identifies a Portworx volume
      readonly volumeID: string

    }

    // An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
    export interface PreferredSchedulingTerm {
      // A node selector term, associated with the corresponding weight.
      readonly preference: core.v1.NodeSelectorTerm

      // Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
      readonly weight: number

    }

    // Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
    export interface Probe {
      // One and only one of the following should be specified. Exec specifies the action to take.
      readonly exec: core.v1.ExecAction

      // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
      readonly failureThreshold: number

      // HTTPGet specifies the http request to perform.
      readonly httpGet: core.v1.HTTPGetAction

      // Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
      readonly initialDelaySeconds: number

      // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
      readonly periodSeconds: number

      // Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
      readonly successThreshold: number

      // TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
      readonly tcpSocket: core.v1.TCPSocketAction

      // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
      readonly timeoutSeconds: number

    }

    // Represents a projected volume source
    export interface ProjectedVolumeSource {
      // Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
      readonly defaultMode: number

      // list of volume projections
      readonly sources: core.v1.VolumeProjection[]

    }

    // Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
    export interface QuobyteVolumeSource {
      // Group to map volume access to Default is no group
      readonly group: string

      // ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
      readonly readOnly: boolean

      // Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
      readonly registry: string

      // User to map volume access to Defaults to serivceaccount user
      readonly user: string

      // Volume is a string that references an already created Quobyte volume by name.
      readonly volume: string

    }

    // Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
    export interface RBDPersistentVolumeSource {
      // Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
      readonly fsType: string

      // The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly image: string

      // Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly keyring: string

      // A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly monitors: string[]

      // The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly pool: string

      // ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly readOnly: boolean

      // SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly secretRef: core.v1.SecretReference

      // The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly user: string

    }

    // Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
    export interface RBDVolumeSource {
      // Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
      readonly fsType: string

      // The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly image: string

      // Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly keyring: string

      // A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly monitors: string[]

      // The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly pool: string

      // ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly readOnly: boolean

      // SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly secretRef: core.v1.LocalObjectReference

      // The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
      readonly user: string

    }

    // ReplicationController represents the configuration of a replication controller.
    export interface ReplicationController {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.ReplicationControllerSpec

      // Status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: core.v1.ReplicationControllerStatus

    }

    // ReplicationControllerCondition describes the state of a replication controller at a certain point.
    export interface ReplicationControllerCondition {
      // The last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of replication controller condition.
      readonly type: string

    }

    // ReplicationControllerList is a collection of replication controllers.
    export interface ReplicationControllerList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
      readonly items: core.v1.ReplicationController[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ReplicationControllerSpec is the specification of a replication controller.
    export interface ReplicationControllerSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
      readonly replicas: number

      // Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: object

      // Template is the object that describes the pod that will be created if insufficient replicas are detected. This takes precedence over a TemplateRef. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

    }

    // ReplicationControllerStatus represents the current status of a replication controller.
    export interface ReplicationControllerStatus {
      // The number of available replicas (ready for at least minReadySeconds) for this replication controller.
      readonly availableReplicas: number

      // Represents the latest available observations of a replication controller's current state.
      readonly conditions: core.v1.ReplicationControllerCondition[]

      // The number of pods that have labels matching the labels of the pod template of the replication controller.
      readonly fullyLabeledReplicas: number

      // ObservedGeneration reflects the generation of the most recently observed replication controller.
      readonly observedGeneration: number

      // The number of ready replicas for this replication controller.
      readonly readyReplicas: number

      // Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
      readonly replicas: number

    }

    // ResourceFieldSelector represents container resources (cpu, memory) and their output format
    export interface ResourceFieldSelector {
      // Container name: required for volumes, optional for env vars
      readonly containerName: string

      // Specifies the output format of the exposed resources, defaults to "1"
      readonly divisor: string

      // Required: resource to select
      readonly resource: string

    }

    // ResourceQuota sets aggregate quota restrictions enforced per namespace
    export interface ResourceQuota {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.ResourceQuotaSpec

      // Status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: core.v1.ResourceQuotaStatus

    }

    // ResourceQuotaList is a list of ResourceQuota items.
    export interface ResourceQuotaList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
      readonly items: core.v1.ResourceQuota[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
    export interface ResourceQuotaSpec {
      // Hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
      readonly hard: object

      // A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
      readonly scopes: string[]

    }

    // ResourceQuotaStatus defines the enforced hard limits and observed use.
    export interface ResourceQuotaStatus {
      // Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
      readonly hard: object

      // Used is the current observed total usage of the resource in the namespace.
      readonly used: object

    }

    // ResourceRequirements describes the compute resource requirements.
    export interface ResourceRequirements {
      // Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
      readonly limits: object

      // Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
      readonly requests: object

    }

    // SELinuxOptions are the labels to be applied to the container
    export interface SELinuxOptions {
      // Level is SELinux level label that applies to the container.
      readonly level: string

      // Role is a SELinux role label that applies to the container.
      readonly role: string

      // Type is a SELinux type label that applies to the container.
      readonly type: string

      // User is a SELinux user label that applies to the container.
      readonly user: string

    }

    // ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
    export interface ScaleIOPersistentVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // The host address of the ScaleIO API Gateway.
      readonly gateway: string

      // The name of the ScaleIO Protection Domain for the configured storage.
      readonly protectionDomain: string

      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
      readonly secretRef: core.v1.SecretReference

      // Flag to enable/disable SSL communication with Gateway, default false
      readonly sslEnabled: boolean

      // Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned.
      readonly storageMode: string

      // The ScaleIO Storage Pool associated with the protection domain.
      readonly storagePool: string

      // The name of the storage system as configured in ScaleIO.
      readonly system: string

      // The name of a volume already created in the ScaleIO system that is associated with this volume source.
      readonly volumeName: string

    }

    // ScaleIOVolumeSource represents a persistent ScaleIO volume
    export interface ScaleIOVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // The host address of the ScaleIO API Gateway.
      readonly gateway: string

      // The name of the ScaleIO Protection Domain for the configured storage.
      readonly protectionDomain: string

      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
      readonly secretRef: core.v1.LocalObjectReference

      // Flag to enable/disable SSL communication with Gateway, default false
      readonly sslEnabled: boolean

      // Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned.
      readonly storageMode: string

      // The ScaleIO Storage Pool associated with the protection domain.
      readonly storagePool: string

      // The name of the storage system as configured in ScaleIO.
      readonly system: string

      // The name of a volume already created in the ScaleIO system that is associated with this volume source.
      readonly volumeName: string

    }

    // Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
    export interface Secret {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
      readonly data: object

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API.
      readonly stringData: object

      // Used to facilitate programmatic handling of secret data.
      readonly type: string

    }

    // SecretEnvSource selects a Secret to populate the environment variables with.
    //
    // The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
    export interface SecretEnvSource {
      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the Secret must be defined
      readonly optional: boolean

    }

    // SecretKeySelector selects a key of a Secret.
    export interface SecretKeySelector {
      // The key of the secret to select from.  Must be a valid secret key.
      readonly key: string

      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the Secret or it's key must be defined
      readonly optional: boolean

    }

    // SecretList is a list of Secret.
    export interface SecretList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
      readonly items: core.v1.Secret[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // Adapts a secret into a projected volume.
    //
    // The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
    export interface SecretProjection {
      // If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
      readonly items: core.v1.KeyToPath[]

      // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // Specify whether the Secret or its key must be defined
      readonly optional: boolean

    }

    // SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
    export interface SecretReference {
      // Name is unique within a namespace to reference a secret resource.
      readonly name: string

      // Namespace defines the space within which the secret name must be unique.
      readonly namespace: string

    }

    // Adapts a Secret into a volume.
    //
    // The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
    export interface SecretVolumeSource {
      // Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
      readonly defaultMode: number

      // If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
      readonly items: core.v1.KeyToPath[]

      // Specify whether the Secret or it's keys must be defined
      readonly optional: boolean

      // Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
      readonly secretName: string

    }

    // SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
    export interface SecurityContext {
      // AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
      readonly allowPrivilegeEscalation: boolean

      // The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.
      readonly capabilities: core.v1.Capabilities

      // Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
      readonly privileged: boolean

      // Whether this container has a read-only root filesystem. Default is false.
      readonly readOnlyRootFilesystem: boolean

      // Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
      readonly runAsNonRoot: boolean

      // The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
      readonly runAsUser: number

      // The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
      readonly seLinuxOptions: core.v1.SELinuxOptions

    }

    // Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
    export interface Service {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: core.v1.ServiceSpec

      // Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: core.v1.ServiceStatus

    }

    // ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
    export interface ServiceAccount {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
      readonly automountServiceAccountToken: boolean

      // ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
      readonly imagePullSecrets: core.v1.LocalObjectReference[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret
      readonly secrets: core.v1.ObjectReference[]

    }

    // ServiceAccountList is a list of ServiceAccount objects
    export interface ServiceAccountList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
      readonly items: core.v1.ServiceAccount[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ServiceList holds a list of services.
    export interface ServiceList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of services
      readonly items: core.v1.Service[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ServicePort contains information on service's port.
    export interface ServicePort {
      // The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the 'Name' field in EndpointPort objects. Optional if only one ServicePort is defined on this service.
      readonly name: string

      // The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
      readonly nodePort: number

      // The port that will be exposed by this service.
      readonly port: number

      // The IP protocol for this port. Supports "TCP" and "UDP". Default is TCP.
      readonly protocol: string

      // Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
      readonly targetPort: number | string

    }

    // ServiceSpec describes the attributes that a user creates on a service.
    export interface ServiceSpec {
      // clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are "None", empty string (""), or a valid IP address. "None" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
      readonly clusterIP: string

      // externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
      readonly externalIPs: string[]

      // externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Type to be ExternalName.
      readonly externalName: string

      // externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.
      readonly externalTrafficPolicy: string

      // healthCheckNodePort specifies the healthcheck nodePort for the service. If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only effects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local.
      readonly healthCheckNodePort: number

      // Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
      readonly loadBalancerIP: string

      // If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/
      readonly loadBalancerSourceRanges: string[]

      // The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
      readonly ports: core.v1.ServicePort[]

      // publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. The default value is false. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery. This field will replace the service.alpha.kubernetes.io/tolerate-unready-endpoints when that annotation is deprecated and all clients have been converted to use this field.
      readonly publishNotReadyAddresses: boolean

      // Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
      readonly selector: object

      // Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
      readonly sessionAffinity: string

      // sessionAffinityConfig contains the configurations of session affinity.
      readonly sessionAffinityConfig: core.v1.SessionAffinityConfig

      // type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services---service-types
      readonly type: string

    }

    // ServiceStatus represents the current status of a service.
    export interface ServiceStatus {
      // LoadBalancer contains the current status of the load-balancer, if one is present.
      readonly loadBalancer: core.v1.LoadBalancerStatus

    }

    // SessionAffinityConfig represents the configurations of session affinity.
    export interface SessionAffinityConfig {
      // clientIP contains the configurations of Client IP based session affinity.
      readonly clientIP: core.v1.ClientIPConfig

    }

    // Represents a StorageOS persistent volume resource.
    export interface StorageOSPersistentVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
      readonly secretRef: core.v1.ObjectReference

      // VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
      readonly volumeName: string

      // VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
      readonly volumeNamespace: string

    }

    // Represents a StorageOS persistent volume resource.
    export interface StorageOSVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
      readonly readOnly: boolean

      // SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
      readonly secretRef: core.v1.LocalObjectReference

      // VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
      readonly volumeName: string

      // VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
      readonly volumeNamespace: string

    }

    // TCPSocketAction describes an action based on opening a socket
    export interface TCPSocketAction {
      // Optional: Host name to connect to, defaults to the pod IP.
      readonly host: string

      // Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
      readonly port: number | string

    }

    // The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
    export interface Taint {
      // Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
      readonly effect: string

      // Required. The taint key to be applied to a node.
      readonly key: string

      // TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
      readonly timeAdded: string

      // Required. The taint value corresponding to the taint key.
      readonly value: string

    }

    // The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
    export interface Toleration {
      // Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
      readonly effect: string

      // Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
      readonly key: string

      // Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
      readonly operator: string

      // TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
      readonly tolerationSeconds: number

      // Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
      readonly value: string

    }

    // Volume represents a named volume in a pod that may be accessed by any container in the pod.
    export interface Volume {
      // AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
      readonly awsElasticBlockStore: core.v1.AWSElasticBlockStoreVolumeSource

      // AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
      readonly azureDisk: core.v1.AzureDiskVolumeSource

      // AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
      readonly azureFile: core.v1.AzureFileVolumeSource

      // CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
      readonly cephfs: core.v1.CephFSVolumeSource

      // Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
      readonly cinder: core.v1.CinderVolumeSource

      // ConfigMap represents a configMap that should populate this volume
      readonly configMap: core.v1.ConfigMapVolumeSource

      // DownwardAPI represents downward API about the pod that should populate this volume
      readonly downwardAPI: core.v1.DownwardAPIVolumeSource

      // EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
      readonly emptyDir: core.v1.EmptyDirVolumeSource

      // FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
      readonly fc: core.v1.FCVolumeSource

      // FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
      readonly flexVolume: core.v1.FlexVolumeSource

      // Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
      readonly flocker: core.v1.FlockerVolumeSource

      // GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
      readonly gcePersistentDisk: core.v1.GCEPersistentDiskVolumeSource

      // GitRepo represents a git repository at a particular revision.
      readonly gitRepo: core.v1.GitRepoVolumeSource

      // Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
      readonly glusterfs: core.v1.GlusterfsVolumeSource

      // HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
      readonly hostPath: core.v1.HostPathVolumeSource

      // ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://releases.k8s.io/HEAD/examples/volumes/iscsi/README.md
      readonly iscsi: core.v1.ISCSIVolumeSource

      // Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
      readonly name: string

      // NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
      readonly nfs: core.v1.NFSVolumeSource

      // PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
      readonly persistentVolumeClaim: core.v1.PersistentVolumeClaimVolumeSource

      // PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
      readonly photonPersistentDisk: core.v1.PhotonPersistentDiskVolumeSource

      // PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
      readonly portworxVolume: core.v1.PortworxVolumeSource

      // Items for all in one resources secrets, configmaps, and downward API
      readonly projected: core.v1.ProjectedVolumeSource

      // Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
      readonly quobyte: core.v1.QuobyteVolumeSource

      // RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
      readonly rbd: core.v1.RBDVolumeSource

      // ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
      readonly scaleIO: core.v1.ScaleIOVolumeSource

      // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
      readonly secret: core.v1.SecretVolumeSource

      // StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
      readonly storageos: core.v1.StorageOSVolumeSource

      // VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
      readonly vsphereVolume: core.v1.VsphereVirtualDiskVolumeSource

    }

    // volumeDevice describes a mapping of a raw block device within a container.
    export interface VolumeDevice {
      // devicePath is the path inside of the container that the device will be mapped to.
      readonly devicePath: string

      // name must match the name of a persistentVolumeClaim in the pod
      readonly name: string

    }

    // VolumeMount describes a mounting of a Volume within a container.
    export interface VolumeMount {
      // Path within the container at which the volume should be mounted.  Must not contain ':'.
      readonly mountPath: string

      // mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationHostToContainer is used. This field is alpha in 1.8 and can be reworked or removed in a future release.
      readonly mountPropagation: string

      // This must match the Name of a Volume.
      readonly name: string

      // Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
      readonly readOnly: boolean

      // Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
      readonly subPath: string

    }

    // Projection that may be projected along with other supported volume types
    export interface VolumeProjection {
      // information about the configMap data to project
      readonly configMap: core.v1.ConfigMapProjection

      // information about the downwardAPI data to project
      readonly downwardAPI: core.v1.DownwardAPIProjection

      // information about the secret data to project
      readonly secret: core.v1.SecretProjection

    }

    // Represents a vSphere volume resource.
    export interface VsphereVirtualDiskVolumeSource {
      // Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
      readonly fsType: string

      // Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
      readonly storagePolicyID: string

      // Storage Policy Based Management (SPBM) profile name.
      readonly storagePolicyName: string

      // Path that identifies vSphere volume vmdk
      readonly volumePath: string

    }

    // The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
    export interface WeightedPodAffinityTerm {
      // Required. A pod affinity term, associated with the corresponding weight.
      readonly podAffinityTerm: core.v1.PodAffinityTerm

      // weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
      readonly weight: number

    }

  }


}
export namespace events {
  export namespace v1beta1 {
    // Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
    export interface Event {
      // What action was taken/failed regarding to the regarding object.
      readonly action: string

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Deprecated field assuring backward compatibility with core.v1 Event type
      readonly deprecatedCount: number

      // Deprecated field assuring backward compatibility with core.v1 Event type
      readonly deprecatedFirstTimestamp: string

      // Deprecated field assuring backward compatibility with core.v1 Event type
      readonly deprecatedLastTimestamp: string

      // Deprecated field assuring backward compatibility with core.v1 Event type
      readonly deprecatedSource: core.v1.EventSource

      // Required. Time when this Event was first observed.
      readonly eventTime: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
      readonly note: string

      // Why the action was taken.
      readonly reason: string

      // The object this Event is about. In most cases it's an Object reporting controller implements. E.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
      readonly regarding: core.v1.ObjectReference

      // Optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
      readonly related: core.v1.ObjectReference

      // Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
      readonly reportingController: string

      // ID of the controller instance, e.g. `kubelet-xyzf`.
      readonly reportingInstance: string

      // Data about the Event series this event represents or nil if it's a singleton Event.
      readonly series: events.v1beta1.EventSeries

      // Type of this event (Normal, Warning), new types could be added in the future.
      readonly type: string

    }

    // EventList is a list of Event objects.
    export interface EventList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of schema objects.
      readonly items: events.v1beta1.Event[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // EventSeries contain information on series of events, i.e. thing that was/is happening continously for some time.
    export interface EventSeries {
      // Number of occurrences in this series up to the last heartbeat time
      readonly count: number

      // Time when last Event from the series was seen before last heartbeat.
      readonly lastObservedTime: string

      // Information whether this series is ongoing or finished.
      readonly state: string

    }

  }


}
export namespace extensions {
  export namespace v1beta1 {
    // AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
    export interface AllowedFlexVolume {
      // Driver is the name of the Flexvolume driver.
      readonly driver: string

    }

    // defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
    export interface AllowedHostPath {
      // is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.
      //
      // Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
      readonly pathPrefix: string

    }

    // DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
    export interface DaemonSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: extensions.v1beta1.DaemonSetSpec

      // The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: extensions.v1beta1.DaemonSetStatus

    }

    // DaemonSetCondition describes the state of a DaemonSet at a certain point.
    export interface DaemonSetCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of DaemonSet condition.
      readonly type: string

    }

    // DaemonSetList is a collection of daemon sets.
    export interface DaemonSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // A list of daemon sets.
      readonly items: extensions.v1beta1.DaemonSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DaemonSetSpec is the specification of a daemon set.
    export interface DaemonSetSpec {
      // The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
      readonly minReadySeconds: number

      // The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
      readonly revisionHistoryLimit: number

      // A label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

      // DEPRECATED. A sequence number representing a specific generation of the template. Populated by the system. It can be set only during the creation.
      readonly templateGeneration: number

      // An update strategy to replace existing DaemonSet pods with new pods.
      readonly updateStrategy: extensions.v1beta1.DaemonSetUpdateStrategy

    }

    // DaemonSetStatus represents the current status of a daemon set.
    export interface DaemonSetStatus {
      // Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
      readonly collisionCount: number

      // Represents the latest available observations of a DaemonSet's current state.
      readonly conditions: extensions.v1beta1.DaemonSetCondition[]

      // The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly currentNumberScheduled: number

      // The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly desiredNumberScheduled: number

      // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
      readonly numberAvailable: number

      // The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
      readonly numberMisscheduled: number

      // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
      readonly numberReady: number

      // The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
      readonly numberUnavailable: number

      // The most recent generation observed by the daemon set controller.
      readonly observedGeneration: number

      // The total number of nodes that are running updated daemon pod
      readonly updatedNumberScheduled: number

    }


    export interface DaemonSetUpdateStrategy {
      // Rolling update config params. Present only if type = "RollingUpdate".
      readonly rollingUpdate: extensions.v1beta1.RollingUpdateDaemonSet

      // Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is OnDelete.
      readonly type: string

    }

    // DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
    export interface Deployment {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the Deployment.
      readonly spec: extensions.v1beta1.DeploymentSpec

      // Most recently observed status of the Deployment.
      readonly status: extensions.v1beta1.DeploymentStatus

    }

    // DeploymentCondition describes the state of a deployment at a certain point.
    export interface DeploymentCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // The last time this condition was updated.
      readonly lastUpdateTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of deployment condition.
      readonly type: string

    }

    // DeploymentList is a list of Deployments.
    export interface DeploymentList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of Deployments.
      readonly items: extensions.v1beta1.Deployment[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
    export interface DeploymentRollback {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Required: This must match the Name of a deployment.
      readonly name: string

      // The config of this deployment rollback.
      readonly rollbackTo: extensions.v1beta1.RollbackConfig

      // The annotations to be updated to a deployment
      readonly updatedAnnotations: object

    }

    // DeploymentSpec is the specification of the desired behavior of the Deployment.
    export interface DeploymentSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Indicates that the deployment is paused and will not be processed by the deployment controller.
      readonly paused: boolean

      // The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is not set by default.
      readonly progressDeadlineSeconds: number

      // Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
      readonly replicas: number

      // The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified.
      readonly revisionHistoryLimit: number

      // DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done.
      readonly rollbackTo: extensions.v1beta1.RollbackConfig

      // Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
      readonly selector: meta.v1.LabelSelector

      // The deployment strategy to use to replace existing pods with new ones.
      readonly strategy: extensions.v1beta1.DeploymentStrategy

      // Template describes the pods that will be created.
      readonly template: core.v1.PodTemplateSpec

    }

    // DeploymentStatus is the most recently observed status of the Deployment.
    export interface DeploymentStatus {
      // Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
      readonly availableReplicas: number

      // Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
      readonly collisionCount: number

      // Represents the latest available observations of a deployment's current state.
      readonly conditions: extensions.v1beta1.DeploymentCondition[]

      // The generation observed by the deployment controller.
      readonly observedGeneration: number

      // Total number of ready pods targeted by this deployment.
      readonly readyReplicas: number

      // Total number of non-terminated pods targeted by this deployment (their labels match the selector).
      readonly replicas: number

      // Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
      readonly unavailableReplicas: number

      // Total number of non-terminated pods targeted by this deployment that have the desired template spec.
      readonly updatedReplicas: number

    }

    // DeploymentStrategy describes how to replace existing pods with new ones.
    export interface DeploymentStrategy {
      // Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
      readonly rollingUpdate: extensions.v1beta1.RollingUpdateDeployment

      // Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
      readonly type: string

    }

    // FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
    export interface FSGroupStrategyOptions {
      // Ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end.
      readonly ranges: extensions.v1beta1.IDRange[]

      // Rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
      readonly rule: string

    }

    // HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
    export interface HTTPIngressPath {
      // Backend defines the referenced service endpoint to which the traffic will be forwarded to.
      readonly backend: extensions.v1beta1.IngressBackend

      // Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.
      readonly path: string

    }

    // HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
    export interface HTTPIngressRuleValue {
      // A collection of paths that map requests to backends.
      readonly paths: extensions.v1beta1.HTTPIngressPath[]

    }

    // Host Port Range defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
    export interface HostPortRange {
      // max is the end of the range, inclusive.
      readonly max: number

      // min is the start of the range, inclusive.
      readonly min: number

    }

    // ID Range provides a min/max of an allowed range of IDs.
    export interface IDRange {
      // Max is the end of the range, inclusive.
      readonly max: number

      // Min is the start of the range, inclusive.
      readonly min: number

    }

    // DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
    export interface IPBlock {
      // CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24"
      readonly cidr: string

      // Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range
      readonly except: string[]

    }

    // Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
    export interface Ingress {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: extensions.v1beta1.IngressSpec

      // Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: extensions.v1beta1.IngressStatus

    }

    // IngressBackend describes all endpoints for a given service and port.
    export interface IngressBackend {
      // Specifies the name of the referenced service.
      readonly serviceName: string

      // Specifies the port of the referenced service.
      readonly servicePort: number | string

    }

    // IngressList is a collection of Ingress.
    export interface IngressList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of Ingress.
      readonly items: extensions.v1beta1.Ingress[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
    export interface IngressRule {
      // Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
      // 	  IP in the Spec of the parent Ingress.
      // 2. The `:` delimiter is not respected because ports are not allowed.
      // 	  Currently the port of an Ingress is implicitly :80 for http and
      // 	  :443 for https.
      // Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
      readonly host: string


      readonly http: extensions.v1beta1.HTTPIngressRuleValue

    }

    // IngressSpec describes the Ingress the user wishes to exist.
    export interface IngressSpec {
      // A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default.
      readonly backend: extensions.v1beta1.IngressBackend

      // A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
      readonly rules: extensions.v1beta1.IngressRule[]

      // TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
      readonly tls: extensions.v1beta1.IngressTLS[]

    }

    // IngressStatus describe the current state of the Ingress.
    export interface IngressStatus {
      // LoadBalancer contains the current status of the load-balancer.
      readonly loadBalancer: core.v1.LoadBalancerStatus

    }

    // IngressTLS describes the transport layer security associated with an Ingress.
    export interface IngressTLS {
      // Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
      readonly hosts: string[]

      // SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
      readonly secretName: string

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
    export interface NetworkPolicy {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior for this NetworkPolicy.
      readonly spec: extensions.v1beta1.NetworkPolicySpec

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
    export interface NetworkPolicyEgressRule {
      // List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
      readonly ports: extensions.v1beta1.NetworkPolicyPort[]

      // List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
      readonly to: extensions.v1beta1.NetworkPolicyPeer[]

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
    export interface NetworkPolicyIngressRule {
      // List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
      readonly from: extensions.v1beta1.NetworkPolicyPeer[]

      // List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
      readonly ports: extensions.v1beta1.NetworkPolicyPort[]

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
    export interface NetworkPolicyList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of schema objects.
      readonly items: extensions.v1beta1.NetworkPolicy[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
    export interface NetworkPolicyPeer {
      // IPBlock defines policy on a particular IPBlock
      readonly ipBlock: extensions.v1beta1.IPBlock

      // Selects Namespaces using cluster scoped-labels.  This matches all pods in all namespaces selected by this label selector. This field follows standard label selector semantics. If present but empty, this selector selects all namespaces.
      readonly namespaceSelector: meta.v1.LabelSelector

      // This is a label selector which selects Pods in this namespace. This field follows standard label selector semantics. If present but empty, this selector selects all pods in this namespace.
      readonly podSelector: meta.v1.LabelSelector

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
    export interface NetworkPolicyPort {
      // If specified, the port on the given protocol.  This can either be a numerical or named port on a pod.  If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
      readonly port: number | string

      // Optional.  The protocol (TCP or UDP) which traffic must match. If not specified, this field defaults to TCP.
      readonly protocol: string

    }

    // DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
    export interface NetworkPolicySpec {
      // List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
      readonly egress: extensions.v1beta1.NetworkPolicyEgressRule[]

      // List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default).
      readonly ingress: extensions.v1beta1.NetworkPolicyIngressRule[]

      // Selects the pods to which this NetworkPolicy object applies.  The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods.  In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
      readonly podSelector: meta.v1.LabelSelector

      // List of rule types that the NetworkPolicy relates to. Valid options are Ingress, Egress, or Ingress,Egress. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
      readonly policyTypes: string[]

    }

    // Pod Security Policy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
    export interface PodSecurityPolicy {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // spec defines the policy enforced.
      readonly spec: extensions.v1beta1.PodSecurityPolicySpec

    }

    // Pod Security Policy List is a list of PodSecurityPolicy objects.
    export interface PodSecurityPolicyList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of schema objects.
      readonly items: extensions.v1beta1.PodSecurityPolicy[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // Pod Security Policy Spec defines the policy enforced.
    export interface PodSecurityPolicySpec {
      // AllowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
      readonly allowPrivilegeEscalation: boolean

      // AllowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both AllowedCapabilities and RequiredDropCapabilities.
      readonly allowedCapabilities: string[]

      // AllowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "Volumes" field.
      readonly allowedFlexVolumes: extensions.v1beta1.AllowedFlexVolume[]

      // is a white list of allowed host paths. Empty indicates that all host paths may be used.
      readonly allowedHostPaths: extensions.v1beta1.AllowedHostPath[]

      // DefaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both DefaultAddCapabilities and RequiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the AllowedCapabilities list.
      readonly defaultAddCapabilities: string[]

      // DefaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
      readonly defaultAllowPrivilegeEscalation: boolean

      // FSGroup is the strategy that will dictate what fs group is used by the SecurityContext.
      readonly fsGroup: extensions.v1beta1.FSGroupStrategyOptions

      // hostIPC determines if the policy allows the use of HostIPC in the pod spec.
      readonly hostIPC: boolean

      // hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
      readonly hostNetwork: boolean

      // hostPID determines if the policy allows the use of HostPID in the pod spec.
      readonly hostPID: boolean

      // hostPorts determines which host port ranges are allowed to be exposed.
      readonly hostPorts: extensions.v1beta1.HostPortRange[]

      // privileged determines if a pod can request to be run as privileged.
      readonly privileged: boolean

      // ReadOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
      readonly readOnlyRootFilesystem: boolean

      // RequiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
      readonly requiredDropCapabilities: string[]

      // runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
      readonly runAsUser: extensions.v1beta1.RunAsUserStrategyOptions

      // seLinux is the strategy that will dictate the allowable labels that may be set.
      readonly seLinux: extensions.v1beta1.SELinuxStrategyOptions

      // SupplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
      readonly supplementalGroups: extensions.v1beta1.SupplementalGroupsStrategyOptions

      // volumes is a white list of allowed volume plugins.  Empty indicates that all plugins may be used.
      readonly volumes: string[]

    }

    // DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
    export interface ReplicaSet {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly spec: extensions.v1beta1.ReplicaSetSpec

      // Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: extensions.v1beta1.ReplicaSetStatus

    }

    // ReplicaSetCondition describes the state of a replica set at a certain point.
    export interface ReplicaSetCondition {
      // The last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // A human readable message indicating details about the transition.
      readonly message: string

      // The reason for the condition's last transition.
      readonly reason: string

      // Status of the condition, one of True, False, Unknown.
      readonly status: string

      // Type of replica set condition.
      readonly type: string

    }

    // ReplicaSetList is a collection of ReplicaSets.
    export interface ReplicaSetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
      readonly items: extensions.v1beta1.ReplicaSet[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

    }

    // ReplicaSetSpec is the specification of a ReplicaSet.
    export interface ReplicaSetSpec {
      // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
      readonly minReadySeconds: number

      // Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
      readonly replicas: number

      // Selector is a label query over pods that should match the replica count. If the selector is empty, it is defaulted to the labels present on the pod template. Label keys and values that must match in order to be controlled by this replica set. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly selector: meta.v1.LabelSelector

      // Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
      readonly template: core.v1.PodTemplateSpec

    }

    // ReplicaSetStatus represents the current status of a ReplicaSet.
    export interface ReplicaSetStatus {
      // The number of available replicas (ready for at least minReadySeconds) for this replica set.
      readonly availableReplicas: number

      // Represents the latest available observations of a replica set's current state.
      readonly conditions: extensions.v1beta1.ReplicaSetCondition[]

      // The number of pods that have labels matching the labels of the pod template of the replicaset.
      readonly fullyLabeledReplicas: number

      // ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
      readonly observedGeneration: number

      // The number of ready replicas for this replica set.
      readonly readyReplicas: number

      // Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
      readonly replicas: number

    }

    // DEPRECATED.
    export interface RollbackConfig {
      // The revision to rollback to. If set to 0, rollback to the last revision.
      readonly revision: number

    }

    // Spec to control the desired behavior of daemon set rolling update.
    export interface RollingUpdateDaemonSet {
      // The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
      readonly maxUnavailable: number | string

    }

    // Spec to control the desired behavior of rolling update.
    export interface RollingUpdateDeployment {
      // The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. By default, a value of 1 is used. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
      readonly maxSurge: number | string

      // The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. By default, a fixed value of 1 is used. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
      readonly maxUnavailable: number | string

    }

    // Run A sUser Strategy Options defines the strategy type and any options used to create the strategy.
    export interface RunAsUserStrategyOptions {
      // Ranges are the allowed ranges of uids that may be used.
      readonly ranges: extensions.v1beta1.IDRange[]

      // Rule is the strategy that will dictate the allowable RunAsUser values that may be set.
      readonly rule: string

    }

    // SELinux  Strategy Options defines the strategy type and any options used to create the strategy.
    export interface SELinuxStrategyOptions {
      // type is the strategy that will dictate the allowable labels that may be set.
      readonly rule: string

      // seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
      readonly seLinuxOptions: core.v1.SELinuxOptions

    }

    // represents a scaling request for a resource.
    export interface Scale {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
      readonly metadata: meta.v1.ObjectMeta

      // defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
      readonly spec: extensions.v1beta1.ScaleSpec

      // current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
      readonly status: extensions.v1beta1.ScaleStatus

    }

    // describes the attributes of a scale subresource
    export interface ScaleSpec {
      // desired number of instances for the scaled object.
      readonly replicas: number

    }

    // represents the current status of a scale subresource.
    export interface ScaleStatus {
      // actual number of observed instances of the scaled object.
      readonly replicas: number

      // label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
      readonly selector: object

      // label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
      readonly targetSelector: string

    }

    // SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
    export interface SupplementalGroupsStrategyOptions {
      // Ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end.
      readonly ranges: extensions.v1beta1.IDRange[]

      // Rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
      readonly rule: string

    }

  }


}
export namespace networking {
  export namespace v1 {
    // IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
    export interface IPBlock {
      // CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24"
      readonly cidr: string

      // Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range
      readonly except: string[]

    }

    // NetworkPolicy describes what network traffic is allowed for a set of Pods
    export interface NetworkPolicy {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior for this NetworkPolicy.
      readonly spec: networking.v1.NetworkPolicySpec

    }

    // NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
    export interface NetworkPolicyEgressRule {
      // List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
      readonly ports: networking.v1.NetworkPolicyPort[]

      // List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
      readonly to: networking.v1.NetworkPolicyPeer[]

    }

    // NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
    export interface NetworkPolicyIngressRule {
      // List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
      readonly from: networking.v1.NetworkPolicyPeer[]

      // List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
      readonly ports: networking.v1.NetworkPolicyPort[]

    }

    // NetworkPolicyList is a list of NetworkPolicy objects.
    export interface NetworkPolicyList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of schema objects.
      readonly items: networking.v1.NetworkPolicy[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // NetworkPolicyPeer describes a peer to allow traffic from. Exactly one of its fields must be specified.
    export interface NetworkPolicyPeer {
      // IPBlock defines policy on a particular IPBlock
      readonly ipBlock: networking.v1.IPBlock

      // Selects Namespaces using cluster scoped-labels. This matches all pods in all namespaces selected by this label selector. This field follows standard label selector semantics. If present but empty, this selector selects all namespaces.
      readonly namespaceSelector: meta.v1.LabelSelector

      // This is a label selector which selects Pods in this namespace. This field follows standard label selector semantics. If present but empty, this selector selects all pods in this namespace.
      readonly podSelector: meta.v1.LabelSelector

    }

    // NetworkPolicyPort describes a port to allow traffic on
    export interface NetworkPolicyPort {
      // The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers.
      readonly port: number | string

      // The protocol (TCP or UDP) which traffic must match. If not specified, this field defaults to TCP.
      readonly protocol: string

    }

    // NetworkPolicySpec provides the specification of a NetworkPolicy
    export interface NetworkPolicySpec {
      // List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
      readonly egress: networking.v1.NetworkPolicyEgressRule[]

      // List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
      readonly ingress: networking.v1.NetworkPolicyIngressRule[]

      // Selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
      readonly podSelector: meta.v1.LabelSelector

      // List of rule types that the NetworkPolicy relates to. Valid options are Ingress, Egress, or Ingress,Egress. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
      readonly policyTypes: string[]

    }

  }


}
export namespace policy {
  export namespace v1beta1 {
    // Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
    export interface Eviction {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // DeleteOptions may be provided
      readonly deleteOptions: meta.v1.DeleteOptions

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // ObjectMeta describes the pod that is being evicted.
      readonly metadata: meta.v1.ObjectMeta

    }

    // PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
    export interface PodDisruptionBudget {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired behavior of the PodDisruptionBudget.
      readonly spec: policy.v1beta1.PodDisruptionBudgetSpec

      // Most recently observed status of the PodDisruptionBudget.
      readonly status: policy.v1beta1.PodDisruptionBudgetStatus

    }

    // PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
    export interface PodDisruptionBudgetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly items: policy.v1beta1.PodDisruptionBudget[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
    export interface PodDisruptionBudgetSpec {
      // An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
      readonly maxUnavailable: number | string

      // An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
      readonly minAvailable: number | string

      // Label query over pods whose evictions are managed by the disruption budget.
      readonly selector: meta.v1.LabelSelector

    }

    // PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
    export interface PodDisruptionBudgetStatus {
      // current number of healthy pods
      readonly currentHealthy: number

      // minimum desired number of healthy pods
      readonly desiredHealthy: number

      // DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
      readonly disruptedPods: object

      // Number of pod disruptions that are currently allowed.
      readonly disruptionsAllowed: number

      // total number of pods counted by this disruption budget
      readonly expectedPods: number

      // Most recent generation observed when updating this PDB status. PodDisruptionsAllowed and other status informatio is valid only if observedGeneration equals to PDB's object generation.
      readonly observedGeneration: number

    }

  }


}
export namespace rbac {
  export namespace v1 {
    // AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
    export interface AggregationRule {
      // ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
      readonly clusterRoleSelectors: meta.v1.LabelSelector[]

    }

    // ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
    export interface ClusterRole {
      // AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
      readonly aggregationRule: rbac.v1.AggregationRule

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Rules holds all the PolicyRules for this ClusterRole
      readonly rules: rbac.v1.PolicyRule[]

    }

    // ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
    export interface ClusterRoleBinding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
      readonly roleRef: rbac.v1.RoleRef

      // Subjects holds references to the objects the role applies to.
      readonly subjects: rbac.v1.Subject[]

    }

    // ClusterRoleBindingList is a collection of ClusterRoleBindings
    export interface ClusterRoleBindingList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ClusterRoleBindings
      readonly items: rbac.v1.ClusterRoleBinding[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // ClusterRoleList is a collection of ClusterRoles
    export interface ClusterRoleList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ClusterRoles
      readonly items: rbac.v1.ClusterRole[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
    export interface PolicyRule {
      // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
      readonly apiGroups: string[]

      // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
      readonly nonResourceURLs: string[]

      // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
      readonly resourceNames: string[]

      // Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
      readonly resources: string[]

      // Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
      readonly verbs: string[]

    }

    // Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
    export interface Role {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Rules holds all the PolicyRules for this Role
      readonly rules: rbac.v1.PolicyRule[]

    }

    // RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
    export interface RoleBinding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
      readonly roleRef: rbac.v1.RoleRef

      // Subjects holds references to the objects the role applies to.
      readonly subjects: rbac.v1.Subject[]

    }

    // RoleBindingList is a collection of RoleBindings
    export interface RoleBindingList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of RoleBindings
      readonly items: rbac.v1.RoleBinding[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // RoleList is a collection of Roles
    export interface RoleList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of Roles
      readonly items: rbac.v1.Role[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // RoleRef contains information that points to the role being used
    export interface RoleRef {
      // APIGroup is the group for the resource being referenced
      readonly apiGroup: string

      // Kind is the type of resource being referenced
      readonly kind: string

      // Name is the name of resource being referenced
      readonly name: string

    }

    // Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
    export interface Subject {
      // APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
      readonly apiGroup: string

      // Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
      readonly kind: string

      // Name of the object being referenced.
      readonly name: string

      // Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
      readonly namespace: string

    }

  }

  export namespace v1alpha1 {
    // AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
    export interface AggregationRule {
      // ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
      readonly clusterRoleSelectors: meta.v1.LabelSelector[]

    }

    // ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
    export interface ClusterRole {
      // AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
      readonly aggregationRule: rbac.v1alpha1.AggregationRule

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Rules holds all the PolicyRules for this ClusterRole
      readonly rules: rbac.v1alpha1.PolicyRule[]

    }

    // ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
    export interface ClusterRoleBinding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
      readonly roleRef: rbac.v1alpha1.RoleRef

      // Subjects holds references to the objects the role applies to.
      readonly subjects: rbac.v1alpha1.Subject[]

    }

    // ClusterRoleBindingList is a collection of ClusterRoleBindings
    export interface ClusterRoleBindingList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ClusterRoleBindings
      readonly items: rbac.v1alpha1.ClusterRoleBinding[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // ClusterRoleList is a collection of ClusterRoles
    export interface ClusterRoleList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ClusterRoles
      readonly items: rbac.v1alpha1.ClusterRole[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
    export interface PolicyRule {
      // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
      readonly apiGroups: string[]

      // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path This name is intentionally different than the internal type so that the DefaultConvert works nicely and because the ordering may be different. Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
      readonly nonResourceURLs: string[]

      // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
      readonly resourceNames: string[]

      // Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
      readonly resources: string[]

      // Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
      readonly verbs: string[]

    }

    // Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
    export interface Role {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Rules holds all the PolicyRules for this Role
      readonly rules: rbac.v1alpha1.PolicyRule[]

    }

    // RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
    export interface RoleBinding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
      readonly roleRef: rbac.v1alpha1.RoleRef

      // Subjects holds references to the objects the role applies to.
      readonly subjects: rbac.v1alpha1.Subject[]

    }

    // RoleBindingList is a collection of RoleBindings
    export interface RoleBindingList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of RoleBindings
      readonly items: rbac.v1alpha1.RoleBinding[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // RoleList is a collection of Roles
    export interface RoleList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of Roles
      readonly items: rbac.v1alpha1.Role[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // RoleRef contains information that points to the role being used
    export interface RoleRef {
      // APIGroup is the group for the resource being referenced
      readonly apiGroup: string

      // Kind is the type of resource being referenced
      readonly kind: string

      // Name is the name of resource being referenced
      readonly name: string

    }

    // Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
    export interface Subject {
      // APIVersion holds the API group and version of the referenced subject. Defaults to "v1" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io/v1alpha1" for User and Group subjects.
      readonly apiVersion: string

      // Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
      readonly kind: string

      // Name of the object being referenced.
      readonly name: string

      // Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
      readonly namespace: string

    }

  }

  export namespace v1beta1 {
    // AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
    export interface AggregationRule {
      // ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
      readonly clusterRoleSelectors: meta.v1.LabelSelector[]

    }

    // ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
    export interface ClusterRole {
      // AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
      readonly aggregationRule: rbac.v1beta1.AggregationRule

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Rules holds all the PolicyRules for this ClusterRole
      readonly rules: rbac.v1beta1.PolicyRule[]

    }

    // ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
    export interface ClusterRoleBinding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
      readonly roleRef: rbac.v1beta1.RoleRef

      // Subjects holds references to the objects the role applies to.
      readonly subjects: rbac.v1beta1.Subject[]

    }

    // ClusterRoleBindingList is a collection of ClusterRoleBindings
    export interface ClusterRoleBindingList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ClusterRoleBindings
      readonly items: rbac.v1beta1.ClusterRoleBinding[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // ClusterRoleList is a collection of ClusterRoles
    export interface ClusterRoleList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of ClusterRoles
      readonly items: rbac.v1beta1.ClusterRole[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
    export interface PolicyRule {
      // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
      readonly apiGroups: string[]

      // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
      readonly nonResourceURLs: string[]

      // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
      readonly resourceNames: string[]

      // Resources is a list of resources this rule applies to.  '*' represents all resources in the specified apiGroups. '*/foo' represents the subresource 'foo' for all resources in the specified apiGroups.
      readonly resources: string[]

      // Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
      readonly verbs: string[]

    }

    // Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
    export interface Role {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // Rules holds all the PolicyRules for this Role
      readonly rules: rbac.v1beta1.PolicyRule[]

    }

    // RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
    export interface RoleBinding {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ObjectMeta

      // RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
      readonly roleRef: rbac.v1beta1.RoleRef

      // Subjects holds references to the objects the role applies to.
      readonly subjects: rbac.v1beta1.Subject[]

    }

    // RoleBindingList is a collection of RoleBindings
    export interface RoleBindingList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of RoleBindings
      readonly items: rbac.v1beta1.RoleBinding[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // RoleList is a collection of Roles
    export interface RoleList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of Roles
      readonly items: rbac.v1beta1.Role[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata.
      readonly metadata: meta.v1.ListMeta

    }

    // RoleRef contains information that points to the role being used
    export interface RoleRef {
      // APIGroup is the group for the resource being referenced
      readonly apiGroup: string

      // Kind is the type of resource being referenced
      readonly kind: string

      // Name is the name of resource being referenced
      readonly name: string

    }

    // Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
    export interface Subject {
      // APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
      readonly apiGroup: string

      // Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
      readonly kind: string

      // Name of the object being referenced.
      readonly name: string

      // Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
      readonly namespace: string

    }

  }


}
export namespace scheduling {
  export namespace v1alpha1 {
    // PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
    export interface PriorityClass {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // description is an arbitrary string that usually provides guidelines on when this priority class should be used.
      readonly description: string

      // globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class.
      readonly globalDefault: boolean

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
      readonly value: number

    }

    // PriorityClassList is a collection of priority classes.
    export interface PriorityClassList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // items is the list of PriorityClasses
      readonly items: scheduling.v1alpha1.PriorityClass[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

  }


}
export namespace settings {
  export namespace v1alpha1 {
    // PodPreset is a policy resource that defines additional runtime requirements for a Pod.
    export interface PodPreset {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta


      readonly spec: settings.v1alpha1.PodPresetSpec

    }

    // PodPresetList is a list of PodPreset objects.
    export interface PodPresetList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is a list of schema objects.
      readonly items: settings.v1alpha1.PodPreset[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // PodPresetSpec is a description of a pod preset.
    export interface PodPresetSpec {
      // Env defines the collection of EnvVar to inject into containers.
      readonly env: core.v1.EnvVar[]

      // EnvFrom defines the collection of EnvFromSource to inject into containers.
      readonly envFrom: core.v1.EnvFromSource[]

      // Selector is a label query over a set of resources, in this case pods. Required.
      readonly selector: meta.v1.LabelSelector

      // VolumeMounts defines the collection of VolumeMount to inject into containers.
      readonly volumeMounts: core.v1.VolumeMount[]

      // Volumes defines the collection of Volume to inject into the pod.
      readonly volumes: core.v1.Volume[]

    }

  }


}
export namespace storage {
  export namespace v1 {
    // StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
    //
    // StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
    export interface StorageClass {
      // AllowVolumeExpansion shows whether the storage class allow volume expand
      readonly allowVolumeExpansion: boolean

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
      readonly mountOptions: string[]

      // Parameters holds the parameters for the provisioner that should create volumes of this storage class.
      readonly parameters: object

      // Provisioner indicates the type of the provisioner.
      readonly provisioner: string

      // Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
      readonly reclaimPolicy: string

      // VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is alpha-level and is only honored by servers that enable the VolumeScheduling feature.
      readonly volumeBindingMode: string

    }

    // StorageClassList is a collection of storage classes.
    export interface StorageClassList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of StorageClasses
      readonly items: storage.v1.StorageClass[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

  }

  export namespace v1alpha1 {
    // VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
    //
    // VolumeAttachment objects are non-namespaced.
    export interface VolumeAttachment {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
      readonly spec: storage.v1alpha1.VolumeAttachmentSpec

      // Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
      readonly status: storage.v1alpha1.VolumeAttachmentStatus

    }

    // VolumeAttachmentList is a collection of VolumeAttachment objects.
    export interface VolumeAttachmentList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of VolumeAttachments
      readonly items: storage.v1alpha1.VolumeAttachment[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

    // VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
    export interface VolumeAttachmentSource {
      // Name of the persistent volume to attach.
      readonly persistentVolumeName: string

    }

    // VolumeAttachmentSpec is the specification of a VolumeAttachment request.
    export interface VolumeAttachmentSpec {
      // Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
      readonly attacher: string

      // The node that the volume should be attached to.
      readonly nodeName: string

      // Source represents the volume that should be attached.
      readonly source: storage.v1alpha1.VolumeAttachmentSource

    }

    // VolumeAttachmentStatus is the status of a VolumeAttachment request.
    export interface VolumeAttachmentStatus {
      // The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
      readonly attachError: storage.v1alpha1.VolumeError

      // Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
      readonly attached: boolean

      // Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
      readonly attachmentMetadata: object

      // The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
      readonly detachError: storage.v1alpha1.VolumeError

    }

    // VolumeError captures an error encountered during a volume operation.
    export interface VolumeError {
      // String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information.
      readonly message: string

      // Time the error was encountered.
      readonly time: string

    }

  }

  export namespace v1beta1 {
    // StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
    //
    // StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
    export interface StorageClass {
      // AllowVolumeExpansion shows whether the storage class allow volume expand
      readonly allowVolumeExpansion: boolean

      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ObjectMeta

      // Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
      readonly mountOptions: string[]

      // Parameters holds the parameters for the provisioner that should create volumes of this storage class.
      readonly parameters: object

      // Provisioner indicates the type of the provisioner.
      readonly provisioner: string

      // Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
      readonly reclaimPolicy: string

      // VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is alpha-level and is only honored by servers that enable the VolumeScheduling feature.
      readonly volumeBindingMode: string

    }

    // StorageClassList is a collection of storage classes.
    export interface StorageClassList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items is the list of StorageClasses
      readonly items: storage.v1beta1.StorageClass[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly metadata: meta.v1.ListMeta

    }

  }


}
export namespace apiextensions {
  export namespace v1beta1 {
    // CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
    export interface CustomResourceDefinition {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec describes how the user wants the resources to appear
      readonly spec: apiextensions.v1beta1.CustomResourceDefinitionSpec

      // Status indicates the actual state of the CustomResourceDefinition
      readonly status: apiextensions.v1beta1.CustomResourceDefinitionStatus

    }

    // CustomResourceDefinitionCondition contains details for the current condition of this pod.
    export interface CustomResourceDefinitionCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // Human-readable message indicating details about last transition.
      readonly message: string

      // Unique, one-word, CamelCase reason for the condition's last transition.
      readonly reason: string

      // Status is the status of the condition. Can be True, False, Unknown.
      readonly status: string

      // Type is the type of the condition.
      readonly type: string

    }

    // CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
    export interface CustomResourceDefinitionList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Items individual CustomResourceDefinitions
      readonly items: apiextensions.v1beta1.CustomResourceDefinition[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
    export interface CustomResourceDefinitionNames {
      // Kind is the serialized kind of the resource.  It is normally CamelCase and singular.
      readonly kind: string

      // ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List.
      readonly listKind: string

      // Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase.
      readonly plural: string

      // ShortNames are short names for the resource.  It must be all lowercase.
      readonly shortNames: string[]

      // Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind>
      readonly singular: string

    }

    // CustomResourceDefinitionSpec describes how a user wants their resource to appear
    export interface CustomResourceDefinitionSpec {
      // Group is the group this resource belongs in
      readonly group: string

      // Names are the names used to describe this custom resource
      readonly names: apiextensions.v1beta1.CustomResourceDefinitionNames

      // Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced
      readonly scope: string

      // Validation describes the validation methods for CustomResources
      readonly validation: apiextensions.v1beta1.CustomResourceValidation

      // Version is the version this resource belongs in
      readonly version: string

    }

    // CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
    export interface CustomResourceDefinitionStatus {
      // AcceptedNames are the names that are actually being used to serve discovery They may be different than the names in spec.
      readonly acceptedNames: apiextensions.v1beta1.CustomResourceDefinitionNames

      // Conditions indicate state for particular aspects of a CustomResourceDefinition
      readonly conditions: apiextensions.v1beta1.CustomResourceDefinitionCondition[]

    }

    // CustomResourceValidation is a list of validation methods for CustomResources.
    export interface CustomResourceValidation {
      // OpenAPIV3Schema is the OpenAPI v3 schema to be validated against.
      readonly openAPIV3Schema: apiextensions.v1beta1.JSONSchemaProps

    }

    // ExternalDocumentation allows referencing an external resource for extended documentation.
    export interface ExternalDocumentation {

      readonly description: string


      readonly url: string

    }

    // JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
    export interface JSON {

      readonly Raw: string

    }

    // JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
    export interface JSONSchemaProps {

      readonly $ref: string


      readonly $schema: string


      readonly additionalItems: apiextensions.v1beta1.JSONSchemaPropsOrBool


      readonly additionalProperties: apiextensions.v1beta1.JSONSchemaPropsOrBool


      readonly allOf: apiextensions.v1beta1.JSONSchemaProps[]


      readonly anyOf: apiextensions.v1beta1.JSONSchemaProps[]


      readonly default: apiextensions.v1beta1.JSON


      readonly definitions: object


      readonly dependencies: object


      readonly description: string


      readonly enum: apiextensions.v1beta1.JSON[]


      readonly example: apiextensions.v1beta1.JSON


      readonly exclusiveMaximum: boolean


      readonly exclusiveMinimum: boolean


      readonly externalDocs: apiextensions.v1beta1.ExternalDocumentation


      readonly format: string


      readonly id: string


      readonly items: apiextensions.v1beta1.JSONSchemaPropsOrArray


      readonly maxItems: number


      readonly maxLength: number


      readonly maxProperties: number


      readonly maximum: number


      readonly minItems: number


      readonly minLength: number


      readonly minProperties: number


      readonly minimum: number


      readonly multipleOf: number


      readonly not: apiextensions.v1beta1.JSONSchemaProps


      readonly oneOf: apiextensions.v1beta1.JSONSchemaProps[]


      readonly pattern: string


      readonly patternProperties: object


      readonly properties: object


      readonly required: string[]


      readonly title: string


      readonly type: string


      readonly uniqueItems: boolean

    }

    // JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
    export interface JSONSchemaPropsOrArray {

      readonly JSONSchemas: apiextensions.v1beta1.JSONSchemaProps[]


      readonly Schema: apiextensions.v1beta1.JSONSchemaProps

    }

    // JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
    export interface JSONSchemaPropsOrBool {

      readonly Allows: boolean


      readonly Schema: apiextensions.v1beta1.JSONSchemaProps

    }

    // JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.
    export interface JSONSchemaPropsOrStringArray {

      readonly Property: string[]


      readonly Schema: apiextensions.v1beta1.JSONSchemaProps

    }

  }


}
export namespace api {
  export namespace resource {
  }


}
export namespace meta {
  export namespace v1 {
    // APIGroup contains the name, the supported versions, and the preferred version of a group.
    export interface APIGroup {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // name is the name of the group.
      readonly name: string

      // preferredVersion is the version preferred by the API server, which probably is the storage version.
      readonly preferredVersion: meta.v1.GroupVersionForDiscovery

      // a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
      readonly serverAddressByClientCIDRs: meta.v1.ServerAddressByClientCIDR[]

      // versions are the versions supported in this group.
      readonly versions: meta.v1.GroupVersionForDiscovery[]

    }

    // APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
    export interface APIGroupList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // groups is a list of APIGroup.
      readonly groups: meta.v1.APIGroup[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

    }

    // APIResource specifies the name of a resource and whether it is namespaced.
    export interface APIResource {
      // categories is a list of the grouped resources this resource belongs to (e.g. 'all')
      readonly categories: string[]

      // group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".
      readonly group: string

      // kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
      readonly kind: string

      // name is the plural name of the resource.
      readonly name: string

      // namespaced indicates if a resource is namespaced or not.
      readonly namespaced: boolean

      // shortNames is a list of suggested short names of the resource.
      readonly shortNames: string[]

      // singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
      readonly singularName: string

      // verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)
      readonly verbs: string[]

      // version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".
      readonly version: string

    }

    // APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
    export interface APIResourceList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // groupVersion is the group and version this APIResourceList is for.
      readonly groupVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // resources contains the name of the resources and if they are namespaced.
      readonly resources: meta.v1.APIResource[]

    }

    // APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
    export interface APIVersions {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
      readonly serverAddressByClientCIDRs: meta.v1.ServerAddressByClientCIDR[]

      // versions are the api versions that are available.
      readonly versions: string[]

    }

    // DeleteOptions may be provided when deleting an API object.
    export interface DeleteOptions {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
      readonly gracePeriodSeconds: number

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
      readonly orphanDependents: boolean

      // Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.
      readonly preconditions: meta.v1.Preconditions

      // Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
      readonly propagationPolicy: string

    }

    // GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
    export interface GroupVersionForDiscovery {
      // groupVersion specifies the API group and version in the form "group/version"
      readonly groupVersion: string

      // version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
      readonly version: string

    }

    // Initializer is information about an initializer that has not yet completed.
    export interface Initializer {
      // name of the process that is responsible for initializing this object.
      readonly name: string

    }

    // Initializers tracks the progress of initialization.
    export interface Initializers {
      // Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
      readonly pending: meta.v1.Initializer[]

      // If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.
      readonly result: meta.v1.Status

    }

    // A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
    export interface LabelSelector {
      // matchExpressions is a list of label selector requirements. The requirements are ANDed.
      readonly matchExpressions: meta.v1.LabelSelectorRequirement[]

      // matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
      readonly matchLabels: object

    }

    // A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
    export interface LabelSelectorRequirement {
      // key is the label key that the selector applies to.
      readonly key: string

      // operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
      readonly operator: string

      // values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
      readonly values: string[]

    }

    // ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
    export interface ListMeta {
      // continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response.
      readonly continue: string

      // String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
      readonly resourceVersion: string

      // selfLink is a URL representing this object. Populated by the system. Read-only.
      readonly selfLink: string

    }

    // ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
    export interface ObjectMeta {
      // Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
      readonly annotations: object

      // The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
      readonly clusterName: string

      // CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
      //
      // Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly creationTimestamp: string

      // Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
      readonly deletionGracePeriodSeconds: number

      // DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
      //
      // Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
      readonly deletionTimestamp: string

      // Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
      readonly finalizers: string[]

      // GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
      //
      // If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
      //
      // Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
      readonly generateName: string

      // A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
      readonly generation: number

      // An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.
      //
      // When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.
      readonly initializers: meta.v1.Initializers

      // Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
      readonly labels: object

      // Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
      readonly name: string

      // Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
      //
      // Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
      readonly namespace: string

      // List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
      readonly ownerReferences: meta.v1.OwnerReference[]

      // An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
      //
      // Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
      readonly resourceVersion: string

      // SelfLink is a URL representing this object. Populated by the system. Read-only.
      readonly selfLink: string

      // UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
      //
      // Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
      readonly uid: string

    }

    // OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
    export interface OwnerReference {
      // API version of the referent.
      readonly apiVersion: string

      // If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
      readonly blockOwnerDeletion: boolean

      // If true, this reference points to the managing controller.
      readonly controller: boolean

      // Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
      readonly name: string

      // UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
      readonly uid: string

    }

    // Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
    export interface Preconditions {
      // Specifies the target UID.
      readonly uid: string

    }

    // ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
    export interface ServerAddressByClientCIDR {
      // The CIDR with which clients can match their IP to figure out the server address that they should use.
      readonly clientCIDR: string

      // Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
      readonly serverAddress: string

    }

    // Status is a return value for calls that don't return other objects.
    export interface Status {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Suggested HTTP return code for this status, 0 if not set.
      readonly code: number

      // Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
      readonly details: meta.v1.StatusDetails

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // A human-readable description of the status of this operation.
      readonly message: string

      // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly metadata: meta.v1.ListMeta

      // A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
      readonly reason: string

      // Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
      readonly status: string

    }

    // StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
    export interface StatusCause {
      // The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
      //
      // Examples:
      //   "name" - the field "name" on the current resource
      //   "items[0].name" - the field "name" on the first array entry in "items"
      readonly field: string

      // A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
      readonly message: string

      // A machine-readable description of the cause of the error. If this value is empty there is no information available.
      readonly reason: string

    }

    // StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
    export interface StatusDetails {
      // The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
      readonly causes: meta.v1.StatusCause[]

      // The group attribute of the resource associated with the status StatusReason.
      readonly group: string

      // The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string

      // The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
      readonly name: string

      // If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
      readonly retryAfterSeconds: number

      // UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
      readonly uid: string

    }

    // Event represents a single event to a watched resource.
    export interface WatchEvent {
      // Object is:
      //  * If Type is Added or Modified: the new state of the object.
      //  * If Type is Deleted: the state of the object immediately before deletion.
      //  * If Type is Error: *Status is recommended; other types may make sense
      //    depending on context.
      readonly object: pkg.runtime.RawExtension


      readonly type: string

    }

  }


}
export namespace pkg {
  export namespace runtime {
    // RawExtension is used to hold extensions in external versions.
    //
    // To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
    //
    // // Internal package: type MyAPIObject struct {
    // 	runtime.TypeMeta `json:",inline"`
    // 	MyPlugin runtime.Object `json:"myPlugin"`
    // } type PluginA struct {
    // 	AOption string `json:"aOption"`
    // }
    //
    // // External package: type MyAPIObject struct {
    // 	runtime.TypeMeta `json:",inline"`
    // 	MyPlugin runtime.RawExtension `json:"myPlugin"`
    // } type PluginA struct {
    // 	AOption string `json:"aOption"`
    // }
    //
    // // On the wire, the JSON will look something like this: {
    // 	"kind":"MyAPIObject",
    // 	"apiVersion":"v1",
    // 	"myPlugin": {
    // 		"kind":"PluginA",
    // 		"aOption":"foo",
    // 	},
    // }
    //
    // So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
    export interface RawExtension {
      // Raw is the underlying serialization of this object.
      readonly Raw: string

    }

  }

  export namespace version {
    // Info contains versioning information. how we'll want to distribute that information.
    export interface Info {

      readonly buildDate: string


      readonly compiler: string


      readonly gitCommit: string


      readonly gitTreeState: string


      readonly gitVersion: string


      readonly goVersion: string


      readonly major: string


      readonly minor: string


      readonly platform: string

    }

  }


}
export namespace util {
  export namespace intstr {
  }


}
export namespace apiregistration {
  export namespace v1beta1 {
    // APIService represents a server for a particular GroupVersion. Name must be "version.group".
    export interface APIService {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ObjectMeta

      // Spec contains information for locating and communicating with a server
      readonly spec: apiregistration.v1beta1.APIServiceSpec

      // Status contains derived information about an API server
      readonly status: apiregistration.v1beta1.APIServiceStatus

    }


    export interface APIServiceCondition {
      // Last time the condition transitioned from one status to another.
      readonly lastTransitionTime: string

      // Human-readable message indicating details about last transition.
      readonly message: string

      // Unique, one-word, CamelCase reason for the condition's last transition.
      readonly reason: string

      // Status is the status of the condition. Can be True, False, Unknown.
      readonly status: string

      // Type is the type of the condition.
      readonly type: string

    }

    // APIServiceList is a list of APIService objects.
    export interface APIServiceList {
      // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
      readonly apiVersion: string


      readonly items: apiregistration.v1beta1.APIService[]

      // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
      readonly kind: string


      readonly metadata: meta.v1.ListMeta

    }

    // APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
    export interface APIServiceSpec {
      // CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate.
      readonly caBundle: string

      // Group is the API group name this server hosts
      readonly group: string

      // GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
      readonly groupPriorityMinimum: number

      // InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
      readonly insecureSkipTLSVerify: boolean

      // Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
      readonly service: apiregistration.v1beta1.ServiceReference

      // Version is the API version this server hosts.  For example, "v1"
      readonly version: string

      // VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) Since it's inside of a group, the number can be small, probably in the 10s.
      readonly versionPriority: number

    }

    // APIServiceStatus contains derived information about an API server
    export interface APIServiceStatus {
      // Current service state of apiService.
      readonly conditions: apiregistration.v1beta1.APIServiceCondition[]

    }

    // ServiceReference holds a reference to Service.legacy.k8s.io
    export interface ServiceReference {
      // Name is the name of the service
      readonly name: string

      // Namespace is the namespace of the service
      readonly namespace: string

    }

  }


}

