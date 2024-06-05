import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FileTitle } from "../file/FileTitle";

export const ClassModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="file.id" reference="File" label="file">
          <SelectInput optionText={FileTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="parentClass" source="parentClass" />
      </SimpleForm>
    </Create>
  );
};
