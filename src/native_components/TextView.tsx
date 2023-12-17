import React, { SyntheticEvent } from 'react';
import { PropsWithChildren } from 'react';
import { Platform, View, ViewProps, requireNativeComponent } from 'react-native';

type AndroidNativeEventHandler = {
  onClick?: (event: any) => void; // only android
};

type IOSNativeEventHandler = {
  onSelect?: (event: any) => void; // only ios
};

type TextProps = ViewProps & AndroidNativeEventHandler & IOSNativeEventHandler & { 
    text: string,
    textColor: string,
}  

const NativeTextView = requireNativeComponent<TextProps>('TextView');

class TextView extends React.Component<TextProps> {

  constructor(props : TextProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onClick(event: SyntheticEvent): void {
    if(!this.props.onClick){
      return
    }
    this.props.onClick(event.nativeEvent);
  }

  onSelect(event: SyntheticEvent): void {
    if(!this.props.onSelect){
      return
    }
    this.props.onSelect(event.nativeEvent);
  }

  /**
   * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
   */
  componentDidMount?(): void {
    console.log("TextView, componentDidMount");
  }

  /**
   * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
   * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
   */
  componentWillUnmount?(): void {
    console.log("TextView, componentWillUnmount");
  }

  render(): React.ReactElement 
  {
    return (
      <NativeTextView 
        {...this.props}
        onClick={this.onClick}
        onSelect={this.onSelect}
      />
    );
  }
}

export type NativeEventHandler = AndroidNativeEventHandler | IOSNativeEventHandler;

export default TextView;