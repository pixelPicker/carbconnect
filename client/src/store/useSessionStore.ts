import { create } from "zustand";
import type { UseSessionHookType } from "../types/authClientTypes";

export type Session = NonNullable<UseSessionHookType["data"]>["session"];

export type UseSessionStore = {
  session: Session | null;
  setSession: (session: Session) => void;
  clearSession: () => void;
};
export const useSessionStore = create<UseSessionStore>((set) => ({
  session: null,
  setSession: (newSession) => {
    set({ session: newSession });
  },
  clearSession: () => {
    set({ session: null });
  },
}));
