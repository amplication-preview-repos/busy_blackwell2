import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClassModelWhereInput = {
  file?: FileWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  parentClass?: StringNullableFilter;
};
