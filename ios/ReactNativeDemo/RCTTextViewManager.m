//
//  RCTTextViewManager.m
//  ReactNativeDemo
//
//  Created by ByteDance on 2023/12/17.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import "UIColor+HexColor.h"
#import "RCTTextView.h"

@interface RCTTextView2Manager : RCTViewManager <UITextViewDelegate>

@end

@implementation RCTTextView2Manager

RCT_EXPORT_MODULE(TextView)

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

RCT_EXPORT_VIEW_PROPERTY(onSelect, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(textColor, NSString, UITextView)
{
  NSLog(@"RCTTextView2Manager, setTextColor, color = %@", json);
  NSString* color = json;
  view.textColor = [UIColor colorWithHexString:color];
}

- (UIView *)view 
{
  NSLog(@"RCTTextView2Manager, createView");
  RCTTextView2* textView = [[RCTTextView2 alloc] init];
  textView.textAlignment = NSTextAlignmentCenter;
  textView.font = [UIFont systemFontOfSize:24.f];
  textView.delegate = self;
  return textView;
}

- (void)textViewDidChangeSelection:(RCTTextView2 *)textView
{
  NSLog(@"RCTTextView2Manager, textViewDidChangeSelection");
  if(textView.onSelect != nil)
  {
    textView.onSelect(@{@"message":@"someValue"});
  }
}

@end
