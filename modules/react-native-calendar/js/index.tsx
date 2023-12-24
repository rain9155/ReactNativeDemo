import { NativeModules } from 'react-native';
import { Spec } from './NativeRNCalendar';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RNCalendar = isTurboModuleEnabled
  ? require('./NativeRNCalendar').default
  : NativeModules.RNCalendar;

export default RNCalendar as Spec;



