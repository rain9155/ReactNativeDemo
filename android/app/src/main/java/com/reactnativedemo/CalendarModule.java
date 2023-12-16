package com.reactnativedemo;

import android.util.Log;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CalendarModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

    private ReactContext mReactContext = null;
    private int mListenerCount = 0;

    CalendarModule(ReactApplicationContext context) {
        super(context);
        Log.d("CalendarModule", "init");
        mReactContext = context;
        context.addLifecycleEventListener(this);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callback) {
        Log.d("CalendarModule", "createCalendarEvent, name = " + name + ", location = " + location);
        try {
            callback.invoke("", "eventId: 123456");
        } catch (Exception e) {
            callback.invoke("Create Event Error", e.getMessage());
        }
    }

    @ReactMethod
    public void createCalendarEventWithPromise(String name, String location, Promise promise) {
        Log.d("CalendarModule", "createCalendarEventWithPromise, name = " + name + ", location = " + location);
        try {
            promise.resolve("eventId: 123456");
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    @ReactMethod
    public void sendCalendarEventFromNative() {
        Log.d("CalendarModule", "sendCalendarEventFromNative");
        if(hasListeners() && mReactContext != null)
        {
            String eventName = "CalendarEvent";
            String params = "someValue";
            mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
        }
    }

    @ReactMethod
    public void addListener(String eventName) {
        Log.d("CalendarModule", "addListener, eventName = " + eventName);
        if (mListenerCount == 0) {
            // Set up any upstream listeners or background tasks as necessary
        }
        mListenerCount += 1;
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        Log.d("CalendarModule", "removeListeners, count = " + count);
        mListenerCount -= count;
        if (mListenerCount == 0) {
            // Remove upstream listeners, stop unnecessary background tasks
        }
    }

    @Override
    public void onHostResume() {
        // Activity `onResume`
        Log.d("CalendarModule", "onHostResume");
    }

    @Override
    public void onHostPause() {
        // Activity `onPause`
        Log.d("CalendarModule", "onHostPause");
    }

    @Override
    public void onHostDestroy() {
        // Activity `onDestroy`
        Log.d("CalendarModule", "onHostDestroy");
    }

    private boolean hasListeners() {
        return mListenerCount > 0;
    }
}
