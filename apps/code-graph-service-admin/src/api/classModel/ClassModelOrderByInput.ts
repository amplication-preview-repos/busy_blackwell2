import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  createdAt?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentClass?: SortOrder;
  updatedAt?: SortOrder;
};
