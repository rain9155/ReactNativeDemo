//
//  RNCalendarModule.h
//  react-native-calendar
//
//  Created by ByteDance on 2023/12/24.
//

#ifndef RNCalendarModule_h
#define RNCalendarModule_h
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCalendarSpec/RNCalendarSpec.h"
#endif

@interface RNCalendarModule : RCTEventEmitter <RCTBridgeModule>

@end

#ifdef RCT_NEW_ARCH_ENABLED
@interface RNCalendarModule() <NativeRNCalendarSpec>

@end
#endif

#endif /* RNCalendarModule_h */
