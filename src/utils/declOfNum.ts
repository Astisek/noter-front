export const declOfNum = (number: number, titles: string[]) => {
  if (number === 1) return titles[0];
  return [titles[1]];
};
