import Link from 'next/link';
import { ReactComponent as Trash } from '@/assets/svg/trash.svg';
import { ReactComponent as Edit } from '@/assets/svg/edit.svg';
import { routerLinks } from '@/data/router';
import { MouseEvent } from 'react';
import s from './styles.module.scss';

interface CategoryItemProps {
  name: string;
  count: number;
  id: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const CategoryItem = ({ count, name, id, onDelete, onEdit }: CategoryItemProps) => {
  const handleClickDelete = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onDelete();
  };
  const handleClickEdit = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onEdit();
  };

  return (
    <Link href={routerLinks.categoryView(id)} className={s.card}>
      <div>
        <p className="text-xl text-text">{name}</p>
        <p className="text-gray-400">Items count: {count}</p>
      </div>
      <div className={s.actions}>
        <Edit className="fill-text w-8 h-8" onClick={handleClickEdit} />
        <Trash className="fill-text w-8 h-8" onClick={handleClickDelete} />
      </div>
    </Link>
  );
};
