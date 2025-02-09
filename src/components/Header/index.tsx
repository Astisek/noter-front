'use client';
import { logout } from '@/actions/logout';
import { FullHeader } from '@/components/Header/FullHeader';
import { NoteHeader } from '@/components/Header/NoteHeader';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';
import { useUserStore } from '@/stores/user.store';

interface HeaderProps {
  inNote?: boolean;
}

export const Header = ({ inNote }: HeaderProps) => {
  const {
    profile: { avatar_url, username },
  } = useUserStore();
  const { mutate } = useUpdateProfile();

  if (inNote) {
    return <NoteHeader avatarUrl={avatar_url} onLogout={logout} userName={username} onChangeAvatar={mutate} />;
  }

  return <FullHeader avatarUrl={avatar_url} onLogout={logout} userName={username} onChangeAvatar={mutate} />;
};
