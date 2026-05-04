import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useLockStore = create(immer((set) => ({
    isLocked: window.localStorage.getItem("locked") !== 'false',
    setIsLocked: (isLocked) => set((state) => {
        state.isLocked = isLocked;
    })
})));

export default useLockStore;