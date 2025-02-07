import { Input } from '@/components/Input';
import { Modal } from '@/components/Modal';
import { useState } from 'react';

interface AddCategoryModalProps {
  onAccept: (name: string) => void;
  onCancel: () => void;
}

export const AddCategoryModal = ({ onCancel, onAccept }: AddCategoryModalProps) => {
  const [text, setText] = useState('');

  const handleAccept = () => {
    if (!text) return;
    onAccept(text);
  };

  return (
    <Modal
      acceptText="Add"
      cancelText="Cancel"
      onAccept={handleAccept}
      onCancel={onCancel}
      open
      title="Add New Category"
    >
      <Input onChange={setText} value={text} className="w-96" />
    </Modal>
  );
};
