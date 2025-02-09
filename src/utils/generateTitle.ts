import { appName } from '@/data/app';

export const generateTitle = (name?: string) => {
  if (!name) {
    return appName;
  }

  return `${name} — ${appName}`;
};
