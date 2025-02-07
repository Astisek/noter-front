import { ICategory } from '@/api/models/category';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { AddCategoryModal } from '@/screens/Category/components/AddCategoryModal';
import { useCreateCategory } from '@/screens/Category/hooks/useCreateCategory';
import { useCategoryStore } from '@/stores/category.store';
import { useEffect, useReducer, useState } from 'react';

interface CategoryHeaderProps {
  search: string;
  onChangeSearch: (val: string) => void;
}

export const CategoryHeader = ({ search, onChangeSearch }: CategoryHeaderProps) => {
  const [searchValue, setSearchValue] = useState(search);
  const [isOpenAddModal, toggleIsOpenAddModal] = useReducer((state) => !state, false);
  const debounceSearch = useDebounce(searchValue, 300);
  useEffect(() => {
    onChangeSearch(debounceSearch);
  }, [debounceSearch, onChangeSearch]);

  const { addCategory } = useCategoryStore();
  const onCreateCategory = (category: ICategory) => {
    addCategory(category);
    toggleIsOpenAddModal();
  };
  const { mutate } = useCreateCategory(onCreateCategory);

  const handleAccept = (name: string) => {
    mutate({ name });
  };

  return (
    <>
      <div className="flex gap-4 mb">
        <Button onClick={toggleIsOpenAddModal}>Add category</Button>
        <Input value={searchValue} onChange={setSearchValue} placeholder="Search..." className="flex-1" />
      </div>
      {isOpenAddModal && <AddCategoryModal onAccept={handleAccept} onCancel={toggleIsOpenAddModal} />}
    </>
  );
};
