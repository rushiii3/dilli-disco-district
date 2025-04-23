import { create } from "zustand";

type UIState = {
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
};

export const useUIStore = create<UIState>((set) => ({
  isMainMenuOpen: false,
  isDrawerOpen: false,
  isDropdownOpen: false,
  isBackdropVisible: false,
  openDrawer: () => set({ isDrawerOpen: true, isBackdropVisible: true, isMainMenuOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false, isBackdropVisible:false, isMainMenuOpen: false }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

  openDropdown: () => set({  isMainMenuOpen: false, isDropdownOpen: true, isDrawerOpen:true, isBackdropVisible: true }),
  closeDropdown: () => set({ isDropdownOpen: false, isMainMenuOpen: true, }),
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
