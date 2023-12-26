//
//  RNTextview.m
//  react-native-textview
//
//  Created by ByteDance on 2023/12/24.
//

#import "RNTextviewImpl.h"
#import <Foundation/Foundation.h>

@implementation RNTextviewImpl

@synthesize onSelect;

- (instancetype)init
{
    NSLog(@"RNTextviewImpl, init");
    self = [super init];
    if (self) {
        self.delegate = self;
    }
    return self;
}


- (void)textViewDidChangeSelection:(RNTextviewImpl *)textView
{
  NSLog(@"RNTextviewImpl, textViewDidChangeSelection");
  if(self.onSelect != nil)
  {
      self.onSelect(@{@"message":@"someValue"});
  }
}

@end
