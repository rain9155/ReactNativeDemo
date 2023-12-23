//
//  RNTextViewWrapper.m
//  react-native-textview
//
//  Created by ByteDance on 2023/12/24.
//

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTextview.h"
#import <Foundation/Foundation.h>
#import "RNTextviewImpl.h"

#import <react/renderer/components/RNTextviewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNTextviewSpec/EventEmitters.h>
#import <react/renderer/components/RNTextviewSpec/Props.h>
#import <react/renderer/components/RNTextviewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface RNTextview() <RCTRNTextviewViewProtocol>

@end

@implementation RNTextview {
    RNTextviewImpl* _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<RNTextviewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const RNTextviewProps>();
    _props = defaultProps;

    _view = [[RNTextview alloc] init];

    self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<RNTextviewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<RNTextviewProps const>(props);

    if (oldViewProps.textColor != newViewProps.textColor) {
        _view.textColor = [UIColor colorWithHexString:newViewProps.textColor];
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> RNTextviewCls(void)
{
    return RNTextview.class;
}

@end

#endif /*RCT_NEW_ARCH_ENABLED*/
