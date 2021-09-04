import { isURL } from "https://deno.land/x/deno_validator/mod.ts";

import { Database } from "./database.ts";

const database = new Database();

interface ShortenRequest {
  longUrl: string;
}

export const getUrls = (
  { request, response }: { request: any; response: any },
) => {
  response.body = database.getEntries();
  response.status = 200;
};

export const shortenUrl = async (
  { request, response }: { request: any; response: any },
) => {
  const body: ShortenRequest = await request.body({ type: "json" }).value;

  if (!isURL(body.longUrl, { protocols: ["http", "https"] })) {
    response.status = 400;
    response.body = { message: "Not a valid URL" };
    return;
  }

  const shortUrl = database.addLongUrl(body.longUrl);

  response.body = { shortUrl: shortUrl };
  response.status = 201;
};

export const redirect = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const id = params.id;
  const longUrl = database.getLongUrlWithId(id);

  if (!longUrl) {
    response.status = 404;
    response.body = { message: "Unknown Id" };
    return;
  }

  response.redirect(longUrl);
};
