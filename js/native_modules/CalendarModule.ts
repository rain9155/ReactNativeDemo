import { NativeModules } from "react-native";

const { CalendarModule } = NativeModules;

interface CalendarInterface {

    createCalendarEvent(name: string, location: string, callback: (error: string, eventId: string) => void): void;

    createCalendarEventWithPromise(name: string, location: string): Promise<string>;

    sendCalendarEventFromNative(): void;

    addListener: (eventType: string) => void;

    removeListeners: (count: number) => void;
}

export default CalendarModule as CalendarInterface;