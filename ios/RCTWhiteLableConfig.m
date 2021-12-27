// RCTCalendarModule.m
#import "RCTWhiteLableConfig.h"

@implementation RCTCalendarModule

  RCT_EXPORT_MODULE(WhiteLableConfig);

  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }

  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryColor) {
   return @"#fdf6e3";
  }

  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryTextColor) {
   return @"#657b83";
  }

  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getGreetingText) {
   return @"Welcome";
  }

@end
