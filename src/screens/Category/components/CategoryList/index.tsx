import { ICategory } from '@/api/models/category';
import { Category } from '@/screens/Category/components/CategoryItem';

interface CategoryListProps {
  categories: ICategory[];
}

export const CategoryList = ({ categories }: CategoryListProps) => (
  <div className="flex flex-col gap-4 w-full mt-5">
    {categories.map(({ name, id, noteCount }) => (
      <Category id={id} count={noteCount} name={name} key={id} />
    ))}
    {!categories.length && <p className="text-gray-400 text-center text-lg">Empty</p>}
  </div>
);
