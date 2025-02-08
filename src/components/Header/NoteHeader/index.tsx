import Image from 'next/image';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';

interface NoteHeaderProps {
  avatarUrl: string;
  userName: string;
  onLogout: () => void;
}

export const NoteHeader = ({ avatarUrl, onLogout, userName }: NoteHeaderProps) => (
  <div className="border-b border-b-1 border-gray-600 p-2 flex justify-between items-center">
    <div className="flex gap-3 items-center">
      <Image src={avatarUrl || profilePlaceholder} alt="Avatar" className="w-6 rounded-full" priority={true} />
      <p className="text-ellipsis w-4/5 text-text">{userName}</p>
    </div>

    <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" onClick={onLogout} />
  </div>
);
