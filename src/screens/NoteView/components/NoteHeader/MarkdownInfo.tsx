import { Button } from '@/components/Button';
import { ReactComponent as InfoSvg } from '@/assets/svg/info.svg';
import { Tooltip } from '@/components/Tooltip';

export const MarkdownInfo = () => {
  const tooltip = 'Available markdown elements:\n** - bold\n*** - italic\n# - all headings\n~~ - strikethrough\nLinks';

  return (
    <Tooltip content={tooltip}>
      <Button variant="outline">
        <InfoSvg className="fill-text w-5 h-5" />
      </Button>
    </Tooltip>
  );
};
