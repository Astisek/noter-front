'use client';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import { useEffect, useState } from 'react';

const fullConfig = resolveConfig(tailwindConfig);
const {
  theme: { screens },
} = fullConfig;

export const useBreakpoint = (query: keyof typeof screens): boolean => {
  const mediaQuery = `(min-width: ${screens[query]})`;
  const [isMatch, setMatch] = useState<boolean>(false);
  const onChange = (e: MediaQueryListEvent) => setMatch(e.matches);
  useEffect(() => {
    const matchQueryList = window.matchMedia(mediaQuery);
    setMatch(matchQueryList.matches);
    matchQueryList.addEventListener('change', onChange);
    return () => matchQueryList.removeEventListener('change', onChange);
  }, [mediaQuery, query]);
  return isMatch;
};
