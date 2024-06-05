import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type ClassModelCreateInput = {
  file?: FileWhereUniqueInput | null;
  name?: string | null;
  parentClass?: string | null;
};
