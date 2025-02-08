import { noteApi } from '@/api/note';
import { NotePage } from '@/screens/NoteView';
import { authConfig } from '@/utils/authOptions';

interface PageProps {
  params: Promise<{
    noteId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { noteId } = await params;

  const { data: note } = await noteApi.findOne(noteId, await authConfig());

  return <NotePage note={note} />;
}
