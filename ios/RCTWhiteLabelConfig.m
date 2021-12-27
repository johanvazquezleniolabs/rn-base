// RCTCalendarModule.m
#import "RCTWhiteLabelConfig.h"

@implementation RCTCalendarModule

  RCT_EXPORT_MODULE(WhiteLabelConfig);

  RCT_REMAP_METHOD(getConfig, resolver: (RCTPromiseResolveBlock)resolve
                    rejecter:(RCTPromiseRejectBlock)reject) {
    NSDictionary *data = @{
      @"appName": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"],
      @"primaryColor": @"#fdf6e3",
      @"primaryTextColor": @"#657b83",
      @"greetingText": @"Welcome"
    };
    resolve(data);
  }

@end
