import { create } from "zustand";

type UIState = {
  isCartOpen: boolean;
  isDrawerOpen: boolean;
  isDropdownOpen: boolean;
  isMainMenuOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  isBackdropVisible: boolean;
  openCart: () => void;
  closeCart: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isMainMenuOpen: false,
  isDrawerOpen: false,
  isDropdownOpen: false,
  isBackdropVisible: false,
  openDrawer: () =>
    set({
      isDrawerOpen: true,
      isBackdropVisible: true,
      isMainMenuOpen: true,
      isCartOpen: false,
    }),
  closeDrawer: () =>
    set({
      isDrawerOpen: false,
      isBackdropVisible: false,
      isMainMenuOpen: false,
    }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  openCart: () =>
    set({
      isCartOpen: true,
      isMainMenuOpen: false,
      isDrawerOpen: false,
      isDropdownOpen: false,
      isBackdropVisible: false,
    }),
  closeCart: () => set({ isCartOpen: false }),
  openDropdown: () =>
    set({
      isMainMenuOpen: false,
      isDropdownOpen: true,
      isDrawerOpen: true,
      isBackdropVisible: true,
    }),
  closeDropdown: () => set({ isDropdownOpen: false, isMainMenuOpen: true }),
  toggleDropdown: () =>
    set((state) => {
      if (!state.isDropdownOpen && state.isDrawerOpen) {
        return {
          isDropdownOpen: true,
          isDrawerOpen: false,
        };
      }
      return { isDropdownOpen: !state.isDropdownOpen };
    }),
}));
