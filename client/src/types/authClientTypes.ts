import type authClient from "../api/auth/authClient";

export type UseSessionHookType = ReturnType<typeof authClient.useSession>