import { Router } from "https://deno.land/x/oak/mod.ts";

import { getUrls, redirect, shortenUrl } from "./controller.ts";

const router = new Router();
router
  .post("/api/shorten", shortenUrl)
  .get("/api/urls", getUrls)
  .get("/:id", redirect);

export default router;
