import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EventsTitle } from "../events/EventsTitle";

export const BookingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
