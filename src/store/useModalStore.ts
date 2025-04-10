import { create } from "zustand";

import { IOrder } from "@/services/orderService";

interface IModalState {
  modal: IOrder | null;
  setModal: (modal: IOrder | null) => void;
}

export const useModalStore = create<IModalState>((set) => ({
  modal: null,

  setModal: (modal) => set({ modal }),
}));
