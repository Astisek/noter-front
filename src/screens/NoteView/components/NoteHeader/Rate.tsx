import { Select } from '@/components/Select';

export const Rate = () => (
  <div className="flex items-center">
    <Select
      options={[
        { label: '1', value: '1' },
        { label: '10', value: '10' },
      ]}
      className="p-2"
      placeholder="?"
    />
    <p className="text-text text-2xl ">/10</p>
  </div>
);
