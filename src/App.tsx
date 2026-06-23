import "@mantine/core/styles.css";
import { Container, MantineProvider, } from "@mantine/core";
import { Header } from "./components/Header";
import { FlightInfo } from "./components/FlightInfo";
import { Data } from "./data/transformSchedule";
// import "./App.css";
import type { FlightData } from "./types/flight";
// import RouteMiddle from "./components/RouteMiddle";
import { PassangerCharts } from "./components/PassangerChart";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
// import { useState } from 'react';



function App() {
  const flights: FlightData[] = Data();
  return (
    <MantineProvider>
       <BrowserRouter>
      <Container>
        <Header />
        <AppRoutes flights={flights} />
        {/* <FlightInfo flights={flights} /> */}
      {/* <RouteMiddle/> */}
      {/* <Test/> */}
      {/* <PassangerCharts flights={flights}/> */}


    
      </Container>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;


