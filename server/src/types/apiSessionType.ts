import { auth } from "../lib/auth.js";

export type ApiSession = NonNullable<
  Awaited<ReturnType<typeof auth.api.getSession>>
>;
