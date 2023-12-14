package com.reactnativedemo;

import android.util.Log;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {

    CalendarModule(ReactApplicationContext context) {
        super(context);
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
}
