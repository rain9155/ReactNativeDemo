import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { HostComponent, ViewProps } from 'react-native';

type AndroidNativeEventHandler = {
  onClick?: (event: any) => void; // only android
};

type IOSNativeEventHandler = {
  onSelect?: (event: any) => void; // only ios
};

export type TextProps = ViewProps & AndroidNativeEventHandler & IOSNativeEventHandler & { 
  text: string,
  textColor: string,
}  

export default codegenNativeComponent<TextProps>('Textview') as HostComponent<TextProps>;
