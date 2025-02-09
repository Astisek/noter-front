import { noteApi } from '@/api/note';
import { defaultMetadata } from '@/data/app';
import { NotePage } from '@/screens/NoteView';
import { authConfig } from '@/utils/authOptions';
import { generateTitle } from '@/utils/generateTitle';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    noteId: string;
  }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { noteId } = await params;
  const { data: note } = await noteApi.findOne(noteId, await authConfig());

  return {
    ...defaultMetadata,
    title: generateTitle(note.title),
  };
};

export default async function Page({ params }: PageProps) {
  const { noteId } = await params;
  const { data: note } = await noteApi.findOne(noteId, await authConfig());

  return <NotePage note={note} />;
}
