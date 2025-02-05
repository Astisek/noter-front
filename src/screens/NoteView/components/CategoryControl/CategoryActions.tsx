import { Button } from '@/components/Button';
import { Select } from '@/components/Select';

export const CategoryActions = () => {
  return (
    <div className="px-2 py-1 flex justify-between items-center">
      <div>
        <Button size="small">+</Button>
      </div>
      <div>
        <Select
          options={[
            { label: 'по дате', value: 1 },
            { label: 'по названию', value: 2 },
          ]}
          className="text-sm"
        />
      </div>
    </div>
  );
};
