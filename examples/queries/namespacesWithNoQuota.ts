import {Client} from "../../src";
import {filter, flatMap, toArray} from "rxjs/operators";

process.env.KUBERNETES_SERVICE_HOST = "my-k8s-api-server-host";
process.env.KUBERNETES_SERVICE_PORT = "8081";
process.env.KUBERNETES_SERVICEACCOUNT_TOKEN = 'myToken';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const c = Client.fromFile(<string>process.env.KUBECONFIG);
const c = Client.fromCluster();

const noQuotas = c.core.v1.Namespace.list().pipe(
    flatMap(ns =>
        c.core.v1.ResourceQuota
            .list(ns.metadata.name).pipe(
            // Retrieve only ResourceQuotas that (1) apply to this namespace, and (2)
            // specify hard limits on memory.
            filter(rq => rq.spec.hard["limits.memory"] != null),
            toArray(),
            flatMap(rqs => rqs.length == 0 ? [ns] : []))));

// Print.
noQuotas.forEach(ns => console.log(ns.metadata.name));

