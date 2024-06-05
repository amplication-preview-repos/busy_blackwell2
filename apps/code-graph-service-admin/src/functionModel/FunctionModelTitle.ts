import { FunctionModel as TFunctionModel } from "../api/functionModel/FunctionModel";

export const FUNCTIONMODEL_TITLE_FIELD = "id";

export const FunctionModelTitle = (record: TFunctionModel): string => {
  return record.id?.toString() || String(record.id);
};
