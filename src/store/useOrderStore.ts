import { create } from "zustand";

interface IOrderState {
  total: number;
  setTotal: (total: number) => void;
}

export const useOrderStore = create<IOrderState>((set) => ({
  total: 0,
  setTotal: (total) => set({ total }),
}));
