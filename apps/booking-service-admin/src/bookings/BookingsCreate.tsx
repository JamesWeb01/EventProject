import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EventsTitle } from "../events/EventsTitle";

export const BookingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="BookingDate" source="bookingDate" />
        <ReferenceInput source="event.id" reference="Events" label="Event">
          <SelectInput optionText={EventsTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="NumberOfTickets"
          source="numberOfTickets"
        />
        <TextInput label="Status" source="status" />
        <NumberInput step={1} label="UserId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
