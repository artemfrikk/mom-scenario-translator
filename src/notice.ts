// Short pop-up notices ("Сохранено", errors) shown at the bottom of the page.
import { create } from 'zustand';

interface NoticeState {
  notice: string;
  flash: (message: string) => void;
}

let timer = 0;

export const useStore = create<NoticeState>((set) => ({
  notice: '',
  flash: (notice) => {
    set({ notice });
    window.clearTimeout(timer);
    timer = window.setTimeout(() => set({ notice: '' }), 4000);
  },
}));
