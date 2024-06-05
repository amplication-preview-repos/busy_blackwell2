import { Method as TMethod } from "../api/method/Method";

export const METHOD_TITLE_FIELD = "id";

export const MethodTitle = (record: TMethod): string => {
  return record.id?.toString() || String(record.id);
};
