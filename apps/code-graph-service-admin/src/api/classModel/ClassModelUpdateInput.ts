import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type ClassModelUpdateInput = {
  file?: FileWhereUniqueInput | null;
  name?: string | null;
  parentClass?: string | null;
};
