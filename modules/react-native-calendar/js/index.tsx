import { NativeModules } from 'react-native';
import { Spec } from './NativeCalendar';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const CalendarModule = isTurboModuleEnabled
  ? require('./NativeCalendar').default
  : NativeModules.RNCalendar;

export default CalendarModule as Spec;



