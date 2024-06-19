import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EVENTS_TITLE_FIELD } from "./EventsTitle";
import { VENUES_TITLE_FIELD } from "../venues/VenuesTitle";

export const EventsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Venue" source="venues.id" reference="Venues">
          <TextField source={VENUES_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Bookings"
          target="eventId"
          label="BookingsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
