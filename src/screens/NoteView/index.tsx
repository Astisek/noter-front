'use client';
import { NoteContent } from '@/screens/NoteView/components/NoteContent';
import { NoteHeader } from '@/screens/NoteView/components/NoteHeader';

export const NotePage = () => (
  <div className="flex-1 py-10 overflow-y-auto h-screen">
    <div className="px-32 w-full h-full flex flex-col">
      <NoteHeader />

      <NoteContent />
    </div>
  </div>
);
