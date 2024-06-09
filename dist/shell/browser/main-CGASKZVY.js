import {
  initFederation
} from "./chunk-2WA32S2B.js";

// projects/shell/src/main.ts
initFederation("/assets/federation.manifest.json").catch((err) => console.error(err)).then((_) => import("./chunk-6WK5AQDZ.js")).catch((err) => console.error(err));
