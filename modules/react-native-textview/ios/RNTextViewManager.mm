//
//  RNTextViewManager.m
//  react-native-textview
//
//  Created by ByteDance on 2023/12/24.
//

#import "RNTextViewManager.h"
#import <Foundation/Foundation.h>
#import "UIColor+HexColor.h"
#import "RNTextviewImpl.h"

@implementation RNTextViewManager

RCT_EXPORT_MODULE(RNTextview)

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

RCT_EXPORT_VIEW_PROPERTY(onSelect, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(textColor, NSString, UITextView)
{
  NSLog(@"RNTextViewManager, setTextColor, color = %@", json);
  NSString* color = json;
  view.textColor = [UIColor colorWithHexString:color];
}

// only for old arch
- (UIView *)view
{
  NSLog(@"RNTextViewManager, createView");
  RNTextviewImpl* textView = [[RNTextviewImpl alloc] init];
  textView.textAlignment = NSTextAlignmentCenter;
  textView.font = [UIFont systemFontOfSize:24.f];
  textView.delegate = self;
  return textView;
}

- (void)textViewDidChangeSelection:(RNTextviewImpl *)textView
{
  NSLog(@"RNTextViewManager, textViewDidChangeSelection");
  if(textView.onSelect != nil)
  {
    textView.onSelect(@{@"message":@"someValue"});
  }
}

@end
