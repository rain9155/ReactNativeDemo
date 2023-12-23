//
//  RNTextview.h
//  react-native-textview
//
//  Created by ByteDance on 2023/12/24.
//

#ifndef RNTextview_h
#define RNTextview_h

#import <UIKit/UITextView.h>
#import <React/RCTViewManager.h>

@interface RNTextviewImpl : UITextView

@property(nonatomic,copy) RCTBubblingEventBlock onSelect;

@end

#endif /* RNTextview_h */