import React from 'react';
import { NativeSyntheticEvent } from 'react-native';
import RNTextview, { RNTextProps, RNTextEvent } from 'react-native-textview';
import { DirectEventHandler } from 'react-native/Libraries/Types/CodegenTypes';

type TextEvent = RNTextEvent;
type TextProps = RNTextProps;
const NativeTextView = RNTextview;

class TextView extends React.Component<TextProps> {

  constructor(props : TextProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onClick(event: NativeSyntheticEvent<TextEvent>): void {
    if(!this.props.onClick){
      return
    }
    this.props.onClick(event);
  }

  onSelect(event: NativeSyntheticEvent<TextEvent>): void {
    if(!this.props.onSelect){
      return
    }
    this.props.onSelect(event);
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
        onSelect={this.onSelect}
      />
    );
  }
}

type AndroidNativeEventHandler = {
  onClick?: DirectEventHandler<TextEvent>; // only android
};

type IOSNativeEventHandler = {
  onSelect?: DirectEventHandler<TextEvent>; // only ios
};

export type TextEventHandler = AndroidNativeEventHandler | IOSNativeEventHandler;

export default TextView;