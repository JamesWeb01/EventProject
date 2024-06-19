import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EVENTS_TITLE_FIELD } from "../events/EventsTitle";

export const BookingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BookingDate" source="bookingDate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Event" source="events.id" reference="Events">
          <TextField source={EVENTS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NumberOfTickets" source="numberOfTickets" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
