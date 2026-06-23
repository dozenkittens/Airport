import {
  Badge,
  Box,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Card,
  Flex,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { AirplaneIcon, ClockAfternoonIcon } from "@phosphor-icons/react";
import type { FlightData } from "../types/flight";
import { IconPlane } from "@tabler/icons-react";

interface FlightHeaderProps {
  flight: FlightData;
}

export function FlightHeader({ flight }: FlightHeaderProps) {
  const departure = new Date(flight.schedule.departure);
  const arrival = new Date(flight.schedule.arrival);
  const formatDate = (date: Date) =>
    date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const colorWarning = flight.status == 'Canceled' ? '#dc2626' : '#1d6fb5'


  return (
    <Card  
   p={0}
      style={{
        background: "#dde3ec",
        border: "1px solid #b0bdd0",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Group
        justify="space-between" px={20} pl={24} py={14} 
        style={{ borderBottom: "1px solid #b0bdd0" }}
      >
        <Group>
          <AirplaneIcon size={32} color={colorWarning}  weight="fill"/>
          <Text fz={16} fw={600}>{flight.flightNumber}</Text>
          <Title 
          fz={30} fw={600}  
          >{flight.route.origin.city} </Title>
        </Group>

        <Badge 
        radius="sm" color={colorWarning} fz={12} fw={700}
        >{flight.status}</Badge>
      </Group>

      <Group
        justify="space-between" px={24} py={20}
      >
        <Stack gap={0}>
          <Text>ВЫЛЕТ</Text>
          <Title>{formatTime(departure)}</Title>
          <Text>{formatDate(departure)}</Text>
          <Text>{flight.route.origin.code}</Text>
        </Stack>

        <Flex
          direction="column"
          align="center"
          gap={12}
          w={200}
          style={{ flexShrink: 0 }}
        >
          <Text
            fz={13}
            c="#374e6b"
          >
            1h 30m
          </Text>
          <Flex align="center" w="100%">
            <Box
              w={6}
              h={6}
              bg={colorWarning}
              style={{
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            <Box
            bg={colorWarning}
              style={{
                flex: 1,
                height: 2,
                
                position: "relative",
              }}
            >
              <AirplaneIcon 
                size={23}
                color={colorWarning}
                weight="fill" 
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%) rotate(90deg)"
                
                }}
              />
            </Box>
            <Box
              w={6}
              h={6}
              bg={colorWarning}
              style={{
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
          </Flex>
          
        </Flex>

        <Stack gap={0}  align="flex-end">
          <Text>ПРИЛЁТ</Text>
          <Title>{formatTime(arrival)}</Title>
          <Text>{formatDate(arrival)}</Text>
          <Text>{flight.route.destination.code}</Text>
        </Stack>
      </Group>

      <Group 
      px={24} py={12} 
      style={{ borderTop: "1px solid #b0bdd0", background: "#cdd5e0" }}>
        <Text style={{ borderRight: "1px solid #1e2d45" }} pr={20}>
          Выход: {flight.gate}
        </Text>
        <Text style={{ borderRight: "1px solid #1e2d45" }} pr={20}>Терминал: {flight.terminal}</Text>
        <Text style={{ borderRight: "1px solid #1e2d45" }} pr={20}>Класс: {flight.class}</Text>
        <Text>{flight.schedule.timezone}</Text>
      </Group>
    </Card>
  );
}

