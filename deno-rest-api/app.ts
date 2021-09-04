import { Application } from "https://deno.land/x/oak/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";

import router from "./routes.ts";

const HOST = "0.0.0.0";
const PORT = 8000;

const app = new Application();

app.use(logger.logger);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);
