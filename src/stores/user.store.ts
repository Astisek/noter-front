import { IUserProfile } from '@/api/interfaces/user';
import { create } from 'zustand';

interface IUserStore {
  profile?: IUserProfile;
}

export const useUserStore = create<IUserStore>((set) => ({
  profile: undefined,
  updateProfile: (profile: IUserProfile) => set({ profile }),
}));
