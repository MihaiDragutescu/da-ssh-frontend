export const isStringArray = (arr: unknown): arr is string[] => {
  return Array.isArray(arr) && arr.every((elem) => typeof elem === 'string');
};
