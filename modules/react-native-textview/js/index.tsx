import { HostComponent, requireNativeComponent } from "react-native";
import { TextProps as _TextProps } from "./TextviewNativeComponent";

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const Textview = isTurboModuleEnabled
  ? require('./TextviewNativeComponent').default
  : requireNativeComponent('RNTextview');

export type TextProps = _TextProps;

export default Textview as HostComponent<TextProps>;
