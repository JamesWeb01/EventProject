import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EventsTitle } from "../events/EventsTitle";

export const VenuesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Capacity" source="capacity" />
        <ReferenceArrayInput
          source="eventsItems"
          reference="Events"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
