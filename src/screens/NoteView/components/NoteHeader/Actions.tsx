import { ReactComponent as Trash } from '@/assets/svg/trash.svg';
import { Button } from '@/components/Button';

export const Actions = () => (
  <Button variant="outline">
    <Trash className="fill-text w-5 h-5" />
  </Button>
);
