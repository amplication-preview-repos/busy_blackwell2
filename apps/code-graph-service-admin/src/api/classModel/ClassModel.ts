import { File } from "../file/File";

export type ClassModel = {
  createdAt: Date;
  file?: File | null;
  id: string;
  name: string | null;
  parentClass: string | null;
  updatedAt: Date;
};
