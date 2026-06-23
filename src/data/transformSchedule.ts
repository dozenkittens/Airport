//npx tsx src/data/transformSchedule.ts
import rawData from "./SheduleIn_2.json" with { type: "json" };

function randomMinutes(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Data() {
    // Трансформируем каждый рейс
    rawData.data.forEach((flight) => {
        const now = new Date();

        // departure: текущее время минус случайное число от 60 до 180 минут
        const depMinutesAgo = randomMinutes(60, 180);
        flight.schedule.departure = new Date(
            now.getTime() - depMinutesAgo * 60 * 1000,
        ).toISOString();

        // arrival: текущее время минус случайное число от 10 до 60 минут
        const arrMinutesAgo = randomMinutes(-30, 60);
        flight.schedule.arrival = new Date(
            now.getTime() - arrMinutesAgo * 60 * 1000,
        ).toISOString();
        // console.log(flight.schedule.arrival);
    });
    return rawData.data;
}
