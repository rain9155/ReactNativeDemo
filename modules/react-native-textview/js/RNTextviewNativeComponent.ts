import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { HostComponent, ViewProps } from 'react-native';
import { DirectEventHandler } from 'react-native/Libraries/Types/CodegenTypes';

export type RNTextEvent = {
  message?: string
};

export interface RNTextProps extends ViewProps { 
  text: string,
  textColor: string,
  onClick?: DirectEventHandler<RNTextEvent>,  // only android
  onSelect?: DirectEventHandler<RNTextEvent>  // only ios
}

export default codegenNativeComponent<RNTextProps>('RNTextview') as HostComponent<RNTextProps>;
