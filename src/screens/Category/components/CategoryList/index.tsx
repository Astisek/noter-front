import { ICategory } from '@/api/models/category';
import { Category } from '@/screens/Category/components/CategoryItem';
import * as motion from 'motion/react-client';

interface CategoryListProps {
  categories: ICategory[];
}

export const CategoryList = ({ categories }: CategoryListProps) => (
  <motion.div
    className="flex flex-col gap-4 w-full mt-5"
    initial={{ opacity: 0, transform: 'translateY(-40px)' }}
    exit={{ opacity: 0, transform: 'translateY(-40px)' }}
    animate={{ opacity: 1, transform: 'translateY(0)' }}
    transition={{ duration: 0.3 }}
  >
    {categories.map(({ name, id, noteCount }) => (
      <Category id={id} count={noteCount} name={name} key={id} />
    ))}
    {!categories.length && <p className="text-gray-400 text-center text-lg">Empty</p>}
  </motion.div>
);
