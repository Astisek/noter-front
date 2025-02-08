import { NoteContext } from '@/screens/NoteView/data/noteContext';
import { useContext } from 'react';

export const useNoteContext = () => useContext(NoteContext);
