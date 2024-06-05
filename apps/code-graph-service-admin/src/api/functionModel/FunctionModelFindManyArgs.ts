import { FunctionModelWhereInput } from "./FunctionModelWhereInput";
import { FunctionModelOrderByInput } from "./FunctionModelOrderByInput";

export type FunctionModelFindManyArgs = {
  where?: FunctionModelWhereInput;
  orderBy?: Array<FunctionModelOrderByInput>;
  skip?: number;
  take?: number;
};
