//
//  RCTCalendarModule.m
//  ReactNativeDemo
//
//  Created by ByteDance on 2023/12/14.
//

#import "RCTCalendarModule.h"
#import <Foundation/Foundation.h>
#import <React/RCTLog.h>

@implementation RCTCalendarModule

RCT_EXPORT_MODULE(CalendarModule)

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

@end
