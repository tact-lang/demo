export const dateComparator =
  (mode: 'asc' | 'desc') =>
  (a: Date, b: Date): number => {
    const multiplier = mode === 'asc' ? 1 : -1;
    return (a > b ? 1 : -1) * multiplier;
  };
