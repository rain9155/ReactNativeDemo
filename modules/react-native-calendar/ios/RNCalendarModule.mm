//
//  RNCalendarModule.m
//  react-native-calendar
//
//  Created by ByteDance on 2023/12/24.
//

#import "RNCalendarModule.h"
#import <Foundation/Foundation.h>
#import <React/RCTLog.h>

@implementation RNCalendarModule
{
  bool hasListeners;
}

RCT_EXPORT_MODULE(RNCalendar)

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name
                  Location:(NSString *)location
                  Callback:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"createCalendarEvent, name = %@, location = %@", name, location);
  @try
  {
    callback(@[@"", @"eventId: 123456"]);
  }
  @catch (NSException* e)
  {
    callback(@[@"Create Event Error", [e reason]]);
  }
}

RCT_EXPORT_METHOD(createCalendarEventWithPromise:(NSString *)name
                 Location:(NSString *)location
                 Resolver:(RCTPromiseResolveBlock)resolve
                 Rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"createCalendarEventWithPromise, name = %@, location = %@", name, location);
  @try
  {
    resolve(@"eventId: 123456");
  }
  @catch (NSException* e)
  {
    reject(@"Create Event Error", [e reason], nil);
  }
}

RCT_EXPORT_METHOD(sendCalendarEventFromNative)
{
  RCTLogInfo(@"sendCalendarEventFromNative");
  if (hasListeners)
  {
    NSString* eventName = @"CalendarEvent";
    NSString* params = @"someValue";
    [self sendEventWithName:eventName body:params];
  }
}

// Return an array of supported event names.
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"CalendarEvent"];
}


// Will be called when this module's first listener is added.
- (void)startObserving
{
  RCTLogInfo(@"startObserving");
  hasListeners = YES;
  // Set up any upstream listeners or background tasks as necessary
}

- (void)stopObserving
{
  RCTLogInfo(@"stopObserving");
  hasListeners = NO;
  // Remove upstream listeners, stop unnecessary background tasks
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::<NativeCalendarSpecJSI>>(params);
}
#endif

@end