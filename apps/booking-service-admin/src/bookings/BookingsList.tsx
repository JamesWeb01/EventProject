import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENTS_TITLE_FIELD } from "../events/EventsTitle";

export const BookingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BookingsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
