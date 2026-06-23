export interface Airport {
    code: string;
    name: string;
    city: string;
    country: string;
}

export interface Airline {
    name: string;
    code: string;
    region: string;
}

export interface Route {
    origin: Airport;
    destination: Airport;
    distance: string;
    type: string;
}

export interface Schedule {
    departure: string;
    arrival: string;
    duration: string;
    timezone: string;
    arrival_fact: string;
}

export interface Aircraft {
    model: string;
    manufacturer: string;
    registration: string;
}

export interface Price {
    base: number;
    taxes: number;
    total: number;
    currency: string;
}

export interface Booking {
    available: number;
    booked: number;
    capacity: number;
    occupancyRate: string;
}

export interface Baggage {
    carry: string;
    checked: string;
    total: string;
}

export interface Passenger {
    name: string;
    seat: string;
    class: string;
}

export interface FlightData {
    flightNumber: string;
    airline: Airline;
    route: Route;
    schedule: Schedule;
    aircraft: Aircraft;
    status: string;
    gate: string;
    terminal: string;
    class: string;
    price: Price;
    booking: Booking;
    baggage: Baggage;
    passengers: Passenger[];
    amenities: string[];
}

export interface Meta {
    status: string;
    code: number;
    type: string;
    locale: string;
    requestId: string;
    generatedAt: string;
    total: number;
    seed: string;
    isTest: boolean;
    message: string;
}

export interface FlightResponse {
    meta: Meta;
    data: FlightData[];
}
