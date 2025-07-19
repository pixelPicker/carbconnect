import { create } from "zustand";
import type { UseSessionHookType } from "../types/authClientTypes";

export type User = NonNullable<UseSessionHookType["data"]>["user"]
export type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  updateUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (newUser) => {
    set({ user: newUser });
  },
  clearUser: () => {
    set({ user: null });
  },
  updateUser: (updatedUser) => set({ user: updatedUser }),
}));
