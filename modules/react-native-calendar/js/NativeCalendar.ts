import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  
  createCalendarEvent(name: string, location: string, callback: (error: string, eventId: string) => void): void;

  createCalendarEventWithPromise(name: string, location: string): Promise<string>;

  sendCalendarEventFromNative(): void;

  addListener: (eventType: string) => void;

  removeListeners: (count: number) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNCalendar');
