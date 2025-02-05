import { useReducer } from 'react';
import { CategoryItem } from './CategoryItem';
import { CategoryItemEdit } from './CategoryItemEdit';
import { Modal } from '@/components/Modal';
import { useDeleteCategory } from '@/screens/Category/hooks/useDeleteCategory';
import { useUpdateCategory } from '@/screens/Category/hooks/useUpdateCategory';

interface CategoryProps {
  name: string;
  count: number;
  id: string;
}

export const Category = (props: CategoryProps) => {
  const { name, id } = props;
  const [isEdit, toggleIsEdit] = useReducer((state) => !state, false);
  const [isOpenDelete, toggleIsOpenDelete] = useReducer((state) => !state, false);

  const { mutate: mutateDelete, isPending } = useDeleteCategory();
  const handleDelete = () => {
    mutateDelete(id);
  };

  const { mutate: mutateUpdate } = useUpdateCategory(toggleIsEdit);
  const handleUpdate = (name: string) => {
    mutateUpdate({ id, data: { name } });
  };

  if (isEdit) {
    return <CategoryItemEdit onAccept={handleUpdate} onCancel={toggleIsEdit} defaultName={name} />;
  }

  return (
    <>
      <CategoryItem {...props} onDelete={toggleIsOpenDelete} onEdit={toggleIsEdit} />
      <Modal
        acceptText="Delete"
        cancelText="Cancel"
        onAccept={handleDelete}
        onCancel={toggleIsOpenDelete}
        open={isOpenDelete}
        title="Delete Category"
        isLoadingAccept={isPending}
      >
        <p className="text-text">Are you sure you want to delete the category {name}? This action cannot be undone.</p>
      </Modal>
    </>
  );
};
