import { MethodWhereInput } from "./MethodWhereInput";
import { MethodOrderByInput } from "./MethodOrderByInput";

export type MethodFindManyArgs = {
  where?: MethodWhereInput;
  orderBy?: Array<MethodOrderByInput>;
  skip?: number;
  take?: number;
};
