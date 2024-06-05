import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FileTitle } from "../file/FileTitle";

export const ClassModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="file.id" reference="File" label="file">
          <SelectInput optionText={FileTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="parentClass" source="parentClass" />
      </SimpleForm>
    </Edit>
  );
};
