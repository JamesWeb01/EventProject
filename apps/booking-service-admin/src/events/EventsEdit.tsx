import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BookingsTitle } from "../bookings/BookingsTitle";
import { VenuesTitle } from "../venues/VenuesTitle";

export const EventsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bookingsItems"
          reference="Bookings"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="venue.id" reference="Venues" label="Venue">
          <SelectInput optionText={VenuesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
