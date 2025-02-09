import Image from 'next/image';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';
import { ChangeEvent } from 'react';

interface NoteHeaderProps {
  avatarUrl: string;
  userName: string;
  onLogout: () => void;
  onChangeAvatar: (file: File) => void;
}

export const NoteHeader = ({ avatarUrl, onLogout, userName, onChangeAvatar }: NoteHeaderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    onChangeAvatar(file);
  };

  const userAvatar = avatarUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}${avatarUrl}` : profilePlaceholder;

  return (
    <div className="border-b border-b-1 border-gray-600 p-2 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <label htmlFor="avatar" className="">
          <Image
            src={userAvatar}
            alt="Avatar"
            height={24}
            width={24}
            className="aspect-square rounded-full"
            priority={true}
          />
        </label>
        <input type="file" className="hidden" id="avatar" accept="image/png,image/jpeg" onChange={handleChange} />
        <p className="text-ellipsis w-4/5 text-text">{userName}</p>
      </div>

      <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" onClick={onLogout} />
    </div>
  );
};
