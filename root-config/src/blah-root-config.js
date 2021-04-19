import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app1",
  app: () =>
    System.import(
      "@cxone/app1"
    ),
    // activeWhen: () => true,
    activeWhen: ["/app1"]
});

registerApplication({
  name: "app2",
  app: () =>
    System.import(
      "@cxone/app2"
    ),
  activeWhen: ["/app2"],
});

start({
  urlRerouteOnly: true,
});
