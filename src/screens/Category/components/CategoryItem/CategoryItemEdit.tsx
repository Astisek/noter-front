import { useState } from 'react';
import s from './styles.module.scss';
import { ReactComponent as Cross } from '@/assets/svg/cross.svg';
import { ReactComponent as Check } from '@/assets/svg/check.svg';
import { Input } from '@/components/Input';

interface CategoryItemEditProps {
  onAccept: (val: string) => void;
  onCancel: () => void;
  defaultName: string;
}

export const CategoryItemEdit = ({ onAccept, onCancel, defaultName }: CategoryItemEditProps) => {
  const [name, setName] = useState(defaultName);

  const handleAccept = () => onAccept(name);

  return (
    <div className={s.card}>
      <div className="w-full">
        <Input value={name} onChange={setName} placeholder="Name..." className="w-full" />
      </div>
      <div className={s.editActions}>
        <Check className={s.button} onClick={handleAccept} />
        <Cross className={s.button} onClick={onCancel} />
      </div>
    </div>
  );
};
