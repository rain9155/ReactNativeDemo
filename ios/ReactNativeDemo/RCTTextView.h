//
//  RCTTextView.h
//  ReactNativeDemo
//
//  Created by ByteDance on 2023/12/17.
//

#ifndef RCTTextView_h
#define RCTTextView_h

#import <UIKit/UITextView.h>
#import <React/RCTViewManager.h>

@interface RCTTextView2 : UITextView

@property(nonatomic,copy) RCTBubblingEventBlock onSelect;

@end

#endif /* RCTTextView_h */
