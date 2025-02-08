import { Input } from '@/components/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { useState } from 'react';

interface NoteSearchProps {
  search: string;
  onSearch: (value: string) => void;
}

export const NoteSearch = ({ search, onSearch }: NoteSearchProps) => {
  const [searchText, setSearchText] = useState(search);

  const debouncedOnSearch = useDebounce(onSearch, 300);

  const handleChange = (value: string) => {
    debouncedOnSearch(value);
    setSearchText(value);
  };

  return (
    <div className="px-2 py-1">
      <Input className="ring-1 w-full text-sm" placeholder="Search" value={searchText} onChange={handleChange} />
    </div>
  );
};
