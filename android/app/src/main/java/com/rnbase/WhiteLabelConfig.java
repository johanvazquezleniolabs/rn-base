package com.rnbase;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import javax.annotation.Nonnull;

public class WhiteLabelConfig extends ReactContextBaseJavaModule {
    @Nonnull
    private final String appName;

    public WhiteLabelConfig(ReactApplicationContext reactContext) {
        super(reactContext);

        this.appName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.app_name);
    }

    @Nonnull
    @Override
    public String getName() {
        return "WhiteLabelConfig";
    }

    @ReactMethod
    public void getConfig(final Promise promise) {
        WritableMap result = Arguments.createMap();
        result.putString("appName", this.appName);
        result.putString("primaryColor", "#fdf6e3");
        result.putString("primaryTextColor", "#657b83");
        result.putString("greetingText", "Welcome");
        promise.resolve(result);
    }
}
