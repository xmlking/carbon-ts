import {Client} from "../../src";
import {flatMap, toArray} from "rxjs/operators";
import {forkJoin, of} from "rxjs";

const c = Client.fromFile(<string>process.env.KUBECONFIG);
const report = c.core.v1.Namespace
  .list().pipe(
  flatMap(ns =>
    forkJoin(
      of(ns),
      c.core.v1.Pod.list(ns.metadata.name).pipe(toArray()),
      c.core.v1.Secret.list(ns.metadata.name).pipe(toArray()),
      c.core.v1.Service.list(ns.metadata.name).pipe(toArray()),
      c.core.v1.ConfigMap.list(ns.metadata.name).pipe(toArray()),
      c.core.v1.PersistentVolumeClaim.list(ns.metadata.name).pipe(toArray()),
    )));

// Print small report.
report.forEach(([ns, pods, secrets, services, configMaps, pvcs]) => {
  console.log(ns.metadata.name);
  console.log(`  Pods:\t\t${pods.length}`);
  console.log(`  Secrets:\t${secrets.length}`);
  console.log(`  Services:\t${services.length}`);
  console.log(`  ConfigMaps:\t${configMaps.length}`);
  console.log(`  PVCs:\t\t${pvcs.length}`);
});
