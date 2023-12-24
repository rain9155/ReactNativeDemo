import { HostComponent, requireNativeComponent } from "react-native";
import { RNTextProps as TextProps, RNTextEvent as TextEvent } from "./RNTextviewNativeComponent";

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RNTextview = isTurboModuleEnabled
  ? require('./RNTextviewNativeComponent').default
  : requireNativeComponent('RNTextview');

export type RNTextEvent = TextEvent;

export type RNTextProps = TextProps;

export default RNTextview as HostComponent<TextProps>;
