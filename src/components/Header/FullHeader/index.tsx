'use client';
import Image from 'next/image';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';
import { ChangeEvent } from 'react';

interface FullHeaderProps {
  avatarUrl: string;
  userName: string;
  onLogout: () => void;
  onChangeAvatar: (file: File) => void;
}

export const FullHeader = ({ avatarUrl, onLogout, userName, onChangeAvatar }: FullHeaderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    onChangeAvatar(file);
  };

  const userAvatar = avatarUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}${avatarUrl}` : profilePlaceholder;

  return (
    <header className="root-container">
      <div className="p-2 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <label htmlFor="avatar">
            <Image src={userAvatar} alt="Avatar" width={48} height={48} className="aspect-square rounded-full" />
          </label>
          <input type="file" className="hidden" id="avatar" accept="image/png,image/jpeg" onChange={handleChange} />
          <p className="text-ellipsis w-4/5 text-text text-lg">{userName}</p>
        </div>

        <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" onClick={onLogout} />
      </div>
    </header>
  );
};
