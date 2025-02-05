import { ICategory } from '@/api/models/category';
import { Category } from '@/screens/Category/components/CategoryItem';

interface CategoryListProps {
  categories: ICategory[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full mt-5">
      {categories.map(({ name, id, noteCount }) => {
        return <Category id={id} count={noteCount} name={name} key={id} />;
      })}
    </div>
  );
};
