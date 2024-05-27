import { Thread } from "@/lib/types/type";
import { create } from 'zustand'

interface CommentModalProps {
  isOpen: boolean;
  thread: Thread | null;
  openModal: (threadData: Thread) => void;
  closeModal: () => void;
}

const useCommentModal = create<CommentModalProps>((set) => ({
  isOpen: false,
  thread: null,
  openModal: (threadData: any) => set({ isOpen: true, thread: threadData }),
  closeModal: () => set({ isOpen: false, thread: null }),
}));

export default useCommentModal;
