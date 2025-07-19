import { customSession } from "better-auth/plugins";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: "http://localhost:8080",
});

export default authClient;
