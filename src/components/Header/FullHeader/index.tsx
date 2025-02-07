'use client';
import Image from 'next/image';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';

interface FullHeaderProps {
  avatarUrl: string;
  userName: string;
  onLogout: () => void;
}

export const FullHeader = ({ avatarUrl, onLogout, userName }: FullHeaderProps) => {
  return (
    <header className="container m-auto">
      <div className="p-2 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Image src={avatarUrl || profilePlaceholder} alt="Avatar" className="w-12 rounded-full" />
          <p className="text-ellipsis w-4/5 text-text text-lg">{userName}</p>
        </div>

        <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" onClick={onLogout} />
      </div>
    </header>
  );
};
