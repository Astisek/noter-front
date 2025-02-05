import Image from 'next/image';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';

export const NoteHeader = () => {
  return (
    <div className="border-b border-b-1 border-gray-600 p-2 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Image src={profilePlaceholder} alt="Avatar" className="w-6 rounded-full" />
        <p className="text-ellipsis w-4/5 text-text">Astisek</p>
      </div>

      <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" />
    </div>
  );
};
