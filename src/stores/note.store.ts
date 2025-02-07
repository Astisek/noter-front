import { INote } from '@/api/models/note';
import { create } from 'zustand';

interface INoteStore {
  notes: INote[];
  updateNote: (note: INote) => void;
  deleteNote: (id: string) => void;
  setNotes: (notes: INote[]) => void;
  addNote: (note: INote) => void;
  activeNote?: INote;
  setActiveNote: (note: INote) => void;
}

export const useNoteStore = create<INoteStore>((set) => ({
  notes: [],
  activeNote: null,
  addNote: (note) => set((state) => ({ notes: [note, ...state.notes] })),
  deleteNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
  setNotes: (notes) => set({ notes }),
  updateNote: (note) =>
    set((state) => ({ notes: state.notes.map((currentNote) => (note.id === currentNote.id ? note : currentNote)) })),
  setActiveNote: (activeNote) => set({ activeNote }),
}));
