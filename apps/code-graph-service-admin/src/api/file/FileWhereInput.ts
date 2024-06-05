import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  classes?: ClassModelListRelationFilter;
  id?: StringFilter;
};
