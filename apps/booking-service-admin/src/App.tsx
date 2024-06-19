import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookingsList } from "./bookings/BookingsList";
import { BookingsCreate } from "./bookings/BookingsCreate";
import { BookingsEdit } from "./bookings/BookingsEdit";
import { BookingsShow } from "./bookings/BookingsShow";
import { VenuesList } from "./venues/VenuesList";
import { VenuesCreate } from "./venues/VenuesCreate";
import { VenuesEdit } from "./venues/VenuesEdit";
import { VenuesShow } from "./venues/VenuesShow";
import { EventsList } from "./events/EventsList";
import { EventsCreate } from "./events/EventsCreate";
import { EventsEdit } from "./events/EventsEdit";
import { EventsShow } from "./events/EventsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BookingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bookings"
          list={BookingsList}
          edit={BookingsEdit}
          create={BookingsCreate}
          show={BookingsShow}
        />
        <Resource
          name="Venues"
          list={VenuesList}
          edit={VenuesEdit}
          create={VenuesCreate}
          show={VenuesShow}
        />
        <Resource
          name="Events"
          list={EventsList}
          edit={EventsEdit}
          create={EventsCreate}
          show={EventsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
