import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { useFormContext, useWatch } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import s from './styles.module.scss';
import remarkGfm from 'remark-gfm';
import { remarkReplaceDisallowedTags } from '@/screens/NoteView/utils/remarkReplaceDisallowedTags';
import { markdownAllowedElements } from '@/screens/NoteView/data/markdownAllowedElements';

const MarkdownView = () => {
  const { control } = useFormContext<INoteForm>();

  const content = useWatch({
    control,
    name: 'content',
  });

  return (
    <div className={s.root}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[remarkReplaceDisallowedTags]}
        allowedElements={markdownAllowedElements}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownView;
