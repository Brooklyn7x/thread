import { Thread } from "@/lib/types/type";
import create from "zustand";

interface EditModalProps {
  isOpen: boolean;
  thread: Thread | null;
  openModal: (threadData: Thread) => void;
  closeModal: () => void;
}

const useEditModal = create<EditModalProps>((set) => ({
  isOpen: false,
  thread: null,
  openModal: (threadData: any) => set({ isOpen: true, thread: threadData }),
  closeModal: () => set({ isOpen: false, thread: null }),
}));

export default useEditModal;
