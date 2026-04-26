const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/web-DnRMXYhx.js", "assets/index-hw91NASo.js"]),
) => i.map((i) => d[i]);
import { r as p, _ as r } from "./index-hw91NASo.js";
const _ = p("App", {
  web: () =>
    r(() => import("./web-DnRMXYhx.js"), __vite__mapDeps([0, 1])).then((e) => new e.AppWeb()),
});
export { _ as App };
