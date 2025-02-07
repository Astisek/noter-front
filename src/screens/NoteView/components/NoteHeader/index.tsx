import { NoteNotify } from '@/screens/NoteView/components/NoteNotify';
import { Actions } from './Actions';
import { Rate } from './Rate';
import { Title } from './Title';

export const NoteHeader = () => (
  <div className="flex">
    <Title />
    <div className="flex items-center gap-2">
      <NoteNotify />
      <Rate />
      <Actions />
    </div>
  </div>
);
