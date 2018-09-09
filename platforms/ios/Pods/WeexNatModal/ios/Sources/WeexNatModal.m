//
//  WeexNatModal.m
//
//  Created by Acathur on 17/1/7.
//  Copyright © 2017 Instapp. All rights reserved.
//

#import "WeexNatModal.h"
#import <WeexPluginLoader/WeexPluginLoader.h>
#import <NatModal/NatModal.h>

@implementation WeexNatModal
@synthesize weexInstance;

WX_PlUGIN_EXPORT_MODULE(nat/modal, WeexNatModal)
WX_EXPORT_METHOD(@selector(alert::))
WX_EXPORT_METHOD(@selector(confirm::))
WX_EXPORT_METHOD(@selector(prompt::))
WX_EXPORT_METHOD(@selector(toast::))

- (void)alert:(NSDictionary *)params :(WXModuleCallback)callback{
    [[NatModal singletonManger] alert:params :^(id error,id result) {
        if (error) {
            if (callback) {
                callback(error);
            }
        } else {
            if (callback) {
                callback(result);
            }
        }

    }];
}

- (void)confirm:(NSDictionary *)params :(WXModuleCallback)callback{
    [[NatModal singletonManger] confirm:params :^(id error,id result) {
        if (error) {
            if (callback) {
                callback(error);
            }
        } else {
            if (callback) {
                callback(result);
            }
        }

    }];
}

- (void)prompt:(NSDictionary *)params :(WXModuleCallback)callback{
    [[NatModal singletonManger] prompt:params :^(id error,id result) {
        if (error) {
            if (callback) {
                callback(error);
            }
        } else {
            if (callback) {
                callback(result);
            }
        }

    }];
}


- (void)toast:(NSDictionary *)params :(WXModuleCallback)callback{
    
    [[NatModal singletonManger] toast:params :^(id error,id result) {
        if (error) {
            if (callback) {
                callback(error);
            }
        } else {
            if (callback) {
                callback(result);
            }
        }

    }];
}


@end
