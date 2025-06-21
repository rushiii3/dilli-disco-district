// stores/useMenuStore.ts
import { create } from 'zustand';

type MenuType = {
  handle: string;
  id: string;
  title: string;
};

type MenuState = {
  footerMenu: MenuType[];
  collectionMenu: MenuType[];
  setFooterMenu: (items: MenuType[]) => void;
  setCollectionMenu: (items: MenuType[]) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  footerMenu: [],
  collectionMenu: [],
  setFooterMenu: (items) => set({ footerMenu: items }),
  setCollectionMenu: (items) => set({ collectionMenu: items }),
}));
