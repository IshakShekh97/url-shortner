import { nanoid } from "nanoid";

export const generateNanoid = (length: number): string => {
  return nanoid(length);
};
