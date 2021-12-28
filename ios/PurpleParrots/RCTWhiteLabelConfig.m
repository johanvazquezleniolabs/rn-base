// RCTCalendarModule.m
#import "RCTWhiteLabelConfig.h"

@implementation RCTCalendarModule

  RCT_EXPORT_MODULE(WhiteLabelConfig);

  RCT_REMAP_METHOD(getConfig, resolver: (RCTPromiseResolveBlock)resolve
                    rejecter:(RCTPromiseRejectBlock)reject) {
    NSDictionary *data = @{
      @"appName": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"],
      @"primaryColor": @"#800080",
      @"primaryTextColor": @"#FFD700",
      @"greetingText": @"Legends of the Hidden Temple Rules!!!!!"
    };
    resolve(data);
  }

@end
