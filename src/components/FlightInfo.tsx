import { Card, Divider, Stack } from "@mantine/core";
import "@mantine/core/styles.css";
import type { FlightData } from "../types/flight";
import { FlightHeader } from "./FlightHeader";
import { useState } from "react";
import { TextInput } from "@mantine/core";

export function FlightInfo({ flights }: { flights: FlightData[] }) {
  const [value, setValue] = useState("");

  return (
    <Card p={0} pt={8}>
        
      <TextInput mb={'md'} w={300}
      label ="Номер рейса или город"
      placeholder="Введите номер рейса или город"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Stack>
        {flights
          .filter((item)=> {
            const searchTerm = value.toLowerCase().trim()
            const str_s = item.route.origin.city.toLowerCase() + item.flightNumber.toLowerCase() 
            return str_s.includes(searchTerm) 
        })
          .map((item, key: number) => (
            // console.log(item),
            <FlightHeader key={key} flight={item} />
          ))}

        {/* <FlightHeader key={0} flight={flights[0]} /> */}
      </Stack>
    </Card>
  );
}
//Perm1025