import { create } from "zustand";

type SearchStoreType = {
  searchText: string;
  handleSearchTextChange: (query: string) => void;
};

export const useSearchStore = create<SearchStoreType>((set) => ({
  searchText: "",
  handleSearchTextChange: (query: string) => set(() => ({ searchText: query })),
}));
