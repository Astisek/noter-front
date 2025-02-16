import { noteApi } from '@/api/note';
import { defaultMetadata } from '@/data/app';
import { routerLinks } from '@/data/router';
import { NotePage } from '@/screens/NoteView';
import { authConfig } from '@/utils/authOptions';
import { generateTitle } from '@/utils/generateTitle';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{
    noteId: string;
  }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  try {
    const { noteId } = await params;
    const { data: note } = await noteApi.findOne(noteId, await authConfig());

    return {
      ...defaultMetadata,
      title: generateTitle(note.title),
    };
  } catch (_) {
    redirect(routerLinks.category());
  }
};

export default async function Page({ params }: PageProps) {
  try {
    const { noteId } = await params;
    const { data: note } = await noteApi.findOne(noteId, await authConfig());

    return <NotePage note={note} />;
  } catch (_) {
    redirect(routerLinks.category());
  }
}
