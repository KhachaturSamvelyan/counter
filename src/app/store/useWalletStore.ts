import { create } from "zustand";
import { persist } from "zustand/middleware";
import balances from "@/assets/mock/balances.json";
import type { MockUser, WalletAddress, WalletMode } from "@/app/types";

type ThemeMode = "dark" | "light";

interface WalletState {
  authMode: WalletMode;
  theme: ThemeMode;
  activeAddressId: string;
  addresses: WalletAddress[];
  user: MockUser | null;
  isNoticeOpen: boolean;
  setAuthMode: (mode: WalletMode) => void;
  setTheme: (theme: ThemeMode) => void;
  setActiveAddress: (addressId: string) => void;
  setMockUser: (user: MockUser) => void;
  openNotice: () => void;
  closeNotice: () => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      authMode: "create",
      theme: "dark",
      activeAddressId: balances[0]?.id ?? "",
      addresses: balances as WalletAddress[],
      user: null,
      isNoticeOpen: false,
      setAuthMode: (mode) => set({ authMode: mode }),
      setTheme: (theme) => set({ theme }),
      setActiveAddress: (addressId) => set({ activeAddressId: addressId }),
      setMockUser: (user) => set({ user }),
      openNotice: () => set({ isNoticeOpen: true }),
      closeNotice: () => set({ isNoticeOpen: false })
    }),
    {
      name: "counterwallet-mock-user",
      version: 5,
      migrate: (persistedState: unknown, version: number) => {
        const state = persistedState as WalletState;
        if (version < 4) {
          return {
            ...state,
            authMode: "login" as WalletMode,
            user: null
          };
        }
        if (version < 5) {
          return {
            ...state,
            theme: "dark" as ThemeMode
          };
        }
        return state;
      },
      // Persist only user-facing mock session state.
      partialize: (state: WalletState) => ({
        authMode: state.authMode,
        activeAddressId: state.activeAddressId,
        theme: state.theme,
        user: state.user
      })
    }
  )
);
