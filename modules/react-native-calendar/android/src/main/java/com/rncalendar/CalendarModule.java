package com.rncalendar;

import android.util.Log;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * CalendarModule support new/old arch，@ReactMethod for backward compatibility old arch
 */
public class CalendarModule extends CalendarSpec {

    public static final String NAME = "RNCalendar";

    private ReactContext mReactContext = null;

    private int mListenerCount = 0;

    CalendarModule(ReactApplicationContext context) {
        super(context);
        Log.d("CalendarModule", "init");
        mReactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @Override
    public void createCalendarEvent(String name, String location, Callback callback) {
        Log.d("CalendarModule", "createCalendarEvent, name = " + name + ", location = " + location);
        try {
            callback.invoke("", "eventId: 123456");
        } catch (Exception e) {
            callback.invoke("Create Event Error", e.getMessage());
        }
    }

    @ReactMethod
    @Override
    public void createCalendarEventWithPromise(String name, String location, Promise promise) {
        Log.d("CalendarModule", "createCalendarEventWithPromise, name = " + name + ", location = " + location);
        try {
            promise.resolve("eventId: 123456");
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    @ReactMethod
    @Override
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
    @Override
    public void addListener(String eventName) {
        Log.d("CalendarModule", "addListener, eventName = " + eventName);
        if (mListenerCount == 0) {
            // Set up any upstream listeners or background tasks as necessary
        }
        mListenerCount += 1;
    }

    @ReactMethod
    @Override
    public void removeListeners(double count) {
        Log.d("CalendarModule", "removeListeners, count = " + count);
        mListenerCount -= count;
        if (mListenerCount == 0) {
            // Remove upstream listeners, stop unnecessary background tasks
        }
    }

    private boolean hasListeners() {
        return mListenerCount > 0;
    }
}
