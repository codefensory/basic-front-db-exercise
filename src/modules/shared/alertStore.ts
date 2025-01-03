import { create } from "zustand";

interface Alert {
  text: string;
  type: string;
}

interface BearState {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  removeFirst: () => void;
}

export const useAlertStore = create<BearState>((set) => ({
  alerts: [],
  addAlert: (alert) =>
    set((state) => ({ ...state, alerts: [...state.alerts, alert] })),
  removeFirst: () =>
    set((state) => ({ ...state, alerts: [...state.alerts.slice(1)] })),
}));

export const useHandleAlert = () => useAlertStore((store) => store.addAlert);
