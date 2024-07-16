import { create } from "zustand";

type UserStoreType = {
  userId: number | null;
  openUserDialog: boolean;
  setUserId: (id: number) => void;
  onOpenChange: () => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  userId: null,
  openUserDialog: false,
  setUserId: (id: number) => set(() => ({ userId: id, openUserDialog: true })),
  onOpenChange: () =>
    set(({ openUserDialog }) => ({
      openUserDialog: !openUserDialog,
    })),
}));
