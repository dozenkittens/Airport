import "@mantine/core/styles.css";
import type { FlightData } from "../types/flight";
import { Card, Stack, Title } from "@mantine/core";
import { BarChart, BarsList } from '@mantine/charts';
import '@mantine/charts/styles.css'



export function PassangerCharts ({ flights }: { flights: FlightData[] }) {
    const Data = flights.map(flight => ({
        name: flight.flightNumber,
        capacity: flight.booking.capacity,
        booked: flight.booking.booked
    }))

    const airlinePassengers: Record<string, number> = {};
    flights.forEach((flight) => {
        const name = flight.airline.name;
        airlinePassengers[name] =
            (airlinePassengers[name] || 0) + flight.passengers.length;
    });

    const data = Object.entries(airlinePassengers).map(([name, value]) => ({
        name,
        value,
    }));

    return(
        <Stack pt={15}>
        <Card p={'md'} shadow="xs" withBorder>
            <Title pb={'md'} order={2}>Passanger per flight</Title>

            <BarChart
            data ={Data}
            dataKey="name" 
            series = {[
                {name: 'capacity', color: 'blue.6'},
                {name: 'booked', color: 'teal.6'}
            ]}
            withTooltip
                withLegend
                legendProps={{
                    verticalAlign: "bottom",
                    height: 40,
                }}
                h={400}
                valueFormatter={(value: number) =>
                    value < 1000 ? `${value}` : `${(value / 1000).toFixed(1)}k`
                }
            />
        </Card>

     <Card withBorder p="md" mt="md" shadow="xs">
            <Title order={2} mb="md">
                Passengers by Airline
            </Title>
            <BarsList
                data={data}
                color="blue"
                valueFormatter={(value: number) => `${value} passengers`}
            />
            {/* <PassengerChart flights={flights} /> */}
        </Card>
</Stack>
    )

}