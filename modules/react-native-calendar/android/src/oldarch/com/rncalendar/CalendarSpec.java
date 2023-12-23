package com.rncalendar;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

abstract class CalendarSpec extends ReactContextBaseJavaModule {

    public CalendarSpec(ReactApplicationContext context) {
        super(context);
    }

    public abstract void createCalendarEvent(String name, String location, Callback callback);

    public abstract void createCalendarEventWithPromise(String name, String location, Promise promise);

    public abstract void sendCalendarEventFromNative();

    public abstract void addListener(String eventName);

    public abstract void removeListeners(double count);
}
