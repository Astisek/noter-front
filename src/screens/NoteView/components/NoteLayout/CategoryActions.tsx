import { SortByEnum } from '@/api/models/note';
import { Button } from '@/components/Button';
import { Select } from '@/components/Select';
import { sortItemsOptions } from '@/screens/NoteView/data/sort';

interface CategoryActionsProps {
  sortBy: SortByEnum;
  setSortBy: (value: SortByEnum) => void;
  onClickPlus: () => void;
}

export const CategoryActions = ({ setSortBy, sortBy, onClickPlus }: CategoryActionsProps) => (
  <div className="px-2 py-1 flex justify-between items-center">
    <div>
      <Button size="small" onClick={onClickPlus}>
        +
      </Button>
    </div>
    <div>
      <Select value={sortBy} onChange={setSortBy} options={sortItemsOptions} className="text-sm" />
    </div>
  </div>
);
