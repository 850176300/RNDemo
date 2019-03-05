#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "AppDelegate.h"
#import "RCTCallout.h"
#import "RCTCircle.h"
#import "RCTHeatMap.h"
#import "RCTMapView.h"
#import "RCTMarker.h"
#import "RCTOverlay.h"
#import "RCTPolygon.h"
#import "RCTPolyline.h"
#import "RCTCoordinate.h"
#import "RCTUserLocation.h"

FOUNDATION_EXPORT double react_native_baidumap_sdkVersionNumber;
FOUNDATION_EXPORT const unsigned char react_native_baidumap_sdkVersionString[];

