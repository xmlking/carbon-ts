import {Client} from "../../src";
import {filter} from "rxjs/operators";

const c = Client.fromFile(<string>process.env.KUBECONFIG);
const noServiceAccounts = c.core.v1.Pod.list().pipe(
  filter(pod =>
    pod.spec.serviceAccountName == null ||
    pod.spec.serviceAccountName == "default"));

noServiceAccounts.forEach(pod => console.log(pod.metadata.name));

// Equivalent to:
//
// const c = Client.fromFile(<string>process.env.KUBECONFIG);
// const noServiceAccounts =
//   from pod in c.core.v1.Pod.list()
//   where pod.spec.serviceAccountName == "default"
//   select pod;

// noServiceAccounts.forEach(pod => console.log(pod.metadata.name));
