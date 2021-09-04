import { nanoid } from "https://deno.land/x/nanoid/mod.ts";

export const generateId = () => {
  const id = nanoid(6);
  return id;
};
