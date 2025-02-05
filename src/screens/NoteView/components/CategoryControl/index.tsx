import { CategoryName } from './CategoryName';
import { CategoryActions } from './CategoryActions';
import { NoteSearch } from './NoteSearch';

export const CategoryControl = () => {
  return (
    <>
      <CategoryName />
      <NoteSearch />
      <CategoryActions />
    </>
  );
};
