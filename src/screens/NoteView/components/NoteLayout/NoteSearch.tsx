import { Input } from '@/components/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

interface NoteSearchProps {
  search: string;
  onSearch: (value: string) => void;
}

export const NoteSearch = ({ search, onSearch }: NoteSearchProps) => {
  const [searchText, setSearchText] = useState(search);

  const debouncedSearch = useDebounce(searchText, 300);
  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <div className="px-2 py-1">
      <Input className="ring-1 w-full text-sm" placeholder="Search" value={searchText} onChange={setSearchText} />
    </div>
  );
};
