//
//  UIColor+HexColor.h
//  react-native-textview
//
//  Created by ByteDance on 2023/12/24.
//

#ifndef UIColor_HexColor_h
#define UIColor_HexColor_h

#import <Foundation/Foundation.h>
#import <UIKit/UIColor.h>

@interface UIColor (HexColor)

// 从十六进制字符串获取颜色，支持 @“#123456”、 @“0X123456”、 @“123456”三种格式
+ (UIColor *)colorWithHexString:(NSString *)color;
+ (UIColor *)colorWithHexString:(NSString *)color alpha:(CGFloat)alpha;

@end


#endif /* UIColor_HexColor_h */
