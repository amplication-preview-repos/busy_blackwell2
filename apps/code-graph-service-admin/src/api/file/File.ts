import { ClassModel } from "../classModel/ClassModel";

export type File = {
  classes?: Array<ClassModel>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
